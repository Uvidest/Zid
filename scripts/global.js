function toggleScroll(isScrollDisabled, scrollTop) {
    document.body.classList.toggle('remove-scrolling', document.querySelector('.modal--opened') !== null);
    if (isScrollDisabled) {
        document.body.style.top = `-${scrollTop}px`;
    }
    else {
        window.scrollTo(0, scrollTop);
    }
};