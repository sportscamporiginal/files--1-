/* ==========================================================
   SPORTS CAMP INFRA — COMMERCIAL INDOOR GYM EQUIPMENT SCRIPT
   ========================================================== */
document.addEventListener('DOMContentLoaded', () => {

  const svg = (path, vb='0 0 24 24') => `<svg viewBox="${vb}" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">${path}</svg>`;

  /* ---------------- WHY CHOOSE US DATA ---------------- */
  const WHY = [
    ['Heavy-Gauge Commercial Steel Frame', '3mm-4mm heavy-wall oval steel tubing built for extreme commercial weight loads and member usage.', '<rect x="3" y="6" width="18" height="12" rx="2"/><path d="M12 6v12M3 12h18"/>'],
    ['Smooth Biomechanical Cable Pulleys', 'Aircraft-grade 6mm steel cables & nylon pulleys for zero-friction, smooth exercise motion.', '<circle cx="12" cy="12" r="9"/><path d="M5.5 5.5l13 13M18.5 5.5l-13 13"/>'],
    ['Ergonomic Tear-Resistant PU Leather', 'High-density molded foam padding with double-stitched sweat-resistant PU leather upholstery.', '<path d="M4 20c8 0 14-6 14-14 0 0-14 0-14 14z"/>'],
    ['Turnkey Commercial Gym Delivery', 'Complete execution from 2D/3D CAD layout planning to rubber floor tiling, machine assembly & AMC support.', '<path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5m0 0v-5a1 1 0 011-1h2a1 1 0 011 1v5"/>'],
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
    ['Selectorized Pin-Loaded Strength Line', 'Chest press, lat pulldown, leg extension, prone leg curl, shoulder press & dual cable crossovers.', '<path d="M12 21s-7-4.4-9-9a5.5 5.5 0 019.5-6A5.5 5.5 0 0121 9c-2 4.6-9 12-9 12z"/>'],
    ['Heavy Plate-Loaded Racks & Cages', 'Olympic squat power racks, smith machines, 45-degree leg press & incline/flat/decline benches.', '<rect x="3" y="6" width="18" height="12" rx="2"/><path d="M12 6v12M3 12h18"/>'],
    ['Commercial High-Torque Cardio Line', 'High-HP commercial treadmills, elliptical cross trainers, upright bikes & spin bikes.', '<path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>'],
    ['CPU Precision Dumbbells & Racks', 'Urethane CPU dumbbells from 2.5kg to 50kg, chrome Olympic barbells & heavy storage trees.', '<circle cx="12" cy="12" r="4"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M5 19l2-2M17 7l2-2"/>'],
    ['High-Density Rubber Gym Flooring', '15mm-25mm shock-absorbing, noise-reducing interlocking rubber tiles for free weight zones.', '<path d="M4 20c8 0 14-6 14-14 0 0-14 0-14 14z"/>'],
    ['Custom Laser-Cut Gym Brand Branding', 'Custom frame powder-coating colors, seat upholstery colors & laser-cut gym logo shrouds.', '<rect x="4" y="4" width="16" height="16" rx="2"/><path d="M4 12h16"/>'],
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
    ['Site Measurement & 2D/3D CAD Layout', 'Measuring hall dimensions, power outlets & planning strength, cardio, and free weight zones.', '<path d="M9 20l-5-2V6l5 2m0 12l6-2m-6 2V8m6 10l5 2V8l-5-2m0 14V6m0 2l-6-2"/>'],
    ['Rubber Gym Flooring Tiling', 'Laying 15mm-25mm interlocking rubber floor tiles with precision zero-gap fitting.', '<rect x="3" y="10" width="18" height="8" rx="1"/><path d="M7 10V6h10v4"/>'],
    ['Equipment Delivery & Unpacking', 'Unboxing commercial strength frames, weight stacks, cardio machines & bench units.', '<path d="M3 17l6-6 4 4 8-8"/><path d="M14 7h7v7"/>'],
    ['Strength Machine Frame Assembly', 'Assembling heavy-gauge oval steel frames, weight stacks, guide rods & aircraft cables.', '<path d="M12 21s-7-4.4-9-9a5.5 5.5 0 019.5-6A5.5 5.5 0 0121 9c-2 4.6-9 12-9 12z"/>'],
    ['Power Rack Anchor Bolting', 'Anchoring squat cages & smith machines onto concrete sub-floor with heavy expansion bolts.', '<path d="M4 20c8 0 14-6 14-14 0 0-14 0-14 14z"/>'],
    ['Cardio Placement & Power Lines', 'Positioning treadmills, ellipticals & connecting dedicated AC power supply lines.', '<path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>'],
    ['Free Weight & Accessory Setup', 'Arranging CPU dumbbells, Olympic weight plates, barbells & dumbbell storage racks.', '<rect x="4" y="4" width="16" height="16" rx="2"/><path d="M4 12h16"/>'],
    ['Bio-Mechanical Inspection & Handover', 'Cable tension check, smooth pulley alignment test & grand opening handover.', '<path d="M12 5v14M5 12h14"/>'],
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
    ['Sports Camp Infra equipped our 5,000 sq ft commercial gym in 14 days. The strength machines move super smooth and members love the setup!', 'Vikramaditya Oberoi', 'Gym Chain', 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop'],
    ['Heavy-duty 4mm steel frames, tear-resistant leather, and customized logo plates. The best commercial gym supplier in India!', 'Ananya','Fitness Club', 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200&auto=format&fit=crop'],
    ['From 3D CAD layout planning to heavy rubber flooring and cardio treadmill installation, their execution was flawless.', 'Rohan Mehta', 'Spa', 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200&auto=format&fit=crop'],
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
    ['Commercial Gym Chains','<rect x="4" y="3" width="16" height="18" rx="1"/><path d="M9 21v-4h6v4M9 8h.01M15 8h.01M9 12h.01M15 12h.01"/>'],
    ['Luxury Hotels & Resorts','<path d="M3 21V9l9-6 9 6v12"/><path d="M9 21v-6h6v6"/>'],
    ['Corporate Wellness Hubs','<circle cx="12" cy="12" r="9"/><path d="M5.5 5.5l13 13M18.5 5.5l-13 13"/>'],
    ['Residential Gated RWAs','<path d="M3 11l9-8 9 8"/><path d="M5 10v10h14V10"/>'],
    ['Sports Academies & Hubs','<path d="M12 2l3 7h7l-5.5 4.3L18.5 21 12 16.7 5.5 21l2-7.7L2 9h7z"/>'],
    ['University Gymnasiums','<path d="M22 10L12 5 2 10l10 5 10-5z"/><path d="M6 12v5c0 1.7 2.7 3 6 3s6-1.3 6-3v-5"/>'],
  ];

  document.getElementById('industriesGrid').innerHTML = INDUSTRIES.map(([name,icon],i) => `
    <div class="industry-chip fade-up" style="--d:${i*0.05}s">
      <div class="industry-icon">${svg(icon)}</div>
      <span>${name}</span>
    </div>`).join('');

  /* ---------------- FAQ DATA ---------------- */
  const FAQS = [
    ['What thickness of steel frame is used in your commercial strength equipment?', 'We use heavy-gauge 3.0mm to 4.0mm thick oval and rectangular steel tubes engineered to handle heavy commercial gym member traffic.'],
    ['What warranty do you provide on commercial gym machinery?', 'We provide a 5-year frame warranty, 2-year pulley and cable warranty, and 1-year general commercial warranty with local AMC support.'],
    ['Do you provide 3D CAD layout designs before gym equipment installation?', 'Yes! Our team creates full 2D and 3D CAD floor plans showing strength zones, cardio areas, functional turf tracks, and mirror placements.'],
    ['Can custom color schemes and logo branding be added to strength machines?', 'Yes! We customize frame powder-coating colors, seat upholstery colors, and laser-cut your gym logo onto weight stack shrouds.'],
    ['How long does a complete commercial gym installation take?', 'A typical 3,000 to 10,000 sq ft commercial gym setup takes approximately 10 to 20 days including rubber flooring & machine assembly.']
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
