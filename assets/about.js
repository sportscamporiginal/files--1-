/* ==========================================================
   SPORTS CAMP INFRA — ABOUT US — SCRIPT
   ========================================================== */
document.addEventListener('DOMContentLoaded', () => {

  const svg = (path) => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">${path}</svg>`;

  /* ---------------- OFFERINGS DATA ---------------- */
  const OFFERINGS = [
    ['Sports Flooring', 'Synthetic acrylic, PVC courts, wooden flooring, artificial grass, kabaddi mats and gym rubber flooring.', '<rect x="3" y="6" width="18" height="12" rx="2"/><path d="M12 6v12M3 12h18"/>'],
    ['Sports Nets', 'Cage nets, cricket practice nets and sport-specific nets for badminton, football, volleyball and more.', '<path d="M4 4h16v16H4z"/><path d="M4 10h16M4 16h16M10 4v16M16 4v16"/>'],
    ['Sports Poles &amp; Posts', 'Heavy-duty poles and posts for badminton, basketball, volleyball, hockey, lawn tennis and pickleball.', '<path d="M12 2v20M6 22h12"/>'],
    ['Indoor Gym Equipment', 'Cardio, pin-loaded, plate-loaded, functional and free-weight equipment across premium series.', '<rect x="2" y="9" width="4" height="6" rx="1"/><rect x="18" y="9" width="4" height="6" rx="1"/><path d="M6 12h12"/>'],
    ['Sports Goods', 'Pool, snooker and poker tables, table tennis, carrom, foosball, air hockey, balls, rackets and more.', '<circle cx="12" cy="12" r="9"/><path d="M12 3v18M3 12h18"/>'],
    ['Fabrication Works', 'Custom-built cricket, football, pickleball and basketball cages using GI pipe structures.', '<path d="M4 4h16v16H4z"/><path d="M4 4l16 16M20 4L4 20"/>'],
    ['Outdoor Gym Equipment', 'Air walkers, cross walkers, ellipticals, steppers, twisters and full outdoor fitness stations.', '<circle cx="12" cy="6" r="3"/><path d="M12 9v6M8 21l4-6 4 6M9 12h6"/>'],
  ];
  document.getElementById('offerGrid').innerHTML = OFFERINGS.map(([t,d,icon],i) => `
    <div class="offer-card reveal-up" style="transition-delay:${i*0.06}s">
      <div class="offer-icon">${svg(icon)}</div>
      <h4>${t}</h4>
      <p>${d}</p>
    </div>`).join('');

  /* ---------------- ACCREDITATION DATA ---------------- */
  const ACCRED = [
    ['FIFA', 'Quality Pro Standard'],
    ['FIBA', 'Approved Equipment'],
    ['BWF', 'Badminton World Federation'],
    ['ITTF', 'Table Tennis Standards'],
    ['TTFI', 'Table Tennis Federation of India'],
    ['ITF', 'Classified Court Pace'],
    ['Boxing Federation of India', 'Equipment Standards'],
    ['Karate India Organisation', 'Equipment Standards'],
  ];
  document.getElementById('accredGrid').innerHTML = ACCRED.map(([name,sub],i) => `
    <div class="accred-chip reveal-up" style="transition-delay:${i*0.05}s">
      <strong>${name}</strong>
      <span>${sub}</span>
    </div>`).join('');

  /* ---------------- BRANDS DATA ---------------- */
  const BRANDS = ['Li-Ning','Yonex','Hundred','Nivia','Victor','Pace Court','Garware','Cougar','Supreme','Synco','Hercules','Stag','Wilson','Dunlop','USI Universal','Vector X','KTR Metco','Cosco','Life Fitness','Technogym','Fab Floorings India','Xpeed','9BallsIndia','Funplay'];
  const marqueeTrack = document.getElementById('marqueeTrack');
  marqueeTrack.innerHTML = BRANDS.map(b => `<span>${b}</span>`).join('');
  marqueeTrack.innerHTML += marqueeTrack.innerHTML;

  /* ---------------- NAVBAR ---------------- */
  const navBurger = document.getElementById('navBurger');
  const navMenu = document.getElementById('navMenu');
  navBurger?.addEventListener('click', () => navMenu.classList.toggle('open'));
  navMenu?.querySelectorAll('a').forEach(a => a.addEventListener('click', () => navMenu.classList.remove('open')));

  /* ---------------- SCROLL PROGRESS ---------------- */
  const scrollProgress = document.getElementById('scrollProgress');
  window.addEventListener('scroll', () => {
    const h = document.documentElement;
    const pct = h.scrollTop / (h.scrollHeight - h.clientHeight) * 100;
    scrollProgress.style.width = pct + '%';
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
  document.querySelectorAll('.reveal-up, .reveal-scale').forEach(el => io.observe(el));

  /* ---------------- ANIMATED COUNTERS ---------------- */
  function formatNumber(n){
    if (n >= 1000000){
      const m = n / 1000000;
      return (Number.isInteger(m) ? m : m.toFixed(1)) + 'M';
    }
    return Math.floor(n).toString();
  }
  const counters = document.querySelectorAll('.stat-number');
  const counterIO = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const target = parseInt(el.dataset.target, 10);
      const suffix = el.dataset.suffix || '';
      let cur = 0;
      const step = Math.max(1, target / 60);
      (function tick(){
        cur += step;
        if (cur >= target){ el.textContent = formatNumber(target) + suffix; return; }
        el.textContent = formatNumber(cur) + suffix;
        requestAnimationFrame(tick);
      })();
      counterIO.unobserve(el);
    });
  }, { threshold:0.5 });
  counters.forEach(c => counterIO.observe(c));

});
