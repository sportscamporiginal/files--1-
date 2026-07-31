/* ==========================================================
   SPORTS CAMP INFRA — BASKETBALL COURT CONSTRUCTION SCRIPT
   ========================================================== */
document.addEventListener('DOMContentLoaded', () => {

  const svg = (path, vb='0 0 24 24') => `<svg viewBox="${vb}" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">${path}</svg>`;

  /* ---------------- WHY CHOOSE US DATA ---------------- */
  const WHY = [
    ['FIBA-Standard Ball Rebound', 'Calibrated acrylic resin surface friction for realistic ball bounce and controlled dribble response.', '<circle cx="12" cy="12" r="9"/><path d="M5.5 5.5l13 13M18.5 5.5l-13 13"/>'],
    ['Joint-Safe Shock Absorption', '5, 7 & 8 coat cushioned underlay options that absorb impact during high-velocity landings and pivots.', '<path d="M12 21s-7-4.4-9-9a5.5 5.5 0 019.5-6A5.5 5.5 0 0121 9c-2 4.6-9 12-9 12z"/>'],
    ['Professional Hoops & Backboards', 'Heavy-duty galvanized steel poles, 12mm tempered glass backboards, and spring-loaded breakaway rims.', '<rect x="4" y="4" width="16" height="16" rx="2"/><circle cx="12" cy="14" r="3"/>'],
    ['Turnkey Execution & AMC', 'Complete project delivery including civil base, court surfacing, equipment installation, and maintenance support.', '<path d="M20 6L9 17l-5-5"/>'],
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
    ['FIBA Full & 3x3 Court Specifications', 'Engineered to official FIBA dimensions (28m x 15m full courts) and 3x3 half-court practice configurations.', '<rect x="3" y="6" width="18" height="12" rx="2"/><path d="M12 6v12M3 12h18"/>'],
    ['Cushioned Acrylic & Modular PP Options', 'Choice of multi-layer SBR rubber cushioned acrylic or high-impact UV-resistant interlocking PP tiles.', '<path d="M12 21s-7-4.4-9-9a5.5 5.5 0 019.5-6A5.5 5.5 0 0121 9c-2 4.6-9 12-9 12z"/>'],
    ['Anti-Skid Texture & Sure Traction', 'Specially graded silica sand aggregates provide non-slip foot grip during rapid cuts and acceleration.', '<path d="M4 20c8 0 14-6 14-14 0 0-14 0-14 14z"/>'],
    ['All-Weather Rain Runoff Drainage', 'Applied over 1% slope concrete or asphalt bases for rapid rain water discharge within minutes.', '<path d="M12 2v6M12 22v-6M4.9 4.9l4.2 4.2M14.9 14.9l4.2 4.2M2 12h6M16 12h6M4.9 19.1l4.2-4.2M14.9 9.1l4.2-4.2"/>'],
    ['Anti-Glare Thermal Line Marking', 'High-visibility white line paint bonded with acrylic binders for sharp, long-lasting court markings.', '<path d="M3 17l6-6 4 4 8-8"/><path d="M14 7h7v7"/>'],
    ['Stadium Floodlighting & Equipment', '200W-400W LED floodlight grid, pole protective padding, and height-adjustable rim systems.', '<path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>'],
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
    ['Site Survey & Dimension Layout', 'FIBA layout marking, slope grade check, and civil foundation engineering.', '<path d="M9 20l-5-2V6l5 2m0 12l6-2m-6 2V8m6 10l5 2V8l-5-2m0 14V6m0 2l-6-2"/>'],
    ['Civil Base Construction', 'Reinforced RCC concrete slab (with VDF finish) or asphalt sub-base laying.', '<rect x="3" y="10" width="18" height="8" rx="1"/><path d="M7 10V6h10v4"/>'],
    ['Surface Prep & Primer Coat', 'High-pressure wash, crack filling, and acrylic bonding primer coat application.', '<path d="M3 17l6-6 4 4 8-8"/><path d="M14 7h7v7"/>'],
    ['Cushion Layer Rollout', 'Application of 3-5 coats of liquid SBR micro-rubber cushion for knee protection.', '<path d="M12 21s-7-4.4-9-9a5.5 5.5 0 019.5-6A5.5 5.5 0 0121 9c-2 4.6-9 12-9 12z"/>'],
    ['Acrylic Color Base Coats', 'Dual coats of UV-stabilized pigmented acrylic wear coat with non-skid aggregate.', '<path d="M4 20c8 0 14-6 14-14 0 0-14 0-14 14z"/>'],
    ['Basketball Pole & Goal Fitting', 'Heavy-duty steel pole grouting, tempered glass backboard & breakaway rim mounting.', '<rect x="4" y="4" width="16" height="16" rx="2"/><circle cx="12" cy="14" r="3"/>'],
    ['FIBA Line Marking & Curing', 'Laser-aligned keyhole, 3-point arc & perimeter line painting.', '<path d="M12 5v14M5 12h14"/>'],
    ['Inspection & First Tip-Off', 'Ball rebound calibration, rim height check & official court handover.', '<path d="M20 6L9 17l-5-5"/>'],
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
    ['Sports Camp Infra built our school basketball court to FIBA standards. The cushion surface and tempered glass backboards are outstanding!', 'Fr. Thomas Joseph', 'Principal, St. Jude Higher Secondary School', 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop'],
    ['The grip on this court is fantastic. Our players can execute sharp cuts and jumps without any fear of slipping. Great work!', 'Sunil Deshmukh', 'Head Basketball Coach, City Sports Complex', 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200&auto=format&fit=crop'],
    ['End-to-end execution was completed within 3 weeks. The LED lights and pole padding added a professional tournament feel.', 'Pooja Agarwal', 'President, Green Acres Township', 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200&auto=format&fit=crop'],
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
    ['Schools & Universities','<path d="M22 10L12 5 2 10l10 5 10-5z"/><path d="M6 12v5c0 1.7 2.7 3 6 3s6-1.3 6-3v-5"/>'],
    ['Basketball Academies','<circle cx="12" cy="12" r="9"/><path d="M5.5 5.5l13 13M18.5 5.5l-13 13"/>'],
    ['Sports Clubs & Gymkhanas','<circle cx="12" cy="8" r="4"/><path d="M4 21v-1a8 8 0 0116 0v1"/>'],
    ['Residential Townships','<path d="M3 11l9-8 9 8"/><path d="M5 10v10h14V10"/>'],
    ['Government Sports Complexes','<path d="M3 21V9l9-6 9 6v12"/><path d="M9 21v-6h6v6"/>'],
    ['Corporate Facilities','<rect x="4" y="3" width="16" height="18" rx="1"/><path d="M9 21v-4h6v4M9 8h.01M15 8h.01M9 12h.01M15 12h.01"/>'],
  ];

  document.getElementById('industriesGrid').innerHTML = INDUSTRIES.map(([name,icon],i) => `
    <div class="industry-chip fade-up" style="--d:${i*0.05}s">
      <div class="industry-icon">${svg(icon)}</div>
      <span>${name}</span>
    </div>`).join('');

  /* ---------------- FAQ DATA ---------------- */
  const FAQS = [
    ['What are the standard dimensions for a Basketball court?', 'Full FIBA court dimensions are 28m x 15m (approx 91.8ft x 49.2ft) plus runoff borders. Half-court / 3x3 courts are typically 15m x 11m.'],
    ['What is the difference between Acrylic Cushioned Courts and Modular Interlocking Tiles?', 'Cushioned acrylic courts offer a continuous seamless surface painted over concrete with embedded rubber shock layers. Modular PP tiles are interlocking plastic tiles with grid drainage, ideal for quick installation and heavy weather resilience.'],
    ['Can an outdoor basketball court withstand monsoon and intense sun?', 'Yes! Our acrylic systems use 100% UV-stabilized resins, non-fading pigments, and anti-peeling binders designed for extreme Indian summers and heavy rainfall.'],
    ['How long does it take to construct a complete Basketball court?', 'Sub-base concrete curing and 5-8 coat acrylic surfacing typically takes 18 to 25 days from start to final line marking.'],
    ['Do you provide basketball poles, backboards, and lighting as a package?', 'Yes, we provide end-to-end turnkey packages including civil base, surfacing, heavy-duty poles, tempered glass backboards, padded breakaway rims, and LED floodlights.'],
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
