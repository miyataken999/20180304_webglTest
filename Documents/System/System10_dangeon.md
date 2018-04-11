# インゲーム仕様書 dangeon

## 概要

- 本文章では「ほぼほぼ採用が決まったシステム案」をまとめていきます。
	- 検討中の点については「検討項目」にまとめます。
- 本文章では、3Dダンジョン部分に関する内容だけ記載します。


## このゲームで目標とする3Dダンジョン

- wizのマップ効果のうち、ゲーム演出に役立ちそうな情報をまとめていく。
	- [ウィザードリィ・外伝１　ダンジョンの仕掛け](http://outdoor.geocities.jp/twnfh640/wizgaiden1.trap.html)
	- この辺りがまとまってるかな。



## 詳細な仕様案

### 基本用語

- フロア
	- 階。

- セル
	- このゲームは方眼紙のマップを3D表現している。
	- 方眼紙の1マスがセル。
	- wiz方式ではないので注意。方眼セルのフチに壁を表現していない。セルが壁か通路かで迷路を表現している。
		- これは汎用化というか、プログラム並びに3D表現の単純化のため。手抜きというわけではなく、wiz方式の壁表現の価値が把握できていない感じ。


- セル効果
	- 「セルギミック」で後述

- セル効果
	- 「セルギミック」で後述


### セルギミックと「セル効果」「フロア効果」

- このゲームでは全てのマップセルが属性の配列を持つ。
	- そのセルに立った時の効果を示す。「ワープセルである」「魔法無効セルである」「回復セルである」など。
	- このセル情報で、ゲームプレイの判断基準を増やす。
	- マスターデータ上ではenum番号の配列として定義される。

- 「フロア効果」 - フロア全体にセル効果を与える設定。
	- 通常よりも暗い部屋の表現などで設定作業を簡略化するため。


### `20180407検討中` 不可知状態、懸念状態、喝破状態について

- `不可知状態`
	- セル効果については画面のどこかで表示する。
	- ただし、プレイヤーレベルが低い場合、セル効果を「知り得ない」という状態がありうる。
		- この場合、数歩ごとに
			- 「あなたは不安な雰囲気を感じとった」
			- 「あなたは牧歌的な雰囲気を感じとった」
			という情報のみを表示する方向で検討する。
		- これが`不可知状態`。
		- このメッセージは`確認できないなんらかのセルステータス異常がある`ことを伝えていることを示す。
		- 攻略情報として共有された際に、プレイヤーは上記の情報だけは確認できる。
		- ただしメッセージが出る確率は「数歩ごと」なので、「何かわからない効果がある」という確証があるのはメッセージが出た地点のみとなる。

- `懸念状態`
	- `あなたはここでは魔法の効果がないのではないのかと不安になった。`
	- 具体的なメッセージが表示されるが、**確証がない**台詞である。
	- プレイヤーレベルが「懸念」できる常態にあると、プレイヤーはフロア全体の「異常効果」を感じ取れる。
	- この情報はプレイヤーをミスリードするものであり、正確には「このフロアには」


### ギミック検討

- 「踏むと数字が変わる床」

	- 三箇所にあり、それぞれ以下の順番で切り替わる。
		- 「1,3,5,7」「1,2,3,4,5,6,7,8」「1,4,8」
		- 初期値はランダムで、1以外。

	- 床の上では、便利ボタンの色が変わり、文字が「もう一度踏む」に切り替わる。

	- ここでプレイヤーに考えさせたいことは、「共通の数字探し」。
		- 全てを「1」に揃えると回答音（ゼルダ風）を鳴らして扉が開く。

	- 壁にヘルプメッセージ「重なる時、道は開ける」


- 「踏むと色が変わる床」
	- 同上のギミックの別パターン。
	- ヘルプメッセージ
		- 「記憶を辿れ」
		- これはどこかで色の順序を示すオブジェクトがあったことを示す。
		- フロアの入り口付近に水晶風の3Dオブジェクトを配置しておくかな。


`EOF`