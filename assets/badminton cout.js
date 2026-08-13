// ======================================
// BADMINTON HERO & INTERACTION SCRIPT
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

            if (position >= 8) direction = -1;
            if (position <= 0) direction = 1;

            heroImage.style.transform = `translateY(${position}px)`;
        }, 20);
    }

    // =========================================
    // BEFORE & AFTER SLIDER
    // =========================================

    const container = document.getElementById("comparison-container");
    const before = document.getElementById("before-image");
    const slider = document.getElementById("slider-line");

    if (!container || !before || !slider) {
        console.warn("Before/After slider elements not found.");
        return;
    }

    let isDragging = false;

    function moveSlider(clientX) {
        const rect = container.getBoundingClientRect();

        if (!rect.width) return;

        let x = clientX - rect.left;
        x = Math.max(0, Math.min(x, rect.width));

        const percentage = (x / rect.width) * 100;

        before.style.width = percentage + "%";
        slider.style.left = percentage + "%";
    }

    // Mouse
    container.addEventListener("mousedown", (e) => {
        isDragging = true;
        moveSlider(e.clientX);
    });

    window.addEventListener("mousemove", (e) => {
        if (!isDragging) return;
        moveSlider(e.clientX);
    });

    window.addEventListener("mouseup", () => {
        isDragging = false;
    });

    // Touch / Mobile
    container.addEventListener("touchstart", (e) => {
        isDragging = true;
        moveSlider(e.touches[0].clientX);
    }, { passive: true });

    container.addEventListener("touchmove", (e) => {
        if (!isDragging) return;
        moveSlider(e.touches[0].clientX);
    }, { passive: true });

    window.addEventListener("touchend", () => {
        isDragging = false;
    });

    // Click to move
    container.addEventListener("click", (e) => {
        moveSlider(e.clientX);
    });

    // Initial position
    function resetSlider() {
        before.style.width = "50%";
        slider.style.left = "50%";
    }

    resetSlider();

    // FAQ Accordion
    const faqItems = document.querySelectorAll(".faq-item");

    faqItems.forEach((item) => {
        const question = item.querySelector(".faq-question");

        if (question) {
            question.addEventListener("click", () => {
                const isActive = item.classList.contains("active");

                faqItems.forEach((faq) => {
                    faq.classList.remove("active");
                    const ans = faq.querySelector(".faq-answer");
                    if (ans) ans.style.maxHeight = null;

                    const icon = faq.querySelector("i");
                    if (icon) {
                        icon.classList.remove("fa-minus");
                        icon.classList.add("fa-plus");
                    }
                });

                if (!isActive) {
                    item.classList.add("active");
                    const answer = item.querySelector(".faq-answer");
                    if (answer) answer.style.maxHeight = answer.scrollHeight + "px";

                    const icon = item.querySelector("i");
                    if (icon) {
                        icon.classList.remove("fa-plus");
                        icon.classList.add("fa-minus");
                    }
                }
            });
        }
    });

    // Open first active FAQ on page load
    const firstFAQ = document.querySelector(".faq-item.active");

    if (firstFAQ) {
        const answer = firstFAQ.querySelector(".faq-answer");
        if (answer) answer.style.maxHeight = answer.scrollHeight + "px";

        const icon = firstFAQ.querySelector("i");
        if (icon) {
            icon.classList.remove("fa-plus");
            icon.classList.add("fa-minus");
        }
    }
});
