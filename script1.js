// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', function() {
    // Get references to the buttons and meme image
    const startBtn = document.getElementById('startBtn');
    const stopBtn = document.getElementById('stopBtn');
    const memeImage = document.getElementById('memeImage');

    // Check if elements are found
    if (startBtn && stopBtn && memeImage) {
        let moveImage; // Variable to store the interval for moving the image

        // Function to start moving the meme image
        function startMoving() {
            console.log('Start button clicked');
            // Disable the start button and enable the stop button
            startBtn.disabled = true;
            stopBtn.disabled = false;
            // Move the meme image continuously
            moveImage = setInterval(move, 10);
        }

        // Function to stop moving the meme image
        function stopMoving() {
            console.log('Stop button clicked');
            // Enable the start button and disable the stop button
            startBtn.disabled = false;
            stopBtn.disabled = true;
            // Stop moving the meme image
            clearInterval(moveImage);
        }

        // Function to move the meme image
        function move() {
            // Get current position of the meme image
            let xPos = memeImage.offsetLeft;
            // Move the image to the right
            xPos += 1;
            memeImage.style.left = xPos + 'px';
            // Reset position to left when image reaches right end of the screen
            if (xPos >= window.innerWidth - memeImage.width) {
                memeImage.style.left = '0px';
            }
        }

        // Add event listeners to the buttons
        startBtn.addEventListener('click', startMoving);
        stopBtn.addEventListener('click', stopMoving);
    } else {
        // Log an error if one or more elements are not found
        console.error('One or more elements not found.');
    }
});


