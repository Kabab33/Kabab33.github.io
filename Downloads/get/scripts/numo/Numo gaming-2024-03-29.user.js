    // ==UserScript==
// @name         Numo gaming
// @namespace    http://tampermonkey.net/
// @version      2024-03-29
// @description  embed een gaming gedeelte in de woordenboek
// @author       Kabab33
// @match        https://mijn.numo.nl/exercises/*/exercise
// @icon         https://assets.numo.nl/assets/favicon.png
// ==/UserScript==

(function() {
    setTimeout(start, 1000);
function start() {
    var newElement = document.createElement('iframe');
    newElement.src = 'https://kabab33.github.io/iframe';
    newElement.width = '100%';
    newElement.height = '100%';
    var elements = document.getElementsByClassName('row p-2 dictionary__screen m-lg-3');
    var oldElement = elements[0];
    oldElement.replaceWith(newElement);
//    var numb = document.getElementsByClassName("row p-2 dictionary__screen m-lg-3").length
//    window.alert(numb)
}
})();
