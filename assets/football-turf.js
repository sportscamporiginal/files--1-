/* ==========================================================
   SPORTS CAMP INFRA — FOOTBALL TURF CONSTRUCTION — SCRIPT
   ========================================================== */
document.addEventListener('DOMContentLoaded', () => {

  const svg = (path, vb='0 0 24 24') => `<svg viewBox="${vb}" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">${path}</svg>`;

  /* ---------------- WHY CHOOSE US DATA ---------------- */
  const WHY = [
    ['Engineering-Led Design', 'Every turf system is designed around drainage, sub-base and site conditions before a blade of grass is laid.', '<path d="M12 2l3 7h7l-5.5 4.3L18.5 21 12 16.7 5.5 21l2-7.7L2 9h7z"/>'],
    ['Certified Materials', 'FIFA Quality Pro compatible yarns and shock pads sourced from certified global manufacturers.', '<path d="M20 6L9 17l-5-5"/>'],
    ['On-Time Delivery', 'Structured project management keeps every build on schedule, from mobilisation to handover.', '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3"/>'],
    ['Dedicated Aftercare', 'Maintenance plans and rapid-response support keep your turf performing for its full lifespan.', '<path d="M12 21s-7-4.4-9-9a5.5 5.5 0 019.5-6A5.5 5.5 0 0121 9c-2 4.6-9 12-9 12z"/>'],
  ];
  document.getElementById('whyGrid').innerHTML = WHY.map(([t,d,icon],i) => `
    <div class="why-card fade-up" style="--d:${i*0.08}s">
      <div class="why-icon">${svg(icon)}</div>
      <h3>${t}</h3>
      <p>${d}</p>
    </div>`).join('');

  /* mouse-follow glow on why-cards */
  document.querySelectorAll('.why-card').forEach(card => {
    card.addEventListener('mousemove', e => {
      const r = card.getBoundingClientRect();
      card.style.setProperty('--mx', (e.clientX - r.left) + 'px');
      card.style.setProperty('--my', (e.clientY - r.top) + 'px');
    });
  });

  /* ---------------- PREMIUM FEATURES DATA ---------------- */
  const FEATURES = [
    ['FIFA-Size Compatible Layouts', 'Full and half-size pitch layouts engineered to FIFA and AIFF dimension standards.', '<rect x="3" y="6" width="18" height="12" rx="2"/><path d="M12 6v12M3 12h18"/>'],
    ['Premium Artificial Grass', 'Monofilament yarn engineered for natural ball roll, grip and player comfort.', '<path d="M4 20c8 0 14-6 14-14 0 0-14 0-14 14z"/>'],
    ['Advanced Drainage System', 'Engineered sub-base and perforated piping clear heavy rainfall in minutes, not hours.', '<path d="M12 2v6M12 22v-6M4.9 4.9l4.2 4.2M14.9 14.9l4.2 4.2M2 12h6M16 12h6M4.9 19.1l4.2-4.2M14.9 9.1l4.2-4.2"/>'],
    ['Shock Pad Technology', 'Impact-absorbing underlay reduces player injury risk on every tackle and fall.', '<path d="M12 21s-7-4.4-9-9a5.5 5.5 0 019.5-6A5.5 5.5 0 0121 9c-2 4.6-9 12-9 12z"/>'],
    ['UV Protection', 'Stabilised fibres resist fading and degradation under intense Indian sun.', '<circle cx="12" cy="12" r="4"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M5 19l2-2M17 7l2-2"/>'],
    ['Weather &amp; Long-Life Rated', 'Built to perform through monsoon and summer alike, with a 10+ year lifespan.', '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3"/>'],
  ];
  document.getElementById('featuresList').innerHTML = FEATURES.map(([t,d,icon],i) => `
    <div class="feature-row fade-up" style="--d:${i*0.06}s">
      <div class="feature-icon">${svg(icon)}</div>
      <div>
        <h4>${t}</h4>
        <p>${d}</p>
      </div>
    </div>`).join('');

  /* ---------------- PROCESS DATA ---------------- */
  const PROCESS = [
    ['Site Survey', 'Soil testing, drainage assessment and dimension planning.', '<path d="M9 20l-5-2V6l5 2m0 12l6-2m-6 2V8m6 10l5 2V8l-5-2m0 14V6m0 2l-6-2"/>'],
    ['Design &amp; Approval', 'Engineering drawings and material specifications signed off.', '<path d="M3 17l6-6 4 4 8-8"/><path d="M14 7h7v7"/>'],
    ['Base Preparation', 'Excavation, grading and compaction of the sub-base layer.', '<rect x="3" y="10" width="18" height="8" rx="1"/><path d="M7 10V6h10v4"/>'],
    ['Drainage Installation', 'Perforated piping and aggregate layers laid for rapid runoff.', '<path d="M12 2v6M12 22v-6M2 12h6M16 12h6"/>'],
    ['Shock Pad &amp; Turf Laying', 'Shock pad rolled out, followed by precision turf installation.', '<path d="M4 20c8 0 14-6 14-14 0 0-14 0-14 14z"/>'],
    ['Infill &amp; Line Marking', 'Sand/rubber infill applied and pitch markings precisely set.', '<rect x="4" y="4" width="16" height="16" rx="2"/><path d="M4 12h16"/>'],
    ['Quality Inspection', 'Multi-point testing against FIFA and safety benchmarks.', '<path d="M20 6L9 17l-5-5"/>'],
    ['Handover &amp; Support', 'Documentation, orientation and ongoing maintenance plan.', '<path d="M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/>'],
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
    ['The drainage system Sports Camp Infra installed handled the entire monsoon without a single puddle. Genuinely world-class work.', 'Rohan Mehta', 'Sports Academy', 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200&auto=format&fit=crop'],
    ['Our players immediately noticed the difference in ball roll and footing. It plays like a professional pitch.', 'Anita Sharma', 'club', 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200&auto=format&fit=crop'],
    ['Transparent process, on-time delivery, and a maintenance team that actually responds. Highly recommended.', 'Vikram Rao', 'Sports Club', 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop'],
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
    ['Schools','<path d="M22 10L12 5 2 10l10 5 10-5z"/><path d="M6 12v5c0 1.7 2.7 3 6 3s6-1.3 6-3v-5"/>'],
    ['Colleges','<path d="M3 21V9l9-6 9 6v12"/><path d="M9 21v-6h6v6"/>'],
    ['Sports Academies','<path d="M12 2l3 7h7l-5.5 4.3L18.5 21 12 16.7 5.5 21l2-7.7L2 9h7z"/>'],
    ['Clubs','<circle cx="12" cy="8" r="4"/><path d="M4 21v-1a8 8 0 0116 0v1"/>'],
    ['Residential','<path d="M3 11l9-8 9 8"/><path d="M5 10v10h14V10"/>'],
    ['Commercial','<rect x="4" y="3" width="16" height="18" rx="1"/><path d="M9 21v-4h6v4M9 8h.01M15 8h.01M9 12h.01M15 12h.01"/>'],
  ];
  document.getElementById('industriesGrid').innerHTML = INDUSTRIES.map(([name,icon],i) => `
    <div class="industry-chip fade-up" style="--d:${i*0.05}s">
      <div class="industry-icon">${svg(icon)}</div>
      <span>${name}</span>
    </div>`).join('');

  /* ---------------- FAQ DATA ---------------- */
  const FAQS = [
    ['How long does football turf construction take?', 'A standard full-size turf ground typically takes 3&ndash;6 weeks from base preparation to handover, depending on site conditions and scope.'],
    ['Is the turf suitable for monsoon conditions?', 'Yes. Our engineered drainage systems are designed to clear heavy rainfall within minutes, keeping the pitch playable year-round.'],
    ['What is the expected lifespan of the turf?', 'With proper maintenance, our premium turf systems are rated for 8&ndash;10+ years of regular use.'],
    ['Do you provide maintenance after installation?', 'Every project includes a warranty period, and we offer ongoing maintenance contracts to keep your turf performing at its best.'],
    ['Can the layout be customised to my site?', 'Absolutely. We survey every site individually and design layouts around available space, sport requirements and budget.'],
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
  processScroll.addEventListener('scroll', () => {
    const pct = processScroll.scrollLeft / (processScroll.scrollWidth - processScroll.clientWidth) * 100;
    processFill.style.width = (isNaN(pct) ? 0 : pct) + '%';
  });

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
