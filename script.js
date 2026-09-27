// =========================================================
// Furunze Wang · CV online
// Idioma ES/EN, navegación activa, copiar email e impresión.
// =========================================================

(function () {
  "use strict";

  var STORAGE_KEY = "cv-lang";
  var root = document.documentElement;

  // ---------- Textos en inglés ----------
  // El español vive en el HTML (idioma por defecto y el que ven los buscadores);
  // se lee del DOM al cargar para poder volver a él sin duplicarlo aquí.
  var EN = {
    docTitle: "Furunze Wang · B2B Marketing, Fundraising & Applied AI",
    docDesc: "Furunze Wang (Fur): B2B marketing, fundraising and applied AI. Marketing Lead at Eaship TMS, Valencia. Closed a €1M seed round against an initial €500K target.",
    skip: "Skip to content",
    brandLabel: "Furunze Wang — home",
    navLabel: "Sections",
    navAbout: "About",
    navExperience: "Experience",
    navEducation: "Education",
    navSkills: "Skills",
    navContact: "Contact",
    pdfShort: "CV (PDF)",
    ctaPdf: "Download CV (PDF)",
    photoAlt: "Portrait of Furunze Wang",
    pillars: "B2B Marketing · Fundraising · Applied AI",
    role: "Marketing Lead at <strong>Eaship TMS</strong>",
    location: "Valencia, Spain",
    ctaEmail: "Get in touch",

    aboutTitle: "About",
    aboutText:
      "I joined <strong>Eaship TMS</strong>, a B2B SaaS that digitalises freight transport for industrial manufacturers, as an intern. " +
      "In 2025 I ran its seed round: we set out to raise €500K and closed <strong>€1M</strong>. " +
      "Today I’m building the marketing department from scratch. " +
      "I’m as comfortable with the numbers as I am with marketing, and I use AI every day to do more with less.",
    statsLabel: "Key figures",
    stat1Num: "€1M",
    stat1: "seed round closed",
    stat2: "the initial target (€500K)",
    stat3: "marketing department, built from scratch",

    expTitle: "Experience",
    eashipDesc: "B2B logistics SaaS · Valencia",
    job1Title: "Marketing Lead",
    now: "Current",
    job1When: "Jan 2026 – Present",
    job1Where: "Valencia (hybrid)",
    job1Text:
      "Building the marketing department from the ground up: qualified lead generation, sales enablement content, alliances and partnerships, and event management.",
    job2Title: "Fundraising & Investment",
    job2When: "Feb 2025 – Dec 2025",
    job2List:
      "<li>Organised and executed a <strong>€1M seed round</strong> for a B2B logistics SaaS startup (initial target: €500K).</li>" +
      "<li>Built the financial model, business plan, market analysis and investor materials.</li>" +
      "<li>Developed the non-dilutive funding strategy.</li>" +
      "<li>Worked directly with the founders and the tech and sales teams.</li>",
    job3Title: "Staff (part-time)",
    job3When: "Aug 2024 – Jun 2025",
    internTitle: "Internships",
    int1: "Accounting & Garnishments Intern",
    int1When: "Jun – Jul 2024",
    int2: "Marketing & Finance Intern",
    int2When: "Jun – Jul 2023",
    int3: "Store & Department Operations Intern",
    int3When: "Jun – Jul 2022",

    eduTitle: "Education",
    edu1: "Master’s in Digital Marketing and Sales",
    edu1When: "Oct 2025 – Jul 2026",
    edu2: "Exchange semester",
    edu2Org: "Laurea University of Applied Sciences (Finland)",
    edu2When: "Aug – Dec 2023",
    edu3: "Bachelor’s in Business Administration and Management",
    edu3When: "Sep 2021 – Jul 2025",

    certTitle: "Certifications",
    cert1When: "Sep 2026",
    cert2: "Spanish GAAP (Plan General Contable)",
    cert2When: "Jul 2025",
    cert3: "English B2",
    cert3When: "Feb 2022",

    skillsTitle: "Tools & skills",
    sgMarketing: "B2B Marketing",
    sgFinance: "Finance & fundraising",
    sgAI: "Applied AI & productivity",
    skLeads: "Lead generation",
    skContent: "Content marketing",
    skEvents: "Event management",
    skModel: "Financial modelling",
    skData: "Data analysis",
    skClaude: "Claude / generative AI",

    langTitle: "Languages",
    lang1: "Spanish",
    lang1Lvl: "Native",
    lang2: "English",
    lang2Lvl: "Advanced (B2 certified)",
    lang3: "Italian",
    lang3Lvl: "Learning",

    contactTitle: "Let’s talk",
    contactText: "Always happy to talk about projects and roles where marketing, finance and AI meet.",
    ctaSend: "Send an email",
    ctaCopy: "Copy email",
    copied: "Copied!",
    copiedStatus: "Email address copied to clipboard",
    backTop: "Back to top ↑",
    toggleLabel: "Cambiar a español",
    pdfTitle: "Furunze Wang – CV"
  };

  var descMeta = document.querySelector('meta[name="description"]');
  var ES = {
    docTitle: document.title,
    docDesc: descMeta ? descMeta.content : "",
    copied: "¡Copiado!",
    copiedStatus: "Email copiado al portapapeles",
    toggleLabel: "Switch to English",
    pdfTitle: "Furunze Wang – CV"
  };

  var textEls = document.querySelectorAll("[data-i18n]");
  var attrEls = document.querySelectorAll("[data-i18n-attr]");

  textEls.forEach(function (el) { ES[el.dataset.i18n] = el.innerHTML.trim(); });
  attrEls.forEach(function (el) {
    el.dataset.i18nAttr.split(";").forEach(function (pair) {
      var p = pair.split(":");
      ES[p[1]] = el.getAttribute(p[0]);
    });
  });

  var current = "es";
  function t(key) { return (current === "en" ? EN : ES)[key]; }

  function applyLang(lang) {
    current = lang === "en" ? "en" : "es";
    var dict = current === "en" ? EN : ES;
    root.lang = current;

    textEls.forEach(function (el) {
      var v = dict[el.dataset.i18n];
      if (v != null) el.innerHTML = v;
    });
    attrEls.forEach(function (el) {
      el.dataset.i18nAttr.split(";").forEach(function (pair) {
        var p = pair.split(":");
        if (dict[p[1]] != null) el.setAttribute(p[0], dict[p[1]]);
      });
    });

    document.title = dict.docTitle;
    if (descMeta) descMeta.content = dict.docDesc;

    var toggle = document.getElementById("lang-toggle");
    toggle.setAttribute("aria-label", dict.toggleLabel);
    toggle.setAttribute("lang", current === "en" ? "es" : "en");
  }

  // Prioridad: ?lang=en|es en la URL → elección guardada → español.
  var initial = "es";
  try {
    var q = new URLSearchParams(location.search).get("lang");
    initial = (q === "en" || q === "es") ? q : (localStorage.getItem(STORAGE_KEY) || "es");
  } catch (e) {}
  applyLang(initial);

  document.getElementById("lang-toggle").addEventListener("click", function () {
    applyLang(current === "es" ? "en" : "es");
    try { localStorage.setItem(STORAGE_KEY, current); } catch (e) {}
    try {
      var url = new URL(location.href);
      if (url.searchParams.has("lang")) {
        url.searchParams.set("lang", current);
        history.replaceState(null, "", url);
      }
    } catch (e) {}
  });

  // ---------- Año del pie ----------
  document.getElementById("year").textContent = new Date().getFullYear();

  // ---------- Copiar email ----------
  var copyBtn = document.getElementById("copy-email");
  var copyLabel = document.getElementById("copy-label");
  var copyStatus = document.getElementById("copy-status");
  var email = document.getElementById("email-link").textContent.trim();
  var resetTimer;

  function fallbackCopy(text) {
    var ta = document.createElement("textarea");
    ta.value = text;
    ta.setAttribute("readonly", "");
    ta.style.position = "fixed";
    ta.style.opacity = "0";
    document.body.appendChild(ta);
    ta.select();
    var ok = false;
    try { ok = document.execCommand("copy"); } catch (e) {}
    document.body.removeChild(ta);
    return ok;
  }

  copyBtn.addEventListener("click", function () {
    var done = function () {
      copyLabel.textContent = t("copied");
      copyStatus.textContent = t("copiedStatus");
      clearTimeout(resetTimer);
      resetTimer = setTimeout(function () {
        copyLabel.textContent = t("ctaCopy");
        copyStatus.textContent = "";
      }, 2000);
    };
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(email).then(done, function () { if (fallbackCopy(email)) done(); });
    } else if (fallbackCopy(email)) {
      done();
    }
  });

  // ---------- Descargar CV (PDF) ----------
  // Abre el diálogo de impresión; styles.css incluye una hoja de impresión A4.
  // El título se cambia para que el PDF se guarde como "Furunze Wang – CV".
  var savedTitle;
  window.addEventListener("beforeprint", function () {
    savedTitle = document.title;
    document.title = t("pdfTitle");
  });
  window.addEventListener("afterprint", function () {
    if (savedTitle) document.title = savedTitle;
  });
  document.querySelectorAll(".js-print").forEach(function (btn) {
    btn.addEventListener("click", function () { window.print(); });
  });

  // ---------- Sección activa en la navegación ----------
  var links = document.querySelectorAll(".nav-links a");
  if ("IntersectionObserver" in window && links.length) {
    var byId = {};
    links.forEach(function (a) { byId[a.getAttribute("href").slice(1)] = a; });
    var visible = {};
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) { visible[e.target.id] = e.isIntersecting; });
      var active = null;
      Object.keys(byId).forEach(function (id) { if (!active && visible[id]) active = id; });
      links.forEach(function (a) { a.removeAttribute("aria-current"); });
      if (active) byId[active].setAttribute("aria-current", "true");
    }, { rootMargin: "-45% 0px -50% 0px" });
    Object.keys(byId).forEach(function (id) {
      var sec = document.getElementById(id);
      if (sec) io.observe(sec);
    });
  }
})();
