// ==UserScript==
// @name         not retarded darkcloud
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  its basically not retarded darkcloud
// @author       Timmy
// @match        *://soundcloud.com/*
// @grant        none
// @run-at       document-start
// ==/UserScript==

new MutationObserver(() => {
    document.querySelectorAll('*').forEach(e => {
        const n = e.tagName.toLowerCase() + ' ' + e.className.toLowerCase();
        if (!/text/.test(n)) {
            const b = getComputedStyle(e).backgroundColor;
            if (/^rgb\((\d+), \1, \1\)$/.test(b) && RegExp.$1 > 200) {
                e.style.backgroundColor = `rgb(${255 - RegExp.$1}, ${255 - RegExp.$1}, ${255 - RegExp.$1})`;
            }
        }
    });
}).observe(document.body, { childList: true, subtree: true });