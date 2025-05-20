// script.js

document.getElementById('downloadForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission (no page refresh)

    var url = document.getElementById('youtube-url').value;

    // Validate the URL (check if it's empty)
    if (url.trim() === '') {
        document.getElementById('message').innerText = 'Please enter a valid YouTube URL!';
    } else {
        // Simulate a delay before showing a "Download started" message
        document.getElementById('message').innerText = 'Processing download for URL: ' + url;

        setTimeout(function() {
            document.getElementById('message').innerText = 'Download started for: ' + url;
        }, 2000); // 2-second delay to simulate the process
    }
});
