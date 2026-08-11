// ======================================
// KIDS PLAY AREA INTERACTION SCRIPT
// ======================================

document.addEventListener("DOMContentLoaded", () => {

    // Tab Switching Logic
    const tabButtons = document.querySelectorAll(".tab-btn");
    const tabPanes = document.querySelectorAll(".tab-pane");

    tabButtons.forEach((btn) => {
        btn.addEventListener("click", () => {
            const targetTab = btn.getAttribute("data-tab");

            tabButtons.forEach((b) => b.classList.remove("active"));
            tabPanes.forEach((pane) => pane.classList.remove("active"));

            btn.classList.add("active");
            const activePane = document.getElementById(targetTab);
            if (activePane) {
                activePane.classList.add("active");
            }
        });
    });

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

    // Before & After Image Slider
    const comparisonContainer = document.getElementById("comparison-container");
    const beforeImage = document.getElementById("before-image");
    const sliderLine = document.getElementById("slider-line");

    let isDragging = false;

    function updateSlider(x) {
        if (!comparisonContainer || !beforeImage || !sliderLine) return;
        const rect = comparisonContainer.getBoundingClientRect();
        let position = x - rect.left;

        if (position < 0) position = 0;
        if (position > rect.width) position = rect.width;

        const percentage = (position / rect.width) * 100;
        beforeImage.style.width = percentage + "%";
        sliderLine.style.left = percentage + "%";
    }

    if (comparisonContainer) {
        comparisonContainer.addEventListener("mousedown", () => {
            isDragging = true;
        });

        window.addEventListener("mouseup", () => {
            isDragging = false;
        });

        window.addEventListener("mousemove", (e) => {
            if (!isDragging) return;
            updateSlider(e.clientX);
        });

        comparisonContainer.addEventListener("touchstart", () => {
            isDragging = true;
        });

        window.addEventListener("touchend", () => {
            isDragging = false;
        });

        window.addEventListener("touchmove", (e) => {
            if (!isDragging) return;
            if (e.touches && e.touches[0]) {
                updateSlider(e.touches[0].clientX);
            }
        });
    }
});
