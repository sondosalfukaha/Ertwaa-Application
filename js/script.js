document.addEventListener("DOMContentLoaded", function() {
    const image = document.querySelector('.animated-image');
    setTimeout(() => {
        image.style.opacity = 1;
        image.style.transform = 'scale(1)';
    }, 1000);
});
