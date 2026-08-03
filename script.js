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

  /* ---------------- LOADER ---------------- */
  const loader = document.getElementById('loader');
  const loaderFill = document.getElementById('loaderFill');
  const loaderPercent = document.getElementById('loaderPercent');
  let progress = 0;
  const loadInterval = setInterval(() => {
    progress += Math.random()*18 + 6;
    if (progress >= 100){
      progress = 100;
      clearInterval(loadInterval);
      setTimeout(() => {
        loader.classList.add('hide');
        document.documentElement.classList.remove('no-scroll');
        setTimeout(()=> loader.remove(), 900);
      }, 250);
    }
    loaderFill.style.width = progress + '%';
    loaderPercent.textContent = Math.floor(progress) + '%';
  }, 180);
  document.documentElement.classList.add('no-scroll');

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
