function toggleScroll(scrollTop) {
    document.body.classList.toggle('remove-scrolling', document.querySelector('.modal--opened') !== null);
    const isScrollDisabled = document.body.classList.contains('remove-scrolling');
    if (isScrollDisabled) {
        document.body.style.top = `-${scrollTop}px`;
    }
    else {
        window.scrollTo(0, scrollTop);
    }
};