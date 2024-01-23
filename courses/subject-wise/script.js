// Function to update and store reviews
function updateReview(rowNumber) {
    var reviewText = document.getElementById('review' + rowNumber).value;
    localStorage.setItem('review_' + rowNumber, reviewText);
}

// Function to load reviews on page load
window.onload = function () {
    for (var i = 1; i <= 5; i++) {
        var savedReview = localStorage.getItem('review_' + i);
        if (savedReview) {
            document.getElementById('review' + i).value = savedReview;
        }
    }
};

// Function to open YouTube popup
function openYoutubePopup(videoId) {
    document.getElementById('youtubePlayer').src = 'https://www.youtube.com/embed/' + videoId;
    document.getElementById('youtubeModal').style.display = 'block';
}

// Function to close YouTube popup
function closeYoutubePopup() {
    document.getElementById('youtubePlayer').src = ''; 
    document.getElementById('youtubeModal').style.display = 'none';
}