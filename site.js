const translations = {
  zh: {
    title: "SleeePal 睡眠宝 — 睡眠，才是最好的奢侈品",
    description: "睡眠才是最好的奢侈品。SleeePal 睡眠宝，用主动近场降噪技术，无需安眠药，在枕边建立宁静区，守护你和家人的香甜睡眠。",
    "nav.philosophy": "理念",
    "nav.science": "原理",
    "nav.features": "功能",
    "nav.visual": "可视化",
    "nav.cta": "立即体验",
    "hero.pretitle": "QuietZone™ 近场宁静区守护技术 · sleeepal.com",
    "hero.kicker": "您从未拥有过",
    "hero.headline": "<em>这样的宁静</em>",
    "hero.sub": "睡眠，才是最好的奢侈品。<br/>良好的睡眠，胜过任何名贵护肤品，胜过任何昂贵保健品，<br/>甚至胜过安眠药——而您终于拥有了守护它的方式。",
    "hero.brand": "<strong>SleeePal 睡眠宝</strong>，守护你和家人的睡眠。",
    "hero.primary": "免费下载 · Mac 版",
    "hero.secondary": "了解近场宁静技术",
    "marquee.1": "44,100 SAMPLES PER SECOND",
    "marquee.2": "近场宁静区  · 您周围的安静",
    "marquee.3": "THE BEST QUIET YOU'VE NEVER HEARD",
    "marquee.4": "睡眠才是最好的奢侈品",
    "marquee.5": "无需安眠药",
    "marquee.6": "QuietZone™ TECHNOLOGY",
    "marquee.7": "守护家人睡眠",
    "download.eyebrow": "开始你的宁静之夜",
    "download.title": "睡眠宝，<br/>今晚就陪着你",
    "download.sub": "免费下载 · Mac 桌面版 · 无需注册",
    "download.button": "下载 Mac 版（免费）",
    "download.sysreq": "macOS 12+ · Apple Silicon & Intel · 约 85 MB",
    "download.coming1": "iOS App",
    "download.coming2": "Android",
    "download.coming3": "Windows",
    "download.coming4": "即将推出",
    "footer.tagline": "睡眠，才是最好的奢侈品。",
    "footer.product": "产品",
    "footer.product1": "工作原理",
    "footer.product2": "核心功能",
    "footer.product3": "可视化",
    "footer.product4": "免费下载",
    "footer.people": "适用人群",
    "footer.people1": "已婚女性",
    "footer.people2": "育儿妈妈",
    "footer.people3": "午睡守护",
    "footer.about": "关于",
    "footer.about1": "隐私政策",
    "footer.about2": "使用条款",
    "footer.about3": "联系我们",
    "footer.copy": "© 2026 SleeePal 睡眠宝 · sleeepal.com",
    "footer.disclaimer": "SleeePal 为非药物助眠辅助工具，不构成医疗建议或诊断。理论效果因实际空间、设备及摆位不同而存在差异。"
  },
  en: {
    title: "SleeePal — Sleep Is the Finest Luxury",
    description: "SleeePal uses local-first near-field active cancellation to build a quiet zone beside the pillow, without sleep medication, and without uploading user audio.",
    "nav.philosophy": "Philosophy",
    "nav.science": "Science",
    "nav.features": "Features",
    "nav.visual": "Visuals",
    "nav.cta": "Try it",
    "hero.pretitle": "QuietZone™ Near-Field Quiet Keeping · sleeepal.com",
    "hero.kicker": "The quiet",
    "hero.headline": "<em>you have never owned before</em>",
    "hero.sub": "Sleep is the finest luxury.<br/>Better sleep outlasts expensive skincare, expensive supplements,<br/>and even the false promise of sleep drugs.",
    "hero.brand": "<strong>SleeePal</strong> keeps sleep sacred for you and your family.",
    "hero.primary": "Free download · Mac",
    "hero.secondary": "See the near-field science",
    "marquee.1": "44,100 SAMPLES PER SECOND",
    "marquee.2": "NEAR-FIELD QUIET · CALM AROUND YOUR PILLOW",
    "marquee.3": "THE BEST QUIET YOU'VE NEVER HEARD",
    "marquee.4": "SLEEP IS THE FINEST LUXURY",
    "marquee.5": "NO SLEEP MEDICATION",
    "marquee.6": "QUIETZONE™ TECHNOLOGY",
    "marquee.7": "KEEPING FAMILY SLEEP SAFE",
    "download.eyebrow": "Begin a quieter night",
    "download.title": "SleeePal,<br/>starting tonight",
    "download.sub": "Free download · Mac desktop edition · No sign-up",
    "download.button": "Download for Mac",
    "download.sysreq": "macOS 12+ · Apple Silicon & Intel · about 85 MB",
    "download.coming1": "iOS App",
    "download.coming2": "Android",
    "download.coming3": "Windows",
    "download.coming4": "Coming soon",
    "footer.tagline": "Sleep is the finest luxury.",
    "footer.product": "Product",
    "footer.product1": "How it works",
    "footer.product2": "Core features",
    "footer.product3": "Visualization",
    "footer.product4": "Free download",
    "footer.people": "For",
    "footer.people1": "Partners of snorers",
    "footer.people2": "Mothers",
    "footer.people3": "Power naps",
    "footer.about": "About",
    "footer.about1": "Privacy",
    "footer.about2": "Terms",
    "footer.about3": "Contact",
    "footer.copy": "© 2026 SleeePal · sleeepal.com",
    "footer.disclaimer": "SleeePal is a non-medical sleep assistance tool. It does not provide diagnosis or medical advice. Real-world performance depends on space, hardware, and placement."
  }
};

const root = document.documentElement;
const titleEl = document.querySelector("#page-title");
const descEl = document.querySelector("#page-description");
const toggle = document.querySelector("[data-lang-toggle]");

function applyLanguage(lang) {
  const copy = translations[lang] || translations.zh;
  root.lang = lang === "en" ? "en" : "zh-CN";
  document.title = copy.title;
  if (titleEl) titleEl.textContent = copy.title;
  if (descEl) descEl.setAttribute("content", copy.description);

  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const key = node.getAttribute("data-i18n");
    if (copy[key]) node.textContent = copy[key];
  });

  document.querySelectorAll("[data-i18n-html]").forEach((node) => {
    const key = node.getAttribute("data-i18n-html");
    if (copy[key]) node.innerHTML = copy[key];
  });

  if (toggle) toggle.textContent = lang === "zh" ? "EN" : "中文";
  localStorage.setItem("sleeepal-lang", lang);
}

const initialLang = localStorage.getItem("sleeepal-lang") || "zh";
applyLanguage(initialLang);

toggle?.addEventListener("click", () => {
  const next = (localStorage.getItem("sleeepal-lang") || "zh") === "zh" ? "en" : "zh";
  applyLanguage(next);
});
