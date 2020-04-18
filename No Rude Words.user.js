// ==UserScript==
// @name         No Rude Words
// @namespace    https://github.com/ZiRanGe-Jason/No-Rude-Words
// @version      0.3
// @description  No Rude Words.文明上网，健康上网。这是一个自动屏蔽脏话的油猴脚本，保障您舒心的浏览体验。
// @author       ZiRanGe-Jason
// @match        https://*/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    //MODE=0为轻度屏蔽，1为中度屏蔽，2为重度屏蔽, 3为苛刻屏蔽
    var MODE=0;


    window.onload = function () {
    // title
    var t = document.getElementsByTagName('title');
    if (!!t) {
        t = t[0];
    }

    //请勿向下翻阅
    // content
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    /*document.body.innerHTML = document.body.innerHTML.replace(/fucking/g, '*******');
    document.body.innerHTML = document.body.innerHTML.replace(/fuck/g, '****');
    document.body.innerHTML = document.body.innerHTML.replace(/bitch/g, '*****');
    document.body.innerHTML = document.body.innerHTML.replace(/Fucking/g, '*******');
    document.body.innerHTML = document.body.innerHTML.replace(/Fuck/g, '****');
    document.body.innerHTML = document.body.innerHTML.replace(/Bitch/g, '*****');
    document.body.innerHTML = document.body.innerHTML.replace(/FUCKING/g, '*******');
    document.body.innerHTML = document.body.innerHTML.replace(/FUCK/g, '****');
    document.body.innerHTML = document.body.innerHTML.replace(/BITCH/g, '*****');*/
        //
    document.body.innerHTML = document.body.innerHTML.replace(/我操/g, '**');
    document.body.innerHTML = document.body.innerHTML.replace(/我日/g, '**');
    document.body.innerHTML = document.body.innerHTML.replace(/你妈逼/g, '***');
    document.body.innerHTML = document.body.innerHTML.replace(/狗日的/g, '***');
    document.body.innerHTML = document.body.innerHTML.replace(/操你妈/g, '***');
    document.body.innerHTML = document.body.innerHTML.replace(/傻逼/g, '**');
    document.body.innerHTML = document.body.innerHTML.replace(/叼你妈的/g, '****');
    document.body.innerHTML = document.body.innerHTML.replace(/吊你妈的/g, '****');
    document.body.innerHTML = document.body.innerHTML.replace(/你妈死了/g, '****');
    document.body.innerHTML = document.body.innerHTML.replace(/你爸死了/g, '****');
    document.body.innerHTML = document.body.innerHTML.replace(/去你妈的/g, '****');
    document.body.innerHTML = document.body.innerHTML.replace(/去他妈的/g, '****');
    document.body.innerHTML = document.body.innerHTML.replace(/他妈/g, '**');
    document.body.innerHTML = document.body.innerHTML.replace(/操他妈/g, '***');
    document.body.innerHTML = document.body.innerHTML.replace(/日他妈/g, '***');
    document.body.innerHTML = document.body.innerHTML.replace(/你先人/g, '*****');
    document.body.innerHTML = document.body.innerHTML.replace(/你仙人/g, '*****');
    document.body.innerHTML = document.body.innerHTML.replace(/妈逼/g, '**');
    //document.body.innerHTML = document.body.innerHTML.replace(/狗日的/g, '***');
    document.body.innerHTML = document.body.innerHTML.replace(/日你妈/g, '***');
    document.body.innerHTML = document.body.innerHTML.replace(/草你妈/g, '***');
    document.body.innerHTML = document.body.innerHTML.replace(/你他妈/g, '***');
    document.body.innerHTML = document.body.innerHTML.replace(/打飞机/g, '***');
    document.body.innerHTML = document.body.innerHTML.replace(/日你/g, '**');
    document.body.innerHTML = document.body.innerHTML.replace(/操你/g, '**');
    document.body.innerHTML = document.body.innerHTML.replace(/贱种/g, '**');
    document.body.innerHTML = document.body.innerHTML.replace(/杂种/g, '**');
    document.body.innerHTML = document.body.innerHTML.replace(/骚屄/g, '**');
    document.body.innerHTML = document.body.innerHTML.replace(/婊子/g, '**');
    document.body.innerHTML = document.body.innerHTML.replace(/卖逼/g, '**');
    document.body.innerHTML = document.body.innerHTML.replace(/野爹/g, '**');
    document.body.innerHTML = document.body.innerHTML.replace(/崽种/g, '**');
    document.body.innerHTML = document.body.innerHTML.replace(/贱命/g, '**');
    document.body.innerHTML = document.body.innerHTML.replace(/卖屁眼/g, '***');
    document.body.innerHTML = document.body.innerHTML.replace(/屁眼/g, '**');
    document.body.innerHTML = document.body.innerHTML.replace(/SB/g, '**');
    document.body.innerHTML = document.body.innerHTML.replace(/性癖/g, '**');
    document.body.innerHTML = document.body.innerHTML.replace(/滥交/g, '**');
    document.body.innerHTML = document.body.innerHTML.replace(/淫水/g, '**');
    document.body.innerHTML = document.body.innerHTML.replace(/喷粪/g, '**');
    document.body.innerHTML = document.body.innerHTML.replace(/鸡巴/g, '**');
    document.body.innerHTML = document.body.innerHTML.replace(/JB/g, '**');
    document.body.innerHTML = document.body.innerHTML.replace(/骚鸡/g, '**');
    document.body.innerHTML = document.body.innerHTML.replace(/喷屎/g, '**');
    document.body.innerHTML = document.body.innerHTML.replace(/瘟鸡/g, '**');
    document.body.innerHTML = document.body.innerHTML.replace(/臭逼/g, '**');
    document.body.innerHTML = document.body.innerHTML.replace(/low逼/g, '**');
    document.body.innerHTML = document.body.innerHTML.replace(/烂逼/g, '**');
    document.body.innerHTML = document.body.innerHTML.replace(/操爽/g, '**');
    document.body.innerHTML = document.body.innerHTML.replace(/日爽/g, '**');


    if(MODE>=1){

		document.body.innerHTML = document.body.innerHTML.replace(/吃屎/g, '**');
		document.body.innerHTML = document.body.innerHTML.replace(/王八蛋/g, '**');
		document.body.innerHTML = document.body.innerHTML.replace(/混蛋/g, '**');
		document.body.innerHTML = document.body.innerHTML.replace(/憨批/g, '**');
		document.body.innerHTML = document.body.innerHTML.replace(/尼玛/g, '**');
		document.body.innerHTML = document.body.innerHTML.replace(/畸形种/g, '***');
		document.body.innerHTML = document.body.innerHTML.replace(/狗东西/g, '***');

    }

    if(MODE>=2){

		document.body.innerHTML = document.body.innerHTML.replace(/祖安/g, 'ZA');
		document.body.innerHTML = document.body.innerHTML.replace(/废物/g, '**');
		document.body.innerHTML = document.body.innerHTML.replace(/轮奸/g, '**');
		document.body.innerHTML = document.body.innerHTML.replace(/强奸/g, '**');
		document.body.innerHTML = document.body.innerHTML.replace(/王八/g, '**');
		document.body.innerHTML = document.body.innerHTML.replace(/奸/g, 'J');
		document.body.innerHTML = document.body.innerHTML.replace(/猥亵/g, '**');
		document.body.innerHTML = document.body.innerHTML.replace(/交配/g, '**');
		document.body.innerHTML = document.body.innerHTML.replace(/死了/g, '**');
		document.body.innerHTML = document.body.innerHTML.replace(/你妈/g, '**');
		document.body.innerHTML = document.body.innerHTML.replace(/你爹/g, '**');
		document.body.innerHTML = document.body.innerHTML.replace(/你爸/g, '**');


    }

    if(MODE>=3){
		document.body.innerHTML = document.body.innerHTML.replace(/妈/g, 'M');
		document.body.innerHTML = document.body.innerHTML.replace(/爹/g, 'D');
		document.body.innerHTML = document.body.innerHTML.replace(/爸/g, 'B');
		document.body.innerHTML = document.body.innerHTML.replace(/狗/g, 'G');
		document.body.innerHTML = document.body.innerHTML.replace(/兽/g, 'S');
    }
}

    // Your code here...
})();
