// For the index page (index.html)
if (window.location.pathname === "/index.html") {
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
}

// For the download page (download.html)
if (window.location.pathname === "/download.html") {
    window.onload = function() {
        // Simulate a 3-second download process with a progress bar
        var progressBar = document.getElementById("progress-bar");
        var message = document.getElementById("processing-message");
        var downloadButton = document.getElementById("download-button");

        var progress = 0;
        var interval = setInterval(function() {
            progress += 5; // Reduce increment for smoother transition
            progressBar.style.width = progress + "%";

            // Once download is complete (100%), stop the interval and show the download button
            if (progress >= 100) {
                clearInterval(interval);
                message.innerText = "Your video is ready to download!";
                downloadButton.style.display = "inline-block"; // Show download button
            }
        }, 200); // Update progress bar every 200ms for smoother animation

        // Simulate the download when the button is clicked
        downloadButton.addEventListener("click", function() {
            message.innerText = "Downloading...";

            // Example of triggering a real download (replace with actual file URL)
            setTimeout(function() {
                message.innerText = "Download Complete! Thank you for using YTClipDownloader!";
                // Redirecting to the actual download link (this is an example URL)
                window.location.href = "path_to_downloaded_video.mp4"; // Replace with your actual download URL
            }, 2000); // Simulate a download completion after 2 seconds
        });
    };
}
