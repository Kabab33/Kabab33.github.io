// ==UserScript==
// @name        Studytools magister DVD
// @namespace   Violentmonkey Scripts
// @match       *://*.magister.net/*
// @grant       none
// @version     1.0
// @author      Kabab33
// @description activeert altijd de dvd screensaver easter egg van studytools
// @icon https://kabab33.github.io/Data/Img/DLPG/Studytools-dvd.png
// @homepageURL https://kabab33.github.io
// ==/UserScript==

document.querySelector('img.logo-expanded').classList.add('dvd-screensaver')