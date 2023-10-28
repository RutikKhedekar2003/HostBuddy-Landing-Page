function toggleFade() {
    const image = document.getElementById('animatedImage');
    const currentOpacity = parseFloat(window.getComputedStyle(image).getPropertyValue('opacity'));

    if (currentOpacity === 0) {
        image.style.opacity = 1;
    } else {
        image.style.opacity = 0;
    }
}

