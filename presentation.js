// HOMNA Presentation JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Function to handle fullscreen mode
    function toggleFullScreen() {
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen().catch(err => {
                console.error(`Error attempting to enable fullscreen: ${err.message}`);
            });
        } else {
            if (document.exitFullscreen) {
                document.exitFullscreen();
            }
        }
    }

    // Keyboard navigation
    document.addEventListener('keydown', function(event) {
        const currentSlide = document.querySelector('.slide');
        const nextButton = document.querySelector('.navigation button:nth-child(2)');
        const prevButton = document.querySelector('.navigation button:nth-child(1)');

        switch (event.key) {
            case 'ArrowRight':
            case ' ':
                if (nextButton) {
                    nextButton.click();
                }
                break;
            case 'ArrowLeft':
                if (prevButton) {
                    prevButton.click();
                }
                break;
            case 'f':
            case 'F':
                toggleFullScreen();
                break;
            case 'Escape':
                if (document.fullscreenElement) {
                    document.exitFullscreen();
                }
                break;
        }
    });

    // Add class to body when the document is loaded
    document.body.classList.add('loaded');

    // Ensure uniform footer sizing and positioning
    const footers = document.querySelectorAll('.slide-footer');
    footers.forEach(footer => {
        footer.style.position = 'absolute';
        footer.style.bottom = '20px';
        footer.style.left = '50px';
        footer.style.right = '50px';
        footer.style.zIndex = '10';
        footer.style.fontSize = '14px';
    });

    // Ensure navigation buttons are positioned correctly
    const navigation = document.querySelector('.navigation');
    if (navigation) {
        navigation.style.position = 'absolute';
        navigation.style.bottom = '20px';
        navigation.style.right = '50px';
        navigation.style.zIndex = '20';
    }
});