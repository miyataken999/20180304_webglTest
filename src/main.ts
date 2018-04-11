/*
# main.ts

Copyright(C) nonchang.net All rights reserved.

## 概要

- webpackビルドのエントリポイントです。
- `検討中` 極力、アプリ一般的に最低限必要な処理だけを記載しようと検討中。

## ここでやること

- アプリ初期化
- 実行に必要なcanvasタグの取得。
	- （ここ以外で直接index.htmlのdomを取ることは避ける）

*/
import * as Sub from './sub';
import UI from './UI/UI';
import Keyboard from './UI/Keyboard';
import Styler from './UI/Styler';
import MyUIEvents from './Event/UIEvent';
import GameEvents from './Event/GameEvents';

import * as GameScene from './Scenes/GameScene';
import SampleSound from './Sound/Synthesize/SampleSound';
import * as Maze from './Dangeon/Maze';
import MapView from './Scenes/MapView';
import Messages from './UI/Messages';

import MasterData from './Data/MasterData'
import UserData from './Data/UserData';
import GameStateKind from './Data/GameStateKind';

import Tween from './Common/Tween';
import Popup from './UI/Popup';

// Windowスコープを拡張: コンソールからMainのpublic要素にアクセスできるように
// 例: console.log("test",window.Main.dirty) //note: 実行時はjavascriptなので、privateプロパティも参照できる点に注意
declare global {
	interface Window {
		Main?
	}
}

// bootstrap
window.addEventListener('DOMContentLoaded', () => {
	window.Main = new Main(
		document.querySelector('body')
	);
});

class Main {

	private ui: UI
	private gameScene: GameScene.GameScene //TODO: 名前重複修正
	private dirty: boolean = true

	constructor(body: HTMLBodyElement) {
		this.initAsync(body)
	}

	private async initAsync(body: HTMLBodyElement) {
		// イベント初期化
		// - 初期化時にイベント登録を行うモジュールが多いため、最初に実行する必要がある
		const events = new GameEvents()

		// マスターデータ初期化
		// TODO: マスターデータ更新通信はService Worker？ この辺知識が足りてないので要調査。
		const master = new MasterData()
		master.asyncSetup(0)

		console.log("master dump", master.monsters.defs)

		const user = new UserData()


		// 初回アクセスポップアップ実装テスト
		// - 初期化タイミングは実際にはどこになるだろう？
		// - セーブデータを自動読み込みするのであれば、UserData初期化のあとになるだろうか。

		const contents = new Styler("div").flexVertical().middle().center().getElement()

		new Styler("p").text(" - [ゲームタイトル] - ").appendTo(contents)
		new Styler("h2").text("音楽を再生しますか？").appendTo(contents)
		// new Styler("hr").appendTo(contents)
		new Styler("p").text("再生する場合、10.2MBの事前ダウンロードが始まります。").appendTo(contents)
		new Styler("p").text("音楽データのダウンロードはメニューからいつでもできます。").appendTo(contents)
		new Styler("p").text("ダウンロード済みのローカルストレージ中の音楽データは後から削除できます。").appendTo(contents)

		const cancelled = await Popup.OpenOkCancel(contents)
		console.log(`popup closed. ${cancelled}`)


		// TEST: Reactive Property検討。とりあえず少ない記述で目標は達成？
		// user.gameState.subscribe(this.constructor.name, (state) => {
		// 	console.log(`state changed. ${state}`)
		// })
		// user.gameState.value = GameStateKind.InGame


		// 迷路情報初期化
		// var maze = new Maze.Factory().Create(9, 9)
		var maze = new Maze.Factory().Create(23, 23)
		// console.log(maze);


		// キーボードイベント監視クラス初期化
		new Keyboard(events)


		// UI初期化
		const ui = new UI(events, body)


		// メッセージシステム初期化
		// - UI初期化後
		const messages = new Messages(events, 5, 100)
		ui.main.appendChild(messages.element)


		// THREE.js用の3d canvas作成
		const canvas = new Styler("canvas").appendTo(ui.main).getElement()
		ui.main.appendChild(canvas)


		// 3d canvas用のマウス・タッチイベント登録
		// - 3D Canvas初期化後
		const uiEvent = new MyUIEvents(canvas)


		// マップUI初期化
		// - events, maze初期化後
		const map = new MapView(events, maze)
		ui.main.appendChild(map.element)
		ui.main.appendChild(map.playerMarkCanvas)
		map.update()


		// ゲームシーン初期化
		const game = new GameScene.GameScene(events, canvas, map, uiEvent, ui.main)
		await game.InitGameScene(maze)


		// welcomeメッセージとバージョン情報
		events.UI.AddMessage.broadcast("welcome to cage [ver 20180407 19:13]")

		// 移動イベントでメッセージを出すテスト
		events.Button.StepToForward.subscribe(this.constructor.name, () => {
			//TODO: 壁で歩けなかった時はメッセージ出さないようにしたい。引数で状況送るべき？
			events.UI.AddMessage.broadcast("あなたは前に進んだ。")
			if (Math.random() * 3 > 1) {
				//試しにエンカウントデバッグ
				const monsterIndex = Math.floor(Math.random() * master.monsters.defs.length)
				console.log(`test : ${master.monsters.defs[monsterIndex].name}`);
			}
		})
		events.Button.TurnLeft.subscribe(this.constructor.name, () => {
			events.UI.AddMessage.broadcast("あなたは左に回った。")
		})
		events.Button.TurnRight.subscribe(this.constructor.name, () => {
			events.UI.AddMessage.broadcast("あなたは右に回った。")
		})

	}// constructor

}//class Main