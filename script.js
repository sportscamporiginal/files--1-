/* ==========================================================
   SPORTS CAMP INFRA — SCRIPT
   ========================================================== */
document.addEventListener('DOMContentLoaded', () => {

  /* ---------------- DATA: SERVICES ---------------- */
const SERVICES = [
  ['Football Turf','FIFA-grade synthetic turf engineered for grip and ball response.','ball'],
  ['Cricket Turf','Precision-laid cricket surfaces for pitch and outfield performance.','ball'],
  ['Acrylic Sports Flooring','Weatherproof acrylic systems for multi-sport outdoor courts.','court'],
  ['Basketball Court','Tournament-ready basketball courts to FIBA specification.','hoop'],
  ['Badminton Court','BWF-compliant surfaces with certified shock absorption.','shuttle'],
  ['Pickleball Court','Purpose-built pickleball courts with regulation markings.','court'],
  ['EPDM Flooring','Rubber granule flooring for playgrounds and running surfaces.','circle'],
  ['Gym Flooring','Heavy-duty rubber flooring engineered for weight training.','dumbbell'],
  ['Kids Play Area Flooring','Safety-tested soft-fall flooring for children&rsquo;s play zones.','heart'],
  ['Squash Court','Regulation glass-back squash courts to WSF standard.','square'],
  ['Table Tennis Hall','Dedicated halls with ITTF-approved playing surfaces.','table'],
  ['Kabaddi Mats','High-density mats designed for national kabaddi competitions.','mat'],
  ['Outdoor Gym Equipment','Weatherproof calisthenics stations for public fitness parks.','dumbbell'],
  ['Indoor Gym Equipment','Full fit-out of strength and cardio training equipment.','dumbbell'],
  ['Running Track','IAAF-certified synthetic tracks for athletics facilities.','track'],
  ['Stadium Infrastructure','End-to-end stadium seating, roofing and site works.','stadium'],
  
];

  const ICONS = {
    ball:'<circle cx="12" cy="12" r="9"/><path d="M12 3v6l5 3-2 6H9l-2-6 5-3z"/>',
    leaf:'<path d="M4 20c8 0 14-6 14-14 0 0-14 0-14 14z"/><path d="M4 20c0-6 3-9 9-11"/>',
    court:'<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M12 5v14M3 12h18"/>',
    sun:'<circle cx="12" cy="12" r="4"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M5 19l2-2M17 7l2-2"/>',
    hoop:'<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a13 13 0 010 18M12 3a13 13 0 000 18"/>',
    shuttle:'<path d="M12 3l2 6-8 8-3-3 8-8z"/><path d="M14 9l4-4"/>',
    circle:'<circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="3"/>',
    dumbbell:'<rect x="2" y="9" width="4" height="6" rx="1"/><rect x="18" y="9" width="4" height="6" rx="1"/><path d="M6 12h12"/>',
    heart:'<path d="M12 20s-7-4.35-9.5-9A5.5 5.5 0 0112 5a5.5 5.5 0 019.5 6C19 15.65 12 20 12 20z"/>',
    grid:'<rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/>',
    plank:'<rect x="3" y="7" width="18" height="10" rx="1"/><path d="M9 7v10M15 7v10"/>',
    square:'<rect x="4" y="4" width="16" height="16" rx="2"/>',
    table:'<rect x="3" y="10" width="18" height="4" rx="1"/><path d="M6 14v4M18 14v4"/>',
    mat:'<rect x="3" y="6" width="18" height="12" rx="3"/>',
    track:'<ellipse cx="12" cy="12" rx="9" ry="6"/><ellipse cx="12" cy="12" rx="5" ry="3"/>',
    bulb:'<path d="M9 18h6M10 21h4"/><path d="M12 3a6 6 0 00-3 11c.5.4 1 1.2 1 2h4c0-.8.5-1.6 1-2a6 6 0 00-3-11z"/>',
    stadium:'<ellipse cx="12" cy="12" rx="9" ry="5"/><path d="M3 12v3a9 3 0 0018 0v-3"/>',
    flag:'<path d="M5 3v18"/><path d="M5 4h13l-3 4 3 4H5z"/>',
  };

  const iconSVG = key => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">${ICONS[key]||ICONS.ball}</svg>`;

  const servicesGrid = document.getElementById('servicesGrid');
  if (servicesGrid){
    servicesGrid.innerHTML = SERVICES.map(([title,desc,icon]) => `
      <div class="service-card reveal-up tilt-card">
        <div class="service-icon">${iconSVG(icon)}</div>
        <h4>${title}</h4>
        <p>${desc}</p>
      </div>
    `).join('');
  }

  /* ---------------- DATA: SPORTS WE COVER ---------------- */
  const SPORTS = [
    ['Football','ball'],['Cricket','ball'],['Basketball','hoop'],['Badminton','shuttle'],
    ['Pickleball','court'],['Kabaddi','mat'],['Squash','square'],['Tennis','court'],
    ['Athletics','track'],['Gym','dumbbell'],['Kids Play Area','heart'],
  ];
  const sportsGrid = document.getElementById('sportsGrid');
  if (sportsGrid){
    sportsGrid.innerHTML = SPORTS.map(([name,icon]) => `
      <div class="sport-chip reveal-up">
        <div class="sport-icon">${iconSVG(icon)}</div>
        <span>${name}</span>
      </div>
    `).join('');
  }

  /* dupe marquee content for a seamless infinite loop */
  const marqueeTrack = document.getElementById('marqueeTrack');
  if (marqueeTrack){ marqueeTrack.innerHTML += marqueeTrack.innerHTML; }

  /* ---------------- SPORTS INFRASTRUCTURE LOADER ---------------- */

const loader = document.getElementById('loader');
const loaderFill = document.getElementById('loaderFill');
const loaderPercent = document.getElementById('loaderPercent');

document.documentElement.classList.add('no-scroll');


/* ===============================
   INFRASTRUCTURE LOADER DESIGN
   =============================== */

const loaderStyle = document.createElement('style');

loaderStyle.textContent = `

#loader {
    position: fixed !important;
    inset: 0 !important;
    z-index: 999999 !important;

    display: flex !important;
    align-items: center !important;
    justify-content: center !important;

    background:
        radial-gradient(
            circle at center,
            rgba(0,200,83,.10),
            transparent 35%
        ),
        linear-gradient(
            135deg,
            #050807,
            #09120d,
            #030504
        ) !important;

    overflow: hidden !important;

    opacity: 1;
    visibility: visible;

    transition:
        opacity .8s ease,
        visibility .8s ease !important;
}


/* Blueprint grid */

#loader::before {

    content: "";

    position: absolute;

    inset: 0;

    opacity: .18;

    background-image:
        linear-gradient(
            rgba(0,200,83,.12) 1px,
            transparent 1px
        ),
        linear-gradient(
            90deg,
            rgba(0,200,83,.12) 1px,
            transparent 1px
        );

    background-size: 40px 40px;

    mask-image:
        linear-gradient(
            to bottom,
            transparent,
            black 30%,
            black 70%,
            transparent
        );
}


/* Bottom infrastructure text */

#loader::after {

    content:
        "SPORTS INFRASTRUCTURE • COURTS • TURF • GYM • STADIUM";

    position: absolute;

    bottom: 30px;

    left: 50%;

    transform: translateX(-50%);

    font-size: 8px;

    letter-spacing: 2px;

    color: rgba(255,255,255,.32);

    white-space: nowrap;
}


/* Hide */

#loader.hide {

    opacity: 0 !important;

    visibility: hidden !important;

}


/* Main loader */

#loader .loader-inner {

    position: relative;

    z-index: 2;

    width: min(560px, 86vw);

    display: flex;

    flex-direction: column;

    align-items: center;

    text-align: center;

}


/* ===============================
   SPORTS COURT BLUEPRINT
   =============================== */

#loader .loader-blueprint {

    position: relative;

    width: min(420px, 78vw);

    height: 190px;

    margin-bottom: 28px;

    border:

        1px solid
        rgba(0,200,83,.25);

    border-radius: 8px;

    background:

        rgba(0,200,83,.025);

    box-shadow:

        0 0 45px
        rgba(0,200,83,.08),

        inset 0 0 35px
        rgba(0,200,83,.025);

    overflow: hidden;

}


/* Court outer boundary */

#loader .loader-blueprint::before {

    content: "";

    position: absolute;

    left: 10%;

    right: 10%;

    top: 14%;

    bottom: 14%;

    border:

        2px solid
        rgba(255,255,255,.75);

    border-radius: 3px;

}


/* Centre line */

#loader .loader-blueprint::after {

    content: "";

    position: absolute;

    top: 14%;

    bottom: 14%;

    left: 50%;

    width: 2px;

    background:

        rgba(255,255,255,.7);

    transform:

        translateX(-50%);

}


/* Animated construction lines */

#loader .infra-line {

    position: absolute;

    background:

        #00c853;

    box-shadow:

        0 0 12px
        rgba(0,230,118,.6);

    animation:

        infraDraw
        1.8s
        ease-in-out
        infinite;

}


/* Top */

#loader .infra-line.one {

    left: 10%;

    top: 14%;

    width: 80%;

    height: 2px;

}


/* Bottom */

#loader .infra-line.two {

    left: 10%;

    bottom: 14%;

    width: 80%;

    height: 2px;

    animation-delay: .3s;

}


/* Left */

#loader .infra-line.three {

    left: 10%;

    top: 14%;

    width: 2px;

    height: 72%;

    animation-delay: .6s;

}


/* Right */

#loader .infra-line.four {

    right: 10%;

    top: 14%;

    width: 2px;

    height: 72%;

    animation-delay: .9s;

}


/* Centre circle */

#loader .infra-center {

    position: absolute;

    left: 50%;

    top: 50%;

    width: 50px;

    height: 50px;

    border:

        1px solid
        rgba(0,200,83,.7);

    border-radius: 50%;

    transform:

        translate(-50%,-50%);

    box-shadow:

        0 0 20px
        rgba(0,200,83,.15);

}


/* Brand */

#loader .loader-word {

    display: flex;

    align-items: center;

    gap: 8px;

    font-family:
        Arial,
        Helvetica,
        sans-serif;

    font-size: 32px;

    font-weight: 900;

    letter-spacing: 1px;

    margin-bottom: 10px;

}


#loader .loader-word
.loader-accent {

    color: #00c853;

}


/* Tagline */

#loader .loader-tagline {

    font-family:
        Arial,
        Helvetica,
        sans-serif;

    font-size: 10px;

    font-weight: 700;

    letter-spacing: 3px;

    color:

        rgba(255,255,255,.5);

    margin-bottom: 25px;

    text-transform: uppercase;

}


/* Progress */

#loader .loader-bar-track {

    width:

        min(430px,78vw);

    height: 4px;

    border-radius: 100px;

    background:

        rgba(255,255,255,.12);

    overflow: hidden;

}


#loader .loader-bar-fill {

    width: 0;

    height: 100%;

    border-radius: 100px;

    background:

        linear-gradient(
            90deg,
            #00a844,
            #00e676
        );

    box-shadow:

        0 0 14px
        rgba(0,230,118,.5);

    transition:

        width .06s linear;

}


/* Percentage */

#loader .loader-percent {

    margin-top: 11px;

    font-family:
        Arial,
        Helvetica,
        sans-serif;

    font-size: 10px;

    font-weight: 700;

    letter-spacing: 2px;

    color:

        rgba(255,255,255,.6);

}


/* Animation */

@keyframes infraDraw {

    0%,
    100% {

        opacity: .35;

        transform: scaleX(.65);

    }

    50% {

        opacity: 1;

        transform: scaleX(1);

    }

}


/* Mobile */

@media (max-width:480px) {

    #loader .loader-blueprint {

        width: 84vw;

        height: 145px;

    }


    #loader .loader-word {

        font-size: 22px;

    }


    #loader .loader-tagline {

        font-size: 8px;

        letter-spacing: 2px;

    }


    #loader::after {

        font-size: 6px;

        letter-spacing: 1.5px;

    }

}

`;

document.head.appendChild(loaderStyle);


/* ===============================
   CREATE BLUEPRINT
   =============================== */

const blueprint =
    document.createElement('div');

blueprint.className =
    'loader-blueprint';

blueprint.innerHTML = `

    <span class="infra-line one"></span>

    <span class="infra-line two"></span>

    <span class="infra-line three"></span>

    <span class="infra-line four"></span>

    <span class="infra-center"></span>

`;


const loaderInner =
    loader.querySelector(
        '.loader-inner'
    );


if (loaderInner) {

    /* Remove football */

    const oldBall =
        loaderInner.querySelector(
            '.loader-ball'
        );

    if (oldBall) {

        oldBall.remove();

    }


    /* Add blueprint */

    const oldWord =
        loaderInner.querySelector(
            '.loader-word'
        );

    loaderInner.insertBefore(
        blueprint,
        oldWord || loaderInner.firstChild
    );


    /* Add tagline */

    if (
        !loaderInner.querySelector(
            '.loader-tagline'
        )
    ) {

        const tagline =
            document.createElement('div');

        tagline.className =
            'loader-tagline';

        tagline.textContent =
            'BUILDING SPORTS SPACES';

        if (oldWord) {

            oldWord.insertAdjacentElement(
                'afterend',
                tagline
            );

        }

    }

}


/* ===============================
   SMOOTH PROGRESS
   =============================== */

let progress = 0;

const loadInterval =
    setInterval(() => {

        progress += 2;


        if (progress >= 100) {

            progress = 100;

            clearInterval(
                loadInterval
            );

            loaderFill.style.width =
                '100%';

            loaderPercent.textContent =
                '100%';


            /* Stay at 100% */

            setTimeout(() => {

                loader.classList.add(
                    'hide'
                );

                document.documentElement
                    .classList
                    .remove(
                        'no-scroll'
                    );


                setTimeout(() => {

                    loader.remove();

                    loaderStyle.remove();

                }, 900);

            }, 750);

        }


        loaderFill.style.width =
            progress + '%';

        loaderPercent.textContent =
            progress + '%';


    }, 60);

  /* ---------------- NAVBAR ---------------- */
  const navbar = document.getElementById('navbar');
  const navBurger = document.getElementById('navBurger');
  const navMenu = document.getElementById('navMenu');
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 60);
  });
  navBurger?.addEventListener('click', () => {
    navMenu.classList.toggle('open');
    navBurger.classList.toggle('active');
  });
  navMenu?.querySelectorAll('a').forEach(a => a.addEventListener('click', () => navMenu.classList.remove('open')));

  /* ---------------- SCROLL PROGRESS BAR ---------------- */
  const scrollProgress = document.getElementById('scrollProgress');
  window.addEventListener('scroll', () => {
    const h = document.documentElement;
    const pct = (h.scrollTop) / (h.scrollHeight - h.clientHeight) * 100;
    scrollProgress.style.width = pct + '%';
  });

  /* ---------------- CUSTOM CURSOR ---------------- */
  const cursorDot = document.getElementById('cursorDot');
  const cursorRing = document.getElementById('cursorRing');
  let mx=0,my=0, rx=0, ry=0;
  window.addEventListener('mousemove', e => { mx=e.clientX; my=e.clientY; cursorDot.style.transform = `translate(${mx}px,${my}px) translate(-50%,-50%)`; });
  (function ringLoop(){
    rx += (mx-rx)*0.15; ry += (my-ry)*0.15;
    cursorRing.style.transform = `translate(${rx}px,${ry}px) translate(-50%,-50%)`;
    requestAnimationFrame(ringLoop);
  })();
  document.querySelectorAll('a,button,.tilt-card').forEach(el => {
    el.addEventListener('mouseenter', () => cursorRing.classList.add('hovered'));
    el.addEventListener('mouseleave', () => cursorRing.classList.remove('hovered'));
  });

  /* ---------------- MAGNETIC BUTTONS ---------------- */
  document.querySelectorAll('.magnetic').forEach(btn => {
    btn.addEventListener('mousemove', e => {
      const r = btn.getBoundingClientRect();
      const x = e.clientX - r.left - r.width/2;
      const y = e.clientY - r.top - r.height/2;
      btn.style.transform = `translate(${x*0.25}px, ${y*0.35}px)`;
    });
    btn.addEventListener('mouseleave', () => { btn.style.transform = 'translate(0,0)'; });
  });

  /* ---------------- HERO PARALLAX (mouse) ---------------- */
  const heroContent = document.getElementById('heroContent');
  const heroSection = document.querySelector('.hero');
  heroSection?.addEventListener('mousemove', e => {
    const x = (e.clientX / window.innerWidth - 0.5) * 20;
    const y = (e.clientY / window.innerHeight - 0.5) * 14;
    heroContent.style.transform = `translate(${x}px, ${y}px)`;
  });

  /* ---------------- HERO PARTICLES (canvas) ---------------- */
  const canvas = document.getElementById('particleCanvas');
  if (canvas){
    const ctx = canvas.getContext('2d');
    let particles = [];
    function resize(){
      canvas.width = heroSection.offsetWidth;
      canvas.height = heroSection.offsetHeight;
    }
    function initParticles(){
      const count = window.innerWidth < 700 ? 26 : 55;
      particles = Array.from({length:count}, () => ({
        x: Math.random()*canvas.width,
        y: Math.random()*canvas.height,
        r: Math.random()*1.8 + 0.6,
        vy: Math.random()*0.4 + 0.15,
        o: Math.random()*0.5 + 0.15,
      }));
    }
    function draw(){
      ctx.clearRect(0,0,canvas.width,canvas.height);
      particles.forEach(p => {
        p.y -= p.vy;
        if (p.y < -10) p.y = canvas.height + 10;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI*2);
        ctx.fillStyle = `rgba(255,255,255,${p.o})`;
        ctx.fill();
      });
      requestAnimationFrame(draw);
    }
    resize(); initParticles(); draw();
    window.addEventListener('resize', () => { resize(); initParticles(); });
  }

  /* ---------------- REVEAL ON SCROLL ---------------- */
  const revealTargets = document.querySelectorAll('.reveal-up, .reveal-scale, .draw-line');
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting){
        entry.target.classList.add('in-view');
        io.unobserve(entry.target);
      }
    });
  }, { threshold:0.15, rootMargin:'0px 0px -60px 0px' });
  revealTargets.forEach(el => io.observe(el));

  /* ---------------- ANIMATED COUNTERS ---------------- */
  const counters = document.querySelectorAll('.trust-number');
  const counterIO = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const target = parseInt(el.dataset.target, 10);
      let cur = 0;
      const step = Math.max(1, Math.floor(target/60));
      const tick = () => {
        cur += step;
        if (cur >= target){ el.textContent = target; return; }
        el.textContent = cur;
        requestAnimationFrame(tick);
      };
      tick();
      counterIO.unobserve(el);
    });
  }, { threshold:0.5 });
  counters.forEach(c => counterIO.observe(c));

  /* ---------------- SERVICE CARD TILT ---------------- */
  document.addEventListener('mousemove', (e) => {
    const card = e.target.closest?.('.tilt-card');
    document.querySelectorAll('.tilt-card').forEach(c => {
      if (c !== card){ c.style.transform=''; }
    });
    if (!card) return;
    const r = card.getBoundingClientRect();
    const px = (e.clientX - r.left)/r.width - 0.5;
    const py = (e.clientY - r.top)/r.height - 0.5;
    card.style.transform = `perspective(600px) rotateX(${py*-8}deg) rotateY(${px*10}deg) translateY(-4px)`;
  });

  /* ---------------- PROCESS HORIZONTAL PROGRESS ---------------- */
  const processTrack = document.getElementById('processTrack');
  const processFill = document.getElementById('processFill');
  processTrack?.addEventListener('scroll', () => {
    const pct = processTrack.scrollLeft / (processTrack.scrollWidth - processTrack.clientWidth) * 100;
    processFill.style.width = (isNaN(pct)?0:pct) + '%';
  });

  /* ---------------- FAQ ACCORDION ---------------- */
  document.querySelectorAll('.faq-item').forEach(item => {
    const q = item.querySelector('.faq-question');
    const a = item.querySelector('.faq-answer');
    q.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');
      document.querySelectorAll('.faq-item.open').forEach(other => {
        other.classList.remove('open');
        other.querySelector('.faq-answer').style.maxHeight = null;
      });
      if (!isOpen){
        item.classList.add('open');
        a.style.maxHeight = a.scrollHeight + 'px';
      }
    });
  });

});

/* Scroll Progress */

const progressBar = document.querySelector(".scroll-progress");

window.addEventListener("scroll", () => {

    const scrollTop = window.scrollY;

    const pageHeight =
        document.documentElement.scrollHeight -
        window.innerHeight;

    const progress =
        (scrollTop / pageHeight) * 100;

    progressBar.style.width = progress + "%";

});
/* ================= Counter Animation ================= */

const counters = document.querySelectorAll(".counter");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if(!entry.isIntersecting) return;

        const counter = entry.target;

        const target = +counter.dataset.target;

        let current = 0;

        const increment = Math.ceil(target / 80);

        const update = () => {

            current += increment;

            if(current >= target){

                counter.innerText = target;

                if(target === 100){
                    counter.innerText += "%";
                }else{
                    counter.innerText += "+";
                }

            }else{

                counter.innerText = current;

                requestAnimationFrame(update);

            }

        };

        update();

        observer.unobserve(counter);

    });

},{
    threshold:0.6
});

counters.forEach(counter=>observer.observe(counter));
/* ================= Cursor Glow ================= */

const glow = document.querySelector(".cursor-glow");

if (glow) {
  document.addEventListener("mousemove", (e) => {
    glow.style.left = e.clientX + "px";
    glow.style.top = e.clientY + "px";
  });
}
/* ================= Lightbox ================= */

const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");

if (lightbox && lightboxImg) {

    document.querySelectorAll(".project-image img").forEach(img => {

        img.addEventListener("click", () => {

            lightbox.classList.add("active");
            lightboxImg.src = img.src;

        });

    });

    lightbox.addEventListener("click", () => {

        lightbox.classList.remove("active");

    });

}
/* ================= Testimonials ================= */

const testimonials=document.querySelectorAll(".testimonial-card");

let currentTestimonial=0;

setInterval(()=>{

testimonials[currentTestimonial].classList.remove("active");

currentTestimonial++;

if(currentTestimonial>=testimonials.length){

currentTestimonial=0;

}

testimonials[currentTestimonial].classList.add("active");

},4000);
/* ================= Project Filter ================= */

const filterButtons = document.querySelectorAll(".filter-btn");
const projectCards = document.querySelectorAll(".project-card");

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        filterButtons.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");

        const filter = button.dataset.filter;

        projectCards.forEach(card => {

            if(filter === "all" || card.dataset.category === filter){

                card.style.display = "block";

            }else{

                card.style.display = "none";

            }

        });

    });

});
/* ================= PRELOADER ================= */

window.addEventListener("load",()=>{

    window.addEventListener("load", () => {

    const preloader = document.getElementById("preloader");

    if (preloader) {
        preloader.classList.add("hide");
    }

});

});
/* ================= EMAILJS CONTACT FORM ================= */

const contactForm = document.getElementById("contactForm");

if (contactForm) {

  contactForm.addEventListener("submit", function (e) {

    e.preventDefault();

    const submitBtn = document.getElementById("submitBtn");

    submitBtn.disabled = true;
    submitBtn.innerText = "Sending...";

    emailjs.send(
      "service_aj6fjq3",
      "template_47pn2cn",
      {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        service: document.getElementById("service").value,
        message: document.getElementById("message").value,
      }
    )

    .then(() => {

      alert("✅ Thank you! Your inquiry has been sent successfully.");

      contactForm.reset();

      submitBtn.disabled = false;
      submitBtn.innerText = "Send Inquiry";

    })

    .catch((error) => {

      console.error(error);

      alert("❌ Failed to send inquiry. Please try again.");

      submitBtn.disabled = false;
      submitBtn.innerText = "Send Inquiry";

    });

  });

}
console.log("EMAILJS CODE LOADED");

servicesGrid.addEventListener("click", function(e){

    const card = e.target.closest(".service-card");
    if(!card) return;

    const title = card.querySelector("h4").innerText;

    const pages = {
        "Football Turf": "assets/football-turf.html",
        "Cricket Turf": "assets/cricket-turf.html",
        "Artificial Grass": "assets/artificial-grass.html",
        "Acrylic Sports Flooring": "assets/acrylic-sports-flooring.html",
        "Indoor Acrylic Flooring": "assets/indoor-acrylic-flooring.html",
        "Outdoor Acrylic Flooring": "assets/outdoor-acrylic-flooring.html",
        "Basketball Court": "assets/basketball-court.html",
        "Badminton Court": "assets/badminton-court.html",
        "Pickleball Court": "assets/pickleball-court.html",
        "EPDM Flooring": "assets/epdm-flooring.html",
        "Gym Flooring": "assets/gym-flooring.html",
        "Kids Play Area Flooring": "assets/kids-play-area-flooring.html",
        "Multi Purpose Flooring": "assets/multi-purpose-flooring.html",
        "Wooden Flooring": "assets/wooden-flooring.html",
        "Basketball Wooden Court": "assets/basketball-wooden-court.html",
        "Squash Court": "assets/squash-court.html",
        "Table Tennis Hall": "assets/table-tennis-hall.html",
        "Kabaddi Mats": "assets/kabaddi-mats.html",
        "Sports Mats": "assets/sports-mats.html",
        "Outdoor Gym Equipment": "assets/outdoor-gym-equipment.html",
        "Indoor Gym Equipment": "assets/indoor-gym-equipment.html",
        "Running Track": "assets/running-track.html",
        "Sports Lighting": "assets/sports-lighting.html",
        "Stadium Infrastructure": "assets/stadium-infrastructure.html",
        "Turnkey Sports Projects": "assets/turnkey-sports-projects.html"
    };

    if(pages[title]){
        window.location.href = pages[title];
    }

});
