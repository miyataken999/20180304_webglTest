/*

# Character_Mockup.ts

## 概要

- キャラクターマスタモックアップ
	- とりあえずjson文字列で定義。
	- 通信でjson経由で受け取る。
		- 型は受け取り側が検証する。
		- 検証ロジックのテストのためにも、ここはjsonモックアップで定義する必要がある。

- 企画検討中。プリコネRみたいにキャラを入手していくゲームにするかなぁ。
	- キャラの強さ定義はゲームを通して固定。
	- とりあえずlv1の時のステータスとlv10の時のステータスを書いて、間を線形で定義する仕様を検討。
		- 複数定義できるようになると理想。
			- これなら「序盤は成長が遅いキャラ」を表現できる。
		- 将来的にlv100のステータスを定義することになるだろう。
		- マスターデータ入力の手間を最小化したい。

	- スペル修得はキャラごとかなぁ。
		- 別途スペルマスターが必要になる。
		- とりあえず「修得最低レベル・修得最大遅延レベル」を定義する。

*/
export default `

[
	{
		"id": 1,
		"name": "ステラ",
		"undefinedName": "可愛らしい女性",
		"faceGraphicUrl": "characters/mock/f-stella01_mv.png",
		"faceIndices": {
			"normal" : {"x": 0, "y": 0},
			"damaged": {"x": 3, "y": 0}
		},
		"eyeAnimation":{
			"duration" : -1,
			"frames": [
				{ "x": 2, "y": 0 },
				{ "x": 2, "y": 1 },
				{ "x": 2, "y": 0 }
			]
		},
		"poseGrahipcUrl": "characters/mock/f-stella01_p.png",

		"messages":{
			"hitBlocked":[
				"っ……壁ですね。",
				"っ……壁です。",
				"っ……壁ですよ。",
				"っ……壁ですっ",
				"あいたっ",
				"きゃん",
				"ひゃっ",
				"いたぁ……",
				"むっ",
				"くっ",
				"つっ！",
				"ぬう……",
				"むう……",
				"やん！",
				"やぁっ！？",
				"押さないでください！",
				"ちょっ！"
			]
		},

		"levels":[
			{
				"level":1,
				"hp":10,
				"mp":3,
				"attack":6,
				"magic":3,
				"speed":1,
				"spellSpeed":1
			},
			{
				"level":10,
				"hp":100,
				"mp":30,
				"attack":60,
				"magic":30,
				"speed":10,
				"spellSpeed":3
			}
		],

		"spells":[
			{
				"id":"PHA-LM",
				"spellLevel":1,
				"learnLevel":{
					"min":4,
					"max":7
				}
			},
			{
				"id":"PHA-LM",
				"spellLevel":2,
				"learnLevel":{
					"min":13,
					"max":15
				}
			}
		]
	},
	{
		"id": 2,
		"name": "ロッティ",
		"undefinedName": "可愛らしい女性",
		"faceGraphicUrl": "characters/mock/f-Lotti_mv.png",
		"faceIndices": {
			"normal" : {"x": 0, "y": 0},
			"damaged": {"x": 2, "y": 0}
		},
		"eyeAnimation":{
			"duration" : -1,
			"frames": [
				{ "x": 1, "y": 1 },
				{ "x": 3, "y": 0 }
			]
		},
		"poseGrahipcUrl": "characters/mock/f-Lotti_p.png",

		"messages":{
			"hitBlocked":[
				"ぶへっ",
				"おぶっ",
				"ぐぬ",
				"痛えな！ ステラ押すなよ！」ステラ「ごめんっ",
				"痛えな！ 押すなよってば、メイ！",
				"痛えってば！！ 押すなよ！",
				"痛えな！ なに押してんだよメイ！",
				"……痛い",
				"……痛いって",
				"……痛いっての",
				"……痛いわ！",
				"……痛いっつーの！",
				"……痛い……",
				"ぐっ……。",
				"……あのね、ほんと嫌なの……押すな……",
				"押すな押すなっ！"
			],
			"hittedBlock":[
				"やーっ！！ ここ、もう壁だってわかってんじゃん！ 何で押すのよ！！"
			]
		},

		"levels":[
			{
				"level":1,
				"hp":10,
				"mp":3,
				"attack":6,
				"magic":3,
				"speed":1,
				"spellSpeed":1
			},
			{
				"level":10,
				"hp":100,
				"mp":30,
				"attack":60,
				"magic":30,
				"speed":10,
				"spellSpeed":3
			}
		],

		"spells":[
			{
				"id":"PHALM",
				"spellLevel":1,
				"learnLevel":{
					"min":1,
					"max":1
				}
			},
			{
				"id":"VA-PHALM",
				"spellLevel":2,
				"learnLevel":{
					"min":2,
					"max":5
				}
			},
			{
				"id":"LILU",
				"spellLevel":1,
				"learnLevel":{
					"min":2,
					"max":4
				}
			},
			{
				"id":"VA-LILU",
				"spellLevel":1,
				"learnLevel":{
					"min":3,
					"max":5
				}
			},
			{
				"id":"PHALM",
				"spellLevel":2,
				"learnLevel":{
					"min":3,
					"max":6
				}
			}
		]
	},
	{
		"id": 3,
		"name": "メイ",
		"undefinedName": "中二病の女性",
		"faceGraphicUrl": "characters/mock/f-may01.png",
		"faceIndices": {
			"normal" : {"x": 0, "y": 0},
			"damaged": {"x": 3, "y": 0}
		},
		"eyeAnimation":{
			"duration" : -1,
			"frames": [
				{ "x": 2, "y": 0 },
				{ "x": 2, "y": 1 },
				{ "x": 2, "y": 0 }
			],
			"frames_unused1": [
				{ "x": 2, "y": 1 }
			]
		},
		"poseGrahipcUrl": "characters/mock/f-may01_p.png",

		"messages":{
			"hitBlocked":[
				"ぐっ……我が眼前に立ち塞がりしは……ウォール。",
				"ぐっ……我が眼前に立ち塞がりしは……ウォール。",
				"ぐっ……我が眼前に立ち塞がりしは……ウォール。",
				"ぐっ……この我が眼前に立ち塞がりしは……ウォール。",
				"ぐっ……眼前に立ち塞がりしは……ウォール。",
				"ぐっ……僭越にも我が眼前に立ち塞がりしは……ウォール。」ロッティ「僭越の意味わかってるか？」",
				"ぐっ……我が眼前に立ち塞がりし絶望、その名は……ウォール。",
				"くっ……我が眼前に立ち塞がりし絶望、その名も……ウォール。",
				"ぐっ……我が眼前に……」ロッティ「我が眼前に？」メイ「……ふええ」ロッティ「……泣くほど痛いのに中二病台詞がついて出てくるの、逆にすごいな……」",
				"ぐっ……我が眼前に立ち塞がりしは……ウォール。……だよね？」ロッティ「プレイヤーまどわせるなよ",
				"ぐっ……我が眼前に立ち塞がちり……塞がりち……りち……」ロッティ「もーいっかい♪」メイ「ふええ」ロッティ「……涙拭けよ",
				"ぐっ……我が眼前に立ち塞がりしは……ウォール。……多分」ステラ「ちょ、はっきりしてよ",
				"ぐっ……我が眼前に立ち塞がりしは……ウォール」ロッティ「壁だな",
				"ぐっ……我が眼前に立ち塞がりしは……ウォー」「ロッティ「壁だな",
				"ぐっ……我が眼前に立ち塞が」ステラ「あんまりのんびりしないでよ",
				"ぐっ……我が眼前に立ち塞がりしは……ウォール。",
				"ぐっ……我が眼前に立ち塞がりしは……ウォ」ロッティ「うん、ウォールだね。壁だね",
				"つっ……これは……運命を遮る……ウォール。",
				"つっ……これは……運命とかを遮る……ウォール」ロッティ「とかって何だよ",
				"つっ……これは……運命……いたた……ウォール」ロッティ「……",
				"つっ……運命とか……ウォール」ロッティ「お前ウォール言いたいだけだろ",
				"つっ……これは……運命を遮らない方の……ウォール。」ステラ「遮らないんだ",
				"つっ……これは……運命を遮る……ウォール。",
				"つっ……これ、ウォール」ステラ「うん」ロッティ「うん」",
				"つっ……これは……運命を遮る……ウォール。",
				"つっ……これは……運命を遮」ロッティ「はいはい。前見て歩けって",
				"つっ…これは…運命を遮るウォー」ロッティ「壁だな",
				"いった……汝、刮目せよ……ウォール。",
				"いった……汝、刮目せよ……ウォール。",
				"いった……汝、刮目せよ……ウォール。",
				"いった……汝、刮目せよ……ウォール。",
				"いった……汝、刮目せよ……ウォール。",
				"いった……汝、刮目せよ……ウォール。",
				"いった……汝、刮目うぼぁ……ウォール」ロッティ「なんだいまの",
				"いった……汝、刮目せよ……これぞ、ウォール。",
				"いった……汝、刮目せよ……これはウォール。",
				"いった……汝、刮目せよ……これぞ、ウォール。",
				"いった……汝、刮目せよ……これが、ウォール。",
				"いった……汝、刮目せよ……この、ウォール。",
				"いった……汝、刮目せよ……this is wall.",
				"いった……汝、刮目せよ……ウ」ロッティ「はいはい、壁だね。見た見た。行くよ",
				"いった……汝、刮目せよ……ウォー」ステラ「行くわよ",
				"いった……汝、刮目せよ……ウォール。",
				"なっ……これは、……うむ。その、……ウォー」ロッティ「メイ、ちょっと黙っててくんない？",
				"ぬっ……これは、未だかつてなきウォー」ステラ「メイ、うっさい",
				"ぬっ……これは、未だかつてなきウォール。そして悠久の旅が始まる……方のやつ……だと思う」ロッティ「もう少し考えてから喋れよ",
				"ぬっ……これは、未だかつてなきウォール。妖精たちの歌が聞こえる……方のやつ……だと思う」ロッティ「この機会だからいうけど、お前、プレイヤーに『すわイベント発生か』と勘違いさせる役目になってる」メイ「……すまない",
				"ぶっ。この花崗岩の雰囲気、紛れもなくアカシックレコードの……あれだな。うん。」ロッティ「なんだよ。言えよ。",
				"ぐっ。……この花崗岩の雰囲気、紛れもな」ロッティ「これレンガだろ」ステラ「泥焼いた色だよね",
				"ぐっ。……この花崗岩は……」ロッティ「花崗岩ってもっと灰色でザラザラしてるやつだろ",
				"ぐっ。……この花崗岩は……」ステラ「メイ。これはレンガ。あなた、花崗岩って言いたいだけなんじゃない？"
			]
		},

		"levels":[
			{
				"level":1,
				"hp":10,
				"mp":3,
				"attack":6,
				"magic":3,
				"speed":1,
				"spellSpeed":1
			},
			{
				"level":10,
				"hp":100,
				"mp":30,
				"attack":60,
				"magic":30,
				"speed":10,
				"spellSpeed":3
			}
		],

		"spells":[
			{
				"id":"PHALL-BHA",
				"spellLevel":1,
				"learnLevel":{
					"min":1,
					"max":1
				}
			},
			{
				"id":"SEERE-BHA",
				"spellLevel":1,
				"learnLevel":{
					"min":2,
					"max":5
				}
			},
			{
				"id":"SEERE-ZILL",
				"spellLevel":1,
				"learnLevel":{
					"min":2,
					"max":5
				}
			},
			{
				"id":"ZII-BHA",
				"spellLevel":1,
				"learnLevel":{
					"min":2,
					"max":5
				}
			}
		]
	}
]
`