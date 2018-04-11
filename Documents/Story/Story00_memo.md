# ゲームストーリーの検討

## 概要

- どのようにゲームストーリーを検討していくべきかを考える

	- ゲームストーリーは、このゲームで何を表現したいかによって変わる。

	- システム案にも左右される。基準を決めなきゃ……。

	- `基準の案`
		- システムはゲームストーリーの表現力を制限する。

		- ゲームストーリーはシステムに仕様を要求することがある。

		- ゲームストーリーを完全に満たす必要はなく

	- 基本、wizとrogueといったシステムのゲームの演出から外れすぎないほうがいいんだろうなぁ。



## 大枠の検討

- アプリタイトルは「like a bird in a cage」で良さそう。
- 「羅針盤戦記」の骨子を組み込みたい。
	- wizのアミュレットに当たる、「魔法の羅針盤」という魔法のアイテムがこの世界の固有名としてあるものとする。
	- プレイヤーの目的は、この「魔法の羅針盤」をダンジョンから持ち帰ること……になるだろうか。
	- 世界全体がタイトル「like a bird in a cage」という体を表すものにしたいというイメージ。



### `良さそう？` ゲームストーリーの着想メモ

- 20180407 ファイル分割してここにコピー。今の所これが大枠として良さそうに感じている。

- 主人公たちは「土塊（つちくれ）」。
	- チュートリアルゲームでは存外な力を持たされており、このシステムに慣れるまで遊べる。
	- チュートリアル後に大魔導士ドルルにアミュレットを回収されて、「人間らしく調整しよう。望みを言え」という流れでキャラクターメイキングに進む。


- 段階1 : リアルプレイヤーが、「自分のパーティーは土塊だ」ということに気づく。
- 段階2 : 自分のパーティーが人間になりたがっていることを感じ取る。
- 段階3 : そのヒントは、自分たちの親である「大魔導士の討伐」にありそうだ、ということを感じ取る。
- 段階4 : ついに親たる「大魔導士」を討伐。しかし彼もまた土塊であったことを知る。
- 段階5 : この壮大な「神のゲーム」を作った「全ての源」に迫る。（ゲーム外の定義としては、これは実は開発者である俺のことである）
- 段階6 : リアルプレイヤーは、ここまでの情報を元に、フリーダンジョンの地下666階、ゲヘナを目指す。
	- 全ての耐性について最大のアミュレットの加護があっても容易にダメージを受ける。
	- 5階ごとに「宗教法人：真実追求の滝」が出向している「期間ショップ出張所」がある。
	- ここにラスボス「大屋望」が居る。
		- 「ゲームバランス調整」という神の魔法を使いこなす彼に対して「納期の書」「遅延証明書の不備報告書」「前カノの写真」を突きつけるとゲームバランス調整をやめて仕事に打ち込むようになり、隙ができる。
		- 倒ストゲーム中で「君たちは土塊ではない、人間だ！」と宣言し、公式ホームページでもそのように記載することを約束する。
			- `要検討` ゲーム内でストイックに「人間になりたかった」キャラクターたちが昇華できるかどうか……。
			- この段階で、実際にホームページ上の記載も自動更新する。（ハックされたらめんどいので、更新のためのハッシュキーについては分散格納して置く必要はあるだろう。。また、userIdでログイン時間が最新で、かつゲーム中ステータスに関わらない通信ロジックを解析して叩く奴が居るかどうか疑問だけど……。）



### `考察中` ループものの適用？

- 「羅針盤」を敵キャラにしてしまう
	- いつでも倒そうと思えば倒せる。
	- 倒すと「強くてニューゲーム」。
	- 羅針盤の部屋に行くと「compass -f warning: 歴史に干渉することは危険です。」といったメッセージでプレイヤーをビビらせる感じで。



### `考察中` 最初に魔王と出会う

- 「プリンセスコネクト: redive」のop見て思ったのが、「最初に目標となる敵を示す」ことが重要な気がした。
	- 裏切りなどの形が有力だろうなぁ……。FF4のカインとか。
	- ただ、最初に「とてもじゃないけど勝てないライバル」がいるのはとても良い。
	- ストーリー案としては後述の「正しい魔王」で良いと思う。
	- 操作方法をチュートリアルで全て教えてしまうタイプにできるだろう。
		- この場合、導入案「犯罪者と物を売る門番」は使えなくなるかも。



### `採用検討中` 導入案「犯罪者と物を売る門番」

- あなたは正義の人だった。だが、時の王を糾弾する方法が性急すぎた。
- 迂闊にも大きな罪を負わされて、挽回の機会もなかった。
- あなたは牢獄の代わりに、魔物の巣喰う地下墓所へと送られた。
- 少ない食料と、今にも折れそうな錆びた剣、そして亡き恋人の形見であるペンダントの携帯のみを許された。
- 迷宮の入口の最奥は鉄格子が据えられていた。
- 「あんた、見込みがありそうだ。閉じ込めた後で恐縮だがいい話だと思うので聞いてくれ。
		地下にはバケモノもいるが、財宝もあるって話だ。
		俺は日中はここにいる。金目の物があればバイヤーになってやるよ。
		代わりに食料なんかを融通してやることなんかができるかもしれない。気楽に相談してくれ。

		……ま、そうはいっても……お前はもうこの洞窟の住人だ。しまいにゃオークと変わらなくなるんだろうけどな。この一階なんざ、血の匂いしかしねぇ……同情するが、お前がオークの匂いになったら我慢できねえからな、そん時は勘弁だ。てめえらの匂いが移るとワイフにどやされちまうんだよ。

		……ま、そうはいっても……お前さんが洞窟生活で言葉を忘れたら最後だけどな。

		……ま、うまく生きろよ、この犯罪者野郎。
		
		ここを出たやつは一人もいないが、女も何人も放り込んできた。洞窟の中で素敵なワイフを見つけてセックスしまくるといいさ。生きてる女がいたらいいんだけどな。ま、xxxxでもxxxxだろ。」




### `採用検討中` 「正しい魔王」
- 「人間は久しいな。紅茶はどうだ」
- 「あなたが魔王か」
- 「ああ。でも、もう疲れた。お前の望みはなんだ？」
- 「我々の街に害をなす魔物を一掃したい。ひいては、あなたを倒すことだと考えた」
- 「間違ってはいない。根本的な問題解決にはならないのだが」
- 「それは、なぜだろう？」
- 「私もまた、君のように……別の問題の解決方法を求めた結果、こうなったのだ」
- 「興味深い。どのような問題を？」
- 「人の悪しき心を、地下に分離できないかと考えたのだ。
		その結果、どうやら形としては成功したようだ。
		私が愛した街エヌフォは、まだ地上で栄えていると聞く」
- 「エヌフォの民の悪しき心が、地下の魔物となっているというのか」
- 「いや、それは正確ではない。私はそのようなことも行ったが、もっと言えば、国の敵であろうとしたのだ。私が望まぬ王は10を超えて殺したし、経済を鑑みて罪のないxxxxを殺した。罪のない老人も殺した。それでも飢餓の危機があった。なので、容姿の醜い者を選んで殺した」
- 「貴様」
- 「ククク」
- 「何を笑う」
- 「嬉しいのだ。あなたが私に憎しみを感じてくれていることに、感謝の気持ちが尽きない」
- 「なぜだ」
- 「私はもう力が尽きた。あなたを全力で屠ろう。そして……」
- 「そして？」
- 「あなたが私を屠った時、あなたは……そうだな。何かを達成するということは間違いない」
- 「バカにしているのか？ 不愉快だ」
- 「ああ。そうかもしれないな。私は……あなたに同情している」
- 「？」
- 「剣を取れ。この私の全力を以ってお相手しよう」

羅針盤戦記のプロトタイプとして考えてみようかなぁ……。


### `採用検討中` 「like a bird in a cage」

- どちらかというとタイトル案。思い入れが強すぎるタイトル。。2 bulletで曲名にしたやつ。
	- 曲もあるわけだし、歌詞を考えてもいいかもしれないけれども。

- 「籠の中の鳥のよう」というイメージをどうやって膨らませるか。
	- どういうゲームなのか。
	- ストーリーを消化したら終わりなのか、それとも？
	- 3 vs 3のシステムで大丈夫なのか？
	- タイトルに意味はないと考えても良いかもしれない。意味なんてどこにあるんだろうか。コギト・エルゴ・スムでいいんだ。


### 「強すぎる主人公」

うまくイメージできていないメモ。多分没

- 「あなたは強すぎる」
- 「あなたの強さは、世界のバランスを壊す」
- 「調停者の権限により、あなたのレベルを減らします」



### 摩天楼（歌詞アイデアメモ）

: 以前作った曲のリライト検討
: b-wizのエンディングタイトルにできないだろうか。

天高く聳える 誰|一人たどり着けない
あの|雲の向こうにはなにが あるのだろう

天高く聳える 君|と僕と誰かが見た
幻想はいつも僕らを 見下している

	ただの遊戯(ゲーム) ただの仕事(ビジネス)
	ただの人生(ライフ) ただの絶望()

	機械仕掛けの 存在価値(レゾンデートル)
	物語という 麻薬に浸り

		誰もがみんな陥る罠
		自分だけが生きてるような
		舞台仕掛けの 奥底で
		全てを壊して 泣きじゃくるよう

		この人生には、なんの意味もない

### タイトル案

- 深みのあるタイトルをそろそろ考えたい。
	- A,B,Cで評価。
	- A = フックがある、 B = 考えようがある、 C = ダメだと思う

- `A` born (til be worst)
	- あなたは「最悪な人生」を始めた。
	- 「born」生まれる = ここにエルフェンリートのOP曲を重ねるとすごくきついイメージが湧く。

- `C` death
	- ダメだと思う。死を意識してほしい、みたいな深みを

- `B` life (of xxx)
	- life of xxxという形式には何かイマジネーションがありそうだ。

- `A` like a bird in a cage
	- このタイトルを持ってくるのはありだろう。
	- ストーリーが大事になりそうだけど……ありきたりな展開しか思い浮かばない。
	- 略称どうするかな。cageで済ませておくかなぁ。


`EOF`