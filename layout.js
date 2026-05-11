// Shared nav + sidebar builder — loaded by index.html and all blog post pages.
// Requires content.js (SITE object) to be loaded first.

var ICONS = {
  mail:    '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>',
  phone:   '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12.63a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.18 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>',
  linkedin:'<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>',
  github:  '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>',
  mappin:  '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>',
};

// base: '' for home page (anchor links), '/' for subpages (links back to home)
function buildNav(base) {
  var navEl = document.getElementById('site-nav');
  if (!navEl) return;
  base = base || '';

  var home = document.createElement('a');
  home.href = base + '#about';
  home.className = 'nav-home';
  home.textContent = SITE.profile.name;
  navEl.appendChild(home);

  ['About', 'Resume', 'Research', 'Projects', 'Blog', 'Books', 'Contact'].forEach(function(name) {
    var link = document.createElement('a');
    link.href = name === 'Blog' ? '/blog/' : (base + '#' + name.toLowerCase());
    link.textContent = name;
    navEl.appendChild(link);
  });
}

function buildSidebar() {
  var sb = document.getElementById('sidebar');
  if (!sb) return;

  function el(tag, cls, text) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (text !== undefined) e.textContent = text;
    return e;
  }

  var photo = document.createElement('img');
  photo.src = SITE.profile.photo;
  photo.alt = SITE.profile.name;
  photo.className = 'sidebar-photo';

  var info = el('div', 'sidebar-info');
  info.appendChild(el('div', 'sidebar-name', SITE.profile.name));
  var titleEl = el('div', 'sidebar-title');
  titleEl.innerHTML = SITE.profile.title + '<br>' + SITE.profile.subtitle;
  info.appendChild(titleEl);

  var contacts = el('ul', 'sidebar-contacts');

  function iconRow(iconSvg, valueHtml) {
    var li = document.createElement('li');
    var icon = el('span', 'contact-icon');
    icon.innerHTML = iconSvg;
    li.appendChild(icon);
    var val = el('span', 'contact-value');
    val.innerHTML = valueHtml;
    li.appendChild(val);
    return li;
  }

  var c = SITE.contact;
  contacts.appendChild(iconRow(ICONS.mail,     '<a href="mailto:' + c.email + '">' + c.email + '</a>'));
  contacts.appendChild(iconRow(ICONS.phone,    '<a href="tel:' + c.phone.replace(/\s/g, '') + '">' + c.phone + '</a>'));
  contacts.appendChild(iconRow(ICONS.linkedin, '<a href="' + c.linkedin.url + '" target="_blank" rel="noreferrer">' + c.linkedin.label + '</a>'));
  contacts.appendChild(iconRow(ICONS.github,   '<a href="' + c.github.url + '" target="_blank" rel="noreferrer">' + c.github.label + '</a>'));
  contacts.appendChild(iconRow(ICONS.mappin,   c.location));

  var badge = el('div', 'available-badge');
  badge.appendChild(el('span', 'available-dot'));
  badge.appendChild(document.createTextNode('Always learning'));

  var cvLink = document.createElement('a');
  cvLink.href = '/cv/';
  cvLink.className = 'cv-link';
  cvLink.innerHTML = '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg> Download CV';

  sb.appendChild(photo);
  sb.appendChild(info);
  sb.appendChild(contacts);
  sb.appendChild(badge);
  sb.appendChild(cvLink);
}
