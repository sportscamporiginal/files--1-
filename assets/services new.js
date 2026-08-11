/*==========================================
SPORTCAMP INFRA
Main Script
==========================================*/

const header = document.querySelector(".header");
const menuBtn = document.querySelector(".menu-btn");
const navMenu = document.querySelector(".nav-menu");

/*==========================
Sticky Header
==========================*/

const isHomePage = document.body.classList.contains("home-page");

if (isHomePage) {

    window.addEventListener("scroll", () => {

        if (window.scrollY > 50) {
            header.classList.add("active");
        } else {
            header.classList.remove("active");
        }

    });

}

/*==========================
Premium Mobile Menu
==========================*/

if(menuBtn && navMenu){

    menuBtn.addEventListener("click",()=>{

        menuBtn.classList.toggle("active");

        navMenu.classList.toggle("active");

        document.body.classList.toggle("menu-open");

    });

}


/*==========================
Close Menu on Link Click
==========================*/

document.querySelectorAll(".nav-menu a").forEach(link=>{

    link.addEventListener("click",()=>{

        menuBtn.classList.remove("active");

        navMenu.classList.remove("active");

        document.body.classList.remove("menu-open");

    });

});


/*==========================
Close Menu on ESC
==========================*/

document.addEventListener("keydown",(e)=>{

    if(e.key==="Escape"){

        menuBtn.classList.remove("active");

        navMenu.classList.remove("active");

        document.body.classList.remove("menu-open");

    }

});


/*==========================
Close Menu on Resize
==========================*/

window.addEventListener("resize",()=>{

    if(window.innerWidth>991){

        menuBtn.classList.remove("active");

        navMenu.classList.remove("active");

        document.body.classList.remove("menu-open");

    }

});




/*==========================
Scroll Animation
==========================*/

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {
    threshold: 0.15
});


document.querySelectorAll(".fade-up,.zoom").forEach((el) => {

    observer.observe(el);

});


/*==========================
Active Navigation
==========================*/

const currentPage = window.location.pathname.split("/").pop();

document.querySelectorAll(".nav-menu a").forEach(link => {

    const href = link.getAttribute("href");

    if (href === currentPage || (currentPage === "" && href === "index.html")) {

        link.classList.add("active");

    }

});


console.log("SportCamp Infra Loaded Successfully 🚀");

const backTop = document.querySelector(".back-top");

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {

        backTop.classList.add("show");

    } else {

        backTop.classList.remove("show");

    }

});


/* FAQ */

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {

    const btn = item.querySelector(".faq-question");

    btn.addEventListener("click", () => {

        faqItems.forEach(other => {

            if (other !== item) {

                other.classList.remove("active");

            }

        });

        item.classList.toggle("active");

    });

});

/*=========================================
        GALLERY FILTER
=========================================*/

const filterButtons = document.querySelectorAll(".filter-btn");

filterButtons.forEach(button=>{

button.addEventListener("click",()=>{

filterButtons.forEach(btn=>btn.classList.remove("active"));

button.classList.add("active");

});

});


const galleryCards = document.querySelectorAll(".gallery-card img");

const lightbox = document.getElementById("galleryLightbox");

const lightboxImage = document.getElementById("lightboxImage");

const closeBtn = document.querySelector(".lightbox-close");

const prevBtn = document.querySelector(".lightbox-prev");

const nextBtn = document.querySelector(".lightbox-next");

let currentIndex = 0;

galleryCards.forEach((img,index)=>{

img.addEventListener("click",()=>{

currentIndex=index;

showImage();

});

});

function showImage(){

lightbox.classList.add("active");

lightboxImage.src=galleryCards[currentIndex].src;

}

closeBtn.onclick=()=>{

lightbox.classList.remove("active");

};

lightbox.onclick=(e)=>{

if(e.target===lightbox){

lightbox.classList.remove("active");

}

};

nextBtn.onclick=()=>{

currentIndex++;

if(currentIndex>=galleryCards.length){

currentIndex=0;

}

showImage();

};

prevBtn.onclick=()=>{

currentIndex--;

if(currentIndex<0){

currentIndex=galleryCards.length-1;

}

showImage();

};

document.addEventListener("keydown",(e)=>{

if(!lightbox.classList.contains("active")) return;

if(e.key==="Escape"){

lightbox.classList.remove("active");

}

if(e.key==="ArrowRight"){

nextBtn.click();

}

if(e.key==="ArrowLeft"){

prevBtn.click();

}

});

/*====================================
        FAQ ACCORDION
====================================*/

const faqQuestions = document.querySelectorAll(".faq-question");

faqQuestions.forEach(question => {

    question.addEventListener("click", () => {

        const currentItem = question.parentElement;

        // Close all other FAQs
        document.querySelectorAll(".faq-item").forEach(item => {
            if (item !== currentItem) {
                item.classList.remove("active");
            }
        });

        // Toggle current FAQ
        currentItem.classList.toggle("active");

    });

});
