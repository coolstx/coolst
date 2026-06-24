const year = document.querySelector("#year");
const themeToggle = document.querySelector(".theme-toggle");
const themeIcon = document.querySelector(".theme-icon");
const languageToggle = document.querySelector(".language-toggle");
const paletteControl = document.querySelector(".palette-control");
const paletteToggle = document.querySelector(".palette-toggle");
const paletteButtons = document.querySelectorAll(".palette-panel [data-palette]");
const copyEmailButton = document.querySelector(".copy-email");
const printPortfolioButton = document.querySelector(".print-portfolio");
const toast = document.querySelector(".toast");
const terminalCommands = document.querySelectorAll(".terminal-command");
const revealItems = document.querySelectorAll(
  ".section, .terminal-card, .project-card, .proof-card, .skill-list li, .profile-button, .contact-action, .contact-panel a",
);

const copy = {
  mn: {
    pageTitle: "Эрдэнэбаяр Үйлстөгөлдөр | Portfolio",
    pageDescription:
      "Эрдэнэбаяр Үйлстөгөлдөрийн кибер аюулгүй байдал, fullstack хөгжүүлэлт, алгоритм болон төслийн portfolio.",
    brand: "Үйлстөгөлдөр",
    navAbout: "Тухай",
    navWork: "Төслүүд",
    navSkills: "Чадвар",
    navProof: "Амжилт",
    navProfiles: "Профайл",
    navContact: "Холбоо",
    availability: "Төсөлд нээлттэй",
    heroEyebrow: "Сурагч • Cybersecurity • Fullstack • Algorithms",
    heroName: "Эрдэнэбаяр Үйлстөгөлдөр",
    heroCopy:
      "Би кибер аюулгүй байдал, fullstack хөгжүүлэлт, алгоритмын бодлого бодолтод төвлөрдөг сурагч. Систем, автоматжуулалт, browser extension зэрэг бодит хэрэглээнд ойр бүтээгдэхүүн бүтээх дуртай.",
    viewProjects: "Төслүүд үзэх",
    emailMe: "Имэйл бичих",
    printPortfolio: "Хэвлэх",
    aboutKicker: "Тухай",
    aboutTitle: "Аюулгүй, хурдан, хэрэглэгчдэд ойлгомжтой шийдэл бүтээхийг зорьдог.",
    aboutCopy:
      "Намайг Эрдэнэбаярын Үйлстөгөлдөр гэдэг. Би сурагч бөгөөд кибер аюулгүй байдал, fullstack хөгжүүлэлт, algorithm competitive problem solving чиглэлээр өөрийгөө хөгжүүлж байна. Веб систем, автоматжуулалтын хэрэгсэл, browser extension зэрэг бодит хэрэглээнд ойр төслүүд дээр ажилладаг.",
    terminalOne: "secure fullstack tools бүтээж байна",
    terminalTwo: "algorithm problem solving хийж байна",
    terminalThree: "browser automation санаанууд туршиж байна",
    workKicker: "Сонгосон ажлууд",
    workTitle: "Төслүүд",
    projectOneType: "Fullstack систем",
    projectOneTitle: "Сургуулийн удирдлага, тайлангийн цогц систем",
    projectOneCopy:
      "Сургуулийн багш, сурагч, эцэг эхийг холбож өгсөн удирдлага болон тайлангийн систем. Мэдээлэл дамжуулалт, хэрэглэгчийн үүрэг, тайлан харах урсгалыг нэг дор цэгцлэх зорилготой.",
    projectTwoType: "Automation",
    projectTwoTitle: "Яриаг текст болгон автоматаар шивэх програм",
    projectTwoCopy:
      "Ярьсан яриаг текст болгон хөрвүүлж, курсор байрлаж байгаа хэсэгт автоматаар шивэх хэрэгсэл. Бичих хурдыг нэмэгдүүлэх, өдөр тутмын ажлыг хөнгөвчлөх автоматжуулалт дээр төвлөрсөн.",
    projectThreeType: "Browser extension",
    projectThreeTitle: "Шатрын анализ, зөвлөмжийн extension",
    projectThreeCopy:
      "Chess.com, Lichess.org зэрэг шатрын хуудсан дээр боломжит нүүдэл, зөвлөмж, анализ харуулах олон үйлдэлт extension. Сургалт, анализ, туршилтын зориулалттай browser хэрэгсэл болгон хөгжүүлсэн.",
    skillsKicker: "Чадвар",
    skillsTitle: "Технологи ба чиглэлүүд",
    proofKicker: "Амжилт ба нотолгоо",
    proofTitle: "Эрэмбэ, badge, certificate",
    spojCopy:
      "RGB7 ranking дээр 575.00 оноотойгоор 3-р байрт бичигдсэн. Энэ нь алгоритмын бодлого бодох хурд, тогтмол бэлтгэл, шийдэл олох чадварыг харуулдаг.",
    badgesTitle: "Badges",
    badgesCopy:
      "HackerRank дээр Problem Solving болон C++ badge авсан. Энэ нь алгоритмын сэтгэлгээ, C++ хэлний суурь, бодлогыг задлан шийдэх чадварыг харуулна.",
    certTitle: "Certifications",
    certCopy:
      "Python Basic, CSS Basic, Problem Solving Basic certificate-үүд баталгаажсан. Эдгээр нь Python scripting, web styling, алгоритмын үндсэн ойлголтын суурийг харуулдаг.",
    profilesKicker: "Профайл",
    profilesTitle: "Coding болон social links",
    contactKicker: "Холбоо барих",
    contactTitle: "Хамтран ажиллах, төсөл ярилцахад нээлттэй.",
    copyEmail: "Хуулах",
    requestCv: "CV хүсэх",
    copiedToast: "Имэйл хуулагдлаа",
    footerName: "Эрдэнэбаяр Үйлстөгөлдөр",
    backTop: "Дээш очих",
  },
  en: {
    pageTitle: "Erdenebayar Uilstuguldur | Portfolio",
    pageDescription:
      "Portfolio of Erdenebayar Uilstuguldur, focused on cybersecurity, fullstack development, algorithms, and practical software projects.",
    brand: "Uilstuguldur",
    navAbout: "About",
    navWork: "Projects",
    navSkills: "Skills",
    navProof: "Proof",
    navProfiles: "Profiles",
    navContact: "Contact",
    availability: "Available for projects",
    heroEyebrow: "Student • Cybersecurity • Fullstack • Algorithms",
    heroName: "Erdenebayar Uilstuguldur",
    heroCopy:
      "I am a student focused on cybersecurity, fullstack development, and competitive algorithm problem solving. I enjoy building practical systems, automation tools, and browser extensions that solve real problems.",
    viewProjects: "View projects",
    emailMe: "Email me",
    printPortfolio: "Print",
    aboutKicker: "About",
    aboutTitle: "I build secure, fast, and user-friendly software solutions.",
    aboutCopy:
      "My name is Erdenebayar Uilstuguldur. I am a student developing my skills in cybersecurity, fullstack development, and competitive algorithm problem solving. I work on practical projects such as web systems, automation utilities, and browser extensions.",
    terminalOne: "building secure fullstack tools",
    terminalTwo: "solving algorithm problems",
    terminalThree: "shipping browser automation ideas",
    workKicker: "Selected work",
    workTitle: "Projects",
    projectOneType: "Fullstack system",
    projectOneTitle: "School management and reporting platform",
    projectOneCopy:
      "A complete management and reporting system that connects teachers, students, and parents. It focuses on organized communication, role-based access, and clear reporting flows.",
    projectTwoType: "Automation",
    projectTwoTitle: "Speech-to-text auto typing tool",
    projectTwoCopy:
      "A utility that converts spoken words into text and automatically types them at the active cursor position. It is built to speed up writing and reduce repetitive daily work.",
    projectThreeType: "Browser extension",
    projectThreeTitle: "Chess analysis and recommendation extension",
    projectThreeCopy:
      "A multi-feature browser extension for chess platforms such as Chess.com and Lichess.org. It explores move suggestions, analysis, and training-oriented browser automation.",
    skillsKicker: "Skills",
    skillsTitle: "Technologies and focus areas",
    proofKicker: "Proof and achievements",
    proofTitle: "Rankings, Badges & Certifications",
    spojCopy:
      "Ranked #3 on the RGB7 leaderboard with a score of 575.00, showing consistent algorithm practice and fast problem-solving ability.",
    badgesTitle: "Badges",
    badgesCopy:
      "Earned HackerRank badges in Problem Solving and C++, highlighting algorithmic thinking, C++ fundamentals, and structured problem-solving skill.",
    certTitle: "Certifications",
    certCopy:
      "Verified HackerRank certificates in Python Basic, CSS Basic, and Problem Solving Basic, covering scripting, web styling, and algorithm fundamentals.",
    profilesKicker: "Profiles",
    profilesTitle: "Coding and social links",
    contactKicker: "Contact",
    contactTitle: "Open to collaboration, projects, and technical conversations.",
    copyEmail: "Copy",
    requestCv: "Request CV",
    copiedToast: "Email copied",
    footerName: "Erdenebayar Uilstuguldur",
    backTop: "Back to top",
  },
};

if (year) {
  year.textContent = new Date().getFullYear();
}

function getStoredValue(key) {
  try {
    return localStorage.getItem(key);
  } catch {
    return null;
  }
}

function setStoredValue(key, value) {
  try {
    localStorage.setItem(key, value);
  } catch {
    // Controls still work for the current session if storage is unavailable.
  }
}

let terminalRunId = 0;

function sleep(ms) {
  return new Promise((resolve) => window.setTimeout(resolve, ms));
}

async function typeTerminal(dictionary) {
  const runId = ++terminalRunId;
  const commands = ["terminalOne", "terminalTwo", "terminalThree"];
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const compactPointer = window.matchMedia("(pointer: coarse)").matches;
  const compactViewport = window.matchMedia("(max-width: 820px)").matches;

  terminalCommands.forEach((command) => {
    command.textContent = "";
  });

  for (let index = 0; index < commands.length; index += 1) {
    const element = terminalCommands[index];
    const text = dictionary[commands[index]] || "";
    if (!element) continue;

    if (reduceMotion || compactPointer || compactViewport) {
      element.textContent = text;
      continue;
    }

    for (const character of text) {
      if (runId !== terminalRunId) return;
      element.textContent += character;
      await sleep(12);
    }

    await sleep(120);
  }
}

function applyTheme(theme) {
  const isDark = theme === "dark";
  document.body.classList.toggle("dark", isDark);

  if (themeToggle) {
    themeToggle.setAttribute("aria-pressed", String(isDark));
  }

  if (themeIcon) {
    themeIcon.textContent = isDark ? "☀" : "☾";
  }
}

function applyLanguage(language) {
  const dictionary = copy[language] || copy.mn;
  document.documentElement.lang = language;
  document.title = dictionary.pageTitle;

  const description = document.querySelector('meta[name="description"]');
  if (description) {
    description.setAttribute("content", dictionary.pageDescription);
  }

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.getAttribute("data-i18n");
    if (key && dictionary[key]) {
      element.textContent = dictionary[key];
    }
  });

  if (languageToggle) {
    languageToggle.textContent = language === "mn" ? "EN" : "MN";
    languageToggle.dataset.lang = language;
    languageToggle.setAttribute(
      "aria-label",
      language === "mn" ? "Switch to English" : "Монгол хэл рүү солих",
    );
  }

  typeTerminal(dictionary);
}

function applyPalette(palette) {
  const selectedPalette = palette || "default";
  document.body.dataset.palette = selectedPalette;

  paletteButtons.forEach((button) => {
    const isActive = button.dataset.palette === selectedPalette;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });
}

function closePalettePanel() {
  if (!paletteControl || !paletteToggle) return;
  paletteControl.classList.remove("is-open");
  paletteToggle.setAttribute("aria-expanded", "false");
}

function showToast() {
  if (!toast) return;
  toast.classList.add("is-visible");
  window.clearTimeout(showToast.timeoutId);
  showToast.timeoutId = window.setTimeout(() => {
    toast.classList.remove("is-visible");
  }, 1800);
}

async function copyText(text) {
  if (navigator.clipboard?.writeText) {
    try {
      await navigator.clipboard.writeText(text);
      return;
    } catch {
      // Fall through to the textarea fallback.
    }
  }

  const textarea = document.createElement("textarea");
  textarea.value = text;
  textarea.setAttribute("readonly", "");
  textarea.style.position = "fixed";
  textarea.style.opacity = "0";
  document.body.append(textarea);
  textarea.select();
  document.execCommand("copy");
  textarea.remove();
}

const savedTheme = getStoredValue("portfolio-theme");
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
applyTheme(savedTheme || (prefersDark ? "dark" : "light"));

const savedLanguage = getStoredValue("portfolio-language") || "mn";
applyLanguage(savedLanguage);

const savedPalette = getStoredValue("portfolio-palette") || "default";
applyPalette(savedPalette);

const enablePointerGlow =
  !window.matchMedia("(prefers-reduced-motion: reduce)").matches &&
  !window.matchMedia("(pointer: coarse)").matches &&
  !window.matchMedia("(max-width: 820px)").matches;

let cursorFrame = 0;
if (enablePointerGlow) {
  document.addEventListener("pointermove", (event) => {
    window.cancelAnimationFrame(cursorFrame);
    cursorFrame = window.requestAnimationFrame(() => {
      document.body.style.setProperty("--cursor-x", `${event.clientX}px`);
      document.body.style.setProperty("--cursor-y", `${event.clientY}px`);
    });
  });
}

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    const nextTheme = document.body.classList.contains("dark") ? "light" : "dark";
    setStoredValue("portfolio-theme", nextTheme);
    applyTheme(nextTheme);
  });
}

if (languageToggle) {
  languageToggle.addEventListener("click", () => {
    const currentLanguage = languageToggle.dataset.lang || "mn";
    const nextLanguage = currentLanguage === "mn" ? "en" : "mn";
    setStoredValue("portfolio-language", nextLanguage);
    applyLanguage(nextLanguage);
  });
}

if (printPortfolioButton) {
  printPortfolioButton.addEventListener("click", () => {
    window.print();
  });
}

if (copyEmailButton) {
  copyEmailButton.addEventListener("click", async () => {
    const email = copyEmailButton.dataset.copy || "uilstuguldur@mail.com";
    try {
      await copyText(email);
    } finally {
      showToast();
    }
  });
}

if (paletteToggle && paletteControl) {
  paletteToggle.addEventListener("click", () => {
    const isOpen = paletteControl.classList.toggle("is-open");
    paletteToggle.setAttribute("aria-expanded", String(isOpen));
  });
}

paletteButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const nextPalette = button.dataset.palette || "default";
    setStoredValue("portfolio-palette", nextPalette);
    applyPalette(nextPalette);
    closePalettePanel();
  });
});

document.addEventListener("click", (event) => {
  if (paletteControl && !paletteControl.contains(event.target)) {
    closePalettePanel();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closePalettePanel();
  }
});

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.16 },
  );

  revealItems.forEach((item, index) => {
    const section = item.closest(".section");
    const siblings = section
      ? [
          ...section.querySelectorAll(
            ".terminal-card, .project-card, .proof-card, .skill-list li, .profile-button, .contact-action, .contact-panel a",
          ),
        ]
      : [];
    const siblingIndex = siblings.indexOf(item);
    const delay = siblingIndex >= 0 ? Math.min(siblingIndex * 70, 420) : Math.min(index * 20, 120);

    item.classList.add("reveal");
    item.style.setProperty("--reveal-delay", `${delay}ms`);
    observer.observe(item);
  });
} else {
  revealItems.forEach((item) => item.classList.add("is-visible"));
}
