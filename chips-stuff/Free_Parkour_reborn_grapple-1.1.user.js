// ==UserScript==
// @name         Free Parkour reborn grapple
// @namespace    http://tampermonkey.net/
// @version      1.1
// @description  Voor koen
// @author       ???
// @match        https://www.roblox.com/games/11639495622/*
// @icon         https://static.wikia.nocookie.net/parkour-reborn/images/a/a5/Grappler.png/revision/latest?cb=20231208155251
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Define the iframe code with autoplay
    var iframeCode = '<iframe src="https://streamable.com/e/zh5pes?autoplay=1" width="100%" height="100%" frameborder="0" allowfullscreen style="width:100%;height:100%;position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);"></iframe>';

    // Create a div to contain the iframe
    var container = document.createElement('div');
    container.innerHTML = iframeCode;

    // Append the container to the body
    document.body.appendChild(container);

    // Create an image element
    var image = document.createElement('img');
    image.src = 'https://mcdf.wiki.gg/images/c/cc/Barrier.png'; // Provided image URL
    image.style.width = '50px'; // Adjust the size of the image as needed
    image.style.position = 'absolute';
    image.style.pointerEvents = 'none'; // This prevents the image from blocking mouse events
    document.body.appendChild(image);

    // Function to move the image to follow the mouse
    function moveImage(event) {
        image.style.left = event.clientX + 'px';
        image.style.top = event.clientY + 'px';
    }

    // Event listener to track mouse movement
    document.addEventListener('mousemove', moveImage);
})();
