let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function changeSlide(direction) {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + direction + slides.length) % slides.length;
    slides[currentSlide].classList.add('active');
}

// Automatically change slides (for example, every 5 seconds)
setInterval(() => {
    changeSlide(1);
}, 5000);

//Load More button Functionality
document.addEventListener('DOMContentLoaded', function() {
    const galleryItems = document.querySelectorAll('.gallery');
    const loadMoreButton = document.querySelector('.load-more-button');
    const itemsPerPage = 6; // Number of items to load per click
    let currentItems = itemsPerPage;

    // Function to display all remaining items
    function showAllRemainingItems() {
        for (let i = 0; i < galleryItems.length; i++) {
            galleryItems[i].style.display = 'inline-block';
        }
        loadMoreButton.style.display = 'none'; // Hide the button when all items are displayed
    }

    // Function to load more items
    function loadMore() {
        currentItems += itemsPerPage;
        if (currentItems >= galleryItems.length) {
            showAllRemainingItems();
        } else {
            showItems();
        }
    }

    // Function to display the first batch of items
    function showItems() {
        for (let i = 0; i < currentItems; i++) {
            if (galleryItems[i]) {
                galleryItems[i].style.display = 'inline-block';
            }
        }
    }

    // Initial display of items
    showItems();

    // Event listener for the "Load more..." button
    loadMoreButton.addEventListener('click', loadMore);
});
