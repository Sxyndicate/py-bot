document.getElementById('play-artist').addEventListener('click', function() {
    // Get the artist URL from the input field
    var artistUrl = document.getElementById('artist-url').value.trim();
    
    // Simple validation to check if the input is not empty
    if (!artistUrl) {
        alert('Please enter the artist\'s Spotify URL.');
        return;
    }
    
    // Extract the artist ID from the URL
    var artistId = extractArtistId(artistUrl);
    
    if (!artistId) {
        alert('Invalid Spotify URL. Please make sure you\'ve entered a correct Spotify artist URL.');
        return;
    }
    
    // send the artistId to the backend via an AJAX request or Fetch API
    // For this , we'll just log it to the console
    console.log('Artist ID:', artistId);
    
    // For logging the action, replace with actual API calls
    console.log(`Fetching top tracks for artist ID: ${artistId}`);
    
    // Placeholder for API call to your backend, which would then interact with Spotify's API
    fetchTopTracksForArtist(artistId);
});

function extractArtistId(url) {
    // This regex matches the artist ID in a Spotify artist URL
    var match = url.match(/(?:spotify\.com\/artist\/)(\w+)/);
    return match ? match[1] : null;
}

function fetchTopTracksForArtist(artistId) {
    // Placeholder function to demonstrate where you might interact with Spotify's API
    // In a real app, this would involve sending a request to your backend server
    console.log(`Simulated fetch for top tracks of artist with ID: ${artistId}`);
    
    // Simulate fetching and playing the artist's top tracks
    // Actual implementation would require server-side Spotify API calls
    console.log(`Simulating playing top tracks for artist ID: ${artistId}`);
    
    // Update the page or user interface as needed
    // For example, update a play count or duration tracker
}

// Note: Actual playback and detailed tracking would require more comprehensive backend logic

// Initialize stream counter
let streamCount = 0;

// Function to update stream counter
function updateStreamCounter() {
    const streamCounter = document.getElementById("stream-counter");
    streamCounter.textContent = "Streams: " + streamCount;
}

// Function to play artist's songs (replace with your actual functionality)
function playArtist() {
    const artistUrl = document.getElementById("artist-url").value;
    // Make a request to your backend (Flask) to play artist's songs
    // Pass a callback function to be executed when song playback is complete
    // For example:
    // playSong(() => {
    //     // Song playback complete, increment stream counter
    //     streamCount++;
    //     updateStreamCounter();
    // });
}

// Example function to simulate song playback (replace with actual functionality)
function playSong(callback) {
    // Simulate playing a song
    setTimeout(() => {
        // Simulate song playback duration (e.g., 3 seconds)
        callback(); // Call the callback function when playback is complete
    }, 3000); // Change this to the actual duration of the song
}

// Event listener for play button
const playButton = document.getElementById("play-artist");
playButton.addEventListener("click", function() {
    // Call function to play artist's songs
    playArtist();
});

