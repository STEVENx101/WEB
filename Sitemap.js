function updateBackgroundSize() {
    var windowWidth = window.innerWidth;
    var body = document.body;

    if (windowWidth <= (window.screen.width / 2)) {
        body.classList.add('responsive-bg');
    } else {
        body.classList.remove('responsive-bg');
    }
}

window.addEventListener('resize', updateBackgroundSize);
