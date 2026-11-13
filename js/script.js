/* =====================================================
   PORTFOLIO SCRIPT
   -----------------------------------------------------
   1. EDIT YOUR CONTENT in the `DATA` object below.
      Everything on the website is created from it.
   2. Leave a list empty ( [] ) or a text as "" and that
      section / card / line will be hidden automatically.
   3. The code under the DATA object does not need editing.
   ===================================================== */

const DATA = {
  /* ---------- Personal details ---------- */
  name: "Kajal Vishwakarma",
  firstName: "Kajal",
  headline: "CITS Trainee – CSA | Aspiring IT Professional",
  intro:
    "I am a CITS trainee in the CSA trade at NSTI Kanpur. I have a computer operator background, hands-on experience in reception and telecalling, and I am building my skills in Python and AI.",
  location: "Kanpur, Uttar Pradesh, India",
  email: "kkajal.2985@gmail.com",
  phone: "6386400436",
  phoneInternational: "+916386400436", // used for the tel: link
  linkedin: "https://www.linkedin.com/in/kajal-vishwakarma-382571449",
  github: "https://github.com/kkajal2985-design",
  resumeFile: "assets/documents/resume.pdf",

  /* ---------- About (each item is one paragraph) ---------- */
  about: [
    "I am Kajal Vishwakarma, currently training in the CSA trade under CITS at NSTI Kanpur (session 2026–27). I completed my ITI in COPA and hold a Bachelor of Arts degree.",
    "Before starting CITS, I worked for about one year in telecalling and reception, where I learned to handle calls, assist visitors and keep basic office records. I now want to grow in the IT field by learning new technical skills and building small projects.",
  ],

  /* ---------- Education (newest first) ---------- */
  education: [
    {
      title: "CITS – Craft Instructor Training Scheme (Trade: CSA)",
      place: "NSTI, Kanpur",
      period: "Session 2026–27",
      note: "Currently pursuing",
    },
    {
      title: "Bachelor of Arts (B.A.)",
      place: "Jhansi University, Jhansi",
      period: "", // TODO: add passing year, e.g. "2024"
      note: "",
    },
    {
      title: "ITI – COPA (Computer Operator and Programming Assistant)",
      place: "Pandit Ghanaramhariram Private ITI", // TODO: check the spelling of the institute name
      period: "", // TODO: add passing year
      note: "",
    },
    {
      title: "Class 12 – UP Board",
      place: "Prayagraj",
      period: "", // TODO: add passing year
      note: "",
    },
    {
      title: "Class 10 – UP Board",
      place: "Prayagraj",
      period: "", // TODO: add passing year
      note: "",
    },
  ],

  /* ---------- Skills (groups of tags) ---------- */
  skills: [
    {
      group: "Computer Skills",
      items: [
        "MS Excel",
        "MS PowerPoint",
        "Computer Operations",
        "Data Entry",
        "Email Handling",
        "Record Maintenance",
      ],
    },
    {
      group: "Software & Tools",
      items: ["Python (basic)", "MS Excel", "MS PowerPoint"],
    },
    {
      group: "Professional Skills",
      items: [
        "Customer Service",
        "Client Communication",
        "Telephone Handling",
        "Reception & Front Desk Support",
        "Time Management",
        "Teamwork",
      ],
    },
    {
      group: "Languages",
      items: ["Hindi", "English"],
    },
    // TODO: add a group such as { group: "Trade Skills (CSA)", items: ["..."] } when you are ready.
  ],

  /* ---------- Projects ---------- */
  projects: [
    {
      name: "Spam Mail Detector",
      description:
        "A project that classifies emails as spam or not spam to improve email safety.",
      tech: ["Python", "Machine Learning", "Natural Language Processing (NLP)"],
      contribution: "I used AI prompts to help build this project.", // TODO: add more detail about your work
      image: "assets/images/spam-detector.jpg", // add this image, or a placeholder is shown
      link: "", // TODO: paste the GitHub link of this project. The button is hidden while empty.
    },
  ],

  /* ---------- Experience & Training ---------- */
  training: [
    {
      title: "CITS Trainee – CSA",
      place: "NSTI, Kanpur",
      period: "2026–27 (current)",
      points: [], // TODO: add practical exposure, workshops or lab work you have done
    },
    {
      title: "Receptionist",
      place: "", // TODO: add company name
      period: "6 months",
      points: [
        "Welcomed visitors and helped them with their enquiries.",
        "Managed front-desk communication and directed visitors to the right departments.",
        "Supported daily office activities and maintained basic records.",
      ],
    },
    {
      title: "Telecaller",
      place: "", // TODO: add company name
      period: "6 months",
      points: [
        "Handled incoming and outgoing calls and shared information clearly.",
        "Answered customer enquiries and directed callers to the right departments.",
        "Stayed professional and helpful during customer interactions.",
      ],
    },
  ],

  /* ---------- Certifications ---------- */
  certificates: [
    {
      name: "AI Literacy",
      issuer: "IBM SkillsBuild",
      year: "2026",
      link: "https://www.credly.com/badges/dc23b0d9-77b7-44bc-aa41-231ec390d30c/public_url",
    },
  ],
};

/* =====================================================
   CODE BELOW – no need to edit
   ===================================================== */

/* ---------- Small helpers ---------- */
const $ = (sel) => document.querySelector(sel);

/** Create an element: el("div", {class:"x", text:"Hi"}, [children]) */
function el(tag, attrs = {}, children = []) {
  const node = document.createElement(tag);
  for (const [key, value] of Object.entries(attrs)) {
    if (value === undefined || value === null || value === "") continue;
    if (key === "text") node.textContent = value;
    else node.setAttribute(key, value);
  }
  [].concat(children).forEach((c) => c && node.appendChild(c));
  return node;
}

/** Attributes for links that open in a new tab */
const EXTERNAL = { target: "_blank", rel: "noopener noreferrer" };

/** Hide a section and its menu link when it has nothing to show */
function hideSection(id) {
  const section = document.getElementById(id);
  if (section) section.hidden = true;
  const link = document.querySelector(`.nav-menu a[data-section="${id}"]`);
  if (link) link.parentElement.hidden = true;
}

/* ---------- Renderers ---------- */
function renderHero() {
  $("#hero-name").textContent = DATA.name;
  $("#hero-headline").textContent = DATA.headline;
  $("#hero-intro").textContent = DATA.intro;
  $("#footer-name").textContent = DATA.name;
  $("#year").textContent = new Date().getFullYear();

  const resumeBtn = document.querySelector('.hero a[download]');
  if (resumeBtn) resumeBtn.setAttribute("href", DATA.resumeFile);
  if (!DATA.projects.length) $("#btn-projects").hidden = true;

  // Show initials if the profile photo is missing
  const img = $("#profile-img");
  const fallback = $("#photo-fallback");
  fallback.textContent = DATA.firstName.charAt(0).toUpperCase();
  img.alt = "Portrait of " + DATA.name;
  img.addEventListener("error", () => {
    img.hidden = true;
    fallback.hidden = false;
  });
}

function renderAbout() {
  if (!DATA.about.length) return hideSection("about");
  const box = $("#about-content");
  DATA.about.forEach((text) => box.appendChild(el("p", { text })));
}

function timelineItem(item) {
  const meta = [item.place, item.period].filter(Boolean).join(" • ");
  const children = [el("h3", { text: item.title })];
  if (meta) children.push(el("p", { class: "tl-meta", text: meta }));
  if (item.note) children.push(el("p", { class: "tl-sub", text: item.note }));
  if (item.points && item.points.length) {
    children.push(el("ul", {}, item.points.map((p) => el("li", { text: p }))));
  }
  return el("li", { class: "tl-item reveal" }, children);
}

function renderEducation() {
  if (!DATA.education.length) return hideSection("education");
  const list = $("#education-list");
  DATA.education.forEach((item) => list.appendChild(timelineItem(item)));
}

function renderSkills() {
  const groups = DATA.skills.filter((g) => g.items && g.items.length);
  if (!groups.length) return hideSection("skills");
  const grid = $("#skills-grid");
  groups.forEach((g) => {
    const tags = el("div", { class: "tags" }, g.items.map((s) => el("span", { class: "tag", text: s })));
    grid.appendChild(el("article", { class: "card reveal" }, [el("h3", { text: g.group }), tags]));
  });
}

function renderProjects() {
  if (!DATA.projects.length) return hideSection("projects");
  const grid = $("#projects-grid");

  DATA.projects.forEach((p) => {
    // Image area with a fallback if the image is missing
    const imgBox = el("div", { class: "project-img" });
    const placeholder = el("div", { class: "project-placeholder", text: p.name });
    if (p.image) {
      const img = el("img", { src: p.image, alt: "Screenshot of " + p.name, loading: "lazy" });
      img.addEventListener("error", () => img.replaceWith(placeholder));
      imgBox.appendChild(img);
    } else {
      imgBox.appendChild(placeholder);
    }

    const body = el("div", { class: "project-body" }, [el("h3", { text: p.name })]);
    if (p.description) body.appendChild(el("p", { text: p.description }));
    if (p.tech && p.tech.length) {
      body.appendChild(el("p", { class: "label", text: "Technologies used" }));
      body.appendChild(el("div", { class: "tags" }, p.tech.map((t) => el("span", { class: "tag", text: t }))));
    }
    if (p.contribution) {
      body.appendChild(el("p", { class: "label", text: "My contribution" }));
      body.appendChild(el("p", { text: p.contribution }));
    }
    if (p.link) {
      body.appendChild(el("a", { class: "btn btn-outline", href: p.link, text: "View on GitHub", ...EXTERNAL }));
    }

    grid.appendChild(el("article", { class: "card project-card reveal" }, [imgBox, body]));
  });
}

function renderTraining() {
  if (!DATA.training.length) return hideSection("training");
  const list = $("#training-list");
  DATA.training.forEach((item) => list.appendChild(timelineItem(item)));
}

function renderCertificates() {
  if (!DATA.certificates.length) return hideSection("certifications");
  const grid = $("#certs-grid");
  DATA.certificates.forEach((c) => {
    const meta = [c.issuer, c.year].filter(Boolean).join(" • ");
    const children = [el("h3", { text: c.name })];
    if (meta) children.push(el("p", { text: meta }));
    if (c.link) children.push(el("a", { class: "btn btn-outline", href: c.link, text: "Verify Certificate", ...EXTERNAL }));
    grid.appendChild(el("article", { class: "card reveal" }, children));
  });
}

function renderContact() {
  const rows = [
    { icon: "✉️", label: "Email", value: DATA.email, href: DATA.email && "mailto:" + DATA.email },
    { icon: "📞", label: "Phone", value: DATA.phone, href: DATA.phoneInternational && "tel:" + DATA.phoneInternational },
    { icon: "💼", label: "LinkedIn", value: "Kajal Vishwakarma", href: DATA.linkedin, external: true },
    { icon: "🐙", label: "GitHub", value: "kkajal2985-design", href: DATA.github, external: true },
    { icon: "📍", label: "Location", value: DATA.location, href: "" },
  ].filter((r) => r.value);

  if (!rows.length) return hideSection("contact");
  const list = $("#contact-list");
  rows.forEach((r) => {
    const inner = [
      el("span", { class: "c-icon", "aria-hidden": "true", text: r.icon }),
      el("span", {}, [el("span", { class: "c-label", text: r.label }), el("span", { class: "c-value", text: r.value })]),
    ];
    const node = r.href
      ? el("a", { href: r.href, ...(r.external ? EXTERNAL : {}) }, inner)
      : el("div", { class: "contact-row" }, inner);
    list.appendChild(el("li", {}, [node]));
  });
}

/* ---------- Theme toggle (saved in localStorage) ---------- */
function setupTheme() {
  const root = document.documentElement;
  $("#theme-toggle").addEventListener("click", () => {
    const next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", next);
    try { localStorage.setItem("theme", next); } catch (e) { /* storage blocked: ignore */ }
  });
}

/* ---------- Mobile menu ---------- */
function setupMenu() {
  const btn = $("#menu-toggle");
  const menu = $("#nav-menu");
  const close = () => {
    menu.classList.remove("open");
    btn.setAttribute("aria-expanded", "false");
    btn.setAttribute("aria-label", "Open menu");
  };
  btn.addEventListener("click", () => {
    const open = menu.classList.toggle("open");
    btn.setAttribute("aria-expanded", String(open));
    btn.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  });
  menu.addEventListener("click", (e) => { if (e.target.closest("a")) close(); });
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") close(); });
}

/* ---------- Scroll reveal animation ---------- */
function setupReveal() {
  const items = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window)) {
    items.forEach((i) => i.classList.add("visible"));
    return;
  }
  const io = new IntersectionObserver(
    (entries) => entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        io.unobserve(entry.target);
      }
    }),
    { threshold: 0.12 }
  );
  items.forEach((i) => io.observe(i));
}

/* ---------- Highlight the active menu link while scrolling ---------- */
function setupScrollSpy() {
  const links = [...document.querySelectorAll(".nav-menu a")];
  const sections = links
    .map((a) => document.getElementById(a.dataset.section))
    .filter((s) => s && !s.hidden);
  if (!("IntersectionObserver" in window)) return;

  const io = new IntersectionObserver(
    (entries) => entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      links.forEach((a) => a.classList.toggle("active", a.dataset.section === entry.target.id));
    }),
    { rootMargin: "-45% 0px -50% 0px" }
  );
  sections.forEach((s) => io.observe(s));
}

/* ---------- Back-to-top button ---------- */
function setupToTop() {
  const btn = $("#to-top");
  window.addEventListener("scroll", () => { btn.hidden = window.scrollY < 600; }, { passive: true });
  btn.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
}

/* ---------- Start ---------- */
document.addEventListener("DOMContentLoaded", () => {
  renderHero();
  renderAbout();
  renderEducation();
  renderSkills();
  renderProjects();
  renderTraining();
  renderCertificates();
  renderContact();

  setupTheme();
  setupMenu();
  setupReveal();
  setupScrollSpy();
  setupToTop();
});
