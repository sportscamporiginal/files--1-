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
    BEFORE & AFTER SLIDER
=========================================*/

const comparisonContainer = document.getElementById("comparison-container");
const beforeImage = document.getElementById("before-image");
const sliderLine = document.getElementById("slider-line");

let isDragging = false;


//-----------------------------------------
// UPDATE SLIDER POSITION
//-----------------------------------------

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


//-----------------------------------------
// MOUSE EVENTS
//-----------------------------------------

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


    //-----------------------------------------
    // TOUCH EVENTS
    //-----------------------------------------

    comparisonContainer.addEventListener("touchstart", () => {
        isDragging = true;
    });

    window.addEventListener("touchend", () => {
        isDragging = false;
    });

    window.addEventListener("touchmove", (e) => {
        if (!isDragging) return;
        updateSlider(e.touches[0].clientX);
    });


    //-----------------------------------------
    // CLICK TO MOVE
    //-----------------------------------------

    comparisonContainer.addEventListener("click", (e) => {
        updateSlider(e.clientX);
    });
}


//-----------------------------------------
// INITIAL POSITION
//-----------------------------------------

window.addEventListener("load", () => {
    if (beforeImage && sliderLine) {
        beforeImage.style.width = "50%";
        sliderLine.style.left = "50%";
    }
});


//-----------------------------------------
// WINDOW RESIZE
//-----------------------------------------

window.addEventListener("resize", () => {
    if (beforeImage && sliderLine) {
        beforeImage.style.width = "50%";
        sliderLine.style.left = "50%";
    }
});

/*=========================================
            FAQ ACCORDION
=========================================*/

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach((item) => {
    const question = item.querySelector(".faq-question");

    if (question) {
        question.addEventListener("click", () => {
            const isActive = item.classList.contains("active");

            // Close all FAQs
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

            // Open selected FAQ
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


/*=========================================
        OPEN FIRST FAQ ON PAGE LOAD
=========================================*/

window.addEventListener("DOMContentLoaded", () => {
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
