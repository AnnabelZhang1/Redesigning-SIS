/* ICONS */
const ICON_PATHS = {
  moon: '<path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/>',
  calendar: '<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M8 3v4M16 3v4M3 10h18"/>',
  bell: '<path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.7 21a2 2 0 0 1-3.4 0"/>',
  book: '<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>',
  database: '<ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>',
  heart: '<path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 0 0-7.8 7.8l1 1.1L12 21l7.8-7.5 1-1.1a5.5 5.5 0 0 0 0-7.8z"/>',
  search: '<circle cx="11" cy="11" r="7"/><path d="M21 21l-4.35-4.35"/>',
  user: '<circle cx="12" cy="8" r="4"/><path d="M4 21v-1a6 6 0 0 1 6-6h4a6 6 0 0 1 6 6v1"/>',
  signout: '<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><path d="M16 17l5-5-5-5M21 12H9"/>',
  banknote: '<rect x="2" y="6" width="20" height="12" rx="2"/><circle cx="12" cy="12" r="2"/><path d="M6 12h.01M18 12h.01"/>',
  dollar: '<rect x="2" y="5" width="20" height="14" rx="1.5"/><circle cx="12" cy="12" r="5"/><path d="M13.8 10.1c-.4-.6-1-.9-1.8-.9-1 0-1.8.6-1.8 1.4 0 1.9 3.6 1 3.6 3 0 .8-.8 1.4-1.8 1.4-.9 0-1.6-.4-1.9-1.1M12 8v8"/>',
  gradcap: '<path d="M12 4.5 22 8.5 12 12.5 2 8.5z"/><path d="M6 10.1V15c0 1.4 2.7 2.5 6 2.5s6-1.1 6-2.5v-4.9"/><path d="M3 9v4.5"/>',
  pencil: '<g transform="rotate(45 12 12)"><path d="M9 17.5V4.5a3 3 0 0 1 6 0v13L12 23z"/><path d="M9 7h6M9 17.5h6"/></g>',
  document: '<path d="M14 2.5H7A2.5 2.5 0 0 0 4.5 5v14A2.5 2.5 0 0 0 7 21.5h10a2.5 2.5 0 0 0 2.5-2.5V8z"/><path d="M14 2.5V6a2 2 0 0 0 2 2h3.5"/><path d="M8.5 11h7M8.5 14h7M8.5 17h7"/>',
  smile: '<circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><path d="M9 9h.01M15 9h.01"/>',
  switch: '<path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"/><path d="M21 3v5h-5"/><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"/><path d="M8 16H3v5"/>'
};

function icon(name) {
  return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICON_PATHS[name]}</svg>`;
}

document.querySelectorAll('[data-icon]').forEach(el => {
  el.innerHTML = icon(el.dataset.icon);
});

/* CARD DATA */
const PLACEHOLDER_URL = 'https://www.google.com';

const CATEGORIES = [
  { id: 'academics', title: 'Academics' },
  { id: 'services', title: 'Student Services' },
  { id: 'misc', title: 'Miscellaneous' }
];

const CARDS = [
  {
    id: 'financial-aid', category: 'services', icon: 'dollar', title: 'Tuition & Financial Aid',
    desc: 'Find Account Summary, Scholarship Offers, Financial Aid Agreement and History, and other resources.',
    links: [
      { label: 'Tuition Account Summary', url: 'https://sis9.rpi.edu/StudentSelfService/ssb/accountSummary#!/' },
      { label: 'Financial Aid Offers & History', url: 'https://sis9.rpi.edu/StudentSelfService/ssb/financialAid#!/dashboard/home/' },
      { label: 'Responsibility Agreement', url: 'https://sis-sso.rpi.edu/rss/ybwskfina.P_FinancialAgreement' },
      { label: 'Understanding Financial Aid Awards', url: 'https://financialaid.rpi.edu/student-guide-financial-aid/understanding-your-financial-aid-awards-and-billing' },
      { label: 'Payment Options', url: 'https://financialaid.rpi.edu/cost-attendance/payment-options' }
    ]
  },
  {
    id: 'student-info', category: 'services', icon: 'book', title: 'Student Information',
    desc: 'Find your Student Profile, update Personal Information, and access your Direct Deposit.',
    links: [
      { label: 'View Student Profile', url: 'https://sis9.rpi.edu/StudentSelfService/ssb/studentProfile' },
      { label: 'Edit Personal Information', url: 'https://sis9.rpi.edu/BannerGeneralSsb/ssb/personalInformation#/personalInformationMain' },
      { label: 'Direct Deposit', url: 'https://sis9.rpi.edu/BannerGeneralSsb/ssb/directDeposit' }
    ]
  },
  {
    id: 'course-forms', category: 'services', icon: 'document', title: 'Course-Related Forms',
    desc: 'Find forms for course add/drop and Major/Minor changes.',
    links: [
      { label: 'Add/Drop Course', url: 'https://registrar.rpi.edu/services/course-registration/add-or-drop-course' },
      ['Declare/Change Your ',
        { label: 'Major', url: 'https://registrar.rpi.edu/services/academic-planning/declaring-or-change-major' },
        ' or ',
        { label: 'Minor', url: 'https://registrar.rpi.edu/services/academic-planning/declare-minor' }
      ],
    ]
  },
  {
    id: 'degreeworks', category: 'academics', icon: 'gradcap', title: 'DegreeWorks',
    desc: 'Access DegreeWorks to check your graduation status.',
    button: { label: 'DegreeWorks', url: "https://degreeworksprd.rpi.edu:8708/degwx/RespDashboard/" },
    flippable: false
  },
  {
    id: 'forms', category: 'misc', icon: 'document', title: 'Forms',
    desc: 'Find forms: Semester Away, Pathway Concentration Selection, and Laptop Ordering & Status',
    links: [
      { label: 'Semester Away Form', url: 'https://sis.rpi.edu/ssomanager/c/SSB?pkg=YHWSKTAWP.P_StudentTAWPForm' },
      { label: 'Select Pathway Concentration', url: 'https://sis.rpi.edu/ssomanager/c/SSB?pkg=YHWSKPATH.P_PathwayForm' },
      ['Laptop ',
        { label: 'Order', url: 'https://sis-sso.rpi.edu/rss/hwsklptp.P_MCPOrderForm' },
        ' & ',
        { label: 'Status', url: 'https://sis-sso.rpi.edu/rss/hwsklptp.P_StuViewLptp' }
      ]
    ]
  },
  {
    id: 'registration', category: 'academics', icon: 'pencil', title: 'Registration',
    desc: 'View Registration Dashboard, find Course Information, and access the Testing Center.',
    links: [
      { label: 'Registration Dashboard', url: 'https://sis9.rpi.edu/StudentRegistrationSsb/ssb/registration' },
      [ { label: 'Course Catalog', url: 'https://catalog.rpi.edu/' }, ' (Fall 2026) ' ],
      { label: 'Class Hour Schedule', url: 'https://registrar.rpi.edu/services/class-scheduling/class-offerings-and-schedule' },
      { label: 'Testing Center', url: 'https://apex.cct.rpi.edu/apex/r/simon_apex/testing-center-schedule/' }
    ]
  },
  {
    id: 'miscellaneous', category: 'misc', icon: 'book', title: 'Miscellaneous',
    desc: 'Includes: Commencement Policy, RPI Alert, Parking.',
    links: [
      ['Commencement Policy (',
        { label: 'UG', url: 'https://registrar.rpi.edu/services/degree-conferral/undergraduate-student-commencement-participation-policy' },
        ', ',
        { label: 'GR', url: 'https://registrar.rpi.edu/services/degree-conferral/graduate-student-commencement-participation-policy' },
        ')'],
      { label: 'RPI Alert', url: 'https://alert.rpi.edu/' },
      { label: 'Parking', url: 'https://rpi.aimsparking.com/' }
    ]
  }
];

/* FAVORITES */
const FAV_KEY = 'sis-favorites';
const DEFAULT_FAVORITES = ['financial-aid', 'student-info', 'degreeworks'];

function loadFavorites() {
  try {
    const saved = JSON.parse(localStorage.getItem(FAV_KEY));
    if (Array.isArray(saved)) return saved.filter(id => CARDS.some(c => c.id === id));
  } catch (e) {}
  return [...DEFAULT_FAVORITES];
}

function saveFavorites() {
  try { localStorage.setItem(FAV_KEY, JSON.stringify(favorites)); } catch (e) {}
}

let favorites = loadFavorites();
let currentRole = 'Student';

// CARD ROLES
function isVisible(card) {
  return !card.roles || card.roles.includes(currentRole);
}
const flipped = new Set(); // remembers which cards are flipped

/* RENDERING */
function heartButton(card) {
  const fav = favorites.includes(card.id);
  const label = fav ? `Remove ${card.title} from favorites` : `Add ${card.title} to favorites`;
  return `<button class="heart" type="button" aria-pressed="${fav}" aria-label="${label}">${icon('heart')}</button>`;
}

function cardHTML(card, scope) {
  const key = `${scope}:${card.id}`;
  const canFlip = card.flippable !== false;
  const isFlipped = canFlip && flipped.has(key);
  const button = card.button
    ? `<a class="card-btn" href="${card.button.url}" rel="noopener">${card.button.label}</a>`
    : '';

  const front = `
        <div class="card-face card-front"${isFlipped ? ' inert' : ''}>
          <div class="card-body">
            ${heartButton(card)}
            <h3 class="card-title">${icon(card.icon)}${card.title}</h3>
            <p class="card-desc">${card.desc}</p>
            ${button}
          </div>
        </div>`;

  if (!canFlip) {
    return `
    <div class="card no-flip" data-id="${card.id}" data-key="${key}">
      <div class="card-inner">${front}
      </div>
    </div>`;
  }

  const linkTag = (label, url) => `<a href="${url}" rel="noopener">${label}</a>`;

  const links = card.links
    .map(item => {
      if (typeof item === 'string') return `<li>${linkTag(item, PLACEHOLDER_URL)}</li>`;
      if (Array.isArray(item)) {
        const parts = item.map(part => typeof part === 'string' ? part : linkTag(part.label, part.url));
        return `<li>${parts.join('')}</li>`;
      }
      return `<li>${linkTag(item.label, item.url)}</li>`;
    })
    .join('');

  return `
    <div class="card${isFlipped ? ' flipped' : ''}" data-id="${card.id}" data-key="${key}" tabindex="0"
         aria-label="${card.title}. Press Enter to flip.">
      <div class="card-inner">${front}
        <div class="card-face card-back"${isFlipped ? '' : ' inert'}>
          <div class="card-body">
            ${heartButton(card)}
            <h3 class="back-title">${card.title}</h3>
            <ul class="back-links">${links}</ul>
          </div>
        </div>
      </div>
    </div>`;
}

function renderFavorites() {
  const grid = document.getElementById('favorites-grid');
  const favCards = favorites.map(id => CARDS.find(c => c.id === id)).filter(c => c && isVisible(c));
  if (favCards.length === 0) {
    grid.innerHTML = '<p class="empty-msg">Heart a block to pin it here.</p>';
  } else {
    grid.innerHTML = favCards.map(c => cardHTML(c, 'fav')).join('');
  }
}

function renderCategories() {
  document.getElementById('categories').innerHTML = CATEGORIES.map(cat => {
    const cards = CARDS.filter(c => c.category === cat.id && isVisible(c));
    if (cards.length === 0) return '';
    return `
      <section class="section">
        <h2 class="section-title">${cat.title}</h2>
        <div class="card-grid">${cards.map(c => cardHTML(c, cat.id)).join('')}</div>
      </section>`;
  }).join('');
}

/* Update every heart without re-rendering card */
function updateHearts(id) {
  const card = CARDS.find(c => c.id === id);
  const fav = favorites.includes(id);
  document.querySelectorAll(`.card[data-id="${id}"] .heart`).forEach(btn => {
    btn.setAttribute('aria-pressed', fav);
    btn.setAttribute('aria-label', fav ? `Remove ${card.title} from favorites` : `Add ${card.title} to favorites`);
  });
}

function toggleFavorite(id) {
  favorites = favorites.includes(id)
    ? favorites.filter(f => f !== id)
    : [...favorites, id];
  saveFavorites();
  renderFavorites();
  updateHearts(id);
}

function toggleFlip(cardEl) {
  const isFlipped = cardEl.classList.toggle('flipped');
  const front = cardEl.querySelector('.card-front');
  const back = cardEl.querySelector('.card-back');
  front.inert = isFlipped;
  back.inert = !isFlipped;
  if (isFlipped) flipped.add(cardEl.dataset.key);
  else flipped.delete(cardEl.dataset.key);
}

renderFavorites();
renderCategories();

/* CARD INTERACTIONS */
const content = document.getElementById('content');

content.addEventListener('click', e => {
  const heart = e.target.closest('.heart');
  if (heart) {
    toggleFavorite(heart.closest('.card').dataset.id);
    return;
  }
  // links and the DegreeWorks button navigate instead of flipping
  if (e.target.closest('a')) return;

  const card = e.target.closest('.card');
  if (card && !card.classList.contains('no-flip')) toggleFlip(card);
});

content.addEventListener('keydown', e => {
  if ((e.key === 'Enter' || e.key === ' ') && e.target.classList.contains('card')) {
    e.preventDefault();
    toggleFlip(e.target);
  }
});

/* TABS */
const tabs = document.querySelectorAll('.tab');

// Show one tab's panel and hide the others (also used by the sidebar schedule)
function showTab(panelId) {
  tabs.forEach(t => {
    const active = t.dataset.panel === panelId;
    t.classList.toggle('active', active);
    t.setAttribute('aria-selected', active);
    document.getElementById(t.dataset.panel).hidden = !active;
  });
  content.scrollTop = 0;
  renderWeek();   // re-fit the mini schedule text now that the sidebar is visible/resized
  // the sidebar schedule is only a link when you're not already on Registration
  const weekEl = document.getElementById('weekLink');
  if (weekEl) weekEl.tabIndex = panelId === 'panel-registration' ? -1 : 0;
  // same for the holds number in the sidebar box
  const holdsEl = document.getElementById('sidebarHolds');
  if (holdsEl) holdsEl.tabIndex = panelId === 'panel-registration' ? -1 : 0;
  // start downloading course data early so Build Schedule is quick
  if (panelId === 'panel-registration') loadSections().catch(() => {});
}

tabs.forEach(tab => {
  tab.addEventListener('click', () => showTab(tab.dataset.panel));
});

/* PROFILE MENU */
const avatarBtn = document.getElementById('avatarBtn');
const profileMenu = document.getElementById('profileMenu');

function setMenu(open) {
  profileMenu.classList.toggle('open', open);
  avatarBtn.setAttribute('aria-expanded', open);
}

avatarBtn.addEventListener('click', e => {
  e.stopPropagation();
  setMenu(!profileMenu.classList.contains('open'));
});

const roleName = document.getElementById('roleName');

profileMenu.addEventListener('click', e => {
  // Disabled items (View Profile, Sign Out): do nothing, keep the menu open
  if (e.target.closest('.menu-item--off')) return;
  // Role item: switch between Student and Staff, keep the menu open
  if (e.target.closest('#roleBtn')) {
    currentRole = currentRole === 'Student' ? 'Staff' : 'Student';
    roleName.textContent = currentRole;
    // re-draw the cards so role-only cards appear or disappear
    renderFavorites();
    renderCategories();
    return;
  }
  if (e.target.closest('.menu-item')) setMenu(false); // other actions not wired yet
});

document.addEventListener('click', e => {
  if (!e.target.closest('.profile')) setMenu(false);
});

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') setMenu(false);
});

/* DARK MODE TOGGLE */
const DARK_KEY = 'sis-dark';
const darkToggle = document.getElementById('darkToggle');

const logo = document.getElementById('logo');

function applyDark(on) {
  document.documentElement.classList.toggle('dark', on);
  darkToggle.setAttribute('aria-pressed', on);
  // swap to the white logo in dark mode
  logo.src = on ? logo.dataset.darkSrc : logo.dataset.lightSrc;
}

try { applyDark(localStorage.getItem(DARK_KEY) === '1'); } catch (e) {}

darkToggle.addEventListener('click', () => {
  const on = !document.documentElement.classList.contains('dark');
  applyDark(on);
  try { localStorage.setItem(DARK_KEY, on ? '1' : '0'); } catch (e) {}
});

/* COURSE DATA (from the quacs-data GitHub repo) */
const SEMESTER = '202609';           // YYYYMM folder in quacs-data/semester_data (09 = Fall, 01 = Spring, 05 = Summer)
const SEMESTER_NAME = 'Fall 2026';
const COURSES_URL = `https://raw.githubusercontent.com/quacs/quacs-data/master/semester_data/${SEMESTER}/courses.json`;

// CRNs used by the "Use Generic" button
const GENERIC_CRNS = ['78989', '77078', '77397', '78990', '79357'];

let sectionIndex = null;             // CRN -> section info, filled the first time it's needed

async function loadSections() {
  if (sectionIndex) return sectionIndex;
  const res = await fetch(COURSES_URL);
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const departments = await res.json();
  const index = new Map();
  departments.forEach(dept => dept.courses.forEach(course => course.sections.forEach(s => {
    index.set(String(s.crn), {
      crn: String(s.crn),
      subj: s.subj,
      crse: s.crse,
      title: s.title,
      timeslots: s.timeslots.map(t => ({
        days: t.days, timeStart: t.timeStart, timeEnd: t.timeEnd,
        dateStart: t.dateStart, dateEnd: t.dateEnd,
        location: t.location, instructor: t.instructor
      }))
    });
  })));
  sectionIndex = index;
  return index;
}

/* REGISTERED COURSES (saved in the browser) */
const SCHEDULE_KEY = 'sis-schedule';
const COURSE_COLORS = ['#9ccf9a', '#a8a3d6', '#d6a3c8', '#d4d2a0', '#9fc8dd', '#e5b48f', '#b8d8a8', '#d8a8a8'];

function loadRegistered() {
  try {
    const saved = JSON.parse(localStorage.getItem(SCHEDULE_KEY));
    if (saved && saved.semester === SEMESTER && Array.isArray(saved.sections)) return saved.sections;
  } catch (e) {}
  return [];
}

function saveRegistered() {
  try { localStorage.setItem(SCHEDULE_KEY, JSON.stringify({ semester: SEMESTER, sections: registered })); } catch (e) {}
}

let registered = loadRegistered();

// Make text safe to put inside HTML (course titles can contain & or quotes)
const escapeHtml = str => String(str).replace(/[&<>"']/g, ch => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[ch]));

/* time helpers: quacs times are military numbers (1400 = 2:00pm, -1 = no set time) */
const DAY_INDEX = { M: 0, T: 1, W: 2, R: 3, F: 4 };
const toHours = mil => Math.floor(mil / 100) + (mil % 100) / 60;

function formatTime(mil) {
  const h = Math.floor(mil / 100), m = mil % 100;
  const h12 = h % 12 === 0 ? 12 : h % 12;
  return `${h12}:${String(m).padStart(2, '0')}${h < 12 ? 'am' : 'pm'}`;
}

function formatSlot(t) {
  if (t.timeStart === -1 || !t.days.length) return 'Time TBA';
  return `${t.days.join('')} ${formatTime(t.timeStart)} - ${formatTime(t.timeEnd)}`;
}

/* WEEKLY SCHEDULE (sidebar) */
// Hours = 24h decimals (14.5 = 2:30pm)
const DAY_START = 7;    // top of the grid is 7am, leaving room for the 8am label
const DAY_END = 22.5;   // latest the grid can go (10:30pm); used when no courses are registered
const END_PADDING = 0.5; // after the last class, the grid continues to the next full hour + this many hours

// Where the grid stops: a little past the hour after your last class ends
function scheduleEnd() {
  const ends = registered.flatMap(sec => sec.timeslots.filter(t => t.timeStart !== -1).map(t => toHours(t.timeEnd)));
  if (!ends.length) return DAY_END;
  return Math.min(DAY_END, Math.ceil(Math.max(...ends)) + END_PADDING);
}

/* ROOMS: "Russell Sage Laboratory 3303" -> "SAGE 3303" using data/building_abbreviations.js */
const ABBREVIATIONS = typeof BUILDING_ABBREVIATIONS === 'object' ? BUILDING_ABBREVIATIONS : {};
// longest names first so "Jonsson-Rowland Science Center" isn't mistaken for a shorter match
const BUILDING_NAMES = Object.keys(ABBREVIATIONS).sort((x, y) => y.length - x.length);

function shortRoom(location) {
  if (!location || location === 'TBA') return '';
  const building = BUILDING_NAMES.find(name => location === name || location.startsWith(name + ' '));
  if (!building) return location;                 // e.g. "Online", "Off-Campus"
  const room = location.slice(building.length).trim();
  const label = ABBREVIATIONS[building] || building;
  return room ? `${label} ${room}` : label;
}

/* Draws the grid + class blocks into "body" at the given pixel height
   (the sidebar uses 280px; the downloaded image uses a taller version).
   detailed = true is the downloaded image's block format:
     COURSE NAME (bold) / - SUBJ #### - / time / room (underlined) */
function drawWeek(body, fullHeight, detailed = false) {
  // fullHeight = height of a full 7am-10:30pm day; the grid is cut off after the last class
  const pxPerHour = fullHeight / (DAY_END - DAY_START);
  const dayEnd = scheduleEnd();
  const height = (dayEnd - DAY_START) * pxPerHour;
  const y = hour => (hour - DAY_START) * pxPerHour;
  const labelOffset = detailed ? 17 : 12;

  let timeCol = '<div class="time-col">';
  let lines = '';
  for (let h = 8; h < dayEnd; h += 2) {
    const label = h === 12 ? '12pm' : h < 12 ? `${h}am` : `${h - 12}pm`;
    timeCol += `<span class="time-label" style="top:${y(h) - labelOffset}px">${label}</span>`;
    lines += `<div class="hour-line" style="top:${y(h)}px"></div>`;
  }
  timeCol += '</div>';

  // one block per class meeting, colored by course: course on line 1, room on line 2
  const dayBlocks = [[], [], [], [], []];
  registered.forEach((sec, i) => {
    const color = COURSE_COLORS[i % COURSE_COLORS.length];
    sec.timeslots.forEach(t => {
      if (t.timeStart === -1) return;
      const top = Math.max(y(toHours(t.timeStart)), 0);
      const bottom = Math.min(y(toHours(t.timeEnd)), height);
      if (bottom <= top) return;
      const room = shortRoom(t.location);
      const tip = `${sec.subj} ${sec.crse} ${sec.title}\n${formatSlot(t)}${t.location ? '\n' + t.location : ''}`;
      t.days.forEach(d => {
        if (!(d in DAY_INDEX)) return;
        dayBlocks[DAY_INDEX[d]].push(
          `<div class="event" title="${escapeHtml(tip)}" style="top:${top}px;height:${bottom - top}px;background:${color}">` +
            (detailed
              ? `<span class="event-title">${escapeHtml(sec.title.toUpperCase())}</span>` +
                `<span class="event-number">- ${escapeHtml(sec.subj)} ${sec.crse} -</span>` +
                `<span class="event-time">${formatTime(t.timeStart)} - ${formatTime(t.timeEnd)}</span>` +
                (room ? `<span class="event-room">${escapeHtml(room)}</span>` : '')
              : `<span class="event-course">${escapeHtml(sec.subj)} ${sec.crse}</span>` +
                (room ? `<span class="event-room">${escapeHtml(room)}</span>` : '')) +
          `</div>`);
      });
    });
  });

  const days = dayBlocks.map(blocks => `<div class="day-col">${blocks.join('')}</div>`).join('');
  body.style.height = `${height}px`;
  body.innerHTML = timeCol + days + lines;
}

// Mini schedule size: a full day is 400px tall when you have classes (so short classes have room
// for 2 lines; the grid is cut off after your last class), or 280px when it's empty
// smallest font the text-fitting (fitEventText) will shrink class blocks to
const MIN_EVENT_FONT = 9;        // downloaded image
const MIN_MINI_EVENT_FONT = 7;   // sidebar mini schedule
const MINI_DAY_HEIGHT = 400;
const MINI_EMPTY_HEIGHT = 280;

function renderWeek() {
  const body = document.getElementById('weekBody');
  drawWeek(body, registered.length ? MINI_DAY_HEIGHT : MINI_EMPTY_HEIGHT);
  fitEventText(body, MIN_MINI_EVENT_FONT);
  document.getElementById('weekEmpty').hidden = registered.length > 0;
  const downloadBtn = document.getElementById('downloadBtn');
  if (downloadBtn) downloadBtn.disabled = registered.length === 0;
}

renderWeek();

// Clicking the sidebar schedule opens the Registration tab
// (on the Registration tab itself it does nothing)
const weekLink = document.getElementById('weekLink');
const onRegistration = () => !document.getElementById('panel-registration').hidden;

weekLink.addEventListener('click', e => {
  e.preventDefault();
  if (onRegistration()) return;
  showTab('panel-registration');
  document.getElementById('crnInput').focus();
});

// The holds number in the sidebar box also opens the Registration tab
// (on the Registration tab itself it's plain text)
document.getElementById('sidebarHolds').addEventListener('click', e => {
  e.preventDefault();
  if (onRegistration()) return;
  showTab('panel-registration');
});

/* REGISTRATION: CRN BUILDER */
const crnInput = document.getElementById('crnInput');
const crnSubmit = document.getElementById('crnSubmit');
const crnMessage = document.getElementById('crnMessage');
const courseList = document.getElementById('courseList');
document.getElementById('termName').textContent = `(${SEMESTER_NAME})`;

function showMessage(html, type) {
  crnMessage.innerHTML = html;
  crnMessage.className = `crn-message crn-message--${type}`;
  crnMessage.hidden = false;
}

function renderCourseList() {
  courseList.innerHTML = registered.length
    ? registered.map((sec, i) => `
        <li>
          <span class="course-swatch" style="background:${COURSE_COLORS[i % COURSE_COLORS.length]}"></span>
          <div>
            <div class="course-name">${sec.crn} || ${escapeHtml(sec.subj)} ${sec.crse} ${escapeHtml(sec.title)}</div>
            <div class="course-times">${sec.timeslots.map(formatSlot).map(escapeHtml).join(' &middot; ')}</div>
          </div>
        </li>`).join('')
    : '<li class="course-empty">No courses registered yet.</li>';
}

// Two meetings clash if they share a day, their times overlap, and their date ranges overlap
function slotsClash(a, b) {
  if (a.timeStart === -1 || b.timeStart === -1) return false;
  if (!a.days.some(d => b.days.includes(d))) return false;
  if (!(a.timeStart < b.timeEnd && b.timeStart < a.timeEnd)) return false;
  return !(a.dateEnd < b.dateStart || b.dateEnd < a.dateStart);
}

function findConflicts(sections) {
  const pairs = [];
  for (let i = 0; i < sections.length; i++) {
    for (let k = i + 1; k < sections.length; k++) {
      const a = sections[i], b = sections[k];
      if (a.timeslots.some(ta => b.timeslots.some(tb => slotsClash(ta, tb)))) {
        pairs.push(`${a.crn} (${escapeHtml(a.title)}) and ${b.crn} (${escapeHtml(b.title)})`);
      }
    }
  }
  return pairs;
}

async function buildSchedule(crns) {
  const unique = [...new Set(crns)];

  if (unique.length === 0) {
    registered = [];
    saveRegistered();
    renderWeek();
    renderCourseList();
    showMessage('Schedule cleared.', 'info');
    return;
  }

  crnSubmit.disabled = true;
  crnSubmit.textContent = 'Loading...';
  let index;
  try {
    index = await loadSections();
  } catch (e) {
    showMessage('Could not load course data. Check your internet connection and try again.', 'error');
    return;
  } finally {
    crnSubmit.disabled = false;
    crnSubmit.textContent = 'Build Schedule';
  }

  const invalid = unique.filter(crn => !index.has(crn));
  if (invalid.length) {
    showMessage(`These CRNs weren't found for ${SEMESTER_NAME}: <strong>${invalid.join(', ')}</strong>`, 'error');
    return;
  }

  const sections = unique.map(crn => index.get(crn));
  const conflicts = findConflicts(sections);
  if (conflicts.length) {
    showMessage(`These classes overlap:<ul>${conflicts.map(c => `<li>${c}</li>`).join('')}</ul>`, 'error');
    return;
  }

  registered = sections;
  saveRegistered();
  renderWeek();
  renderCourseList();
  showMessage(`Schedule built with ${sections.length} course${sections.length === 1 ? '' : 's'}.`, 'success');
}

const parseCrns = text => text.split(/[\s,]+/).filter(Boolean);

crnSubmit.addEventListener('click', () => buildSchedule(parseCrns(crnInput.value)));
crnInput.addEventListener('keydown', e => {
  if (e.key === 'Enter') buildSchedule(parseCrns(crnInput.value));
});

document.getElementById('useGeneric').addEventListener('click', () => {
  if (GENERIC_CRNS.length === 0) {
    showMessage("The generic schedule hasn't been set up yet.", 'info');
    return;
  }
  crnInput.value = GENERIC_CRNS.join(', ');
  buildSchedule(GENERIC_CRNS.map(String));
});

/* DOWNLOAD SCHEDULE (PNG) */
// Shrinks the text in any class block whose text doesn't fit (too tall for a short class,
// or a line too wide for the column), starting from the font size set in CSS and going
// down to minSize. Used by both the downloaded image and the sidebar mini schedule.
// (minimum font sizes are set near renderWeek: MIN_EVENT_FONT, MIN_MINI_EVENT_FONT)

function fitEventText(container, minSize = MIN_EVENT_FONT) {
  container.querySelectorAll('.event').forEach(ev => {
    const lines = [...ev.querySelectorAll('span')];
    const overflows = () =>
      ev.scrollHeight > ev.clientHeight + 1 ||
      lines.some(line => line.scrollWidth > line.clientWidth + 1);
    let size = parseFloat(getComputedStyle(ev).fontSize);
    while (overflows() && size > minSize) {
      size -= 0.5;
      ev.style.fontSize = `${size}px`;
    }
  });
}

// Builds a large, light-colored copy of the schedule off-screen, captures it with html2canvas, then removes it
async function downloadSchedule() {
  if (!registered.length) return;
  if (typeof html2canvas !== 'function') {
    showMessage('Could not load the image tool. Check your internet connection and try again.', 'error');
    return;
  }

  const sheet = document.createElement('div');
  sheet.className = 'schedule-box export-sheet';
  sheet.innerHTML = `
    <div class="week-head"><span></span><span>M</span><span>T</span><span>W</span><span>R</span><span>F</span></div>
    <div class="week-body"></div>`;
  document.body.appendChild(sheet);
  drawWeek(sheet.querySelector('.week-body'), 1800, true);   // taller hours so 50-minute classes fit all 4 lines
  fitEventText(sheet);

  try {
    const canvas = await html2canvas(sheet, { backgroundColor: '#ffffff', scale: 2 });
    const link = document.createElement('a');
    link.href = canvas.toDataURL('image/png');
    link.download = `rpi-schedule-${SEMESTER_NAME.toLowerCase().replace(/\s+/g, '-')}.png`;
    link.click();
    showMessage('Schedule downloaded.', 'success');
  } catch (e) {
    showMessage(`Download failed: ${escapeHtml(e.message)}`, 'error');
  } finally {
    sheet.remove();
  }
}

document.getElementById('downloadBtn').addEventListener('click', downloadSchedule);

// The sidebar gets wider/narrower with the window, so re-fit the mini schedule text after resizing
let resizeTimer;
window.addEventListener('resize', () => {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(renderWeek, 150);
});
renderWeek();   // sets the Download button's enabled state

// show what's already registered
crnInput.value = registered.map(s => s.crn).join(', ');
renderCourseList();

/* UPCOMING CALENDAR DATES */
// Shows the next 3 events, based on the current
// "date" is the text shown on the site, while "start"/"end" are used for chronological sort
const UPCOMING_COUNT = 3;

function toLocalDate(iso) {
  const [y, m, d] = iso.split('-').map(Number);
  return new Date(y, m - 1, d);
}

function renderUpcoming(events) {
  const box = document.getElementById('upcomingDates');
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const next = events
    .filter(ev => toLocalDate(ev.end || ev.start) >= today)
    .sort((a, b) => toLocalDate(a.start) - toLocalDate(b.start))
    .slice(0, UPCOMING_COUNT);

  box.innerHTML = next.length
    ? next.map(ev => `<div class="date-row"><span>${ev.date}</span><span>${ev.description}</span></div>`).join('')
    : '<div class="date-row"><span></span><span>No upcoming events.</span></div>';
}

fetch('data/calendar_events.json')
  .then(res => res.json())
  .then(renderUpcoming)
  .catch(() => {
    document.getElementById('upcomingDates').innerHTML =
      '<div class="date-row"><span></span><span>Could not load events.</span></div>';
  });

/* PLACEHOLDER LINKS */
document.addEventListener('click', e => {
  const a = e.target.closest('a[href="#"]');
  if (a) e.preventDefault();
});