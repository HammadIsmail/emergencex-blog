import './style.css';
import htmx from 'htmx.org';
import { 
  createIcons, 
  icons,
  Sparkles,
  Clock,
  Calendar,
  Share2,
  Copy,
  Check,
  Search,
  BookOpen,
  Bookmark,
  Layers,
  HelpCircle,
  Plane,
  Flame,
  Sliders,
  Cpu,
  Activity,
  User,
  Radar,
  Building2,
  MapPin,
  Wrench,
  CloudSun,
  ShieldCheck,
  AlertTriangle,
  GraduationCap,
  ChevronLeft,
  ChevronRight,
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  MessageSquare,
  Send,
  GitFork,
  Network,
  Sun,
  Moon,
  BookMarked,
  Menu,
  X,
  Type
} from 'lucide';

// Make HTMX available globally
window.htmx = htmx;

// Initialize Lucide icons helper
function renderIcons() {
  createIcons({
    icons: {
      Sparkles,
      Clock,
      Calendar,
      Share2,
      Copy,
      Check,
      Search,
      BookOpen,
      Bookmark,
      Layers,
      HelpCircle,
      Plane,
      Flame,
      Sliders,
      Cpu,
      Activity,
      User,
      Radar,
      Building2,
      MapPin,
      Wrench,
      CloudSun,
      ShieldCheck,
      AlertTriangle,
      GraduationCap,
      ChevronLeft,
      ChevronRight,
      ArrowLeft,
      ArrowRight,
      ExternalLink,
      MessageSquare,
      Send,
      GitFork,
      Network,
      Sun,
      Moon,
      BookMarked,
      Menu,
      X,
      Type
    }
  });
}

// ----------------------------------------------------
// Theme Management (Light, Dark, Sepia)
// ----------------------------------------------------
function initTheme() {
  const savedTheme = localStorage.getItem('emergence_theme') || 'light';
  applyTheme(savedTheme);

  document.querySelectorAll('[data-theme-btn]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const targetTheme = btn.getAttribute('data-theme-btn');
      applyTheme(targetTheme);
    });
  });
}

function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('emergence_theme', theme);

  document.querySelectorAll('[data-theme-btn]').forEach(btn => {
    const isCurrent = btn.getAttribute('data-theme-btn') === theme;
    if (isCurrent) {
      btn.classList.add('bg-[var(--accent)]', 'text-white');
      btn.classList.remove('bg-transparent', 'text-[var(--text-muted)]');
    } else {
      btn.classList.remove('bg-[var(--accent)]', 'text-white');
      btn.classList.add('bg-transparent', 'text-[var(--text-muted)]');
    }
  });
}

// ----------------------------------------------------
// Font Size Scaling for Urdu Nastaliq
// ----------------------------------------------------
function initFontSize() {
  const container = document.getElementById('main-content');
  const savedSize = localStorage.getItem('emergence_font_size') || 'md';
  applyFontSize(savedSize);

  document.querySelectorAll('[data-font-size]').forEach(btn => {
    btn.addEventListener('click', () => {
      const size = btn.getAttribute('data-font-size');
      applyFontSize(size);
    });
  });
}

function applyFontSize(size) {
  const container = document.getElementById('main-content');
  if (!container) return;

  container.classList.remove('urdu-size-sm', 'urdu-size-md', 'urdu-size-lg');
  container.classList.add(`urdu-size-${size}`);
  localStorage.setItem('emergence_font_size', size);

  document.querySelectorAll('[data-font-size]').forEach(btn => {
    const isCurrent = btn.getAttribute('data-font-size') === size;
    if (isCurrent) {
      btn.classList.add('bg-[var(--bg-card)]', 'text-[var(--accent)]', 'border-[var(--accent-border)]');
      btn.classList.remove('text-[var(--text-muted)]', 'border-transparent');
    } else {
      btn.classList.remove('bg-[var(--bg-card)]', 'text-[var(--accent)]', 'border-[var(--accent-border)]');
      btn.classList.add('text-[var(--text-muted)]', 'border-transparent');
    }
  });
}

// ----------------------------------------------------
// Reading Progress Bar
// ----------------------------------------------------
function initReadingProgress() {
  const progressBar = document.getElementById('reading-progress-bar');
  if (!progressBar) return;

  window.addEventListener('scroll', () => {
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    if (totalHeight <= 0) {
      progressBar.style.width = '0%';
      return;
    }
    const progress = (window.scrollY / totalHeight) * 100;
    progressBar.style.width = `${Math.min(100, Math.max(0, progress))}%`;
  }, { passive: true });
}

// ----------------------------------------------------
// Interactive Lens Component (Complicated vs Complex)
// ----------------------------------------------------
function bindInteractiveLens() {
  const btnComplicated = document.getElementById('tab-complicated');
  const btnComplex = document.getElementById('tab-complex');
  const contentComplicated = document.getElementById('lens-content-complicated');
  const contentComplex = document.getElementById('lens-content-complex');

  if (!btnComplicated || !btnComplex) return;

  btnComplicated.addEventListener('click', () => {
    btnComplicated.classList.add('bg-[var(--bg-card)]', 'text-[var(--accent)]', 'shadow-xs');
    btnComplicated.classList.remove('text-[var(--text-muted)]');
    btnComplex.classList.remove('bg-[var(--bg-card)]', 'text-[var(--accent)]', 'shadow-xs');
    btnComplex.classList.add('text-[var(--text-muted)]');

    contentComplicated?.classList.remove('hidden');
    contentComplex?.classList.add('hidden');
  });

  btnComplex.addEventListener('click', () => {
    btnComplex.classList.add('bg-[var(--bg-card)]', 'text-[var(--accent)]', 'shadow-xs');
    btnComplex.classList.remove('text-[var(--text-muted)]');
    btnComplicated.classList.remove('bg-[var(--bg-card)]', 'text-[var(--accent)]', 'shadow-xs');
    btnComplicated.classList.add('text-[var(--text-muted)]');

    contentComplex?.classList.remove('hidden');
    contentComplicated?.classList.add('hidden');
  });
}

// ----------------------------------------------------
// Citation & Share Utilities
// ----------------------------------------------------
function bindArticleActions() {
  const lectureData = {
    1: {
      citation: `ڈاکٹر محمد یاسر (2024). ہجوم میں ہر فرد اپنی راہ خود تلاش کرتا ہے — لیکچر 1. EmergenceX: انٹر ڈسپلنری کمپلیکسٹی سائنس لیب، UET لاہور، فیصل آباد کیمپس۔`,
      title: 'ہجوم میں ہر فرد اپنی راہ خود تلاش کرتا ہے — لیکچر 01',
      desc: 'حج، کُمبھ میلہ اور کراؤڈ ڈائنامکس — EmergenceX Lab'
    },
    2: {
      citation: `ڈاکٹر محمد یاسر (2024). فرد قائم ربطِ ملت سے ہے، تنہا کچھ نہیں — لیکچر 2. EmergenceX: انٹر ڈسپلنری کمپلیکسٹی سائنس لیب، UET لاہور، فیصل آباد کیمپس۔`,
      title: 'فرد قائم ربطِ ملت سے ہے — لیکچر 02',
      desc: 'علامہ اقبال، پرندوں کا غول اور سیلف آرگنائزیشن — EmergenceX Lab'
    },
    3: {
      citation: `ڈاکٹر محمد یاسر (2024). ہر مشکل نظام Complex نہیں ہوتا (Complicated V/S Complex) — لیکچر 3. EmergenceX: انٹر ڈسپلنری کمپلیکسٹی سائنس لیب، UET لاہور، فیصل آباد کیمپس۔`,
      title: 'ہر مشکل نظام Complex نہیں ہوتا — لیکچر 03',
      desc: 'Boeing 747 بمقابلہ Geese V-Formation — EmergenceX Lab'
    },
    4: {
      citation: `ڈاکٹر محمد یاسر (2024). پیچیدگی اور ایجنٹ بیسڈ ماڈلنگ (Complexity and Agent-based Modeling) — لیکچر 4. EmergenceX: انٹر ڈسپلنری کمپلیکسٹی سائنس لیب، UET لاہور، فیصل آباد کیمپس۔`,
      title: 'پیچیدگی اور ایجنٹ بیسڈ ماڈلنگ — لیکچر 04',
      desc: 'ڈاکٹر محمد یاسر کی سسٹمز تھنکنگ اور کمپلیکسٹی سائنس پر تحریر'
    },
    5: {
      citation: `ڈاکٹر محمد یاسر (2024). Computer Science کے طلبہ اور Researchers کو Agent-Based Modeling کیوں سیکھنی چاہیے؟ — لیکچر 5. EmergenceX: انٹر ڈسپلنری کمپلیکسٹی سائنس لیب، UET لاہور، فیصل آباد کیمپس۔`,
      title: 'Computer Science اور Agent-Based Modeling — لیکچر 05',
      desc: 'سائبر سیکیورٹی، نیٹ ورک سیگمنٹیشن اور مفروضات کا عملی ماڈل — EmergenceX Lab'
    },
    6: {
      citation: `ڈاکٹر محمد یاسر (2024). کیا ایک خلیے (Cell) کے رویّے سے پورے ٹیومر کی کہانی سمجھی جا سکتی ہے؟ — لیکچر 6. EmergenceX: انٹر ڈسپلنری کمپلیکسٹی سائنس لیب، UET لاہور، فیصل آباد کیمپس۔`,
      title: 'کیا ایک خلیے کے رویّے سے پورے ٹیومر کی کہانی سمجھی جا سکتی ہے؟ — لیکچر 06',
      desc: 'آنکولوجی اور کینسر بائیولوجی میں ایجنٹ بیسڈ ماڈلنگ — EmergenceX Lab'
    },
    7: {
      citation: `ڈاکٹر محمد یاسر (2024). نتیجہ ہمیشہ کہانی کا اختتام نہیں ہوتا: Reinforcing Feedback — لیکچر 7. EmergenceX: انٹر ڈسپلنری کمپلیکسٹی سائنس لیب، UET لاہور، فیصل آباد کیمپس۔`,
      title: 'نتیجہ ہمیشہ کہانی کا اختتام نہیں ہوتا: Reinforcing Feedback — لیکچر 07',
      desc: 'سسٹمز تھنکنگ اور فیڈ بیک لوپس — EmergenceX Lab'
    },
    8: {
      citation: `ڈاکٹر محمد یاسر (2024). مسلسل بڑھتی ہوئی تبدیلی کو کیسے روکیں؟ متوازن فیڈبیک (Balancing Feedback) — لیکچر 8. EmergenceX: انٹر ڈسپلنری کمپلیکسٹی سائنس لیب، UET لاہور، فیصل آباد کیمپس۔`,
      title: 'مسلسل بڑھتی ہوئی تبدیلی کو کیسے روکیں؟ Balancing Feedback — لیکچر 08',
      desc: 'سسٹمز میں بیلنسنگ فیڈبیک لوپس اور مطلوبہ حالت — EmergenceX Lab'
    },
    9: {
      citation: `ڈاکٹر محمد یاسر (2024). اب ہم سسٹمز کو کمپیوٹر میں ماڈل اور تجربہ کریں گے — لیکچر 9. EmergenceX: انٹر ڈسپلنری کمپلیکسٹی سائنس لیب، UET لاہور، فیصل آباد کیمپس۔`,
      title: 'سسٹمز تھنکنگ سے کمپیوٹیشنل ماڈلنگ تک — لیکچر 09',
      desc: 'ٹریفک جام ایمرجنس اور کمپیوٹیشنل ایکسپیریمنٹس — EmergenceX Lab'
    },
    10: {
      citation: `ڈاکٹر محمد یاسر (2024). ایجنٹ بیسڈ ماڈلنگ (ABM) شروع کرنی ہے—لیکن کس Tool سے؟ — لیکچر 10. EmergenceX: انٹر ڈسپلنری کمپلیکسٹی سائنس لیب، UET لاہور، فیصل آباد کیمپس۔`,
      title: 'ایجنٹ بیسڈ ماڈلنگ شروع کرنی ہے—لیکن کس Tool سے؟ — لیکچر 10',
      desc: 'NetLogo, Mesa, GAMA, Repast اور AnyLogic کا موازنہ — EmergenceX Lab'
    }
  };

  Object.entries(lectureData).forEach(([num, item]) => {
    const copyBtns = [
      document.getElementById(`copy-citation-btn-${num}`),
      num === '4' ? document.getElementById('copy-citation-btn') : null
    ].filter(Boolean);

    copyBtns.forEach(btn => {
      btn.onclick = () => {
        navigator.clipboard.writeText(item.citation).then(() => {
          showToast(`لیکچر ${num.padStart(2, '0')} کا حوالہ کاپی ہو گیا!`);
        });
      };
    });

    const shareBtns = [
      document.getElementById(`share-lecture-btn-${num}`),
      num === '4' ? document.getElementById('share-lecture-btn') : null
    ].filter(Boolean);

    shareBtns.forEach(btn => {
      btn.onclick = () => {
        handleShare(item.title, item.desc);
      };
    });
  });
}

function handleShare(title, text) {
  if (navigator.share) {
    navigator.share({
      title,
      text,
      url: window.location.href,
    }).catch(() => {});
  } else {
    navigator.clipboard.writeText(window.location.href).then(() => {
      showToast('لنک کاپی ہو گیا ہے!');
    });
  }
}

// ----------------------------------------------------
// Interactive Hypothesis Tester for Lecture 6 (Cancer ABM)
// ----------------------------------------------------
function bindHypothesisTester() {
  const btn1 = document.getElementById('hypo-btn-1');
  const btn2 = document.getElementById('hypo-btn-2');
  const btn3 = document.getElementById('hypo-btn-3');
  const displayBox = document.getElementById('hypo-display-box');

  if (!btn1 || !btn2 || !btn3 || !displayBox) return;

  const hypotheses = {
    1: {
      tag: 'Biological Parameter: Oxygen Gradient',
      title: 'نتیجہ: مرکزی مردہ کور (Necrotic Core) کا ظہور',
      body: 'جب خلیاتی ایجنٹس کے قوانین میں یہ اصول طے کیا جاتا ہے کہ آکسیجن کی سطح 0.02 سے کم ہونے پر خلیہ ہلاک ہو جائے گا، تو سیمولیشن میں بیرونی خلیے تیزی سے پھیلتے ہیں جبکہ اندرونی خلیے مر کر نیوکروٹک کور بناتے ہیں۔ یہ پیٹرن بغیر کسی بیرونی ہدایت کے خود بخود (Emergent) وجود میں آتا ہے۔'
    },
    2: {
      tag: 'Biological Parameter: Immune Infiltration (T-Cells)',
      title: 'نتیجہ: ٹیومر مائیکرو انوائرمنٹ اور مدافعتی توازن',
      body: 'جب ورچوئل ٹشو میں سائٹو ٹوکسک ٹی سیلز کو بطور متحرک ایجنٹس متعارف کرایا جاتا ہے، تو خلیاتِ سرطان کے خلاف ایک عارضی دفاعی دباؤ بنتا ہے۔ مگر خلیاتی تغیر (Phenotypic plasticity) کی صورت میں بعض خلیے پی ڈی-ایل1 (PD-L1) جیسے مدافعتی رکاوٹی سگنلز آن کر کے مدافعتی حملے سے بچ نکلتے ہیں۔'
    },
    3: {
      tag: 'Biological Parameter: Extracellular Matrix & Motility',
      title: 'نتیجہ: خلیاتی نقل مکانی اور انویژن پیٹرنز (Invasion)',
      body: 'جب ایجنٹس کے موٹیلیٹی رولز (Movement Rules) میں ریسیپٹر ڈاون ریگولیشن شامل کیا جاتا ہے، تو خلیے ایک دوسرے سے چپکے رہنے کے بجائے انفرادی طور پر باہر کی طرف دوڑتے ہیں اور خونی رگوں (Blood vessel pathways) کے قریب جا کر میٹاسٹیسز کا آغاز کرتے ہیں۔'
    }
  };

  function activateHypo(index, activeBtn) {
    [btn1, btn2, btn3].forEach(b => {
      b.classList.remove('bg-[var(--accent)]', 'text-white');
      b.classList.add('bg-[var(--bg-card-subtle)]', 'text-[var(--text-secondary)]');
    });
    activeBtn.classList.add('bg-[var(--accent)]', 'text-white');
    activeBtn.classList.remove('bg-[var(--bg-card-subtle)]', 'text-[var(--text-secondary)]');

    const data = hypotheses[index];
    displayBox.innerHTML = `
      <div class="flex items-center justify-between mb-3">
        <span class="text-xs font-mono-code px-2 py-0.5 rounded bg-[var(--bg-card)] text-[var(--accent)] border border-[var(--border-subtle)]" dir="ltr">
          ${data.tag}
        </span>
        <span class="text-xs font-arabic-ui text-[var(--text-muted)]">مفروضہ برائے خلیاتی بقا</span>
      </div>
      <h4 class="font-arabic-ui font-bold text-base sm:text-lg text-[var(--text-primary)] mb-2">
        ${data.title}
      </h4>
      <p class="text-sm sm:text-base font-arabic-ui leading-relaxed text-[var(--text-secondary)]">
        ${data.body}
      </p>
    `;
  }

  btn1.addEventListener('click', () => activateHypo(1, btn1));
  btn2.addEventListener('click', () => activateHypo(2, btn2));
  btn3.addEventListener('click', () => activateHypo(3, btn3));
}

// Interactive Comment Submission
window.addNewComment = function() {
  const authorInput = document.getElementById('comment-author');
  const bodyInput = document.getElementById('comment-body');
  if (!authorInput || !bodyInput) return;

  const author = authorInput.value.trim();
  const body = bodyInput.value.trim();
  if (!author || !body) return;

  const commentsContainer = document.querySelector('#comments-section .space-y-4');
  if (commentsContainer) {
    const initials = author.slice(0, 2).toUpperCase();
    const commentEl = document.createElement('div');
    commentEl.className = 'p-4 rounded-xl bg-[var(--bg-card-subtle)] border border-[var(--accent-border)] transition-all animate-fade-in';
    commentEl.innerHTML = `
      <div class="flex items-center justify-between mb-2">
        <div class="flex items-center gap-2">
          <div class="w-7 h-7 rounded-full bg-[var(--accent-subtle)] text-[var(--accent)] font-mono-code text-xs flex items-center justify-center font-bold">${initials}</div>
          <span class="font-arabic-ui font-semibold text-sm text-[var(--text-primary)]">${author}</span>
        </div>
        <span class="text-xs font-mono-code text-[var(--accent)]">ابھی شامل ہوا</span>
      </div>
      <p class="font-arabic-ui text-sm text-[var(--text-secondary)] leading-relaxed">${body}</p>
    `;
    commentsContainer.prepend(commentEl);
    authorInput.value = '';
    bodyInput.value = '';
    showToast('آپ کا مشاہدہ شامل کر دیا گیا ہے!');
  }
};

// ----------------------------------------------------
// Toast Notification Helper
// ----------------------------------------------------
function showToast(message) {
  let toast = document.getElementById('app-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'app-toast';
    toast.className = 'fixed bottom-6 left-1/2 -translate-x-1/2 px-4 py-2.5 rounded-xl bg-[var(--text-primary)] text-[var(--bg-card)] font-arabic-ui text-xs sm:text-sm font-semibold shadow-lg z-50 transition-all duration-300 pointer-events-none opacity-0 translate-y-3';
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  toast.classList.remove('opacity-0', 'translate-y-3');
  toast.classList.add('opacity-100', 'translate-y-0');

  setTimeout(() => {
    toast.classList.remove('opacity-100', 'translate-y-0');
    toast.classList.add('opacity-0', 'translate-y-3');
  }, 2400);
}

// ----------------------------------------------------
// Drawer & Lecture Navigation Active Sync
// ----------------------------------------------------
function initDrawer() {
  const drawer = document.getElementById('lecture-drawer');
  const drawerBackdrop = document.getElementById('drawer-backdrop');
  const toggleBtn = document.getElementById('toggle-drawer-btn');
  const closeBtn = document.getElementById('close-drawer-btn');

  function openDrawer() {
    drawer?.classList.remove('translate-x-full');
    drawerBackdrop?.classList.remove('hidden');
    drawerBackdrop?.classList.add('block');
  }

  function closeDrawer() {
    drawer?.classList.add('translate-x-full');
    drawerBackdrop?.classList.add('hidden');
    drawerBackdrop?.classList.remove('block');
  }

  toggleBtn?.addEventListener('click', openDrawer);
  closeBtn?.addEventListener('click', closeDrawer);
  drawerBackdrop?.addEventListener('click', closeDrawer);

  // Close drawer when a lecture link is clicked
  document.querySelectorAll('#lecture-drawer [hx-get]').forEach(link => {
    link.addEventListener('click', () => {
      closeDrawer();
      updateActiveLectureInDrawer(link.getAttribute('hx-get'));
    });
  });
}

function updateActiveLectureInDrawer(activeUrl) {
  document.querySelectorAll('#lecture-drawer [hx-get]').forEach(item => {
    const itemUrl = item.getAttribute('hx-get');
    if (itemUrl === activeUrl) {
      item.classList.add('border-[var(--accent)]', 'bg-[var(--accent-subtle)]');
      item.classList.remove('border-[var(--bg-card-border)]', 'bg-[var(--bg-card)]');
    } else {
      item.classList.remove('border-[var(--accent)]', 'bg-[var(--accent-subtle)]');
      item.classList.add('border-[var(--bg-card-border)]', 'bg-[var(--bg-card)]');
    }
  });
}

// ----------------------------------------------------
// HTMX Lifecycle Hook
// ----------------------------------------------------
document.addEventListener('htmx:afterSwap', (evt) => {
  // Scroll to top of content
  window.scrollTo({ top: 0, behavior: 'smooth' });

  // Re-run icons
  renderIcons();

  // Re-bind interactive components for the swapped article
  bindInteractiveLens();
  bindHypothesisTester();
  bindArticleActions();

  // Re-apply font size
  const savedSize = localStorage.getItem('emergence_font_size') || 'md';
  applyFontSize(savedSize);

  // Update active status in drawer and header
  const newPath = evt.detail.xhr?.responseURL || '';
  if (newPath) {
    updateActiveLectureInDrawer(newPath);
  }
});

// Initial Setup on DOM Ready
document.addEventListener('DOMContentLoaded', () => {
  renderIcons();
  initTheme();
  initFontSize();
  initReadingProgress();
  initDrawer();
  bindInteractiveLens();
  bindHypothesisTester();
  bindArticleActions();

  // Handle URL query parameters (e.g. ?lecture=6 or ?lecture=7)
  const urlParams = new URLSearchParams(window.location.search);
  const requestedLecture = urlParams.get('lecture');
  if (requestedLecture && ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'].includes(requestedLecture)) {
    const targetUrl = `/lectures/lecture-${requestedLecture}.html`;
    htmx.ajax('GET', targetUrl, {
      target: '#main-content',
      swap: 'innerHTML'
    });
    updateActiveLectureInDrawer(targetUrl);
  } else {
    updateActiveLectureInDrawer('/lectures/lecture-1.html');
  }
});
