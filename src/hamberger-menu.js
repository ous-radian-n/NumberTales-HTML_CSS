// https://qiita.com/helloworld193/items/9aed3870be1e739c3ad2

Vue.createApp({})
	.component("hamberger-menu", {
		template: `<!--ハンバーガーメニューのボタン-->
		<div class="hamburger_btn" v-on:click='ActiveBtn=!ActiveBtn'>
			<span class="line line_01" v-bind:class="{'btn_line01':ActiveBtn}"></span>
			<span class="line line_02" v-bind:class="{'btn_line02':ActiveBtn}"></span>
			<span class="line line_03" v-bind:class="{'btn_line03':ActiveBtn}"></span>
		</div>
		<!--サイドバー-->
		<transition name="menu">
			<div class="menu" v-show="ActiveBtn">
				<ul>
					<li><a href="/index.html">サイトトップ</a></li>
					<li><a href="https://misskey.numbertales-radiann.net/@official/pages/creation_guideline">創作ガイドライン(日本語)</a></li>
					<li><a href="https://misskey.numbertales-radiann.net/@official/pages/creation_guideline_EN">Creations Guideline(English)</a></li>
					<li><a href="/characters.html">キャラクター紹介(2桁)</a></li>
					<li><a href="/characters-special.html">キャラクター紹介(3桁)</a></li>
					<li><a href="https://misskey.io/clips/9c2heeq2ig">Misskey(.io,クリップ)</a></li>
					<li><a href="https://misskey.io/@official@misskey.numbertales-radiann.net">百花繚乱研究所公式Misskey</a></li>
					<li><a href="https://misskey.io/@APHR_NTs@misskey.numbertales-radiann.net">ナンバーテールズ公式MisskeyBot</a></li>
					<li><a href="https://misskey.io/@APHR_NTs">ナンバーテールズ公式MisskeyBot(.io)</a></li>
					<li><a href="https://misskey.io/@RadianN_kswg@misskey.numbertales-radiann.net">原作者公式Misskey</a></li>
					<li><a href="https://misskey.io/@RadianN_kswg">原作者公式Misskey(.io)</a></li>
					<li><a href="https://www.pixiv.net/users/44375569">原作者公式pixiv</a></li>
					<li><a href="https://radiann-kswg.fanbox.cc/">原作者公式pixivFANBOX(停滞中)</a></li>
					<li><a href="https://radiann-kswg.booth.pm/">原作者公式BOOTH</a></li>
				</ul>
			</div>
		</transition>`,
		data() {
			return {
				ActiveBtn: false,
			};
		},
	})
	.mount("#app-menu");
