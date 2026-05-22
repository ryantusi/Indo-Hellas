// ─── PRELOADER ────────────────────────────────────────────────────
(function () {
  const bar = document.getElementById("preloader-bar");
  const counter = document.getElementById("preloader-counter");
  const loader = document.getElementById("preloader");
  const site = document.getElementById("main-site");
  const anchor = document.getElementById("preloader-anchor");
  let progress = 0;

  // Prevent scroll while loading
  document.body.style.overflow = "hidden";

  function tick() {
    if (progress < 100) {
      let inc = progress > 80 ? Math.random() * 0.4 : Math.random() * 2 + 0.8;
      progress = Math.min(progress + inc, 100);
      bar.style.width = progress + "%";
      counter.textContent = Math.floor(progress) + "%";
      let delay =
        progress > 80 ? 120 + Math.random() * 150 : 25 + Math.random() * 40;
      setTimeout(tick, delay);
    } else {
      counter.textContent = "SITE READY";
      setTimeout(dismiss, 600);
    }
  }

  function dismiss() {
    loader.classList.add("hidden");
    site.classList.add("visible");
    document.body.style.overflow = "";
    // Kick off GSAP after site is visible
    setTimeout(initGSAP, 100);
  }

  // Anchor hover micro-interaction
  anchor.addEventListener("mouseenter", () => {
    anchor.style.fontVariationSettings = "'FILL' 1, 'wght' 300";
    anchor.classList.add("text-blue");
  });
  anchor.addEventListener("mouseleave", () => {
    anchor.style.fontVariationSettings = "'FILL' 0, 'wght' 200";
    anchor.classList.remove("text-blue");
  });

  setTimeout(tick, 800);
})();

// ─── FLYER DOWNLOAD ───────────────────────────────────────────────
document.getElementById("downloadFlyerBtn").addEventListener("click", () => {
  const link = document.createElement("a");
  link.href = "./assets/Flyer.jpeg";
  link.download = "IndoHellas-Flyer.jpeg";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
});

// ─── CERTIFICATES ─────────────────────────────────────────────────
const certFiles = {
  IMPA: "./assets/IMPA.jpg",
  "ShipServe ID: 204899": "./assets/ShipServe.png",
  "Procureship ID: 1976": "./assets/Procureship.png",
  "ISO 9001": "./assets/ISO9001.jpg",
  "ISO 22000": "./assets/ISO22000.jpg",
  "ISO 14001": "./assets/ISO14001.jpg",
  "ISO 45001": "./assets/ISO45001.jpg",
  HACCP: "./assets/HACCP.jpg",
};
const certNames = Object.keys(certFiles);
const track = document.getElementById("cert-track");
[...certNames, ...certNames].forEach((name, i) => {
  if (i > 0) {
    const d = document.createElement("div");
    d.className = "marquee-item-divider";
    track.appendChild(d);
  }
  const item = document.createElement("div");
  item.className = "marquee-item";
  item.innerHTML = `<span>${name}</span>`;
  item.addEventListener("click", () => openCertModal(name));
  track.appendChild(item);
});
function openCertModal(name) {
  document.getElementById("cert-modal-title").textContent = name;
  document.getElementById("cert-modal-sub").textContent =
    `Indo Hellas — ${name} Certification`;
  const fname = certFiles[name] || "certificate.png";
  document.getElementById("cert-filename-hint").textContent = fname;
  const img = document.getElementById("cert-frame-img");
  const ph = document.getElementById("cert-frame-placeholder");
  img.src = fname;
  img.style.display = "none";
  ph.style.display = "flex";
  img.onload = () => {
    img.style.display = "block";
    ph.style.display = "none";
  };
  img.onerror = () => {
    img.style.display = "none";
    ph.style.display = "flex";
  };
  openModal("cert-modal");
}

// ─── SERVICES ─────────────────────────────────────────────────────
const services = [
  {
    tab: "Provisions",
    icon: "restaurant",
    title: "Fresh Provisions & Bonded Stores",
    desc: "High-quality food supplies, beverages, frozen items, and bonded goods sourced to meet international maritime standards.",
    img_label: "Fresh Provisions & Bonded",
    img_sub: "High-quality food & bonded goods",
    categories: [
      "Meat & Poultry (Fresh/Frozen)",
      "Fish & Seafood",
      "Vegetables & Fruits",
      "Dairy Products & Eggs",
      "Grain & Grain Products",
      "Oils, Fats & Dressings",
      "Beverages & Juices",
      "Bakery & Preserves",
      "Herbs, Spices & Sauces",
      "Ethnic & Specialty Items",
    ],
  },
  {
    tab: "Deck Stores",
    icon: "anchor",
    title: "Deck Stores",
    desc: "Complete range of deck equipment, cabin essentials, PPE, and safety items required for safe daily vessel operations.",
    img_label: "Deck Stores",
    img_sub: "Safety & operational deck equipment",
    categories: [
      "Ropes & Hawsers",
      "Rigging & General Deck Items",
      "Safety & Firefighting Equipment",
      "Hoses & Couplings",
      "Nautical Equipment",
      "Protective Workwear & Clothing",
      "Cleaning Materials & Chemicals",
      "Hardware & Petroleum Products",
      "Stationery & Lavatory Equipment",
      "Brushes & Mats",
    ],
  },
  {
    tab: "Engine Stores",
    icon: "settings",
    title: "Engine Stores",
    desc: "Genuine engine spares, tools, valves, pipes, and all mechanical consumables to keep your vessel's engine room running at peak performance.",
    img_label: "Engine Stores",
    img_sub: "Engine spares & mechanical supplies",
    categories: [
      "Valves & Cocks",
      "Pipes, Tubes & Fittings",
      "Screws, Nuts & Fasteners",
      "Metal Sheets & Bars",
      "Hand Tools & Cutting Tools",
      "Measuring Tools",
      "Pneumatic Tools",
      "Packing & Jointing Materials",
      "Bearings",
      "Hoses & Couplings",
    ],
  },
  {
    tab: "Electrical",
    icon: "electrical_services",
    title: "Electrical Stores",
    desc: "Reliable electrical components, cables, control equipment, and technical supplies to maintain full electrical integrity aboard.",
    img_label: "Electrical Stores",
    img_sub: "Electrical components & cables",
    categories: [
      "Electrical Equipment & Cables",
      "Control & Instrumentation",
      "Lighting & Fixtures",
      "Switchgear & Panels",
      "Motor Spares",
      "Fuses & Circuit Breakers",
      "Safety Equipment",
      "Cleaning Materials",
      "Welding Equipment",
      "Protective Clothing",
    ],
  },
  {
    tab: "Cabin Stores",
    icon: "bed",
    title: "Cabin Stores",
    desc: "A complete, competitively priced range of cabin stores — from bedding and toiletries to kitchen appliances and custom foam mattresses (any size).",
    img_label: "Cabin Stores",
    img_sub: "Crew comfort & cabin essentials",
    categories: [
      "Cloth & Linen Products",
      "Tableware & Galley Utensils",
      "Dishware & Glassware",
      "Brushware",
      "Toiletries & Crew Amenities",
      "Electrical Kitchen Appliances 110/220v",
      "Cleaning Materials & Chemicals",
      "Galley & Cooking Items",
    ],
  },
  {
    tab: "Medical",
    icon: "medical_services",
    title: "Medical Stores",
    desc: "Fully compliant medical supplies including specialised items, first aid kits, and medical locker certification services.",
    img_label: "Medical Stores",
    img_sub: "WHO-compliant medical supplies",
    categories: [
      "Bandages & Dressings",
      "First Aid Kits",
      "Specialised Medical Items",
      "Neil Robertson Stretcher",
      "Medical Locker Certification",
    ],
  },
  {
    tab: "Technical",
    icon: "construction",
    title: "Technical & Welding Items",
    desc: "All types of technical and welding consumables to support repair, maintenance, and onboard fabrication operations.",
    img_label: "Technical & Welding",
    img_sub: "Repair & maintenance consumables",
    categories: [
      "Welding Consumables & Rods",
      "Cutting Tools & Abrasives",
      "Industrial Gases",
      "Safety & Protective Gear",
      "Grinding Wheels",
      "Welding Machines & Parts",
    ],
  },
  {
    tab: "Ropes",
    icon: "linear_scale",
    title: "Ropes & Mooring",
    desc: "High-quality ropes and mooring solutions for all vessel types — sourced from certified manufacturers to meet international maritime standards.",
    img_label: "Ropes & Mooring",
    img_sub: "Wire, mooring & pilot ropes",
    categories: [
      "Wire Ropes",
      "Steel Wire Ropes",
      "Mooring Ropes",
      "Pilot Ladder",
    ],
  },
  {
    tab: "Chemicals",
    icon: "science",
    title: "Chemicals, Paints & Gases",
    desc: "Certified marine-grade paints, industrial gases, and technical chemicals delivered as per vessel requirements and port regulations.",
    img_label: "Chemicals & Paints",
    img_sub: "Certified marine-grade products",
    categories: [
      "Marine Paints & Coatings",
      "Industrial Gases",
      "Cleaning Chemicals",
      "Rust Inhibitors & Primers",
      "Lubricants & Greases",
      "Technical Solvents",
    ],
  },
  {
    tab: "Bonded & More",
    icon: "inventory_2",
    title: "Bonded Stores & Pyrotechnics",
    desc: "Approved pyrotechnic stores, maritime safety equipment, and imported bonded goods including confectionery and beverages.",
    img_label: "Bonded Stores",
    img_sub: "Pyrotechnics & imported goods",
    categories: [
      "Chocolates, Sweets & Confectionery",
      "Imported Beverages",
      "Bonded General Items",
      "Pyrotechnics & Flares",
      "Safety Signals",
      "Specialised Stock",
    ],
  },
];
const tabsEl = document.getElementById("service-tabs"),
  panelsEl = document.getElementById("service-panels");
let activeService = 0;
services.forEach((s, i) => {
  const tab = document.createElement("button");
  tab.className = "service-tab" + (i === 0 ? " active" : "");
  tab.textContent = s.tab;
  tab.onclick = () => switchService(i);
  tabsEl.appendChild(tab);
  const panel = document.createElement("div");
  panel.className = "service-detail" + (i === 0 ? " active" : "");
  panel.innerHTML = `<div class="service-detail-header"><div class="service-detail-icon"><span class="material-symbols-outlined">${s.icon}</span></div><h4>${s.title}</h4></div><p class="service-detail-desc">${s.desc}</p><div class="service-categories">${s.categories.map((c) => `<div class="service-cat-item">${c}</div>`).join("")}</div>`;
  panelsEl.appendChild(panel);
});
const dotsEl = document.getElementById("carousel-dots"),
  slides = document.querySelectorAll(".carousel-slide");
services.forEach((_, i) => {
  const dot = document.createElement("button");
  dot.className = "carousel-dot" + (i === 0 ? " active" : "");
  dot.onclick = () => switchService(i);
  dotsEl.appendChild(dot);
});
function switchService(idx) {
  document
    .querySelectorAll(".service-tab")
    .forEach((t, i) => t.classList.toggle("active", i === idx));
  document
    .querySelectorAll(".service-detail")
    .forEach((p, i) => p.classList.toggle("active", i === idx));
  document
    .querySelectorAll(".carousel-dot")
    .forEach((d, i) => d.classList.toggle("active", i === idx));
  slides.forEach((s, i) =>
    s.classList.toggle("active", i === idx % slides.length),
  );
  document.getElementById("carousel-label-title").textContent =
    services[idx].img_label;
  document.getElementById("carousel-label-sub").textContent =
    services[idx].img_sub;
  activeService = idx;
}
setInterval(() => switchService((activeService + 1) % services.length), 4500);

// ─── ABOUT TABS ───────────────────────────────────────────────────
function switchAboutTab(idx) {
  document
    .querySelectorAll(".about-tab")
    .forEach((t, i) => t.classList.toggle("active", i === idx));
  document
    .querySelectorAll(".about-panel")
    .forEach((p, i) => p.classList.toggle("active", i === idx));
}

// ─── COUNTER ──────────────────────────────────────────────────────
function animateCounter(el) {
  const target = parseInt(el.dataset.target),
    suffix = el.dataset.suffix || "";
  const inc = target / (2000 / 16);
  let cur = 0;
  const t = setInterval(() => {
    cur += inc;
    if (cur >= target) {
      cur = target;
      clearInterval(t);
    }
    el.textContent = Math.floor(cur).toLocaleString() + suffix;
  }, 16);
}
const counterObs = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.querySelectorAll(".counter-num").forEach(animateCounter);
        counterObs.unobserve(e.target);
      }
    });
  },
  { threshold: 0.5 },
);
counterObs.observe(document.querySelector(".about-counter-strip"));

// ─── MODAL ────────────────────────────────────────────────────────
function openModal(id) {
  document.getElementById(id).classList.add("open");
  document.body.style.overflow = "hidden";
}
function closeModal(id) {
  document.getElementById(id).classList.remove("open");
  document.body.style.overflow = "";
}
document.querySelectorAll(".modal-overlay").forEach((o) =>
  o.addEventListener("click", (e) => {
    if (e.target === o) closeModal(o.id);
  }),
);

// ─── CURSOR ───────────────────────────────────────────────────────
const cursorEl = document.getElementById("cursor"),
  cursorRing = document.getElementById("cursor-ring");
let mx = 0,
  my = 0,
  rx = 0,
  ry = 0;
document.addEventListener("mousemove", (e) => {
  mx = e.clientX;
  my = e.clientY;
  cursorEl.style.left = mx + "px";
  cursorEl.style.top = my + "px";
});
(function tick() {
  rx += (mx - rx) * 0.12;
  ry += (my - ry) * 0.12;
  cursorRing.style.left = rx + "px";
  cursorRing.style.top = ry + "px";
  requestAnimationFrame(tick);
})();
const darkSecs = document.querySelectorAll('[data-theme="dark"]');
let dc = 0;
const dkObs = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      e.isIntersecting ? dc++ : (dc = Math.max(0, dc - 1));
    });
    document.body.classList.toggle("on-dark", dc > 0);
  },
  { threshold: 0.3 },
);
darkSecs.forEach((s) => dkObs.observe(s));

// ─── PROGRESS BAR ─────────────────────────────────────────────────
const pb = document.getElementById("progress");
window.addEventListener("scroll", () => {
  pb.style.width =
    (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100 +
    "%";
});

// ─── NAVBAR ───────────────────────────────────────────────────────
const navbar = document.getElementById("navbar");
window.addEventListener("scroll", () =>
  navbar.classList.toggle("scrolled", window.scrollY > 60),
);

// ─── HAMBURGER ────────────────────────────────────────────────────
const hamburger = document.getElementById("hamburger"),
  mobileMenu = document.getElementById("mobile-menu");
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("open");
  mobileMenu.classList.toggle("open");
  document.body.style.overflow = mobileMenu.classList.contains("open")
    ? "hidden"
    : "";
});
mobileMenu.querySelectorAll("a").forEach((a) =>
  a.addEventListener("click", () => {
    hamburger.classList.remove("open");
    mobileMenu.classList.remove("open");
    document.body.style.overflow = "";
  }),
);

// ─── VIDEO FALLBACK ───────────────────────────────────────────────
const video = document.getElementById("hero-video"),
  fallback = document.getElementById("hero-fallback");
video.addEventListener("error", () => (video.style.display = "none"));
video.addEventListener("loadeddata", () => (fallback.style.display = "none"));
if (!video.src || video.src === window.location.href)
  fallback.style.display = "block";

// ─── ACCORDION ────────────────────────────────────────────────────
document.querySelectorAll("[data-accordion]").forEach((item) => {
  item.querySelector(".accordion-header").addEventListener("click", () => {
    const was = item.classList.contains("open");
    document
      .querySelectorAll("[data-accordion]")
      .forEach((i) => i.classList.remove("open"));
    if (!was) item.classList.add("open");
  });
});

// ─── SMOOTH SCROLL ────────────────────────────────────────────────
document.querySelectorAll('a[href^="#"]').forEach((a) => {
  a.addEventListener("click", (e) => {
    const t = document.querySelector(a.getAttribute("href"));
    if (!t) return;
    e.preventDefault();
    window.scrollTo({
      top: t.offsetTop - navbar.offsetHeight - 20,
      behavior: "smooth",
    });
  });
});
document
  .getElementById("scroll-indicator")
  .addEventListener("click", () =>
    document.querySelector("#about").scrollIntoView({ behavior: "smooth" }),
  );

// ─── FORM ─────────────────────────────────────────────────────────
document.getElementById("contact-form").addEventListener("submit", (e) => {
  e.preventDefault();
  const btn = e.target.querySelector(".form-submit");
  btn.textContent = "Message Sent ✓";
  btn.style.background = "#1a5e3a";
  setTimeout(() => {
    btn.textContent = "Send Request";
    btn.style.background = "";
  }, 3000);
});

// ─── GSAP — called after preloader dismisses ──────────────────────
function initGSAP() {
  gsap.registerPlugin(ScrollTrigger);
  gsap
    .timeline({ delay: 0.1 })
    .to(".hero-headline", {
      opacity: 1,
      y: 0,
      duration: 0.9,
      ease: "power3.out",
    })
    .to(
      ".hero-logo-wrap",
      { opacity: 1, duration: 0.8, ease: "power3.out" },
      "-=0.5",
    )
    .to(
      ".hero-sub-row",
      { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" },
      "-=0.4",
    )
    .to(
      ".hero-bottom",
      { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
      "-=0.4",
    )
    .to("#scroll-indicator", { opacity: 1, duration: 0.6 }, "-=0.2");
  gsap.to("#hero-video, #hero-fallback", {
    yPercent: 25,
    ease: "none",
    scrollTrigger: {
      trigger: "#hero",
      start: "top top",
      end: "bottom top",
      scrub: true,
    },
  });
  gsap.to(".hero-content", {
    opacity: 0,
    y: -60,
    ease: "none",
    scrollTrigger: {
      trigger: "#hero",
      start: "30% top",
      end: "80% top",
      scrub: true,
    },
  });
  gsap.utils
    .toArray(".reveal")
    .forEach((el) =>
      gsap.to(el, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 88%",
          toggleActions: "play none none none",
        },
      }),
    );
  gsap.utils
    .toArray(".reveal-left")
    .forEach((el) =>
      gsap.to(el, {
        opacity: 1,
        x: 0,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      }),
    );
  gsap.utils
    .toArray(".reveal-right")
    .forEach((el) =>
      gsap.to(el, {
        opacity: 1,
        x: 0,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      }),
    );
  gsap.utils
    .toArray(".bento-card")
    .forEach((c, i) =>
      ScrollTrigger.create({
        trigger: c,
        start: "top 90%",
        onEnter: () =>
          gsap.to(c, {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.6,
            delay: i * 0.08,
            ease: "power3.out",
          }),
      }),
    );
  gsap.utils
    .toArray(".accordion-item")
    .forEach((item, i) =>
      ScrollTrigger.create({
        trigger: item,
        start: "top 92%",
        onEnter: () =>
          gsap.to(item, {
            opacity: 1,
            y: 0,
            duration: 0.5,
            delay: i * 0.1,
            ease: "power3.out",
          }),
      }),
    );
  const navLinks = document.querySelectorAll(".nav-links a");
  window.addEventListener("scroll", () => {
    let cur = "";
    document.querySelectorAll("section[id]").forEach((s) => {
      if (window.scrollY >= s.offsetTop - 130) cur = s.id;
    });
    navLinks.forEach(
      (a) =>
        (a.style.fontWeight =
          a.getAttribute("href") === "#" + cur ? "800" : "600"),
    );
  });
}
