/*

# UI.ts

Copyright(C) xxx. All rights reserved.

## 概要

- 未検討。とりあえずdomのdiv#uiの参照をこちらに任せてみる。
- どう実装するか考える。
- ゲームの体裁を整える方策を検討


## 仮でcreateElement()で制御

- 生成一つ取ってもCSS設定にしても正直手間。
- react/vue/web component使うか？


## どんな機能が必要か

- 汎用ポップアップ
- イージング: 「tap to start」点滅処理など

*/

import { default as GameEvents } from '../Event/GameEvents';
import { default as Tween } from "../Common/Tween"
import Utils from "../Common/Utils"
import Styler from "./Styler"
import * as ButtonClasses from "./Buttons"

import Popup from "./Popup"
import SoundManager from '../Sound/SoundManager';

export default class UI {

	uiElement: HTMLElement
	main: HTMLElement

	constructor(events: GameEvents, body: HTMLBodyElement) {
		// console.log("UI constructor")
		// uiElement = uiElement

		// 全体レイアウト
		this.uiElement = new Styler("div")
			.fullWindow()
			.flexVertical()
			.getElement()
			;
		body.appendChild(this.uiElement)
		// this.uiElement.style.zIndex = "1"

		this.uiElement.style.overflow = `hidden`
		this.uiElement.style.width = "100%";


		// 下部ボタン以外「全て」
		const mainContent = new Styler("div")
			.appendTo(this.uiElement)
			.getElement()
			;
		this.main = mainContent
		mainContent.style.display = "flex";
		mainContent.style.flex = "1";

		//ヘッダーテスト
		// const h1 = new Styler("h1").abs().getElement()
		// h1.style.fontSize = "12px"
		// h1.innerText = "test 20180401 18:32"
		// h1.style.color = "white"
		// mainContent.appendChild(h1)


		// main枠テスト
		// mainContent.style.border = "solid 5px red"
		// mainContent.style.border = "solid"
		// mainContent.style.borderWidth = "40px 40px 40px 40px"
		// mainContent.style.borderImage = "url(UI/borderimage_sample.png) 40 40 40 40 fill repeat"

		mainContent.style.position = "relative"

		// 下部ボタンUI injection
		const buttons = new ButtonClasses.Buttons((elm: HTMLElement) => {
			//ボタンスタイル設定
			elm.style.borderStyle = "solid"
			elm.style.borderWidth = "16px 16px 16px 16px"
			elm.style.borderImage = "url(UI/borderimage_20180331_2.png) 16 16 16 16 repeat"
			elm.style.background = "none"
			elm.style.color = "#999"
			elm.style.alignItems = "center"
		})
		this.uiElement.appendChild(buttons.element)
		buttons.element.style.background = "url(UI/texturemate_metal10_small.jpg)"
		buttons.element.style.zIndex = "1"
		buttons.element.style.backgroundSize = "cover"
		// this.uiElement.style.backgroundColor = "rgba(1,1,1,0.5)"

		// UIイベントsubscribe
		events.UI.Enable.subscribe(this.constructor.name, () => {
			buttons.interactable = true
		})
		events.UI.Disable.subscribe(this.constructor.name, () => {
			buttons.interactable = false
		})

		const openCommands = async () => {
			events.UI.AddMessage.broadcast("[コマンドメニューを開きます]")
			events.UI.Disable.broadcast()
			await buttons.hide()
			buttons.update(commandMenu)
			await buttons.show()
			events.UI.Enable.broadcast()
		}

		const openMenu = () => {
			const contents = new Styler("div").flexVertical().middle().center().getElement()
			new Styler("h2").text("ポップアップメニュー").appendTo(contents)
			new Styler("p").text(" ").appendTo(contents)
			new Styler("p").text("============ BGM設定 ============").appendTo(contents)
			const bgmToggleButton = new Styler('button').text('BGM再生トグル').appendTo(contents).getElement()
			bgmToggleButton.style.padding = "1em"
			bgmToggleButton.style.margin = "1em"
			bgmToggleButton.style.marginBottom = "0"
			bgmToggleButton.style.borderRadius = "1.1em"
			bgmToggleButton.onclick = () => {
				events.Sound.ToggleBgm.broadcast()
			}
			new Styler("p").text("============ 権利表記 ============").appendTo(contents)
			new Styler("p").html(`顔グラフィックスは <a href="http://roughsketch.en-grey.com/%E7%B4%A0%E6%9D%90%E3%82%A4%E3%83%B3%E3%83%87%E3%83%83%E3%82%AF%E3%82%B9" target="_blank">三日月アルペジオ</a>様の無料素材を利用しています。`).appendTo(contents)
			new Styler("p").html(`モンスターグラフィックスは <a href="http://raineru03.web.fc2.com/" target="_blank">HI-TIME様</a>様の無料素材を利用しています。`).appendTo(contents)
			new Styler("p").html(`BGMはnonchang.netの著作物です。ライセンスはCC BYでご利用ください。`).appendTo(contents)

			Popup.Open(contents)

		}

		events.Keyboard.Z.subscribe(this.constructor.name, openCommands)
		events.Keyboard.X.subscribe(this.constructor.name, () => {
			openMenu()
		})

		const mainMenu: ButtonClasses.IUpdateData = {
			rows: [
				{ //row 1
					buttons: [
						{
							text: "command",
							onclick: openCommands
						},
						{
							text: "↑",
							onclick: () => {
								// console.log("up")
								events.Button.StepToForward.broadcast()
							}
						},
						{
							text: "menu",
							onclick: openMenu
						},
					]
				},
				{ //row 2
					buttons: [
						{
							text: "←",
							onclick: () => {
								// console.log("left")
								events.Button.TurnLeft.broadcast()
							}
						},
						{
							text: "↓",
							onclick: () => {
								// console.log("down")
								events.Button.StepToBack.broadcast()
							}
						},
						{
							text: "→",
							onclick: () => {
								// console.log("right")
								events.Button.TurnRight.broadcast()
							}
						},
					]
				},
			]
		}


		const commandMenu: ButtonClasses.IUpdateData = {
			rows: [
				{ //row 1
					buttons: [
						{
							text: "back",
							onclick: async () => {
								events.UI.AddMessage.broadcast("[コマンドメニュー終了]")
								buttons.interactable = false
								await buttons.hide()
								buttons.update(mainMenu)
								await buttons.show()
								buttons.interactable = true
							}
						},
						{
							text: "1",
							onclick: () => {
								console.log("up")
							}
						},
						{
							text: "2",
							onclick: () => {
								console.log("test3")
							}
						},
					]
				},
				{ //row 2
					buttons: [
						{
							text: "3",
							onclick: () => {
								console.log("left")
							}
						},
						{
							text: "4",
							onclick: () => {
								console.log("down")
							}
						},
						{
							text: "5",
							onclick: () => {
								console.log("right")
							}
						},
					]
				},
			]
		}

		buttons.update(mainMenu);

		(async () => {
			// console.log("all show")
			await buttons.show()
		})()
	}
}