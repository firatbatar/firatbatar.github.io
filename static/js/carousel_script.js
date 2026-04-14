(function () {
    const carouselEl = document.querySelector("#projectsCarousel");
    if (!carouselEl) return;

    const inner = carouselEl.querySelector(".carousel-inner");
    const items = carouselEl.querySelectorAll(".carousel-item");
    if (!inner || items.length === 0) return;

    items[0].classList.add("active");

    const getCardWidth = () => {
        const firstItem = inner.querySelector(".carousel-item");
        return firstItem ? firstItem.getBoundingClientRect().width : 0;
    };

    let scrollPosition = 0;

    const next = carouselEl.querySelector(".carousel-control-next");
    const prev = carouselEl.querySelector(".carousel-control-prev");

    next && next.addEventListener("click", function () {
        const cardWidth = getCardWidth();
        const max = inner.scrollWidth - inner.clientWidth;
        if (scrollPosition < max) {
            scrollPosition = Math.min(scrollPosition + cardWidth, max);
            $(inner).animate({ scrollLeft: scrollPosition }, 500);
        }
    });

    prev && prev.addEventListener("click", function () {
        const cardWidth = getCardWidth();
        if (scrollPosition > 0) {
            scrollPosition = Math.max(scrollPosition - cardWidth, 0);
            $(inner).animate({ scrollLeft: scrollPosition }, 500);
        }
    });

    if (window.matchMedia("(min-width: 1100px)").matches) {
        new bootstrap.Carousel(carouselEl, { interval: false, wrap: false });
    } else {
        carouselEl.classList.add("slide");
    }
})();
