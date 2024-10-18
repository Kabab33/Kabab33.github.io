// ==UserScript==
// @name         Numo bg tot bliss (Licht)
// @namespace    https://kabab33.neocities.org/scripts/
// @version      2024-03-29
// @description  ook bruikbaar met img url's
// @author       Kabab33
// @match        https://mijn.numo.nl/*
// @icon         https://assets.numo.nl/assets/favicon.png
// ==/UserScript==
(function() {
    var backgroundimgurl = 'https://kabab33.neocities.org/Data/Img/bliss.webp'
    setTimeout(start, 1000);

function start() {
    var elements = document.getElementsByClassName('app header-fixed aside-menu-fixed blue-brand student opacity-90');
    var bg = elements[0];
    var bgstyle = 'background: url("' + backgroundimgurl + '") center center no-repeat;'
    bg.style = bgstyle
}
})();