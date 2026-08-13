// ======================================
// PADEL HERO & INTERACTION SCRIPT
// ======================================

document.addEventListener("DOMContentLoaded", () => {

    // Page Loaded Class
    document.body.classList.add("page-loaded");


    // Hero Image Floating Animation
    const heroImage = document.querySelector(".hero-image img");

    if (heroImage) {
        let direction = 1;
        let position = 0;

        setInterval(() => {
            position += direction * 0.3;

            if (position >= 8) {
                direction = -1;
            }

            if (position <= 0) {
                direction = 1;
            }

            heroImage.style.transform = `translateY(${position}px)`;
        }, 20);
    }

});

/*=========================================
    BEFORE & AFTER SLIDER - FIXED
=========================================*/

document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("comparison-container");
    const before = document.getElementById("before-image");
    const line = document.getElementById("slider-line");

    if (!container || !before || !line) return;

    let dragging = false;

    // Keep the BEFORE image at the full container size and only clip it.
    const beforeImg = before.querySelector("img");

    function setPosition(clientX) {
        const rect = container.getBoundingClientRect();
        if (!rect.width) return;

        let x = clientX - rect.left;
        x = Math.max(0, Math.min(x, rect.width));
        const pct = (x / rect.width) * 100;

        before.style.width = "100%";
        before.style.clipPath = `inset(0 ${100 - pct}% 0 0)`;
        before.style.webkitClipPath = `inset(0 ${100 - pct}% 0 0)`;
        line.style.left = `${pct}%`;

        if (beforeImg) {
            beforeImg.style.width = `${rect.width}px`;
            beforeImg.style.maxWidth = "none";
            beforeImg.style.height = `${rect.height}px`;
        }
    }

    function start(clientX) {
        dragging = true;
        setPosition(clientX);
    }

    container.addEventListener("mousedown", e => {
        e.preventDefault();
        start(e.clientX);
    });

    window.addEventListener("mousemove", e => {
        if (dragging) setPosition(e.clientX);
    });

    window.addEventListener("mouseup", () => {
        dragging = false;
    });

    container.addEventListener("touchstart", e => {
        start(e.touches[0].clientX);
    }, { passive: true });

    container.addEventListener("touchmove", e => {
        if (dragging) setPosition(e.touches[0].clientX);
    }, { passive: true });

    window.addEventListener("touchend", () => {
        dragging = false;
    });

    container.addEventListener("click", e => {
        setPosition(e.clientX);
    });

    function reset() {
        requestAnimationFrame(() => {
            setPosition(container.getBoundingClientRect().left + container.getBoundingClientRect().width / 2);
        });
    }

    window.addEventListener("load", reset);
    window.addEventListener("resize", reset);
    reset();
});



