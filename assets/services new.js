// ======================================
// SERVICES PAGE INTERACTION SCRIPT
// ======================================

document.addEventListener("DOMContentLoaded", () => {

    // FAQ Accordion Toggle
    const faqItems = document.querySelectorAll(".faq-item");

    faqItems.forEach((item) => {
        const question = item.querySelector(".faq-question");
        if (question) {
            question.addEventListener("click", () => {
                const isActive = item.classList.contains("active");

                faqItems.forEach((otherItem) => {
                    otherItem.classList.remove("active");
                });

                if (!isActive) {
                    item.classList.add("active");
                }
            });
        }
    });

    // Before & After Interactive Image Slider
    const container = document.getElementById("comparison-container");
    const beforeImage = document.getElementById("before-image");
    const sliderLine = document.getElementById("slider-line");

    if (container && beforeImage && sliderLine) {
        let isDragging = false;

        const updateSlider = (clientX) => {
            const rect = container.getBoundingClientRect();
            let position = clientX - rect.left;

            if (position < 0) position = 0;
            if (position > rect.width) position = rect.width;

            const percentage = (position / rect.width) * 100;
            beforeImage.style.width = `${percentage}%`;
            sliderLine.style.left = `${percentage}%`;
        };

        container.addEventListener("mousedown", (e) => {
            isDragging = true;
            updateSlider(e.clientX);
        });

        window.addEventListener("mouseup", () => {
            isDragging = false;
        });

        container.addEventListener("mousemove", (e) => {
            if (!isDragging) return;
            updateSlider(e.clientX);
        });

        // Touch events for mobile compatibility
        container.addEventListener("touchstart", (e) => {
            isDragging = true;
            if (e.touches[0]) updateSlider(e.touches[0].clientX);
        });

        window.addEventListener("touchend", () => {
            isDragging = false;
        });

        container.addEventListener("touchmove", (e) => {
            if (!isDragging) return;
            if (e.touches[0]) updateSlider(e.touches[0].clientX);
        });
    }

});
