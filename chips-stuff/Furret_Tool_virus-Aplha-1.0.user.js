// ==UserScript==
// @name         Furret Tool [virus free]
// @namespace    http://tampermonkey.net/
// @version      Aplha:1.0
// @description  Creates a centered iframe element on the page
// @author       Prongel
// @match        https://mijn.numo.nl/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Function to create a new image element with the GIF
    function createGif() {
        // Create the image element
        var gifImg = document.createElement('img');

        // Set the source URL for the GIF
        gifImg.src = 'https://media.tenor.com/8xnfuu9FK78AAAAi/pokemon-furret.gif'; // Change this to the URL of your GIF

        // Set additional attributes for the GIF
        gifImg.setAttribute('alt', 'GIF');
        gifImg.setAttribute('loading', 'lazy'); // For better performance, if the browser supports it

        // Set the CSS styles for the GIF
        gifImg.style.position = 'fixed';
        gifImg.style.maxWidth = '200px'; // Adjust the size of the GIF as needed
        gifImg.style.transform = 'translate(-50%, -50%)';

        // Append the GIF to the body
        document.body.appendChild(gifImg);

        // Set GIF to loop
        gifImg.setAttribute('loop', 'true');

        // Move the GIF to a random position
        moveGif(gifImg);
    }

    // Function to move the GIF to a random position within the viewport
    function moveGif(gifImg) {
        var viewportWidth = window.innerWidth;
        var viewportHeight = window.innerHeight;
        var gifWidth = gifImg.offsetWidth;
        var gifHeight = gifImg.offsetHeight;

        var randomX = Math.random() * (viewportWidth - gifWidth);
        var randomY = Math.random() * (viewportHeight - gifHeight);

        gifImg.style.left = randomX + 'px';
        gifImg.style.top = randomY + 'px';
    }

    // Create the initial GIF
    createGif();

    // Duplicate and move the GIF periodically
    setInterval(function() {
        createGif();
    }, 10); // Change the interval as needed (in milliseconds)

    // Add background music using Web Audio API
    var audioContext = new (window.AudioContext || window.webkitAudioContext)();
    var audioSource = audioContext.createBufferSource();
    var audioRequest = new XMLHttpRequest();
    audioRequest.open('GET', 'https://archive.org/download/pokemon-black-pokemon-white-super-music-collection/Pokémon%20Black%20%26%20Pokémon%20White%20Super%20Music%20Collection.zip/Pokémon%20Black%20%26%20Pokémon%20White%20Super%20Music%20Collection%2FDisc%201%2F17.%20Accumula%20Town.mp3', true); // Change this to the URL of your background music
    audioRequest.responseType = 'arraybuffer';
    audioRequest.onload = function() {
        audioContext.decodeAudioData(audioRequest.response, function(buffer) {
            audioSource.buffer = buffer;
            audioSource.loop = true;
            audioSource.connect(audioContext.destination);
            audioSource.start(0);
        });
    };
    audioRequest.send();
})();
