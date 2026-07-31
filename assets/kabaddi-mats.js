/* ==========================================================
   SPORTS CAMP INFRA — PRO KABADDI MATS SCRIPT
   ========================================================== */
document.addEventListener('DOMContentLoaded', () => {

  const svg = (path, vb='0 0 24 24') => `<svg viewBox="${vb}" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">${path}</svg>`;

  /* ---------------- WHY CHOOSE US DATA ---------------- */
  const WHY = [
    ['PKL-Approved High-Density EVA', '110kg/m³-120kg/m³ high-density EVA rubber formulation engineered for heavy tackles and high impact.', '<path d="M12 21s-7-4.4-9-9a5.5 5.5 0 019.5-6A5.5 5.5 0 0121 9c-2 4.6-9 12-9 12z"/>'],
    ['Waffle-Embossed Friction Grip', 'Anti-skid surface pattern provides maximum raider acceleration, toe grip, and zero slipping during turns.', '<path d="M20 6L9 17l-5-5"/>'],
    ['Interlocking Puzzle Teeth System', 'Precision CNC-cut puzzle teeth prevent mat separation, gaps, or tile displacement under extreme force.', '<rect x="3" y="6" width="18" height="12" rx="2"/><path d="M12 6v12M3 12h18"/>'],
    ['Turnkey Pan-India Delivery', 'Complete execution including sub-floor prep, interlocking mat installation, line markings, and arena lighting.', '<path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5m0 0v-5a1 1 0 011-1h2a1 1 0 011 1v5"/>'],
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
    ['Official PKL & AKFI Court Footprint', '13m x 10m (Men) or 12m x 8m (Women) court layout with 1m-2m safety clearance border zone.', '<rect x="3" y="6" width="18" height="12" rx="2"/><path d="M12 6v12M3 12h18"/>'],
    ['25mm to 35mm High-Impact Shock Cushion', 'Absorbs landing shock during tackles, protecting raiders’ knees, elbows, hips, and shoulders.', '<path d="M12 21s-7-4.4-9-9a5.5 5.5 0 019.5-6A5.5 5.5 0 0121 9c-2 4.6-9 12-9 12z"/>'],
    ['Non-Abrasive Micro-Textured Surface', 'Sweat-resistant, non-skid surface texture prevents skin friction burns during slides and dives.', '<path d="M4 20c8 0 14-6 14-14 0 0-14 0-14 14z"/>'],
    ['Thermal Baulk & Bonus Line Markings', 'Laser-aligned 50mm white/yellow boundary lines thermally fused into mat surface for permanent clarity.', '<rect x="4" y="4" width="16" height="16" rx="2"/><path d="M4 12h16"/>'],
    ['Modular Dual-Color Reversible Design', 'Reversible Red/Blue tiles allow custom court color layouts and clear boundary contrast.', '<circle cx="12" cy="12" r="4"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M5 19l2-2M17 7l2-2"/>'],
    ['Shock-Absorbing Perimeter Safety Padding', 'Beveled transition ramps and protective soft border padding to prevent tripping outside playing lines.', '<path d="M3 17l6-6 4 4 8-8"/><path d="M14 7h7v7"/>'],
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
    ['Sub-Floor Levelling & Inspection', 'Checking concrete levelling, slope drainage & moisture barrier membrane.', '<path d="M9 20l-5-2V6l5 2m0 12l6-2m-6 2V8m6 10l5 2V8l-5-2m0 14V6m0 2l-6-2"/>'],
    ['Protective Underlayment Rollout', 'Laying damp-proof membrane & soft foam underlayment for base protection.', '<rect x="3" y="10" width="18" height="8" rx="1"/><path d="M7 10V6h10v4"/>'],
    ['Interlocking Tile Grid Layout', 'Interlocking 25mm-35mm EVA mats starting from center court line with zero gap tolerances.', '<path d="M3 17l6-6 4 4 8-8"/><path d="M14 7h7v7"/>'],
    ['Edge Trimming & Wall Gap Sealing', 'Flush trimming perimeter borders with thermal expansion gap allowances.', '<path d="M4 20c8 0 14-6 14-14 0 0-14 0-14 14z"/>'],
    ['Baulk & Bonus Line Markings', 'Laser-guided thermal fusing of 50mm white baulk, bonus, and boundary court lines.', '<rect x="4" y="4" width="16" height="16" rx="2"/><path d="M4 12h16"/>'],
    ['Safety Ramp Border Assembly', 'Installing soft rubber beveled perimeter ramps and safety border padding.', '<path d="M12 21s-7-4.4-9-9a5.5 5.5 0 019.5-6A5.5 5.5 0 0121 9c-2 4.6-9 12-9 12z"/>'],
    ['Friction & Impact Absorption Test', 'Verifying mat interlocking stability, friction grip, and shock absorption.', '<path d="M20 6L9 17l-5-5"/>'],
    ['Arena Floodlighting Check & Handover', 'Floodlight lux verification & official PKL court handover.', '<path d="M12 5v14M5 12h14"/>'],
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
    ['Sports Camp Infra supplied 30mm PKL-approved Kabaddi mats for our state training center. The interlocking grip and cushion during tackles are top notch!', 'Balwinder Singh', 'Head Coach, State Kabaddi Academy', 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop'],
    ['Zero mat shifting or gap formation even during intense tackle sessions. Excellent quality EVA mats and prompt 4-day installation.', 'Inspector Vijay Kumar', 'Sports In-Charge, Police Sports Complex', 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200&auto=format&fit=crop'],
    ['The non-abrasive friction texture on these mats prevents skin burns while giving raiders incredible push-off traction!', 'Rakesh Deshmukh', 'Founder, Pro Kabaddi Training Hub', 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop'],
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
    ['Pro Kabaddi Arenas','<circle cx="12" cy="12" r="9"/><path d="M5.5 5.5l13 13M18.5 5.5l-13 13"/>'],
    ['Police & Military Grounds','<path d="M12 2l3 7h7l-5.5 4.3L18.5 21 12 16.7 5.5 21l2-7.7L2 9h7z"/>'],
    ['Schools & Universities','<path d="M22 10L12 5 2 10l10 5 10-5z"/><path d="M6 12v5c0 1.7 2.7 3 6 3s6-1.3 6-3v-5"/>'],
    ['Sports Clubs & Gymkhanas','<circle cx="12" cy="8" r="4"/><path d="M4 21v-1a8 8 0 0116 0v1"/>'],
    ['Municipal Indoor Arenas','<rect x="4" y="3" width="16" height="18" rx="1"/><path d="M9 21v-4h6v4M9 8h.01M15 8h.01M9 12h.01M15 12h.01"/>'],
    ['Community Recreation Centers','<path d="M3 11l9-8 9 8"/><path d="M5 10v10h14V10"/>'],
  ];

  document.getElementById('industriesGrid').innerHTML = INDUSTRIES.map(([name,icon],i) => `
    <div class="industry-chip fade-up" style="--d:${i*0.05}s">
      <div class="industry-icon">${svg(icon)}</div>
      <span>${name}</span>
    </div>`).join('');

  /* ---------------- FAQ DATA ---------------- */
  const FAQS = [
    ['What are the official court dimensions for Kabaddi mats according to AKFI & PKL standards?', 'Official Men’s court is 13m x 10m (42.6ft x 32.8ft); Women’s & Junior court is 12m x 8m (39.4ft x 26.2ft), plus a 1m-2m outer safety clearance zone.'],
    ['What mat thickness and density is recommended for Pro Kabaddi?', '25mm to 35mm thickness with a high density of 110kg/m³ to 120kg/m³ is recommended to absorb heavy tackle landings and prevent joint injuries.'],
    ['Do the interlocking mats shift or separate during high-intensity raids?', 'No. Our precision CNC puzzle-cut interlocking teeth lock tiles together tightly so they remain 100% stable without shifting or creating tripping gaps.'],
    ['Are the kabaddi mat surfaces safe against skin friction burns?', 'Yes! Our EVA mats feature a micro-embossed non-abrasive friction pattern that provides shoe grip without causing skin friction burns during slides.'],
    ['How long does a turnkey Kabaddi mat arena installation take?', 'A complete indoor Kabaddi court mat setup takes approximately 3 to 7 days once the concrete sub-floor is clean and ready.']
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
