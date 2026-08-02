/* ==========================================================
   SPORTS CAMP INFRA — SYNTHETIC RUNNING TRACK SCRIPT
   ========================================================== */
document.addEventListener('DOMContentLoaded', () => {

  const svg = (path, vb='0 0 24 24') => `<svg viewBox="${vb}" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">${path}</svg>`;

  /* ---------------- WHY CHOOSE US DATA ---------------- */
  const WHY = [
    ['IAAF & World Athletics Certified', 'Compliant with international competition standards for energy return, friction & force reduction.', '<path d="M12 2l3 7h7l-5.5 4.3L18.5 21 12 16.7 5.5 21l2-7.7L2 9h7z"/>'],
    ['Spike-Resistant Virgin EPDM Surfacing', 'High-density 1-4mm EPDM granules poured with polyurethane binder to resist track spike damage.', '<path d="M20 6L9 17l-5-5"/>'],
    ['All-Weather Hydro-Drainage Sub-Base', 'Laser-graded slope and slot channel drainage clear heavy monsoon rain in minutes for uninterrupted training.', '<path d="M12 2v6M12 22v-6M4.9 4.9l4.2 4.2M14.9 14.9l4.2 4.2M2 12h6M16 12h6"/>'],
    ['Turnkey Stadium Track Setup', 'Complete execution from earthwork & asphalt paving to track surfacing, kerbs & 400m lane marking.', '<path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5m0 0v-5a1 1 0 011-1h2a1 1 0 011 1v5"/>'],
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
    ['Full PU Sandwich & Spray Coat Systems', '13mm-15mm multi-layer polyurethane system with SBR cushion pad and EPDM granule top layer.', '<rect x="3" y="6" width="18" height="12" rx="2"/><path d="M12 6v12M3 12h18"/>'],
    ['World Athletics Standard 400m & 200m Layouts', 'Precision 8-lane or 6-lane oval tracks engineered to exact IAAF radius specs.', '<circle cx="12" cy="12" r="9"/><path d="M5.5 5.5l13 13M18.5 5.5l-13 13"/>'],
    ['Superior Energy Return & Shock Absorption', '35%-45% force reduction to minimize runner joint fatigue & prevent shin splints.', '<path d="M12 21s-7-4.4-9-9a5.5 5.5 0 019.5-6A5.5 5.5 0 0121 9c-2 4.6-9 12-9 12z"/>'],
    ['All-Weather UV & Weather Resistance', 'Zero fading, cracking, or surface hardening under harsh Indian heat & UV radiation.', '<circle cx="12" cy="12" r="4"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M5 19l2-2M17 7l2-2"/>'],
    ['Precision Laser Thermal Lane Markings', 'World Athletics certified lane lines, start/finish lines, hurdle marks & relay zones.', '<rect x="4" y="4" width="16" height="16" rx="2"/><path d="M4 12h16"/>'],
    ['Slot Drainage & Concrete Perimeter Kerbs', 'Precast slotted concrete drainage channels for rapid water run-off around track edges.', '<path d="M3 17l6-6 4 4 8-8"/><path d="M14 7h7v7"/>'],
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
    ['Topography Survey & Radius Layout', 'Laser surveying 400m track geometry, curves, straights & drainage gradient.', '<path d="M9 20l-5-2V6l5 2m0 12l6-2m-6 2V8m6 10l5 2V8l-5-2m0 14V6m0 2l-6-2"/>'],
    ['Earthwork & Base Sub-Grade Prep', 'Excavating soil, laying crushed aggregate base, and heavy compaction testing.', '<rect x="3" y="10" width="18" height="8" rx="1"/><path d="M7 10V6h10v4"/>'],
    ['Hot-Mix Asphalt Paving', 'Hot-mix asphalt paving with 2-layer levelling for a perfectly smooth sub-base.', '<path d="M3 17l6-6 4 4 8-8"/><path d="M14 7h7v7"/>'],
    ['Concrete Kerb & Drainage Slot Channel', 'Installing precast concrete kerbs and slotted drainage channels along track borders.', '<path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5m0 0v-5a1 1 0 011-1h2a1 1 0 011 1v5"/>'],
    ['SBR Rubber Shock Pad Laying', 'Poured-in-place SBR rubber granules mixed with PU binder at 10mm-12mm thickness.', '<path d="M4 20c8 0 14-6 14-14 0 0-14 0-14 14z"/>'],
    ['Polyurethane Pore Sealer Application', 'Applying liquid PU sealer layer to completely seal SBR pad pores.', '<rect x="4" y="4" width="16" height="16" rx="2"/><path d="M4 12h16"/>'],
    ['EPDM Top Coat Spraying / Broadcast', 'Spraying or broadcasting 3mm virgin colored EPDM granules with liquid PU coating.', '<path d="M20 6L9 17l-5-5"/>'],
    ['Laser Lane Marking & Stadium Handover', 'Precision thermal painting of 8 lanes, relay zones & World Athletics certification.', '<path d="M12 5v14M5 12h14"/>'],
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
    ['Sports Camp Infra built our university’s 400m 8-lane IAAF track in record time. Athletes have recorded personal bests on this high energy-return surface!', 'Dr. Colonel R. S. Rathore', 'Arena', 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop'],
    ['The sandwich PU track system handles intense daily sprinting and spike shoes without any tearing or fading. Outstanding craftsmanship!', 'Coach Bikramjit Singh', 'Sports Academy', 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200&auto=format&fit=crop'],
    ['Flawless asphalt base slope and slot drainage system. Even during heavy monsoon rains, the track is ready for athletes within 15 minutes.', 'Sanjay Deshmukh', 'Sports Complex', 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop'],
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
    ['Sports Authority Stadiums','<path d="M12 2l3 7h7l-5.5 4.3L18.5 21 12 16.7 5.5 21l2-7.7L2 9h7z"/>'],
    ['Universities & Colleges','<path d="M22 10L12 5 2 10l10 5 10-5z"/><path d="M6 12v5c0 1.7 2.7 3 6 3s6-1.3 6-3v-5"/>'],
    ['Defense & Military Academies','<rect x="4" y="3" width="16" height="18" rx="1"/><path d="M9 21v-4h6v4M9 8h.01M15 8h.01M9 12h.01M15 12h.01"/>'],
    ['International Schools','<path d="M3 11l9-8 9 8"/><path d="M5 10v10h14V10"/>'],
    ['Police Training Academies','<circle cx="12" cy="12" r="9"/><path d="M5.5 5.5l13 13M18.5 5.5l-13 13"/>'],
    ['Corporate Sports Hubs','<path d="M3 21V9l9-6 9 6v12"/><path d="M9 21v-6h6v6"/>'],
  ];

  document.getElementById('industriesGrid').innerHTML = INDUSTRIES.map(([name,icon],i) => `
    <div class="industry-chip fade-up" style="--d:${i*0.05}s">
      <div class="industry-icon">${svg(icon)}</div>
      <span>${name}</span>
    </div>`).join('');

  /* ---------------- FAQ DATA ---------------- */
  const FAQS = [
    ['What are the main types of synthetic running track systems?', 'We install Full PU Poured Systems, Sandwich Systems, and Spray Coat Systems. Sandwich systems feature a poured SBR shock pad base with a PU/EPDM top coat, offering the best balance of cost and performance.'],
    ['What is the standard lifespan of an IAAF synthetic running track?', 'A professionally constructed synthetic running track lasts 15 to 20 years. Re-topping or spray re-coating can be done after 8-10 years to restore peak condition.'],
    ['Are your running tracks spike-resistant for competitive athletics?', 'Yes! Our EPDM granule top coat and PU binder are specifically formulation-tested to withstand up to 9mm athletic spike shoes without surface tearing.'],
    ['How long does a 400m 8-lane synthetic running track construction take?', 'A complete turnkey project from earthworks and asphalt paving to PU surfacing and lane marking takes approximately 45 to 60 days.'],
    ['Do you build steeplechase pits and field event jump runways?', 'Yes! We construct complete athletics complexes including long jump/triple jump runways, pole vault pits, high jump aprons, and steeplechase water jumps.']
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
