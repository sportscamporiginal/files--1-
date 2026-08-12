// ======================================
// RUNNING TRACK PAGE INTERACTION SCRIPT
// ======================================

document.addEventListener("DOMContentLoaded", () => {

    // 1. Before & After Image Comparison Slider
    const container = document.getElementById("comparison-container");
    const beforeImage = document.getElementById("before-image");
    const sliderLine = document.getElementById("slider-line");

    if (container && beforeImage && sliderLine) {
        let isSliding = false;

        const updateSlider = (x) => {
            const rect = container.getBoundingClientRect();
            let offsetX = x - rect.left;

            if (offsetX < 0) offsetX = 0;
            if (offsetX > rect.width) offsetX = rect.width;

            const percentage = (offsetX / rect.width) * 100;
            beforeImage.style.width = `${percentage}%`;
            sliderLine.style.left = `${percentage}%`;
        };

        container.addEventListener("mousedown", (e) => {
            isSliding = true;
            updateSlider(e.clientX);
        });

        window.addEventListener("mousemove", (e) => {
            if (!isSliding) return;
            updateSlider(e.clientX);
        });

        window.addEventListener("mouseup", () => {
            isSliding = false;
        });

        // Touch events for mobile
        container.addEventListener("touchstart", (e) => {
            isSliding = true;
            updateSlider(e.touches[0].clientX);
        });

        window.addEventListener("touchmove", (e) => {
            if (!isSliding) return;
            updateSlider(e.touches[0].clientX);
        });

        window.addEventListener("touchend", () => {
            isSliding = false;
        });
    }

    // 2. FAQ Accordion Interaction
    const faqItems = document.querySelectorAll(".faq-item");

    faqItems.forEach((item) => {
        const question = item.querySelector(".faq-question");
        if (question) {
            question.addEventListener("click", () => {
                const isActive = item.classList.contains("active");

                faqItems.forEach((i) => i.classList.remove("active"));

                if (!isActive) {
                    item.classList.add("active");
                }
            });
        }
    });

});
