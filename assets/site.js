"use strict";
/* CTC Chapter Launch Playbook. One script for every page.
   Each page sets ROOT before loading this: "" on the home page, "../" one level down. */
var ROOT = window.ROOT || "";

/* ---------- city: typed once, carried between pages in the URL, never stored ---------- */
function cityFromUrl() {
  var m = /[?&]city=([^&#]*)/.exec(window.location.search);
  return m ? decodeURIComponent(m[1].replace(/\+/g, " ")).trim() : "";
}
function cityName() {
  var el = document.getElementById("city");
  var v = el ? el.value.trim() : cityFromUrl();
  return v || "[your city]";
}
function carryCity() {
  var el = document.getElementById("city");
  var c = el ? el.value.trim() : "";
  document.querySelectorAll("a[href]").forEach(function (a) {
    var h = a.getAttribute("href");
    if (!h || /^(https?:|mailto:|#)/.test(h) || /\.(zip|png|xlsx|docx|html)$/.test(h.split("?")[0].split("#")[0])) return;
    var base = h.split("?")[0], hash = h.indexOf("#") >= 0 ? h.slice(h.indexOf("#")) : "";
    base = base.split("#")[0];
    a.setAttribute("href", base + (c ? "?city=" + encodeURIComponent(c) : "") + hash);
  });
}

var LOGO_PROMPT = [
  'Create a professional vector logo for "Climate Tech {CITY}" that is part of the existing Climate Tech Cities (CTC) brand family. The logo must closely match the visual style, proportions, and design language of the existing Climate Tech Cities, CTC SF, and CTC New York logos.',
  '',
  'Layout:',
  'Square icon on the left',
  'Three-line wordmark on the right',
  'Text stacked: Climate Tech {CITY}',
  '',
  'Icon requirements:',
  'Use the same flat geometric construction as the existing CTC logos.',
  'Maintain the same square format and overall proportions.',
  'Background should be a soft lavender rectangle.',
  'Include the same orange landscape/horizon shape across the lower portion of the icon.',
  'Use the same light green and dark green color planes for the building form.',
  'No outlines, gradients, shadows, textures, or effects. Pure vector appearance.',
  '',
  'City representation:',
  'Replace the generic building silhouette with a simplified geometric silhouette inspired by iconic buildings in {CITY}. Icons should be abstracted into clean angular shapes rather than a literal illustration. Use only a few flat planes and sharp edges. The landmark should feel immediately recognizable while remaining minimalist.',
  '',
  'Typography:',
  'Match the existing wordmark style. Modern sans-serif font. Thin to medium weight. Dark olive green text. Same spacing and alignment as the existing logos.',
  '',
  'Brand personality:',
  'Climate innovation. Urban sustainability. Professional. Modern. Global city network. Clean and trustworthy.',
  '',
  'Avoid:',
  'Detailed skylines. {CITY} Eye illustrations. Union Jack motifs. Photorealism. 3D effects. Excessive detail. Multiple buildings.',
  '',
  'Design the final logo to align seamlessly with the existing CTC, CTC SF, and CTC New York logos, as if all were created by the same designer within the same brand system.',
  '',
  'Develop up to 10 concepts using simplified silhouettes of iconic {CITY} architecture and skyline elements. Focus on clean, minimalist forms that are instantly recognizable yet highly abstracted, ensuring the logo remains modern, scalable, and consistent with the existing Climate Tech visual identity.',
  '',
  'Use the exact same icon dimensions, color palette, text sizing, spacing, and visual weight as the reference Climate Tech Cities and Climate Tech New York logos. Only the building silhouette should change. Everything else should remain consistent.',
  '',
  'Do this for {CITY}.'
].join("\n");

var PROMPTS = {
  "p-setup":      function (c) { return "/ctc-chapter-setup I want to start a Climate Tech Cities chapter in " + c + "."; },
  "p-cycle1":     function (c) { return "run the newsletter for " + c; },
  "p-cycle2":     function (c) { return "run the newsletter for " + c; },
  "p-harvest":    function (c) { return "/ctc-harvest Harvest this week's events for " + c + "."; },
  "p-assemble":   function (c) { return "/ctc-assemble Assemble the " + c + " issue from this sheet. Rows marked PICK are my picks."; },
  "p-monthly":    function (c) { return "run the monthly opportunities for " + c; },
  "p-partnermap": function (c) { return "build the partner map for " + c; },
  "p-logo":       function (c) { return LOGO_PROMPT.split("{CITY}").join(c); }
};
function renderPrompt(el, text) {
  el.textContent = "";
  if (text.charAt(0) === "/") {
    var slash = text.slice(0, text.indexOf(" "));
    var span = document.createElement("span");
    span.className = "slash";
    span.textContent = slash;
    el.appendChild(span);
    el.appendChild(document.createTextNode(text.slice(slash.length)));
  } else {
    el.appendChild(document.createTextNode(text));
  }
}
function buildPrompts() {
  var c = cityName();
  Object.keys(PROMPTS).forEach(function (id) {
    var el = document.getElementById(id);
    if (el) renderPrompt(el, PROMPTS[id](c));
  });
}
function copyPrompt(id, btn) {
  var text = document.getElementById(id).textContent;
  function done() {
    var t = btn.textContent;
    btn.textContent = "Copied";
    setTimeout(function () { btn.textContent = t; }, 1500);
  }
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text).then(done, function () { fallbackCopy(text, done); });
  } else fallbackCopy(text, done);
}
function fallbackCopy(text, done) {
  var ta = document.createElement("textarea");
  ta.value = text; document.body.appendChild(ta); ta.select();
  try { document.execCommand("copy"); done(); }
  catch (e) { alert("Copy failed. Select the prompt text and copy it manually."); }
  document.body.removeChild(ta);
}

/* ---------- the file viewer ----------
   Every sample ships as a real file. Each page shown here is a render of that exact
   file, so what the viewer shows and what Download hands over are the same document. */
var FILES = {
  "chapter-settings": { file: "Chapter_Settings_SAMPLE.docx", pages: 2, shot: "chapter-settings-open.png", app: "Word",
    sub: "Word document, 2 pages. Fictional Denver chapter.",
    note: "Every skill in the toolkit reads this file. Add it to your project as a context file." },
  "chapter-plan": { file: "Chapter_Plan_SAMPLE.docx", pages: 4, shot: "chapter-plan-open.png", app: "Word",
    sub: "Word document, 4 pages. Fictional Denver chapter.",
    note: "The plan is the one you read. Your dates will differ; the phases will not." },
  "registry": { file: "CTC_Source_Registry_SAMPLE.xlsx", pages: 1, shot: "registry-open.png", app: "Excel",
    sub: "Excel workbook, the Sources sheet. Fictional Portland chapter.",
    note: "Unverified rows are shaded, and any missing field is shaded red and named." },
  "events": { file: "CTC_Events_SAMPLE.xlsx", pages: 1, shot: "events-open.png", app: "Excel",
    sub: "Excel workbook, the Events sheet. Fictional Portland chapter.",
    note: "The time header carries your chapter's timezone. One row per event." },
  "opportunities": { file: "Opportunities_SAMPLE.xlsx", pages: 1, shot: "opportunities-open.png", app: "Excel",
    sub: "Excel workbook, the Open sheet. Fictional Portland chapter.",
    note: "A Closed sheet appears beside this one the first time something expires." },
  "city-resources": { file: "CTC_City_Resources_SAMPLE.xlsx", pages: 3, shot: "city-resources-open.png", app: "Excel",
    sub: "Excel workbook, the city sheet and City Narratives, 3 printed pages.",
    note: "The city, Alderport, and every organization in it are fictional." },
  "partner-map": { file: "CTC_Partner_Map_SAMPLE.xlsx", pages: 2, shot: "partner-map-open.png", app: "Excel",
    sub: "Excel workbook, Partners and Not approaching, 2 printed pages.",
    note: "The organizations are real Houston ones, but every line written about them here is illustrative and unverified." },
  "issue": { file: "Portland_Climate_Tech_Aug_11-Aug_18.docx", pages: 6, shot: "issue-open.png", app: "Word",
    sub: "Word document, 6 pages. Fictional Portland chapter.",
    note: "The yellow lines are the rewrite markers. They come out when you have written your three blocks." },
  "issue-html": { file: "Portland_Climate_Tech_Aug_11-Aug_18.html", live: true,
    sub: "The web page version, shown here exactly as it renders.",
    note: "This is the copy you paste from. Opening the HTML file keeps the formatting; the Word file does not." }
};
var DIMS = {
  "registry": [[1381,335],[1400,758]],
  "events": [[1369,570],[1400,758]],
  "opportunities": [[1398,598],[1400,758]],
  "city-resources": [[1379,915],[1379,426],[1402,707],[1400,758]],
  "partner-map": [[1399,866],[1395,315],[1400,758]],
  "chapter-settings": [[995,1318],[972,408],[1400,758]],
  "chapter-plan": [[985,1250],[998,1247],[984,1282],[798,242],[1400,758]],
  "issue": [[922,1255],[931,1177],[931,1251],[931,1211],[913,1230],[931,1151],[1400,758]]
};
var SAMPLES = ROOT + "downloads/samples/";
var SHOTS = SAMPLES + "previews/";
var viewer, lastFocus = null;

function buildPage(src, label, alt, size) {
  var fig = document.createElement("div");
  fig.className = "page";
  var cap = document.createElement("span");
  cap.className = "pn";
  cap.textContent = label;
  var img = document.createElement("img");
  img.src = src; img.alt = alt; img.loading = "lazy";
  if (size) { img.width = size[0]; img.height = size[1]; }
  fig.appendChild(cap); fig.appendChild(img);
  return fig;
}
function openFile(key) {
  var f = FILES[key];
  if (!f || !viewer) return;
  var body = document.getElementById("viewer-body");
  body.textContent = "";
  body.scrollTop = 0;
  document.getElementById("viewer-name").textContent = f.file;
  document.getElementById("viewer-sub").textContent = f.sub;
  document.getElementById("viewer-note").textContent = f.note;
  var dl = document.getElementById("viewer-dl");
  dl.href = SAMPLES + f.file;
  dl.setAttribute("download", f.file);
  if (f.live) {
    var frame = document.createElement("iframe");
    frame.src = SAMPLES + f.file;
    frame.title = f.file;
    frame.setAttribute("sandbox", "");
    frame.style.cssText = "width:100%;height:70vh;border:1px solid var(--hairline);border-radius:var(--r-sm);background:var(--canvas);display:block;";
    body.appendChild(frame);
  } else {
    var d = DIMS[key] || [];
    for (var i = 1; i <= f.pages; i++) {
      body.appendChild(buildPage(SHOTS + key + "-p" + i + ".png",
        f.pages > 1 ? "Page " + i + " of " + f.pages : "The file",
        "Page " + i + " of " + f.file, d[i - 1]));
    }
    if (f.shot) {
      body.appendChild(buildPage(SHOTS + f.shot, "Opened in " + f.app,
        f.file + " open in " + f.app + ", the way it looks once you download it.", d[f.pages]));
    }
  }
  lastFocus = document.activeElement;
  viewer.hidden = false;
  viewer.classList.add("open");
  document.body.classList.add("locked");
  document.getElementById("viewer-close").focus();
}
function closeFile() {
  if (!viewer) return;
  viewer.classList.remove("open");
  viewer.hidden = true;
  document.body.classList.remove("locked");
  document.getElementById("viewer-body").textContent = "";
  if (lastFocus && lastFocus.focus) lastFocus.focus();
}

/* ---------- old anchors from the single-page version ---------- */
var LEGACY = {
  "apply": "apply/", "plan": "two-weeks/", "logo": "logo/", "install": "install/", "setup": "set-up/",
  "newsletter": "newsletter/", "monthly": "newsletter/#opportunities",
  "cycle": "weekly-cycle/", "collect": "weekly-cycle/#collect", "cut": "weekly-cycle/#cut",
  "write": "weekly-cycle/#write", "sample": "weekly-cycle/#sample", "send": "weekly-cycle/#send",
  "partners": "partners/", "help": "help/", "downloads": "downloads/"
};

window.addEventListener("DOMContentLoaded", function () {
  // Delete-only: an earlier version of this site saved a workspace in the browser.
  try {
    for (var i = localStorage.length - 1; i >= 0; i--) {
      var k = localStorage.key(i);
      if (k && k.indexOf("ctcnw:") === 0) localStorage.removeItem(k);
    }
  } catch (e) {}

  if (ROOT === "" && window.location.hash) {
    var to = LEGACY[window.location.hash.slice(1)];
    if (to) { window.location.replace(to); return; }
  }

  var cityEl = document.getElementById("city");
  if (cityEl) {
    var fromUrl = cityFromUrl();
    if (fromUrl) cityEl.value = fromUrl;
    cityEl.addEventListener("input", function () { buildPrompts(); carryCity(); });
  }
  buildPrompts();
  carryCity();

  viewer = document.getElementById("viewer");
  if (viewer) {
    document.querySelectorAll("[data-file]").forEach(function (b) {
      b.addEventListener("click", function () { openFile(b.getAttribute("data-file")); });
    });
    document.getElementById("viewer-close").addEventListener("click", closeFile);
    viewer.addEventListener("click", function (e) { if (e.target === viewer) closeFile(); });
    document.addEventListener("keydown", function (e) {
      if (!viewer.classList.contains("open")) return;
      if (e.key === "Escape") { closeFile(); return; }
      if (e.key !== "Tab") return;
      var f = viewer.querySelectorAll("button, a[href], [tabindex]:not([tabindex='-1'])");
      if (!f.length) return;
      var first = f[0], last = f[f.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    });
  }

  var menu = document.getElementById("menu"), side = document.querySelector(".side");
  if (menu && side) {
    menu.addEventListener("click", function () {
      var open = side.classList.toggle("open");
      menu.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }

  document.querySelectorAll("details.faq > summary").forEach(function (s) {
    s.setAttribute("role", "button");
    s.setAttribute("aria-expanded", s.parentElement.open ? "true" : "false");
    s.parentElement.addEventListener("toggle", function () {
      s.setAttribute("aria-expanded", s.parentElement.open ? "true" : "false");
    });
  });

  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var items = document.querySelectorAll(".reveal");
  if (reduce || !("IntersectionObserver" in window)) {
    items.forEach(function (el) { el.classList.add("in"); });
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); }
      });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.05 });
    items.forEach(function (el) { io.observe(el); });
  }
});
