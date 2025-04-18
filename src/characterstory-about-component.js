const characterStoryAbout01Component = {
	template: `<div class="character0">
		<div class="character1" style="margin-bottom: 20px;">
			<h3>あらすじ</h3><br>
			<p><span class="p-bold">――目指すもの、叶えたいもの、手にしたいもの。<br>
					あたしなんかが、そんな大きすぎる野望(ユメ)なんか語っちゃいけない。<br>
					悔しいけど、やっぱり諦めるべきなんだと思ってた。<br>だけど…それでも、あたしは――
				</span></p>
			<p>
				これは、数秘術式妖獣型ポータブルヒューマノイド「ナンバーテールズ」たちによる生活従事支援活動が普及しつつあったある街で、暴走寸前となったところを回収され活動を謹慎することとなってしまった、ナンバーテールズ93番機、通称「#(カズノ)
				93(クミ)」の話。<br>
				93(クミ)は、先輩個体である「3(ナオ)」らの活躍に誕生した時から憧れ、彼らを超える実績を望んできた。<br>
				しかしその高望みがかえって主人たちとすれ違い、主人とのミスマッチによるトラブルが多発した挙句、報われぬ結果を招いたと謹慎処置を受け93(クミ)は落胆する。<br>
				しかしある日、どこからかナンバーテールズの活動事情を聞きつけた少女「乃木 希(のぎ のぞみ)」との主従契約を結んでから、93(クミ)の従事活動を大きく変えていくことになる。
			</p>
			<slot name="info">
				<h3 class="h3-wide">小説版(Misskey)連載中</h3><p>
				<a href="https://misskey.io/notes/9u6hpaj8gsti01os">「ある主従契約記録にて」（前日端ショートストーリー）</a><br>
				<a href="https://misskey.io/notes/9u6j6xmlqint00f2">小説版第０話「プロローグ」</a><br>
				<a href="https://misskey.io/notes/9ub3q94g114601zw">小説版第１話①「夢からの目覚め」</a><br>
				<a href="https://misskey.io/notes/9ujd28f36gt500mw">小説版第１話②「２人の夢追い人」</a><br>
				<a href="https://misskey.io/notes/9zjggaauq0l600d1">小説版第２話①「93(クミ)の野望(ユメ)」</a><br>
				<a href="https://misskey.io/notes/a1n7et2fnrep02zx">小説版第２話②「九十九神計画」</a><br>
				<a href="https://misskey.io/notes/a4qme67aneyd0bir">小説版第２話③「再挑戦」</a></p>
				<h3 class="h3-wide">サウンドノベル連載準備中</h3><p>
				<a class="a-commingsoon">Comming Soon...</a></p>
			</slot>
		</div><img alt="画像が見つかりませんでした" src="/img/cnsp_chrst/cnsp_chrst93.png" class="character-img" style="margin-bottom: 20px;">
		<slot></slot></div>`
};

Vue.createApp({
	components: {
		'characterstory-about-01-comp': characterStoryAbout01Component
	}
})
	.mount('#app-characterstory-page')