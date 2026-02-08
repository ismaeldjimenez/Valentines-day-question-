// script.js
function sayHi(option) {
    if (option == 'hi'){
        document.getElementById('hello').style.display = 'none'; // Hide the question
        document.getElementById('say-hi').style.display = 'none'; // Hide the question
        displayCatFlower();
    }
}

// Function to handle button click events
function selectOption(option) {
    // Check which option was clicked
    if (option === 'yes') {
        // Flash rainbow colors
        flashRainbowColors(function() {
            document.getElementById('question').style.display = 'none'; // Hide the question
            displayCatKiss(); // Display the cat_kiss.gif
        });
    } else if (option === 'no') {
        playNoEffect(); // 💥 NEW EFFECT
    
        document.getElementById('no-button').innerText = 'You sure?'; 
    
        var yesButton = document.getElementById('yes-button');
        var currentFontSize = window.getComputedStyle(yesButton).getPropertyValue('font-size');
        var newSize = parseFloat(currentFontSize) * 2;
        yesButton.style.fontSize = newSize + 'px';
    }
    else {
        // If neither "Yes" nor "No" was clicked, show an alert message
        alert('Invalid option!');
    }
}

// Function to flash rainbow colors and then execute a callback function
function flashRainbowColors(callback) {
    var colors = ['#ff0000', '#ff7f00', '#ffff00', '#00ff00', '#0000ff', '#4b0082', '#9400d3'];
    var i = 0;
    var interval = setInterval(function() {
        document.body.style.backgroundColor = colors[i];
        i = (i + 1) % colors.length;
    }, 200); // Change color every 200 milliseconds
    setTimeout(function() {
        clearInterval(interval);
        document.body.style.backgroundColor = ''; // Reset background color
        if (callback) {
            callback();
        }
    }, 2000); // Flash colors for 2 seconds
}

// Function to display the cat.jpg initially
function displayCat() {
    // Get the container where the image will be displayed
    var imageContainer = document.getElementById('image-container');
    // Create a new Image element for the cat
    var catImage = new Image();
    // Set the source (file path) for the cat image
    catImage.src = 'cat.gif'; // Assuming the cat image is named "cat_flower.gif"
    // Set alternative text for the image (for accessibility)
    catImage.alt = 'Cat';
    // When the cat image is fully loaded, add it to the image container
    catImage.onload = function() {
        imageContainer.appendChild(catImage);
        // Hide the options container
        document.getElementById('question').style.display = 'none'; // Hide the question
        document.getElementById('options').style.display = 'none';
    };
}

// Function to display the cat_kiss.gif
function displayCatFlower() {
    // Clear existing content in the image container
    document.getElementById('image-container').innerHTML = '';
    // Get the container where the image will be displayed
    var imageContainer = document.getElementById('image-container');
    // Create a new Image element for the cat_kiss
    var catKissImage = new Image();
    // Set the source (file path) for the cat_kiss image
    catKissImage.src = 'cat_flower.gif'; // Assuming the cat_kiss image is named "cat_kiss.gif"
    // Set alternative text for the image (for accessibility)
    catKissImage.alt = 'Cat Flower';
    // When the cat_kiss image is fully loaded, add it to the image container
    catKissImage.onload = function() {
        imageContainer.appendChild(catKissImage);
        // Show the options container
        document.getElementById('question').style.display = 'block'; // Hide the question
        document.getElementById('options').style.display = 'block';
    };
}

// Function to display the cat_kiss.gif
function displayCatKiss() {
    // Clear existing content in the image container
    document.getElementById('image-container').innerHTML = '';
    // Get the container where the image will be displayed
    var imageContainer = document.getElementById('image-container');
    // Create a new Image element for the cat_kiss
    var catKissImage = new Image();
    // Set the source (file path) for the cat_kiss image
    catKissImage.src = 'cat_kiss.gif'; // Assuming the cat_kiss image is named "cat_kiss.gif"
    // Set alternative text for the image (for accessibility)
    catKissImage.alt = 'Cat Kiss';
    // When the cat_kiss image is fully loaded, add it to the image container
    catKissImage.onload = function() {
        imageContainer.appendChild(catKissImage);
        // Hide the options container
        document.getElementById('options').style.display = 'none';
    };
}

function playNoEffect() {
    // Play audio
    var audio = new Audio('FAH.mp3');
    audio.play();

    // Create explosion image
    var explosion = document.createElement('img');
    explosion.src = 'cat_explosion.gif';
    explosion.className = 'explosion';
    explosion.alt = 'Explosion Cat';

    document.body.appendChild(explosion);

    // After 1 second, fade it out
    setTimeout(function () {
        explosion.classList.add('fade-out');
    }, 1000);

    // Remove from DOM after fade
    setTimeout(function () {
        explosion.remove();
    }, 1500);
}

// Display the cat.gif initially
displayCat();
