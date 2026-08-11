/* ==========================================================================
   SportsCamp — Gym Equipment page logic
   Renders Indoor / Outdoor content, product cards, pin-loaded / plate-loaded
   range filters, and the equipment detail modal. Pure vanilla JS, no deps.
   ========================================================================== */

(function () {
  "use strict";

  var state = {
    env: "indoor",
    pinRange: PIN_LOADED[0].key,
    plateRange: PLATE_LOADED[0].key,
  };

  /* ---------------- small helpers ---------------- */
  function el(tag, cls, html) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (html !== undefined) e.innerHTML = html;
    return e;
  }
  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }

  /* ---------------- card templates ---------------- */
  function cardHTML(opts) {
    // opts: {img, name, desc, spec, onClickId}
    return (
      '<div class="card reveal" data-open="' + opts.onClickId + '">' +
        '<div class="card-img"><img src="' + opts.img + '" alt="' + esc(opts.name) + '" loading="lazy"></div>' +
        '<div class="card-body">' +
          "<h4>" + esc(opts.name) + "</h4>" +
          "<p>" + esc(opts.desc || "") + "</p>" +
          (opts.spec ? '<div class="card-spec">' + esc(opts.spec) + "</div>" : "") +
          '<button class="card-link" type="button">View Details <span class="arrow">→</span></button>' +
        "</div>" +
      "</div>"
    );
  }

  /* ================================================================
     INDOOR CONTENT
     ================================================================ */
  function renderIndoor() {
    var wrap = el("div", "env-block is-visible", "");
    wrap.id = "indoorBlock";

    /* ---- CARDIO ---- */
    var cardio = el("section", "section-tight wrap");
    cardio.innerHTML =
      '<div class="cat-kicker">Indoor Gym Equipment</div>' +
      '<div class="cat-head"><div><h3>Cardio Equipment</h3>' +
      '<p class="cat-desc">Build a complete indoor fitness environment with professional cardio, strength, functional and free-weight equipment.</p></div></div>' +
      '<div class="grid grid-4" id="cardioGrid"></div>';
    wrap.appendChild(cardio);

    var cardioGrid = cardio.querySelector("#cardioGrid");
    CARDIO.forEach(function (item) {
      var id = "cardio:" + item.id;
      cardioGrid.insertAdjacentHTML(
        "beforeend",
        cardHTML({ img: item.img, name: item.name, desc: item.blurb, onClickId: id })
      );
    });

    /* ---- PIN LOADED ---- */
    var pin = el("section", "section-tight wrap");
    pin.innerHTML =
      '<div class="cat-head"><div><h3>Pin Loaded Equipment</h3>' +
      '<p class="cat-desc">Ten equipment ranges, each engineered around a distinct training philosophy. Select a range to see its machines.</p></div></div>' +
      '<div class="pill-row" id="pinPills"></div>' +
      '<div class="range-tagline" id="pinTagline"></div>' +
      '<div class="grid grid-4" id="pinGrid"></div>';
    wrap.appendChild(pin);

    var pinPills = pin.querySelector("#pinPills");
    PIN_LOADED.forEach(function (r) {
      var btn = el("button", "range-pill" + (r.key === state.pinRange ? " is-active" : ""), esc(r.name));
      btn.type = "button";
      btn.addEventListener("click", function () {
        state.pinRange = r.key;
        renderApp();
        document.getElementById("pinPills").scrollIntoView({ behavior: "smooth", block: "center" });
      });
      pinPills.appendChild(btn);
    });

    var activePinRange = PIN_LOADED.find(function (r) { return r.key === state.pinRange; });
    pin.querySelector("#pinTagline").textContent = activePinRange.tagline;
    var pinGrid = pin.querySelector("#pinGrid");
    activePinRange.machines.forEach(function (m, i) {
      var id = "pin:" + activePinRange.key + ":" + i;
      pinGrid.insertAdjacentHTML(
        "beforeend",
        cardHTML({
          img: m.img,
          name: m.name,
          desc: activePinRange.name + " range",
          spec: m.specs[m.specs.length - 1].join(": "),
          onClickId: id,
        })
      );
    });

    /* ---- PLATE LOADED ---- */
    var plate = el("section", "section-tight wrap");
    plate.innerHTML =
      '<div class="cat-head"><div><h3>Plate Loaded Equipment</h3>' +
      '<p class="cat-desc">Heavy-duty plate loaded stations across the Armour, Stoic and Aura ranges.</p></div></div>' +
      '<div class="grid grid-3" id="plateGrid"></div>';
    wrap.appendChild(plate);

    var plateGrid = plate.querySelector("#plateGrid");
    PLATE_LOADED.forEach(function (r) {
      r.machines.forEach(function (m, i) {
        var id = "plate:" + r.key + ":" + i;
        plateGrid.insertAdjacentHTML(
          "beforeend",
          cardHTML({
            img: m.img,
            name: m.name,
            desc: r.name + " — " + r.tagline,
            spec: m.specs[m.specs.length - 1].join(": "),
            onClickId: id,
          })
        );
      });
    });

    /* ---- FUNCTIONAL / CABLE / SMITH / MULTI STATION ---- */
    var func = el("section", "section-tight wrap");
    func.innerHTML =
      '<div class="cat-head"><div><h3>Functional, Cable, Smith &amp; Multi Station</h3>' +
      '<p class="cat-desc">Large-format stations for cable and functional training, built for busy commercial floors.</p></div></div>' +
      '<div class="grid grid-2" id="funcGrid" style="gap:24px;"></div>';
    wrap.appendChild(func);

    var funcGrid = func.querySelector("#funcGrid");
    FUNCTIONAL.forEach(function (m, i) {
      var id = "func:" + i;
      funcGrid.insertAdjacentHTML(
        "beforeend",
        '<div class="feature-card reveal" data-open="' + id + '">' +
          '<div class="f-img"><img src="' + m.img + '" alt="' + esc(m.name) + '" loading="lazy"></div>' +
          '<div class="f-body">' +
            "<h4>" + esc(m.name) + "</h4>" +
            "<p>" + esc(m.blurb) + "</p>" +
            '<div class="feature-specs">' +
              m.specs.map(function (s) { return "<span>" + esc(s[0]) + ": " + esc(s[1]) + "</span>"; }).join("") +
            "</div>" +
            '<div class="feature-actions">' +
              '<button class="btn btn-primary btn-sm view-details-btn" type="button">View Details</button>' +
              '<a href="#contact" class="btn btn-outline btn-sm">Get a Quote</a>' +
            "</div>" +
          "</div>" +
        "</div>"
      );
    });

    /* ---- FREE WEIGHTS & ACCESSORIES ---- */
    var fw = el("section", "section-tight wrap");
    fw.innerHTML =
      '<div class="cat-head"><div><h3>Free Weights &amp; Accessories</h3>' +
      '<p class="cat-desc">Benches, bars, plates and everyday training accessories to round out any strength floor.</p></div></div>' +
      '<div class="grid grid-3" id="benchGrid" style="margin-bottom:22px;"></div>' +
      '<div class="grid" id="accGrid" style="grid-template-columns:repeat(4,1fr);gap:14px;"></div>';
    wrap.appendChild(fw);

    var benchGrid = fw.querySelector("#benchGrid");
    BENCHES.forEach(function (m, i) {
      var id = "bench:" + i;
      benchGrid.insertAdjacentHTML(
        "beforeend",
        cardHTML({ img: m.img, name: m.name, desc: m.blurb, spec: m.specs[m.specs.length - 1].join(": "), onClickId: id })
      );
    });

    var accGrid = fw.querySelector("#accGrid");
    ACCESSORIES.forEach(function (a) {
      accGrid.insertAdjacentHTML(
        "beforeend",
        '<div class="acc-card reveal"><div class="dot"></div><h5>' + esc(a.name) + "</h5><span>" + esc(a.detail) + "</span></div>"
      );
    });

    return wrap;
  }

  /* ================================================================
     GYM FLOORING CONTENT
     ================================================================ */
  function renderFlooring() {
    var wrap = el("div", "env-block", "");
    wrap.id = "flooringBlock";

    var intro = el("section", "section-tight wrap");
    intro.innerHTML =
      '<div class="cat-kicker">Gym Flooring Solutions</div>' +
      '<div class="cat-head"><div><h3>Professional Gym Flooring</h3>' +
      '<p class="cat-desc">Protect your floor, equipment and athletes with durable flooring solutions for strength, cardio, functional training and commercial fitness spaces.</p></div></div>' +
      '<div class="flooring-grid" id="flooringGrid"></div>';
    wrap.appendChild(intro);

    var grid = intro.querySelector("#flooringGrid");
    GYM_FLOORING.forEach(function (item, i) {
      var id = "floor:" + i;
      grid.insertAdjacentHTML(
        "beforeend",
        '<div class="floor-card reveal" data-open="' + id + '">' +
          '<div class="floor-visual floor-' + esc(item.id) + '"><span>GYM<br>FLOORING</span></div>' +
          '<div class="floor-body"><div class="floor-type">' + esc(item.finish) + '</div>' +
          '<h4>' + esc(item.name) + '</h4><p>' + esc(item.blurb) + '</p>' +
          '<div class="floor-tags"><span>Impact Protection</span><span>Slip Resistant</span><span>Easy Maintenance</span></div>' +
          '<button class="card-link" type="button">View Details <span class="arrow">→</span></button></div>' +
        '</div>'
      );
    });

    var note = el("section", "section-tight wrap");
    note.innerHTML =
      '<div class="flooring-note"><div><div class="cat-kicker">Complete Flooring Setup</div><h3>Need flooring for your entire gym?</h3><p>We can help with area measurement, flooring selection, quantity planning and installation support based on your gym layout.</p></div><a href="#contact" class="btn btn-primary">Get Flooring Quote</a></div>';
    wrap.appendChild(note);
    return wrap;
  }

  /* ================================================================
     OUTDOOR CONTENT
     ================================================================ */
  function renderOutdoor() {
    var wrap = el("div", "env-block", "");
    wrap.id = "outdoorBlock";

    var sec = el("section", "section-tight wrap");
    sec.innerHTML =
      '<div class="cat-kicker">Outdoor Gym Equipment</div>' +
      '<div class="cat-head"><div><h3>Outdoor Gym Equipment</h3>' +
      '<p class="cat-desc">Durable outdoor fitness equipment suitable for parks, schools, institutions and open community fitness spaces.</p></div></div>' +
      '<div class="grid grid-4" id="outdoorGrid"></div>';
    wrap.appendChild(sec);

    var grid = sec.querySelector("#outdoorGrid");
    OUTDOOR.forEach(function (item, i) {
      var id = "out:" + i;
      grid.insertAdjacentHTML(
        "beforeend",
        cardHTML({ img: item.img, name: item.name, desc: item.desc, onClickId: id })
      );
    });

    return wrap;
  }

  /* ================================================================
     SHARED SECTIONS (Why choose, Plan your gym, Setup, CTA, footer)
     ================================================================ */
  function renderShared() {
    var frag = el("div");

    /* Why choose SportsCamp */
    var why = el("section", "section");
    why.innerHTML =
      '<div class="wrap">' +
        '<div class="section-head center">' +
          '<div class="eyebrow center" style="justify-content:center;">Why SportsCamp</div>' +
          "<h2>Why Choose SportsCamp?</h2>" +
        "</div>" +
        '<div class="why-grid">' +
          '<div class="why-card reveal"><div class="why-ic">✓</div><h4>Premium Quality</h4><p>Durable &amp; reliable equipment.</p></div>' +
          '<div class="why-card reveal"><div class="why-ic">◎</div><h4>Expert Guidance</h4><p>Support from fitness experts.</p></div>' +
          '<div class="why-card reveal"><div class="why-ic">▤</div><h4>Customized Solutions</h4><p>Solutions based on space &amp; requirements.</p></div>' +
          '<div class="why-card reveal"><div class="why-ic">⚙</div><h4>Installation Support</h4><p>Complete setup &amp; after-sales support.</p></div>' +
        "</div>" +
      "</div>";
    frag.appendChild(why);

    /* Plan your new gym */
    var plan = el("section", "section");
    plan.style.background = "var(--grey-50)";
    plan.innerHTML =
      '<div class="wrap">' +
        '<div class="section-head center">' +
          '<div class="eyebrow center" style="justify-content:center;">Get Started</div>' +
          "<h2>Plan Your New Gym</h2>" +
          "<p>We&rsquo;ll help you build the right setup for your space.</p>" +
        "</div>" +
        '<div class="plan-grid">' +
          planCard(IMG + "functional-gym-smith-cable.jpg", "Home &amp; Personal Gym", "Compact &amp; efficient fitness solutions") +
          planCard(IMG + "auraplate-leg-press-hack-squat.jpg", "Commercial Gym", "Complete strength &amp; cardio setup") +
          planCard(IMG + "outdoor-lifestyle.jpg", "Outdoor Fitness Zone", "Durable outdoor fitness solutions") +
        "</div>" +
      "</div>";
    frag.appendChild(plan);

    /* Complete your gym setup */
    var setup = el("section", "section");
    setup.innerHTML =
      '<div class="wrap">' +
        '<div class="section-head center">' +
          "<h2>Complete Your Gym Setup</h2>" +
        "</div>" +
        '<div class="setup-grid">' +
          '<div class="setup-card a reveal"><div><h4>Gym Equipment</h4><p>Professional equipment for every workout.</p></div>' +
            '<a href="#equipment" class="btn btn-ghost-white">Explore Equipment →</a></div>' +
          '<div class="setup-card b reveal"><div><h4>Gym Flooring</h4><p>Premium rubber flooring for safety, grip &amp; durability.</p></div>' +
            '<a href="#" class="btn btn-ghost-white">Explore Flooring →</a></div>' +
        "</div>" +
      "</div>";
    frag.appendChild(setup);

    /* Stats */
    var stats = el("section", "stats-bar");
    stats.innerHTML =
      '<div class="wrap stats-grid">' +
        '<div><div class="num">5000+</div><div class="lbl">Products</div></div>' +
        '<div><div class="num">20+</div><div class="lbl">Years Experience</div></div>' +
        '<div><div class="num">1M+</div><div class="lbl">Happy Customers</div></div>' +
        '<div><div class="num">Raipur, C.G.</div><div class="lbl">Proudly Based In</div></div>' +
      "</div>";
    frag.appendChild(stats);

    /* Final CTA */
    var cta = el("section", "section");
    cta.id = "gym-cta";
    cta.innerHTML =
      '<div class="final-cta">' +
        "<h2>Ready to Build Your Gym?</h2>" +
        "<p>Talk to our experts &amp; get a customized quote today.</p>" +
        '<a href="tel:+918319943771" class="btn btn-ghost-white">Get a Free Consultation →</a>' +
      "</div>";
    frag.appendChild(cta);
return frag;
  }

  function planCard(img, title, desc) {
    return (
      '<div class="plan-card reveal"><img src="' + img + '" alt="' + esc(title.replace(/&\w+;/g,"")) + '" loading="lazy">' +
        '<div class="plan-overlay"><h4>' + title + "</h4><p>" + desc + "</p>" +
          '<a href="#contact">Get a Quote →</a></div>' +
      "</div>"
    );
  }

  /* ================================================================
     MODAL
     ================================================================ */
  function findEntity(id) {
    var parts = id.split(":");
    var kind = parts[0];
    if (kind === "cardio") {
      var c = CARDIO.find(function (x) { return x.id === parts[1]; });
      return { title: c.name, blurb: c.blurb, img: c.img, variants: c.variants };
    }
    if (kind === "pin") {
      var r = PIN_LOADED.find(function (x) { return x.key === parts[1]; });
      var m = r.machines[+parts[2]];
      return { title: m.name, blurb: r.name + " Range — " + r.tagline, img: m.img, specs: m.specs };
    }
    if (kind === "plate") {
      var r2 = PLATE_LOADED.find(function (x) { return x.key === parts[1]; });
      var m2 = r2.machines[+parts[2]];
      return { title: m2.name, blurb: r2.name + " Range — " + r2.tagline, img: m2.img, specs: m2.specs };
    }
    if (kind === "func") {
      var f = FUNCTIONAL[+parts[1]];
      return { title: f.name, blurb: f.blurb, img: f.img, specs: f.specs };
    }
    if (kind === "bench") {
      var b = BENCHES[+parts[1]];
      return { title: b.name, blurb: b.blurb, img: b.img, specs: b.specs };
    }
    if (kind === "floor") {
      var fl = GYM_FLOORING[+parts[1]];
      return { title: fl.name, blurb: fl.blurb, specs: fl.specs };
    }
    if (kind === "out") {
      var o = OUTDOOR[+parts[1]];
      return { title: o.name, blurb: "Outdoor Gym Equipment", img: o.img, bullets: o.bullets };
    }
    return null;
  }

  function openModal(id) {
    var data = findEntity(id);
    if (!data) return;
    var root = document.getElementById("modalRoot");

    var variantIndex = 0;
    function bodyHTML() {
      var img = data.img;
      var specs = data.specs;
      var variantTabs = "";
      if (data.variants) {
        img = data.variants[variantIndex].img;
        specs = data.variants[variantIndex].specs;
        variantTabs =
          '<div class="modal-variant-tabs">' +
          data.variants
            .map(function (v, i) {
              return '<button type="button" class="modal-variant-tab' + (i === variantIndex ? " is-active" : "") + '" data-variant="' + i + '">' + esc(v.label) + "</button>";
            })
            .join("") +
          "</div>";
      }
      var specsHTML = specs
        ? '<table class="spec-table">' + specs.map(function (s) { return "<tr><td>" + esc(s[0]) + "</td><td>" + esc(s[1]) + "</td></tr>"; }).join("") + "</table>"
        : "";
      var bulletsHTML = data.bullets
        ? "<ul class=\"modal-bullets\">" + data.bullets.map(function (b) { return "<li>" + esc(b) + "</li>"; }).join("") + "</ul>"
        : "";

      return (
        '<div class="modal-grid">' +
          '<div class="modal-img"><img id="modalImg" src="' + img + '" alt="' + esc(data.title) + '"></div>' +
          '<div class="modal-body">' +
            '<div class="tag">Product Information</div>' +
            "<h3>" + esc(data.title) + "</h3>" +
            (data.blurb ? "<p style=\"color:var(--body);font-size:14.5px;margin:-8px 0 18px;\">" + esc(data.blurb) + "</p>" : "") +
            variantTabs +
            '<div id="modalSpecArea">' + specsHTML + bulletsHTML + "</div>" +
            '<a href="#contact" class="btn btn-primary btn-block" id="modalQuoteBtn">Get a Quote</a>' +
          "</div>" +
        "</div>"
      );
    }

    root.innerHTML =
      '<div class="modal-overlay is-open" id="modalOverlay">' +
        '<div class="modal" role="dialog" aria-modal="true">' +
          '<button class="modal-close" id="modalCloseBtn" aria-label="Close">✕</button>' +
          '<div id="modalContent">' + bodyHTML() + "</div>" +
        "</div>" +
      "</div>";

    document.body.style.overflow = "hidden";

    document.getElementById("modalOverlay").addEventListener("click", function (e) {
      if (e.target.id === "modalOverlay") closeModal();
    });
    document.getElementById("modalCloseBtn").addEventListener("click", closeModal);
    document.getElementById("modalQuoteBtn").addEventListener("click", closeModal);

    if (data.variants) {
      root.querySelectorAll(".modal-variant-tab").forEach(function (tab) {
        tab.addEventListener("click", function () {
          variantIndex = +tab.getAttribute("data-variant");
          document.getElementById("modalContent").innerHTML = bodyHTML();
          attachVariantHandlers();
        });
      });
    }
    function attachVariantHandlers() {
      root.querySelectorAll(".modal-variant-tab").forEach(function (tab) {
        tab.addEventListener("click", function () {
          variantIndex = +tab.getAttribute("data-variant");
          document.getElementById("modalContent").innerHTML = bodyHTML();
          attachVariantHandlers();
          document.getElementById("modalQuoteBtn").addEventListener("click", closeModal);
        });
      });
      document.getElementById("modalQuoteBtn").addEventListener("click", closeModal);
    }
  }

  function closeModal() {
    var overlay = document.getElementById("modalOverlay");
    if (overlay) overlay.classList.remove("is-open");
    document.body.style.overflow = "";
    setTimeout(function () {
      document.getElementById("modalRoot").innerHTML = "";
    }, 150);
  }

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") closeModal();
  });

  /* Delegate clicks for any element carrying data-open, or nested view-details buttons */
  document.addEventListener("click", function (e) {
    var card = e.target.closest("[data-open]");
    if (card) {
      openModal(card.getAttribute("data-open"));
    }
  });

  /* ================================================================
     APP RENDER / ENV TOGGLE
     ================================================================ */
  function renderApp() {
    var mount = document.getElementById("equipment");
    mount.innerHTML = "";
    var indoor = renderIndoor();
    var outdoor = renderOutdoor();
    var flooring = renderFlooring();
    if (state.env === "outdoor") {
      indoor.classList.remove("is-visible");
      outdoor.classList.add("is-visible", "fade-enter");
    } else if (state.env === "flooring") {
      indoor.classList.remove("is-visible");
      flooring.classList.add("is-visible", "fade-enter");
    } else {
      indoor.classList.add("is-visible", "fade-enter");
    }
    mount.appendChild(indoor);
    mount.appendChild(outdoor);
    mount.appendChild(flooring);
    mount.appendChild(renderShared());
    updateHero();
    initReveal();
  }

  function updateHero() {
    var title = document.getElementById("heroTitle");
    var sub = document.getElementById("heroSub");
    var desc = document.getElementById("heroDesc");
    var img = document.getElementById("heroImg");
    if (state.env === "indoor") {
      title.innerHTML = 'COMPLETE INDOOR<br>GYM <span class="accent">SOLUTIONS</span>';
      sub.textContent = "Indoor Gym Equipment";
      desc.textContent = "SportsCamp supplies complete indoor gym equipment — cardio, strength, functional and free-weight machines — built for schools, institutions and commercial fitness spaces.";
      img.style.opacity = 0;
      setTimeout(function () { img.src = IMG + "functional-gym-smith-cable.jpg"; img.style.opacity = 1; }, 120);
    } else if (state.env === "outdoor") {
      title.innerHTML = 'COMPLETE OUTDOOR<br>GYM <span class="accent">SOLUTIONS</span>';
      sub.textContent = "Outdoor Gym Equipment";
      desc.textContent = "SportsCamp offers durable outdoor fitness equipment suitable for open fitness spaces, parks, institutions, schools and communities.";
      img.style.opacity = 0;
      setTimeout(function () { img.src = IMG + "outdoor-lifestyle.jpg"; img.style.opacity = 1; }, 120);
    } else {
      title.innerHTML = 'PROFESSIONAL GYM<br><span class="accent">FLOORING SOLUTIONS</span>';
      sub.textContent = "Gym Flooring & Installation";
      desc.textContent = "Durable rubber, EPDM, roll, interlocking and turf flooring solutions designed for commercial gyms, studios, schools and fitness spaces.";
      img.style.opacity = 0;
      setTimeout(function () { img.src = IMG + "outdoor-lifestyle.jpg"; img.style.opacity = 1; }, 120);
    }
  }

  function initReveal() {
    var items = document.querySelectorAll(".reveal:not(.is-in)");
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-in");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    items.forEach(function (i) { io.observe(i); });
  }

  document.getElementById("btnIndoor").addEventListener("click", function () {
    if (state.env === "indoor") return;
    state.env = "indoor";
    setActiveEnvButtons();
    renderApp();
    document.getElementById("equipment").scrollIntoView({ behavior: "smooth", block: "start" });
  });
  document.getElementById("btnOutdoor").addEventListener("click", function () {
    if (state.env === "outdoor") return;
    state.env = "outdoor";
    setActiveEnvButtons();
    renderApp();
    document.getElementById("equipment").scrollIntoView({ behavior: "smooth", block: "start" });
  });

  document.getElementById("btnFlooring").addEventListener("click", function () {
    if (state.env === "flooring") return;
    state.env = "flooring";
    setActiveEnvButtons();
    renderApp();
    document.getElementById("equipment").scrollIntoView({ behavior: "smooth", block: "start" });
  });

  function setActiveEnvButtons() {
    document.getElementById("btnIndoor").classList.toggle("is-active", state.env === "indoor");
    document.getElementById("btnIndoor").setAttribute("aria-selected", state.env === "indoor");
    document.getElementById("btnOutdoor").classList.toggle("is-active", state.env === "outdoor");
    document.getElementById("btnOutdoor").setAttribute("aria-selected", state.env === "outdoor");
    document.getElementById("btnFlooring").classList.toggle("is-active", state.env === "flooring");
    document.getElementById("btnFlooring").setAttribute("aria-selected", state.env === "flooring");
  }

  renderApp();
})();
