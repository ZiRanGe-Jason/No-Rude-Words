// ==UserScript==
// @name         No Rude Words
// @namespace    https://zirange-jason.gitee.io/
// @version      0.1
// @description  No Rude Words.文明上网，健康上网。这是一个自动屏蔽脏话的油猴脚本，保证你舒心的浏览体验。
// @author       ZiRanGe-Jason
// @match        https://*/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    window.onload = function () {
    // title
    var t = document.getElementsByTagName('title');
    if (!!t) {
        t = t[0];
    }
    // content
    document.body.innerHTML = document.body.innerHTML.replace(/fucking/g, '*******');
    document.body.innerHTML = document.body.innerHTML.replace(/fuck/g, '****');
    document.body.innerHTML = document.body.innerHTML.replace(/bitch/g, '*****');
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
    document.body.innerHTML = document.body.innerHTML.replace(/去你妈的/g, '****');
    document.body.innerHTML = document.body.innerHTML.replace(/去他妈的/g, '****');
    document.body.innerHTML = document.body.innerHTML.replace(/他妈的/g, '***');
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
    document.body.innerHTML = document.body.innerHTML.replace(/SB/g, '**');
    document.body.innerHTML = document.body.innerHTML.replace(/轮奸/g, '**');
    document.body.innerHTML = document.body.innerHTML.replace(/强奸/g, '**');
    document.body.innerHTML = document.body.innerHTML.replace(/操爽/g, '**');
    document.body.innerHTML = document.body.innerHTML.replace(/日爽/g, '**');
    document.body.innerHTML = document.body.innerHTML.replace(/奸/g, '*');
}

    // Your code here...
})();