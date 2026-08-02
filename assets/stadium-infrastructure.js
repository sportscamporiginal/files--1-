/* ==========================================================
   SPORTS CAMP INFRA — STADIUM INFRASTRUCTURE SCRIPT
   ========================================================== */
document.addEventListener('DOMContentLoaded', () => {

  const svg = (path, vb='0 0 24 24') => `<svg viewBox="${vb}" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">${path}</svg>`;

  /* ---------------- WHY CHOOSE US DATA ---------------- */
  const WHY = [
    ['Turnkey Architectural & Civil Engineering', 'Master layout CAD designs, earthwork grading, concrete foundations & structural engineering.', '<path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5m0 0v-5a1 1 0 011-1h2a1 1 0 011 1v5"/>'],
    ['High-Lumen Broadcast Floodlighting', '500W-1000W anti-glare LED floodlight masts engineered for 1000+ LUX TV broadcast uniformity.', '<path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>'],
    ['Tensile Roof Canopies & Seating', 'High-tensile UV-resistant PVDF membrane grandstand roofs and ergonomic UV bucket seats.', '<path d="M12 21s-7-4.4-9-9a5.5 5.5 0 019.5-6A5.5 5.5 0 0121 9c-2 4.6-9 12-9 12z"/>'],
    ['FIFA & IAAF Approved Surfaces', 'High-density synthetic football turf, IAAF running tracks & multi-sport acrylic flooring under one roof.', '<path d="M12 2l3 7h7l-5.5 4.3L18.5 21 12 16.7 5.5 21l2-7.7L2 9h7z"/>'],
  ];

  document.getElementById('whyGrid').innerHTML = WHY.map(([t,d,icon],i) => `
    <div class="why-card fade-up" style="--d:${i*0.08}s">
      <div class="why-icon">${svg(icon)}</div>
      <h3>${t}</h3>
      <p>${d}</p>
    </div>`).join('');

  /* Mouse-follow glow effect */
  document.querySelectorAll('.why-card').forEach(card => {
    card.addEventListener('mousemove', e => {
      const r = card.getBoundingClientRect();
      card.style.setProperty('--mx', (e.clientX - r.left) + 'px');
      card.style.setProperty('--my', (e.clientY - r.top) + 'px');
    });
  });

  /* ---------------- PREMIUM FEATURES DATA ---------------- */
  const FEATURES = [
    ['High-Mast Stadium Floodlight Towers', 'Heavy-duty steel floodlight masts with anti-glare reflectors and digital lux control systems.', '<path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>'],
    ['Tensile Grandstand Canopies & VIP Boxes', 'All-weather PVDF architectural membranes protecting spectator grandstands from heat & rain.', '<path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5m0 0v-5a1 1 0 011-1h2a1 1 0 011 1v5"/>'],
    ['High-Density Spectator Bucket Seating', 'UV-stabilized polypropylene bucket seats with anti-fading color treatment for 10,000+ crowds.', '<circle cx="12" cy="8" r="4"/><path d="M4 21v-1a8 8 0 0116 0v1"/>'],
    ['Integrated Player Locker Rooms & Dugouts', 'Comfortable player dugouts, referee rooms & modern locker facility infrastructure.', '<rect x="3" y="6" width="18" height="12" rx="2"/><path d="M12 6v12M3 12h18"/>'],
    ['Digital Scoreboards & LED Perimeter Boards', 'High-brightness outdoor LED videoboards for live match scores, replays & sponsor ads.', '<rect x="4" y="4" width="16" height="16" rx="2"/><path d="M4 12h16"/>'],
    ['Perimeter Security Fencing & Gates', 'High-tensile MS chain-link fencing, spectator entry gates & crowd management turnstiles.', '<path d="M20 6L9 17l-5-5"/>'],
  ];

  document.getElementById('featuresList').innerHTML = FEATURES.map(([t,d,icon],i) => `
    <div class="feature-row fade-up" style="--d:${i*0.06}s">
      <div class="feature-icon">${svg(icon)}</div>
      <div>
        <h4>${t}</h4>
        <p>${d}</p>
      </div>
    </div>`).join('');

  /* ---------------- CONSTRUCTION PROCESS DATA ---------------- */
  const PROCESS = [
    ['Master CAD Layout & Land Survey', 'Site soil testing, 3D architectural master planning & stadium footprint zoning.', '<path d="M9 20l-5-2V6l5 2m0 12l6-2m-6 2V8m6 10l5 2V8l-5-2m0 14V6m0 2l-6-2"/>'],
    ['Earthworks & Deep Foundation Piles', 'Excavating stadium bowl, pouring RCC foundation piles & heavy drainage channels.', '<rect x="3" y="10" width="18" height="8" rx="1"/><path d="M7 10V6h10v4"/>'],
    ['Structural Steel Grandstand Framing', 'Fabricating heavy MS structural steel columns, beam girders & seating risers.', '<path d="M3 17l6-6 4 4 8-8"/><path d="M14 7h7v7"/>'],
    ['Tensile Roof Membrane Installation', 'Stretching high-tensile PVDF architectural membrane canopy over seating stands.', '<path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5m0 0v-5a1 1 0 011-1h2a1 1 0 011 1v5"/>'],
    ['High-Mast Floodlight Tower Erection', 'Erecting 18m-30m steel light poles & mounting 500W-1000W LED light arrays.', '<path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>'],
    ['Synthetic Turf & Track Surfacing', 'Laying FIFA turf / IAAF running track / acrylic court multi-sport surfaces.', '<path d="M4 20c8 0 14-6 14-14 0 0-14 0-14 14z"/>'],
    ['Spectator Bucket Seats & Digital Scoreboards', 'Mounting UV-treated spectator seats, player dugouts & digital video boards.', '<rect x="4" y="4" width="16" height="16" rx="2"/><path d="M4 12h16"/>'],
    ['Commissioning & Grand Stadium Opening', 'Lux level testing, safety load inspection & official stadium handover.', '<path d="M12 5v14M5 12h14"/>'],
  ];

  document.getElementById('processSteps').innerHTML = PROCESS.map(([t,d,icon],i) => `
    <div class="process-card">
      <span class="process-num">${String(i+1).padStart(2,'0')}</span>
      <div class="process-icon">${svg(icon)}</div>
      <h4>${t}</h4>
      <p>${d}</p>
    </div>`).join('');

  /* ---------------- TESTIMONIALS DATA ---------------- */
  const TESTIMONIALS = [
    ['Sports Camp Infra constructed our 5,000-seat multi-sport stadium complex seamlessly. The 1000 LUX floodlighting and tensile roof are world-class!', 'Er. Rajeshwar Rao', 'Infra Development', 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop'],
    ['From civil earthworks and drainage to installing FIFA synthetic turf and stadium seating, their project management was impeccable.', 'Vikram Singh Deo', 'Sports Association', 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200&auto=format&fit=crop'],
    ['Their high-mast floodlight towers and digital scoreboards transformed our university arena into an HD broadcast-ready stadium.', 'Dr. Sunita Deshmukh', 'Sports University', 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200&auto=format&fit=crop'],
  ];

  const starIcon = svg('<path d="M12 2l3 7h7l-5.5 4.3L18.5 21 12 16.7 5.5 21l2-7.7L2 9h7z" fill="currentColor" stroke="none"/>');
  document.getElementById('testiTrack').innerHTML = TESTIMONIALS.map(([quote,name,role,avatar]) => `
    <div class="testi-card">
      <div class="testi-card-inner">
        <div class="testi-stars">${starIcon.repeat(5)}</div>
        <p>&ldquo;${quote}&rdquo;</p>
        <div class="testi-person">
          <img class="testi-avatar" src="${avatar}" alt="${name}" loading="lazy">
          <div><strong>${name}</strong><span>${role}</span></div>
        </div>
      </div>
    </div>`).join('');
  document.getElementById('testiDots').innerHTML = TESTIMONIALS.map((_,i) => `<button class="testi-dot${i===0?' active':''}" data-i="${i}" aria-label="Show testimonial ${i+1}"></button>`).join('');

  const testiTrack = document.getElementById('testiTrack');
  const testiDots = document.querySelectorAll('.testi-dot');
  let testiIndex = 0;
  function goToTesti(i){
    testiIndex = i;
    testiTrack.style.transform = `translateX(-${i*100}%)`;
    testiDots.forEach(d => d.classList.toggle('active', +d.dataset.i === i));
  }
  testiDots.forEach(d => d.addEventListener('click', () => goToTesti(+d.dataset.i)));
  let testiTimer = setInterval(() => goToTesti((testiIndex+1) % TESTIMONIALS.length), 5500);
  document.getElementById('testiSlider').addEventListener('mouseenter', () => clearInterval(testiTimer));
  document.getElementById('testiSlider').addEventListener('mouseleave', () => { testiTimer = setInterval(() => goToTesti((testiIndex+1) % TESTIMONIALS.length), 5500); });

  /* ---------------- INDUSTRIES DATA ---------------- */
  const INDUSTRIES = [
    ['State Sports Councils','<path d="M12 2l3 7h7l-5.5 4.3L18.5 21 12 16.7 5.5 21l2-7.7L2 9h7z"/>'],
    ['Municipal Complexes','<path d="M3 21V9l9-6 9 6v12"/><path d="M9 21v-6h6v6"/>'],
    ['Universities & Academies','<path d="M22 10L12 5 2 10l10 5 10-5z"/><path d="M6 12v5c0 1.7 2.7 3 6 3s6-1.3 6-3v-5"/>'],
    ['Private Sports Arenas','<rect x="4" y="3" width="16" height="18" rx="1"/><path d="M9 21v-4h6v4M9 8h.01M15 8h.01M9 12h.01M15 12h.01"/>'],
    ['Defense Stadium Grounds','<path d="M3 11l9-8 9 8"/><path d="M5 10v10h14V10"/>'],
    ['Corporate Sports Hubs','<circle cx="12" cy="12" r="9"/><path d="M5.5 5.5l13 13M18.5 5.5l-13 13"/>'],
  ];

  document.getElementById('industriesGrid').innerHTML = INDUSTRIES.map(([name,icon],i) => `
    <div class="industry-chip fade-up" style="--d:${i*0.05}s">
      <div class="industry-icon">${svg(icon)}</div>
      <span>${name}</span>
    </div>`).join('');

  /* ---------------- FAQ DATA ---------------- */
  const FAQS = [
    ['What services are included in a turnkey stadium infrastructure project?', 'We provide complete end-to-end execution: architectural CAD planning, civil earthworks, high-mast LED floodlighting towers, tensile grandstand roofs, spectator bucket seating, synthetic sports surfaces, and digital scoreboards.'],
    ['What LUX level lighting do you install for night tournaments and TV broadcasts?', 'We design floodlighting systems from 300 LUX for practice grounds up to 1200+ LUX for HD television broadcast compatibility.'],
    ['How long does a turnkey multi-sport stadium construction take?', 'Depending on stadium capacity and seating size, construction typically takes between 60 days for a mini-stadium up to 120 days for a full-scale multi-sport arena.'],
    ['What materials are used for grandstand roofs and spectator seating?', 'We use high-tensile architectural PVDF membranes for roofs that resist UV and monsoon weather, and high-impact UV-stabilized polypropylene for spectator seats.'],
    ['Do you handle maintenance and AMC after stadium handover?', 'Yes! We offer annual maintenance contracts (AMC) covering turf re-grooming, floodlight fixture checks, and structural safety audits.']
  ];

  document.getElementById('faqList').innerHTML = FAQS.map(([q,a]) => `
    <div class="faq-item">
      <button class="faq-q" aria-expanded="false">${q}
        <span class="faq-q-icon">${svg('<path d="M12 5v14M5 12h14"/>')}</span>
      </button>
      <div class="faq-a"><p>${a}</p></div>
    </div>`).join('');

  document.querySelectorAll('.faq-item').forEach(item => {
    const q = item.querySelector('.faq-q');
    const a = item.querySelector('.faq-a');
    q.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');
      document.querySelectorAll('.faq-item.open').forEach(other => {
        other.classList.remove('open');
        other.querySelector('.faq-a').style.maxHeight = null;
        other.querySelector('.faq-q').setAttribute('aria-expanded','false');
      });
      if (!isOpen){
        item.classList.add('open');
        a.style.maxHeight = a.scrollHeight + 'px';
        q.setAttribute('aria-expanded','true');
      }
    });
  });

  /* ---------------- NAVBAR ---------------- */
  const nav = document.getElementById('nav');
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');
  window.addEventListener('scroll', () => nav.classList.toggle('scrolled', window.scrollY > 60));
  navToggle.addEventListener('click', () => {
    const open = navLinks.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', open);
  });
  navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => navLinks.classList.remove('open')));

  document.getElementById('scrollCue').addEventListener('click', () => {
    document.getElementById('about').scrollIntoView({ behavior:'smooth' });
  });

  /* ---------------- SCROLL PROGRESS BAR ---------------- */
  const progressBar = document.getElementById('progressBar');
  window.addEventListener('scroll', () => {
    const h = document.documentElement;
    const pct = h.scrollTop / (h.scrollHeight - h.clientHeight) * 100;
    progressBar.style.width = pct + '%';
  });

  /* ---------------- REVEAL ON SCROLL ---------------- */
  const io = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting){
        entry.target.classList.add('in-view');
        io.unobserve(entry.target);
      }
    });
  }, { threshold:0.15, rootMargin:'0px 0px -60px 0px' });
  document.querySelectorAll('.fade-up, .fade-left, .fade-right, .zoom-in').forEach(el => io.observe(el));

  /* ---------------- ANIMATED COUNTERS ---------------- */
  const counters = document.querySelectorAll('.stat-num');
  const counterIO = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const target = parseInt(el.dataset.target, 10);
      const suffix = el.dataset.suffix || '';
      let cur = 0;
      const step = Math.max(1, Math.floor(target/60));
      (function tick(){
        cur += step;
        if (cur >= target){ el.textContent = target + suffix; return; }
        el.textContent = cur + suffix;
        requestAnimationFrame(tick);
      })();
      counterIO.unobserve(el);
    });
  }, { threshold:0.5 });
  counters.forEach(c => counterIO.observe(c));

  /* ---------------- PROCESS SCROLL PROGRESS ---------------- */
  const processScroll = document.getElementById('processSteps');
  const processFill = document.getElementById('processLineFill');
  if (processScroll && processFill) {
    processScroll.addEventListener('scroll', () => {
      const pct = processScroll.scrollLeft / (processScroll.scrollWidth - processScroll.clientWidth) * 100;
      processFill.style.width = (isNaN(pct) ? 0 : pct) + '%';
    });
  }

  /* ---------------- BUTTON RIPPLE ---------------- */
  document.querySelectorAll('.ripple').forEach(btn => {
    btn.addEventListener('click', function(e){
      const r = this.getBoundingClientRect();
      const circle = document.createElement('span');
      const size = Math.max(r.width, r.height);
      circle.className = 'ripple-circle';
      circle.style.width = circle.style.height = size + 'px';
      circle.style.left = (e.clientX - r.left - size/2) + 'px';
      circle.style.top = (e.clientY - r.top - size/2) + 'px';
      this.appendChild(circle);
      setTimeout(() => circle.remove(), 650);
    });
  });

});
