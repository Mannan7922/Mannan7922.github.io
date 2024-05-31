document.addEventListener('DOMContentLoaded', function () {
    const content = document.querySelector('.content');
    const rankImages = document.querySelector('.rank-images');

    function checkScroll() {
        const contentPosition = content.getBoundingClientRect().top;
        const rankImagesPosition = rankImages.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;

        if (contentPosition < screenPosition) {
            content.classList.add('visible');
        }
        if (rankImagesPosition < screenPosition) {
            rankImages.classList.add('visible');
        }
    }

    window.addEventListener('scroll', checkScroll);
});

