/* Flo-Fab — Évaluation technique
   Application statique (GitHub Pages). Les réponses et l'historique restent dans le navigateur ;
   seul le rapport PDF des résultats est transmis, par l'application de courriel de l'appareil ou par le serveur configuré. */
(function () {
  "use strict";

  const DATA = window.QUESTIONNAIRES || [];
  const LETTERS = ["A", "B", "C", "D"];
  const PASS = 75; // seuil de réussite suggéré (%)
  const KEY_SESSION = "flofab-eval-session";
  const KEY_HISTORY = "flofab-eval-historique";
  const KEY_ATTEMPTS = "flofab-eval-tentatives";
  const MAX_ATTEMPTS = 3;            // nombre maximal de tentatives par candidat et par questionnaire
  // La correction n'est jamais affichée au candidat. Elle figure seulement dans le PDF envoyé automatiquement par le serveur (méthode « serveur »).
  const CORRECTION_DANS_PDF_COURRIEL = true;

  const LEVELS = [
    { min: 90, range: "90 – 100 %", name: "Expert", color: "var(--lv-expert)",
      desc: "Maîtrise complète du sujet. Autonome, peut conseiller et former d'autres employés.",
      rec: "Aucune formation requise. Peut agir comme personne-ressource." },
    { min: 75, range: "75 – 89 %", name: "Avancé", color: "var(--lv-avance)",
      desc: "Bonne maîtrise avec des lacunes mineures. Autonome dans la majorité des tâches.",
      rec: "Révision ciblée des questions manquées." },
    { min: 60, range: "60 – 74 %", name: "Intermédiaire", color: "var(--lv-inter)",
      desc: "Maîtrise partielle. Supervision ponctuelle requise pour les tâches plus complexes.",
      rec: "Formation ciblée sur les points faibles, puis réévaluation." },
    { min: 40, range: "40 – 59 %", name: "Débutant", color: "var(--lv-debutant)",
      desc: "Connaissances de base seulement. Supervision requise.",
      rec: "Formation structurée et accompagnement par une personne expérimentée." },
    { min: 0, range: "0 – 39 %", name: "Insuffisant", color: "var(--lv-insuf)",
      desc: "Connaissances insuffisantes. Ne doit pas travailler sans supervision directe dans ce domaine.",
      rec: "Formation complète requise avant réévaluation." },
  ];
  const levelFor = pct => LEVELS.find(l => pct >= l.min);

  const app = document.getElementById("app");
  const status = document.getElementById("topbar-status");
  let session = null;       // questionnaire en cours
  let keyHandler = null;
  // Espace responsable : protège les résultats, l'historique, les tentatives et l'évaluation sur papier.
  let unlocked = false, lockTimer = null;
  const RESP_MINUTES = 15;
  let swipeDir = "";

  // ---------- Utilitaires ----------
  const esc = s => String(s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const today = () => { const d = new Date(); d.setMinutes(d.getMinutes() - d.getTimezoneOffset()); return d.toISOString().slice(0, 10); };
  const pctOf = (c, t) => (t ? Math.round((c / t) * 100) : 0);
  // Pondération : chaque question vaut 1, 2 ou 3 points selon sa complexité (faible, moyenne, élevée).
  const COMPLEXITE = { 1: "faible", 2: "moyenne", 3: "élevée" };
  const ptsOf = q => q.complexite || 1;
  const secPts = s => (s.pointsTotal ? [s.points, s.pointsTotal] : [s.correct, s.total]); // anciens résultats : sans pondération
  const secPct = s => { const [a, b] = secPts(s); return pctOf(a, b); };
  const totalsOf = secs => {
    const r = { correct: 0, total: 0, points: 0, pointsTotal: 0 };
    secs.forEach(s => { const [a, b] = secPts(s); r.correct += s.correct; r.total += s.total; r.points += a; r.pointsTotal += b; });
    r.pct = pctOf(r.points, r.pointsTotal);
    return r;
  };
  const fmtDuration = s => { if (s === null || s === undefined) return "-"; const m = Math.floor(s / 60), r = s % 60; return m ? `${m} min ${String(r).padStart(2, "0")} s` : `${r} s`; };
  const fmtDate = iso => new Date(iso).toLocaleString("fr-CA", { dateStyle: "long", timeStyle: "short" });

  const storageOK = (() => { try { const k = "__flofab_test__"; localStorage.setItem(k, "1"); localStorage.removeItem(k); return true; } catch (e) { return false; } })();
  const store = {
    get(k, fallback) { try { const v = localStorage.getItem(k); return v ? JSON.parse(v) : fallback; } catch (e) { return fallback; } },
    set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) { /* stockage indisponible */ } },
    del(k) { try { localStorage.removeItem(k); } catch (e) { /* rien */ } },
  };

  // ---------- Tablette : écran allumé, installation, connexion ----------
  const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) || (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);
  const isStandalone = () => window.matchMedia("(display-mode: standalone)").matches || window.navigator.standalone === true;
  let wakeLock = null, wantAwake = false, installEvent = null;
  async function keepAwake(on) {
    wantAwake = on;
    try {
      if (on && !wakeLock && "wakeLock" in navigator) { wakeLock = await navigator.wakeLock.request("screen"); wakeLock.addEventListener("release", () => { wakeLock = null; }); }
      if (!on && wakeLock) { await wakeLock.release(); wakeLock = null; }
    } catch (e) { /* non pris en charge ou refusé : sans conséquence */ }
  }
  document.addEventListener("visibilitychange", () => { if (document.visibilityState === "visible" && wantAwake) keepAwake(true); });
  window.addEventListener("beforeinstallprompt", e => { e.preventDefault(); installEvent = e; const t = document.getElementById("install-tip"); if (t) renderHome(); });
  const offlineBanner = document.getElementById("offline-banner");
  const updateOnline = () => { if (offlineBanner) offlineBanner.hidden = navigator.onLine; };
  window.addEventListener("offline", updateOnline);
  window.addEventListener("online", () => { updateOnline(); retryPending(); });
  function installTip() {
    if (isStandalone() || store.get("flofab-eval-install-masque", false)) return "";
    if (installEvent) return `<div class="notice install-tip no-print" id="install-tip"><p>Installez l'application sur cette tablette pour l'utiliser en plein écran, même sans connexion.</p><div class="btn-row"><button class="btn" data-action="install">Installer l'application</button><button class="btn btn-ghost" data-action="hide-install">Plus tard</button></div></div>`;
    if (isIOS) return `<div class="notice install-tip no-print" id="install-tip"><p>Pour utiliser l'application en plein écran sur iPad : touchez le bouton Partager de Safari, puis « Sur l'écran d'accueil ».</p><button class="btn btn-ghost" data-action="hide-install">Compris</button></div>`;
    return `<div id="install-tip" hidden></div>`;
  }

  // ---------- Espace responsable ----------
  const respCode = () => String(((window.FLOFAB_CONFIG || {}).responsable || {}).code || "1981");
  function refreshRespBtn() {
    const b = document.getElementById("resp-btn");
    if (b) { b.textContent = unlocked ? "Verrouiller" : "Espace responsable"; b.dataset.action = unlocked ? "lock" : "unlock"; b.classList.toggle("is-open", unlocked); }
  }
  function armLock() {
    clearTimeout(lockTimer);
    if (unlocked) lockTimer = setTimeout(() => { lock(); }, RESP_MINUTES * 60000);
  }
  function lock(silent) {
    unlocked = false; clearTimeout(lockTimer); refreshRespBtn();
    if (!silent && !session) renderHome();
  }
  function requireResp(cb) {
    if (unlocked) { armLock(); cb(); return; }
    const d = document.createElement("dialog");
    d.innerHTML = `<form method="dialog" class="pin-form"><h2 style="font-size:1.25rem">Espace responsable</h2>
      <p class="small muted">Entrez le code du responsable pour voir les résultats.</p>
      <div class="field"><label for="pin-input">Code</label><input id="pin-input" type="password" inputmode="numeric" autocomplete="off" required></div>
      <p class="error" id="pin-err" hidden>Code incorrect.</p>
      <div class="btn-row" style="margin-top:1rem"><button class="btn" value="ok">Déverrouiller</button><button class="btn btn-ghost" value="cancel" formnovalidate>Annuler</button></div></form>`;
    document.body.appendChild(d);
    const input = d.querySelector("#pin-input"), err = d.querySelector("#pin-err");
    d.querySelector("form").addEventListener("submit", e => {
      if (e.submitter && e.submitter.value === "cancel") { d.remove(); return; }
      e.preventDefault();
      if (input.value === respCode()) { d.close(); d.remove(); unlocked = true; refreshRespBtn(); armLock(); cb(); }
      else { err.hidden = false; input.value = ""; input.focus(); }
    });
    d.addEventListener("cancel", () => d.remove());
    d.showModal(); input.focus();
  }

  // ---------- Fin du questionnaire (vue du candidat, sans résultat) ----------
  function renderDone(rec) {
    setKeys(null); keepAwake(false); status.textContent = "";
    app.innerHTML = `
      <section class="panel start-card done-card">
        <h1>Questionnaire terminé</h1>
        <p class="lede">Merci, ${esc(rec.candidat.nom)}. Vos réponses ont été enregistrées${SERVER ? " et transmises au responsable" : ""}.</p>
        <p>Le résultat vous sera communiqué par le responsable de l'évaluation. ${SERVER ? "" : "Veuillez remettre l'appareil au responsable."}</p>
        <div class="btn-row no-print"><button class="btn" data-action="home">Retour à l'accueil</button>
          <button class="btn btn-ghost" data-action="resp-view" data-id="${rec.id}">Espace responsable</button></div>
      </section>`;
    focusMain();
  }

  // ---------- Tentatives ----------
  const normName = s => String(s).normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/\s+/g, " ").trim();
  const attemptKey = (nom, ids) => normName(nom) + "|" + ids.join(",");
  function attemptsUsed(nom, ids) { const a = store.get(KEY_ATTEMPTS, {})[attemptKey(nom, ids)]; return a ? a.count : 0; }
  function registerAttempt(nom, ids, titre) {
    const all = store.get(KEY_ATTEMPTS, {}), k = attemptKey(nom, ids);
    const cur = all[k] || { nom, ids, titre, count: 0 };
    cur.count += 1; cur.nom = nom; cur.last = new Date().toISOString();
    all[k] = cur; store.set(KEY_ATTEMPTS, all);
    return cur.count;
  }
  function resetAttempts(k) { const all = store.get(KEY_ATTEMPTS, {}); delete all[k]; store.set(KEY_ATTEMPTS, all); }

  function questionsFor(ids) {
    const list = [];
    ids.forEach(id => {
      const t = DATA.find(x => x.id === id);
      if (t) t.questions.forEach((q, i) => list.push({ ...q, secId: t.id, secNum: t.numero, secTitre: t.titre, numInSec: i + 1 }));
    });
    return list;
  }
  const titleFor = ids => (ids.length === DATA.length ? "Questionnaire complet" : (DATA.find(t => t.id === ids[0]) || {}).titre || "Questionnaire");

  function setKeys(fn) {
    if (keyHandler) document.removeEventListener("keydown", keyHandler);
    keyHandler = fn;
    if (fn) document.addEventListener("keydown", fn);
  }
  function focusMain() { app.focus({ preventScroll: true }); window.scrollTo({ top: 0 }); }

  function confirmDialog(message, okLabel, onOk) {
    const d = document.createElement("dialog");
    d.innerHTML = `<p>${esc(message)}</p><div class="btn-row"><button class="btn" value="ok">${esc(okLabel)}</button><button class="btn btn-ghost" value="cancel">Annuler</button></div>`;
    document.body.appendChild(d);
    d.addEventListener("click", e => {
      const v = e.target.closest("button")?.value;
      if (!v) return;
      d.close(); d.remove();
      if (v === "ok") onOk();
    });
    d.addEventListener("cancel", () => d.remove());
    d.showModal();
    d.querySelector("button[value=cancel]").focus();
  }

  // ---------- Jauge (manomètre) ----------
  function gaugeSVG(pct, { animate = false, size = 320, label = true } = {}) {
    const cx = 130, cy = 130, r = 104;
    const pt = p => { const a = Math.PI * (1 - p / 100); return [cx + r * Math.cos(a), cy - r * Math.sin(a)]; };
    const arc = (p1, p2) => { const [x1, y1] = pt(p1), [x2, y2] = pt(p2); return `M${x1.toFixed(1)} ${y1.toFixed(1)} A${r} ${r} 0 0 1 ${x2.toFixed(1)} ${y2.toFixed(1)}`; };
    const bands = [[0, 40, "--lv-insuf"], [40, 60, "--lv-debutant"], [60, 75, "--lv-inter"], [75, 90, "--lv-avance"], [90, 100, "--lv-expert"]];
    const ticks = [0, 40, 60, 75, 90, 100].map(p => {
      const a = Math.PI * (1 - p / 100), tx = cx + (r + 20) * Math.cos(a), ty = cy - (r + 20) * Math.sin(a);
      return `<text x="${tx.toFixed(1)}" y="${(ty + 4).toFixed(1)}" text-anchor="middle" font-size="11" fill="#5B6B7F">${p}</text>`;
    }).join("");
    const deg = (animate ? 0 : pct) * 1.8;
    return `<svg class="gauge" viewBox="-12 0 284 175" width="${size}" role="img" aria-label="Résultat : ${pct} %">
      ${bands.map(([a, b, c]) => `<path d="${arc(a, b)}" stroke="var(${c})" stroke-width="20" fill="none"/>`).join("")}
      ${ticks}
      <g class="needle" style="transform-origin:${cx}px ${cy}px; transform: rotate(${deg}deg); transition: transform 1.3s cubic-bezier(.2,.8,.2,1)" data-target="${pct * 1.8}">
        <line x1="${cx}" y1="${cy}" x2="${cx - r + 14}" y2="${cy}" stroke="#14233C" stroke-width="5" stroke-linecap="round"/>
      </g>
      <circle cx="${cx}" cy="${cy}" r="10" fill="#14233C"/><circle cx="${cx}" cy="${cy}" r="4.5" fill="#F5B82E"/>
      ${label ? `<text x="${cx}" y="168" text-anchor="middle" font-size="34" font-weight="700" fill="#14233C">${pct} %</text>` : ""}
    </svg>`;
  }
  function runNeedles() {
    requestAnimationFrame(() => requestAnimationFrame(() => {
      app.querySelectorAll(".needle[data-target]").forEach(n => { n.style.transform = `rotate(${n.dataset.target}deg)`; });
    }));
  }

  // ---------- Accueil ----------
  function renderHome() {
    setKeys(null);
    keepAwake(false);
    status.textContent = "";
    let saved = store.get(KEY_SESSION, null);
    if (saved && (!saved.ids || !saved.answers || saved.answers.length !== questionsFor(saved.ids).length)) { store.del(KEY_SESSION); saved = null; }
    const history = store.get(KEY_HISTORY, []);

    app.innerHTML = `
      <section class="hero">
        <div>
          <h1>Évaluer les connaissances techniques</h1>
          <p class="lede">Choisissez un questionnaire de 25 questions. À la fin, la note, le pourcentage et le niveau du candidat s'affichent selon la grille d'évaluation Flo-Fab. Les bonnes réponses ne sont pas affichées.</p>
        </div>
        <div class="hero-gauge" aria-hidden="true">${gaugeSVG(82, { size: 190, label: false })}</div>
      </section>

      ${storageOK ? "" : `<div class="notice" role="alert"><p><strong>Le stockage de ce navigateur est désactivé</strong> (navigation privée ou réglage de sécurité). Les tentatives, l'historique et la reprise d'un questionnaire ne peuvent pas être enregistrés. Utilisez une fenêtre de navigation normale.</p></div>`}
      ${installTip()}
      ${saved ? `<div class="notice no-print" role="status">
        <p><strong>Un questionnaire est en cours</strong> : ${esc(saved.titre)}, ${esc(saved.candidat.nom)}, ${saved.answers.filter(a => a !== null).length} réponse(s) sur ${saved.answers.length}.</p>
        <div class="btn-row"><button class="btn" data-action="resume">Reprendre le questionnaire</button><button class="btn btn-ghost" data-action="discard">Abandonner</button></div>
      </div>` : ""}

      <h2 class="section-head">Questionnaires</h2>
      <div class="panel"><ul class="qlist">
        ${DATA.map(t => `<li><span class="qnum">${t.numero}</span>
          <div><div class="qtitle">${esc(t.titre)}</div><div class="qmeta">${t.questions.length} questions, environ 20 minutes</div></div>
          <button class="btn" data-action="choose" data-ids="${t.id}" aria-label="Commencer : ${esc(t.titre)}">Commencer</button></li>`).join("")}
        <li class="complete"><span class="qnum">∑</span>
          <div><div class="qtitle">Questionnaire complet</div><div class="qmeta">Les ${DATA.length} thèmes, ${DATA.reduce((s, t) => s + t.questions.length, 0)} questions, résultat par section et global</div></div>
          <button class="btn" data-action="choose" data-ids="${DATA.map(t => t.id).join(",")}">Commencer</button></li>
      </ul></div>

      <h2 class="section-head">Grille d'évaluation</h2>
      <div class="panel table-wrap"><table class="data levels-table">
        <thead><tr><th scope="col">Résultat</th><th scope="col">Niveau</th><th scope="col">Description</th><th scope="col">Recommandation</th></tr></thead>
        <tbody>${LEVELS.map(l => `<tr><td>${l.range}</td><td><span class="level-chip" style="background:${l.color}"></span>${l.name}</td><td>${esc(l.desc)}</td><td>${esc(l.rec)}</td></tr>`).join("")}</tbody>
      </table></div>
      <p class="small muted" style="margin-top:.6rem">Seuil de réussite suggéré : ${PASS} % (niveau Avancé). Chaque question vaut 1, 2 ou 3 points selon sa complexité (faible, moyenne ou élevée) ; le pourcentage est calculé sur les points obtenus.</p>

      ${unlocked ? `<div class="resp-banner no-print" role="status"><p><strong>Espace responsable ouvert.</strong> Les résultats sont visibles. Verrouillez l'espace avant de remettre l'appareil à un candidat.</p><button class="btn" data-action="lock">Verrouiller</button></div>
      <h2 class="section-head">Évaluation sur papier</h2>
      <div class="panel paper-panel no-print">
        <p>Imprimez un questionnaire pour le faire passer sur papier, puis saisissez les réponses du candidat pour obtenir le résultat pondéré, le rapport PDF et l'envoi par courriel.</p>
        <div class="paper-row">
          <div class="field"><label for="paper-select">Questionnaire</label>
            <select id="paper-select">${DATA.map(t => `<option value="${t.id}">${t.numero}. ${esc(t.titre)}</option>`).join("")}<option value="${DATA.map(t => t.id).join(",")}">Questionnaire complet (${DATA.length} thèmes)</option></select></div>
          <div class="btn-row">
            <button class="btn btn-ghost" data-action="print-quiz">Imprimer le questionnaire</button>
            <button class="btn" data-action="paper-entry">Saisir une copie papier</button>
          </div>
        </div>
        <p class="small muted" id="paper-msg" role="status">Le questionnaire imprimé ne contient pas les réponses.</p>
      </div>

      ${attemptsPanel()}

      <div class="section-head"><h2 style="margin:0">Résultats enregistrés</h2>
        ${history.length ? `<div class="btn-row no-print"><button class="btn btn-ghost" data-action="export-all">Exporter tout (CSV)</button><button class="btn btn-ghost" data-action="clear-history">Effacer</button></div>` : ""}</div>
      <div class="panel table-wrap history">
        ${history.length ? `<table class="data"><thead><tr><th scope="col">Date</th><th scope="col">Candidat</th><th scope="col">Questionnaire</th><th scope="col" class="num">Tentative</th><th scope="col" class="num">Points</th><th scope="col" class="num">%</th><th scope="col">Niveau</th><th scope="col">Courriel</th><th scope="col"><span class="sr-only">Action</span></th></tr></thead><tbody>
          ${history.slice().reverse().map(h => { const T = totalsOf(h.sections), p = T.pct, L = levelFor(p);
            return `<tr><td>${esc(new Date(h.date).toLocaleDateString("fr-CA"))}</td><td>${esc(h.candidat.nom)}</td><td>${esc(h.titre)}</td><td class="num">${h.tentative ? h.tentative + " / " + MAX_ATTEMPTS : "-"}${h.mode === "papier" ? ' <span class="tag skip">Papier</span>' : ""}</td><td class="num">${T.points} / ${T.pointsTotal}</td><td class="num">${p} %</td><td><span class="level-chip" style="background:${L.color}"></span>${L.name}</td><td>${h.courriel ? (h.courriel.statut === "envoye" || h.courriel.statut === "partage" ? '<span class="tag ok">Envoyé</span>' : h.courriel.statut === "telecharge" ? '<span class="tag skip">Téléchargé</span>' : h.courriel.statut === "annule" ? '<span class="tag bad">Annulé</span>' : h.courriel.statut === "attente" ? '<span class="tag skip">En attente</span>' : '<span class="tag bad">Échec</span>') : '<span class="tag skip">Non envoyé</span>'}</td><td><button class="btn btn-quiet" data-action="view" data-id="${h.id}">Voir</button></td></tr>`; }).join("")}
        </tbody></table>` : `<p class="empty">Aucun résultat pour l'instant. Les résultats des questionnaires terminés dans ce navigateur apparaîtront ici.</p>`}
      </div>
      ` : `<div class="panel resp-teaser no-print"><p>Les résultats, les tentatives et l'évaluation sur papier sont réservés au responsable.</p><button class="btn btn-ghost" data-action="unlock">Espace responsable</button></div>`}`;
    focusMain();
  }

  function attemptsPanel() {
    const all = store.get(KEY_ATTEMPTS, {});
    const rows = Object.entries(all).sort((a, b) => (b[1].last || "").localeCompare(a[1].last || ""));
    return `<div class="section-head"><h2 style="margin:0">Tentatives</h2></div>
      <p class="small muted">Maximum de ${MAX_ATTEMPTS} tentatives par candidat et par questionnaire. Une tentative abandonnée est comptée.</p>
      <div class="panel table-wrap">${rows.length ? `<table class="data"><thead><tr><th scope="col">Candidat</th><th scope="col">Questionnaire</th><th scope="col" class="num">Tentatives</th><th scope="col">Statut</th><th scope="col"><span class="sr-only">Action</span></th></tr></thead><tbody>
        ${rows.map(([k, a]) => `<tr><td>${esc(a.nom)}</td><td>${esc(a.titre)}</td><td class="num">${a.count} / ${MAX_ATTEMPTS}</td>
          <td>${a.count >= MAX_ATTEMPTS ? '<span class="tag bad">Maximum atteint</span>' : `<span class="tag ok">${MAX_ATTEMPTS - a.count} restante(s)</span>`}</td>
          <td><button class="btn btn-quiet" data-action="reset-attempts" data-key="${esc(k)}">Réinitialiser</button></td></tr>`).join("")}
      </tbody></table>` : `<p class="empty">Aucune tentative enregistrée.</p>`}</div>`;
  }

  // ---------- Informations du candidat ----------
  function renderStart(ids) {
    if (unlocked) lock(true);
    setKeys(null);
    keepAwake(false);
    const titre = titleFor(ids);
    const n = questionsFor(ids).length;
    status.textContent = "";
    app.innerHTML = `
      <section class="panel start-card">
        <h1>${esc(titre)}</h1>
        <p class="muted">${n} questions. Les bonnes réponses ne sont pas affichées.</p>
        <form id="start-form" novalidate>
          <div class="form-grid">
            <div class="field"><label for="f-nom">Nom du candidat</label><input id="f-nom" name="nom" autocomplete="name" required><div class="error" id="err-nom" hidden>Inscrivez le nom du candidat pour commencer.</div><div class="small muted" id="attempt-info" aria-live="polite"></div></div>
            <div class="field"><label for="f-poste">Poste</label><input id="f-poste" name="poste"></div>
            <div class="field"><label for="f-date">Date</label><input id="f-date" name="date" type="date" value="${today()}"></div>
          </div>
          <p class="small muted">Une seule réponse est correcte par question. Vous pouvez naviguer entre les questions et modifier vos réponses jusqu'à la fin. Seul le résultat s'affiche à la fin. Aucune calculatrice n'est nécessaire.</p>
          <div class="btn-row"><button class="btn" type="submit">Commencer le questionnaire</button><button class="btn btn-ghost" type="button" data-action="home">Retour</button></div>
        </form>
      </section>`;
    const form = document.getElementById("start-form");
    const nomInput = document.getElementById("f-nom"), info = document.getElementById("attempt-info"), startBtn = form.querySelector('button[type="submit"]');
    const refreshAttempts = () => {
      const nom = nomInput.value.trim();
      if (!nom) { info.textContent = `Maximum de ${MAX_ATTEMPTS} tentatives par candidat pour ce questionnaire.`; startBtn.disabled = false; return; }
      const used = attemptsUsed(nom, ids);
      if (used >= MAX_ATTEMPTS) { info.innerHTML = `<span style="color:var(--bad);font-weight:600">Nombre maximal de tentatives atteint (${used} sur ${MAX_ATTEMPTS}). Un responsable peut réinitialiser les tentatives depuis l'accueil.</span>`; startBtn.disabled = true; }
      else { info.textContent = `Tentatives utilisées : ${used} sur ${MAX_ATTEMPTS}. Ce sera la tentative ${used + 1}.`; startBtn.disabled = false; }
    };
    nomInput.addEventListener("input", refreshAttempts);
    refreshAttempts();
    form.addEventListener("submit", e => {
      e.preventDefault();
      const f = new FormData(form);
      const nom = (f.get("nom") || "").trim();
      const err = document.getElementById("err-nom");
      if (!nom) { err.hidden = false; document.getElementById("f-nom").setAttribute("aria-invalid", "true"); document.getElementById("f-nom").focus(); return; }
      if (attemptsUsed(nom, ids) >= MAX_ATTEMPTS) { refreshAttempts(); return; }
      const tentative = registerAttempt(nom, ids, titre);
      session = {
        ids, titre, mode: "evaluation", tentative, current: 0, startedAt: Date.now(),
        candidat: { nom, poste: (f.get("poste") || "").trim(), date: f.get("date") || today() },
        answers: new Array(n).fill(null),
      };
      store.set(KEY_SESSION, session);
      renderQuiz();
    });
    document.getElementById("f-nom").focus();
  }

  // ---------- Questionnaire ----------
  function renderQuiz() {
    const qs = questionsFor(session.ids);
    const i = session.current, q = qs[i];
    const answered = session.answers.filter(a => a !== null).length;
    const multi = session.ids.length > 1;
    const ans = session.answers[i];
    status.textContent = `${session.candidat.nom}, ${answered} / ${qs.length} répondues`;

    const sections = [...new Set(qs.map(x => x.secId))];

    app.innerHTML = `
      <div class="quiz">
        <div class="quiz-head">
          <h1 style="font-size:1.6rem">${esc(session.titre)}</h1>
          <div class="progress" role="progressbar" aria-label="Progression" aria-valuemin="0" aria-valuemax="${qs.length}" aria-valuenow="${answered}"><div style="width:${(answered / qs.length) * 100}%"></div></div>
        </div>
        <section class="panel qcard" aria-live="polite">
          <div class="qcard-meta">Question ${i + 1} de ${qs.length}${multi ? `, section ${q.secNum} : ${esc(q.secTitre)}` : ""} <span class="cx cx-${ptsOf(q)}" title="Complexité ${COMPLEXITE[ptsOf(q)]}">Complexité ${COMPLEXITE[ptsOf(q)]}, ${ptsOf(q)} point${ptsOf(q) > 1 ? "s" : ""}</span></div>
          <h2 id="q-text">${esc(q.question)}</h2>
          <fieldset class="choices" aria-labelledby="q-text">
            ${q.choix.map((c, k) => `<div class="choice">
              <input type="radio" name="choice" id="c${k}" value="${k}" ${ans === k ? "checked" : ""}>
              <label for="c${k}"><span class="key" aria-hidden="true">${LETTERS[k]}</span><span><span class="sr-only">${LETTERS[k]}. </span>${esc(c)}</span></label></div>`).join("")}
          </fieldset>
          <p class="kbd-hint">Raccourcis : <kbd>A</kbd> à <kbd>D</kbd> pour répondre, <kbd>←</kbd> <kbd>→</kbd> pour changer de question.</p>
          <p class="touch-hint">Glissez vers la gauche ou la droite pour changer de question.</p>
          <div class="qnav-bar">
            <button class="btn btn-ghost" data-action="prev" ${i === 0 ? "disabled" : ""}>Question précédente</button>
            ${i < qs.length - 1 ? `<button class="btn" data-action="next">Question suivante</button>` : `<button class="btn" data-action="finish">Terminer le questionnaire</button>`}
          </div>
        </section>
        <aside class="panel navigator" aria-label="Aller à une question">
          <h3>Questions</h3>
          ${sections.map(sid => {
            const idxs = qs.map((x, k) => (x.secId === sid ? k : -1)).filter(k => k >= 0);
            return `<div class="navsec">${multi ? `<div class="navsec-title">${esc(qs[idxs[0]].secNum + ". " + qs[idxs[0]].secTitre)}</div>` : ""}<div class="navgrid">
              ${idxs.map(k => { const cls = session.answers[k] !== null ? "answered" : "";
                return `<button class="${cls}${k === i ? " current" : ""}" data-action="goto" data-i="${k}" aria-label="Question ${k + 1}${session.answers[k] !== null ? ", répondue" : ""}" ${k === i ? 'aria-current="true"' : ""}>${qs[k].numInSec}</button>`; }).join("")}
            </div></div>`; }).join("")}
          <p class="nav-legend">${answered} sur ${qs.length} répondues.</p>
          <button class="btn btn-ghost" style="width:100%;margin-top:.5rem" data-action="finish">Terminer le questionnaire</button>
        </aside>
      </div>`;

    keepAwake(true);
    const card = app.querySelector(".qcard");
    if (swipeDir) { card.classList.add(swipeDir); swipeDir = ""; }
    let tx = null, ty = null;
    card.addEventListener("touchstart", e => { if (e.touches.length === 1) { tx = e.touches[0].clientX; ty = e.touches[0].clientY; } }, { passive: true });
    card.addEventListener("touchend", e => {
      if (tx === null) return;
      const dx = e.changedTouches[0].clientX - tx, dy = e.changedTouches[0].clientY - ty; tx = null;
      if (Math.abs(dx) > 70 && Math.abs(dy) < 50) { swipeDir = dx < 0 ? "swipe-left" : "swipe-right"; go(i + (dx < 0 ? 1 : -1)); }
    }, { passive: true });

    app.querySelectorAll('input[name="choice"]').forEach(inp => inp.addEventListener("change", () => {
      session.answers[i] = Number(inp.value);
      store.set(KEY_SESSION, session);
      updateNavState(qs);
    }));

    setKeys(e => {
      if (e.ctrlKey || e.metaKey || e.altKey || e.repeat) return;
      if (e.target.closest("input:not([type=radio]), textarea, select")) return;
      if (document.querySelector("dialog[open]")) return;
      // Gauche / droite changent toujours de question (sans modifier la réponse, même si un choix a le focus)
      if (e.key === "ArrowRight" || e.key === "ArrowLeft") { e.preventDefault(); go(i + (e.key === "ArrowRight" ? 1 : -1)); return; }
      const k = e.key.length === 1 ? e.key.toUpperCase() : "";
      const idx = LETTERS.indexOf(k) >= 0 ? LETTERS.indexOf(k) : ["1", "2", "3", "4"].indexOf(e.key);
      if (idx >= 0) { const inp = document.getElementById("c" + idx); if (inp) { e.preventDefault(); inp.checked = true; inp.dispatchEvent(new Event("change")); inp.focus(); } }
    });
  }
  function updateNavState(qs) {
    const answered = session.answers.filter(a => a !== null).length;
    status.textContent = `${session.candidat.nom}, ${answered} / ${qs.length} répondues`;
    const bar = app.querySelector(".progress"); if (bar) { bar.setAttribute("aria-valuenow", answered); bar.firstElementChild.style.width = (answered / qs.length) * 100 + "%"; }
    const btn = app.querySelector(`.navgrid button[data-i="${session.current}"]`); if (btn) { btn.classList.add("answered"); btn.setAttribute("aria-label", `Question ${session.current + 1}, répondue`); }
    const leg = app.querySelector(".nav-legend"); if (leg) leg.textContent = `${answered} sur ${qs.length} répondues.`;
  }
  function go(k) {
    const n = session.answers.length;
    if (k < 0 || k >= n) { swipeDir = ""; return; }
    session.current = k; store.set(KEY_SESSION, session); renderQuiz();
    const first = app.querySelector('input[name="choice"]:checked') || app.querySelector('input[name="choice"]');
    (first || app.querySelector(".qcard h2")).focus?.({ preventScroll: true });
  }
  function finish() {
    const missing = session.answers.filter(a => a === null).length;
    const doFinish = () => {
      const qs = questionsFor(session.ids);
      const sections = [...new Set(qs.map(q => q.secId))].map(sid => {
        const idx = qs.map((q, k) => (q.secId === sid ? k : -1)).filter(k => k >= 0);
        const t = DATA.find(x => x.id === sid);
        const ok = idx.filter(k => session.answers[k] === qs[k].reponse);
        return { id: sid, numero: t.numero, titre: t.titre, total: idx.length, correct: ok.length,
          points: ok.reduce((a, k) => a + ptsOf(qs[k]), 0), pointsTotal: idx.reduce((a, k) => a + ptsOf(qs[k]), 0) };
      });
      const rec = { id: String(Date.now()), date: new Date().toISOString(), ids: session.ids, titre: session.titre, mode: session.mode, tentative: session.tentative,
        candidat: session.candidat, answers: session.answers, sections, durationSec: Math.round((Date.now() - session.startedAt) / 1000) };
      const h = store.get(KEY_HISTORY, []); h.push(rec); store.set(KEY_HISTORY, h.slice(-200));
      store.del(KEY_SESSION); session = null;
      lock(true);
      if (SERVER && MAIL.envoiAutomatique) sendByEmail(rec, { silent: true }); // envoi invisible pour le candidat
      renderDone(rec);
    };
    if (missing) confirmDialog(`${missing} question(s) sans réponse. Elles seront comptées comme incorrectes.`, "Terminer quand même", doFinish);
    else doFinish();
  }

  // ---------- Résultats ----------
  function renderResults(rec, opts = {}) {
    if (!unlocked) { requireResp(() => renderResults(rec, opts)); return; }
    setKeys(null);
    keepAwake(false);
    const T = totalsOf(rec.sections), { correct, total } = T;
    const pct = T.pct, L = levelFor(pct), pass = pct >= PASS;
    status.textContent = "";
    const c = rec.candidat;

    app.innerHTML = `
      <div class="results">
        <section class="panel result-top">
          <div>${gaugeSVG(pct, { animate: true })}</div>
          <div>
            <p class="muted" style="margin-bottom:.2rem">${esc(rec.titre)}</p>
            <div class="level-name"><span class="level-chip" style="background:${L.color};width:1.1rem;height:1.1rem"></span>${L.name}</div>
            <p>${esc(L.desc)}</p>
            <p class="verdict ${pass ? "pass" : "fail"}">${pass ? `Seuil de réussite atteint (${PASS} %).` : `Sous le seuil de réussite de ${PASS} %.`} Recommandation : ${esc(L.rec)}</p>
            ${rec.tentative && !pass ? `<p class="small muted">${MAX_ATTEMPTS - attemptsUsed(c.nom, rec.ids) > 0 ? `Tentatives restantes pour ce questionnaire : ${MAX_ATTEMPTS - attemptsUsed(c.nom, rec.ids)}.` : "Aucune tentative restante pour ce questionnaire."}</p>` : ""}
            <dl class="facts">
              <div><dt>Candidat</dt><dd>${esc(c.nom)}</dd></div>
              ${c.poste ? `<div><dt>Poste</dt><dd>${esc(c.poste)}</dd></div>` : ""}
              <div><dt>Date</dt><dd>${esc(c.date)}</dd></div>
              <div><dt>Points</dt><dd>${T.points} / ${T.pointsTotal}</dd></div>
              <div><dt>Bonnes réponses</dt><dd>${correct} / ${total}</dd></div>
              <div><dt>${rec.mode === "papier" ? "Type" : "Durée"}</dt><dd>${rec.mode === "papier" ? "Copie papier" : fmtDuration(rec.durationSec)}</dd></div>
              ${rec.tentative ? `<div><dt>Tentative</dt><dd>${rec.tentative} sur ${MAX_ATTEMPTS}</dd></div>` : ""}
            </dl>
            <p class="mail-status no-print" id="mail-status" role="status">${mailStatusText(rec)}</p>
            <div class="btn-row no-print">
              <button class="btn" data-action="mail" data-id="${rec.id}">${rec.courriel && ["envoye", "partage"].includes(rec.courriel.statut) ? "Renvoyer par courriel" : "Envoyer par courriel"}</button>
              <button class="btn btn-ghost" data-action="pdf" data-id="${rec.id}">Télécharger le PDF</button>
              <button class="btn btn-ghost" data-action="print">Imprimer</button>
              <button class="btn btn-ghost" data-action="export" data-id="${rec.id}">Exporter (CSV)</button>
              <button class="btn btn-ghost" data-action="home">Retour à l'accueil</button>
            </div>
          </div>
        </section>

        <h2 class="section-head">Résultat par section</h2>
        <div class="panel table-wrap"><table class="data">
          <thead><tr><th scope="col">Section</th><th scope="col" class="num">Bonnes réponses</th><th scope="col" class="num">Points</th><th scope="col" class="num">%</th><th scope="col" style="width:24%">Répartition</th><th scope="col">Niveau</th></tr></thead>
          <tbody>${rec.sections.map(s => { const p = secPct(s), l = levelFor(p), [pa, pb] = secPts(s);
            return `<tr><td>${s.numero}. ${esc(s.titre)}</td><td class="num">${s.correct} / ${s.total}</td><td class="num">${pa} / ${pb}</td><td class="num">${p} %</td>
              <td><div class="bar" aria-hidden="true"><div style="width:${p}%;background:${l.color}"></div></div></td><td><span class="level-chip" style="background:${l.color}"></span>${l.name}</td></tr>`; }).join("")}
            ${rec.sections.length > 1 ? `<tr><td><strong>Résultat global</strong></td><td class="num"><strong>${correct} / ${total}</strong></td><td class="num"><strong>${T.points} / ${T.pointsTotal}</strong></td><td class="num"><strong>${pct} %</strong></td><td></td><td><strong>${L.name}</strong></td></tr>` : ""}
          </tbody></table></div>
        <p class="small muted" style="margin-top:.6rem">Le pourcentage est calculé sur les points : chaque question vaut 1, 2 ou 3 points selon sa complexité.</p>
      </div>`;

    focusMain();
    runNeedles();
    if (opts.auto) autoReport(rec);
  }

  // ---------- Rapport PDF ----------
  const CFG = window.FLOFAB_CONFIG || {};
  const MAIL = Object.assign({ methode: "appareil", destinataire: "", url: "", jeton: "", envoiAutomatique: true }, CFG.courriel || {});
  const SERVER = MAIL.methode !== "appareil" && !!MAIL.url;   // envoi automatique par Google Apps Script si l'URL est configurée
  const recipientOf = () => MAIL.destinataire || "";
  const LEVEL_RGB = { "Expert": [46, 139, 87], "Avancé": [127, 176, 105], "Intermédiaire": [233, 182, 59], "Débutant": [228, 131, 58], "Insuffisant": [200, 69, 59] };
  // Les polices standard des PDF ne couvrent pas certains symboles : on les remplace par un équivalent lisible.
  const pdfText = v => String(v ?? "")
    .replace(/\s?Ω/g, " ohms").replace(/√/g, "racine ").replace(/φ/g, "phi").replace(/ρ/g, "rho").replace(/μ/g, "u")
    .replace(/≈/g, "~").replace(/→/g, "->").replace(/←/g, "<-").replace(/≥/g, ">=").replace(/≤/g, "<=").replace(/−/g, "-").replace(/∑/g, "Somme")
    .replace(/[^\x00-\xFF€‚ƒ„…†‡ˆ‰Š‹ŒŽ‘’“”•–—˜™š›œžŸ]/g, "?");
  const safeName = s => normName(s).replace(/[^a-z0-9]+/g, "_").replace(/^_|_$/g, "") || "candidat";
  const pdfName = rec => `Evaluation_${safeName(rec.candidat.nom)}_${rec.ids.length > 1 ? "complet" : rec.ids[0]}_${rec.candidat.date}${rec.tentative ? "_T" + rec.tentative : ""}.pdf`;
  const summaryOf = rec => {
    const T = totalsOf(rec.sections);
    return { correct: T.correct, total: T.total, points: T.points, pointsTotal: T.pointsTotal, pct: T.pct, level: levelFor(T.pct), pass: T.pct >= PASS };
  };

  // Logo Flo-Fab (blanc) dans le bandeau des PDF ; retourne la position x de fin du logo
  function pdfLogo(doc, x, y, h) {
    const L = window.FLOFAB_LOGO;
    if (L && L.blanc) { const w = h * L.ratio; try { doc.addImage(L.blanc, "PNG", x, y, w, h); return x + w; } catch (e) { /* logo indisponible */ } }
    doc.setTextColor(255); doc.setFont("helvetica", "bold"); doc.setFontSize(14); doc.text("Flo-Fab", x, y + h * 0.65);
    return x + 22;
  }
  function buildPDF(rec, { correction = false } = {}) {
    if (!window.jspdf || !window.jspdf.jsPDF) throw new Error("La bibliothèque PDF n'a pas pu être chargée. Vérifiez la connexion Internet.");
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF({ unit: "mm", format: "letter" });
    if (typeof doc.autoTable !== "function") throw new Error("Le module de tableaux PDF n'a pas pu être chargé.");
    const W = doc.internal.pageSize.getWidth(), M = 16, INK = [20, 35, 60], STEEL = [91, 107, 127];
    const qs = questionsFor(rec.ids), S = summaryOf(rec), c = rec.candidat, lv = LEVEL_RGB[S.level.name];

    // Bandeau
    doc.setFillColor(...INK); doc.rect(0, 0, W, 24, "F");
    const LX = pdfLogo(doc, M, 3.5, 15);
    doc.setTextColor(255); doc.setFont("helvetica", "normal"); doc.setFontSize(10); doc.text(pdfText("Rapport d'évaluation des connaissances techniques"), LX + 6, 13.5);
    doc.setFontSize(9); doc.text(pdfText(correction ? "Confidentiel — avec correction" : "Confidentiel"), W - M, 11, { align: "right" });

    let y = 36;
    doc.setTextColor(...INK); doc.setFont("helvetica", "bold"); doc.setFontSize(18); doc.text(pdfText(rec.titre), M, y);
    y += 6;
    doc.autoTable({
      startY: y, margin: { left: M, right: M }, theme: "plain", styles: { fontSize: 9.5, cellPadding: 1.4, textColor: INK },
      columnStyles: { 0: { fontStyle: "bold", cellWidth: 38, textColor: STEEL }, 2: { fontStyle: "bold", cellWidth: 30, textColor: STEEL } },
      body: [
        ["Candidat", pdfText(c.nom), "Date", pdfText(c.date)],
        ["Poste", pdfText(c.poste || "-"), "Tentative", rec.tentative ? `${rec.tentative} sur ${MAX_ATTEMPTS}` : "-"],
        [pdfText(rec.mode === "papier" ? "Type" : "Durée"), pdfText(rec.mode === "papier" ? "Copie papier" : fmtDuration(rec.durationSec)), pdfText("Généré le"), pdfText(new Date().toLocaleString("fr-CA", { dateStyle: "medium", timeStyle: "short" }))],
      ],
    });
    y = doc.lastAutoTable.finalY + 6;

    // Bloc résultat
    doc.setDrawColor(213, 220, 227); doc.setFillColor(247, 249, 251); doc.roundedRect(M, y, W - 2 * M, 34, 2, 2, "FD");
    doc.setFont("helvetica", "bold"); doc.setFontSize(30); doc.setTextColor(...INK); doc.text(`${S.pct} %`, M + 6, y + 16);
    doc.setFontSize(10); doc.setFont("helvetica", "normal"); doc.setTextColor(...STEEL); doc.text(pdfText(`${S.points} / ${S.pointsTotal} points`), M + 6, y + 23); doc.text(pdfText(`${S.correct} / ${S.total} bonnes réponses`), M + 6, y + 28);
    doc.setFillColor(...lv); doc.roundedRect(M + 58, y + 6, 40, 9, 1.5, 1.5, "F");
    doc.setTextColor(255); doc.setFont("helvetica", "bold"); doc.setFontSize(11); doc.text(pdfText(S.level.name), M + 78, y + 12.2, { align: "center" });
    doc.setTextColor(...INK); doc.setFont("helvetica", "normal"); doc.setFontSize(9.5);
    doc.text(doc.splitTextToSize(pdfText(S.level.desc), W - 2 * M - 110), M + 104, y + 9);
    doc.setFont("helvetica", "bold"); doc.setTextColor(...(S.pass ? [46, 125, 79] : [184, 58, 48]));
    doc.text(pdfText(S.pass ? `Seuil de réussite atteint (${PASS} %)` : `Sous le seuil de réussite (${PASS} %)`), M + 58, y + 22);
    doc.setFont("helvetica", "normal"); doc.setTextColor(...INK);
    doc.text(doc.splitTextToSize(pdfText("Recommandation : " + S.level.rec), W - 2 * M - 64), M + 58, y + 28);
    y += 42;

    // Résultat par section
    doc.setFont("helvetica", "bold"); doc.setFontSize(12); doc.text(pdfText("Résultat par section"), M, y);
    const secRows = rec.sections.map(s => { const p = secPct(s), [pa, pb] = secPts(s); return [pdfText(`${s.numero}. ${s.titre}`), `${s.correct} / ${s.total}`, `${pa} / ${pb}`, `${p} %`, pdfText(levelFor(p).name)]; });
    if (rec.sections.length > 1) secRows.push([pdfText("Résultat global"), `${S.correct} / ${S.total}`, `${S.points} / ${S.pointsTotal}`, `${S.pct} %`, pdfText(S.level.name)]);
    doc.autoTable({
      startY: y + 3, margin: { left: M, right: M }, head: [["Section", pdfText("Bonnes rép."), "Points", "%", "Niveau"]], body: secRows,
      headStyles: { fillColor: INK, fontSize: 9 }, styles: { fontSize: 9, cellPadding: 2 },
      columnStyles: { 1: { halign: "right", cellWidth: 24 }, 2: { halign: "right", cellWidth: 20 }, 3: { halign: "right", cellWidth: 16 }, 4: { cellWidth: 32, fontStyle: "bold" } },
      didParseCell: d => { if (d.section === "head" && d.column.index >= 1 && d.column.index <= 3) d.cell.styles.halign = "right";
        if (d.section === "body" && d.column.index === 4) { const rgb = LEVEL_RGB[Object.keys(LEVEL_RGB).find(k => pdfText(k) === d.cell.raw)]; if (rgb) { d.cell.styles.fillColor = rgb; d.cell.styles.textColor = 255; } }
        if (d.section === "body" && rec.sections.length > 1 && d.row.index === secRows.length - 1) d.cell.styles.fontStyle = "bold"; },
    });
    y = doc.lastAutoTable.finalY + 5;
    doc.setFont("helvetica", "italic"); doc.setFontSize(8.5); doc.setTextColor(...STEEL);
    doc.text(pdfText("Pondération : chaque question vaut 1, 2 ou 3 points selon sa complexité (faible, moyenne, élevée). Le pourcentage est calculé sur les points."), M, y + 2, { maxWidth: W - 2 * M });
    y += 10;
    if (y > 235) { doc.addPage(); y = 20; }
    doc.setFont("helvetica", "normal"); doc.setFontSize(9.5); doc.setTextColor(...STEEL);

    // Détail des réponses et correction : seulement dans le rapport envoyé par le serveur
    if (correction) {
    doc.addPage();
    doc.setTextColor(...INK); doc.setFont("helvetica", "bold"); doc.setFontSize(12); doc.text(pdfText("Détail des réponses"), M, 18);
    doc.autoTable({
      startY: 22, margin: { left: M, right: M }, head: [["#", "Question", "Pts", "Donnée", "Bonne", pdfText("Résultat")]],
      body: qs.map((q, k) => { const a = rec.answers[k]; return [rec.ids.length > 1 ? `S${q.secNum}-${q.numInSec}` : String(q.numInSec), pdfText(q.question), String(ptsOf(q)), a === null ? "-" : LETTERS[a], LETTERS[q.reponse], a === q.reponse ? "Correct" : a === null ? pdfText("Sans réponse") : "Incorrect"]; }),
      headStyles: { fillColor: INK, fontSize: 8.5 }, styles: { fontSize: 8, cellPadding: 1.6, valign: "middle" },
      columnStyles: { 0: { cellWidth: 14 }, 2: { cellWidth: 11, halign: "center" }, 3: { cellWidth: 15, halign: "center" }, 4: { cellWidth: 15, halign: "center" }, 5: { cellWidth: 24 } },
      didParseCell: d => { if (d.section === "body" && d.column.index === 5) { d.cell.styles.fontStyle = "bold"; d.cell.styles.textColor = d.cell.raw === "Correct" ? [46, 125, 79] : d.cell.raw === "Incorrect" ? [184, 58, 48] : STEEL; } },
    });

    // Erreurs et explications
    const wrong = qs.map((q, k) => ({ q, k, a: rec.answers[k] })).filter(x => x.a !== x.q.reponse);
    if (wrong.length) {
      let yy = doc.lastAutoTable.finalY + 10;
      if (yy > 245) { doc.addPage(); yy = 18; }
      doc.setFont("helvetica", "bold"); doc.setFontSize(12); doc.setTextColor(...INK); doc.text(pdfText("Questions à revoir"), M, yy);
      doc.autoTable({
        startY: yy + 4, margin: { left: M, right: M }, head: [["#", pdfText("Question, bonne réponse et explication")]],
        body: wrong.map(({ q, a }) => [rec.ids.length > 1 ? `S${q.secNum}-${q.numInSec}` : String(q.numInSec),
          pdfText(`${q.question}\n${a === null ? "Sans réponse" : `Réponse donnée : ${LETTERS[a]}) ${q.choix[a]}`}\nBonne réponse : ${LETTERS[q.reponse]}) ${q.choix[q.reponse]}\n${q.explication}`)]),
        headStyles: { fillColor: INK, fontSize: 8.5 }, styles: { fontSize: 8, cellPadding: 2 }, columnStyles: { 0: { cellWidth: 14 } },
      });
    }
    }

    // Pieds de page
    const n = doc.getNumberOfPages();
    for (let p = 1; p <= n; p++) {
      doc.setPage(p); doc.setFont("helvetica", "normal"); doc.setFontSize(8); doc.setTextColor(...STEEL);
      doc.text(pdfText(`Flo-Fab Inc. — ${c.nom} — ${rec.titre}`), M, doc.internal.pageSize.getHeight() - 8);
      doc.text(`Page ${p} de ${n}`, W - M, doc.internal.pageSize.getHeight() - 8, { align: "right" });
    }
    return doc;
  }

  function mailStatusText(rec) {
    const m = rec.courriel;
    if (!m) return "";
    if (m.statut === "partage") return `Rapport PDF transmis à l'application de courriel le ${fmtDate(m.date)}. Vérifiez que le courriel a bien été envoyé.`;
    if (m.statut === "telecharge") return `Rapport PDF téléchargé le ${fmtDate(m.date)}. Joignez-le au courriel prérempli qui s'est ouvert.`;
    if (m.statut === "annule") return "Envoi annulé. Touchez « Envoyer par courriel » pour envoyer le rapport PDF.";
    if (m.statut === "envoye") return `Rapport PDF envoyé automatiquement par courriel le ${fmtDate(m.date)}${m.destinataires ? " à " + esc(m.destinataires) : ""}.`;
    if (m.statut === "attente") return "Pas de connexion Internet : le rapport PDF sera envoyé automatiquement dès le retour de la connexion.";
    if (m.statut === "echec") return `L'envoi par courriel a échoué (${esc(m.erreur || "erreur inconnue")}). Le rapport PDF a été téléchargé ; vous pouvez le transmettre manuellement.`;
    return "";
  }
  function setMailStatus(rec, html, kind) {
    const el = document.getElementById("mail-status");
    if (el) { el.innerHTML = html; el.dataset.kind = kind || ""; }
  }
  function saveRecord(rec) {
    const h = store.get(KEY_HISTORY, []), i = h.findIndex(x => x.id === rec.id);
    if (i >= 0) { h[i] = rec; store.set(KEY_HISTORY, h); }
  }
  function canShareFiles() {
    try { return !!(navigator.canShare && navigator.canShare({ files: [new File(["x"], "test.pdf", { type: "application/pdf" })] })); } catch (e) { return false; }
  }
  function saveDoc(doc, filename) {
    // Dans l'application installée sur iPad, le téléchargement direct n'est pas fiable : on ouvre le PDF, que l'on peut ensuite imprimer, partager ou enregistrer dans Fichiers.
    if (isIOS && isStandalone()) { const url = URL.createObjectURL(doc.output("blob")); window.open(url, "_blank"); setTimeout(() => URL.revokeObjectURL(url), 60000); }
    else doc.save(filename);
  }
  function savePDF(doc, rec) { saveDoc(doc, pdfName(rec)); }
  function downloadPDF(rec) {
    try { savePDF(buildPDF(rec), rec); return true; }
    catch (err) { setMailStatus(rec, esc(err.message), "bad"); return false; }
  }
  async function sharePDF(rec) {
    try {
      const doc = buildPDF(rec), S = summaryOf(rec);
      const file = new File([doc.output("blob")], pdfName(rec), { type: "application/pdf" });
      await navigator.share({ files: [file], title: pdfName(rec), text: `Résultat d'évaluation : ${rec.candidat.nom}, ${rec.titre} (${S.pct} %, ${S.level.name})` });
    } catch (err) { if (err.name !== "AbortError") setMailStatus(rec, esc(err.message), "bad"); }
  }
  const KEY_PENDING = "flofab-eval-envois-en-attente";
  const pending = { get: () => store.get(KEY_PENDING, []), add: id => { const p = pending.get(); if (p.indexOf(id) < 0) { p.push(id); store.set(KEY_PENDING, p); } }, del: id => store.set(KEY_PENDING, pending.get().filter(x => x !== id)) };
  let retrying = false;
  async function retryPending() {
    if (retrying || !SERVER || !navigator.onLine) return;
    retrying = true;
    try {
      for (const id of pending.get()) {
        const r = store.get(KEY_HISTORY, []).find(x => x.id === id);
        if (!r) { pending.del(id); continue; }
        await sendByEmail(r, { silent: true });
      }
    } finally { retrying = false; }
  }
  function mailtoFallback(rec) {
    const S = summaryOf(rec);
    const subject = `Résultat d'évaluation : ${rec.candidat.nom}, ${rec.titre} (${S.pct} %, ${S.level.name})`;
    const body = `Bonjour,\n\nVoici le résultat de l'évaluation technique.\n\nCandidat : ${rec.candidat.nom}\nQuestionnaire : ${rec.titre}\nPoints : ${S.points} / ${S.pointsTotal} (${S.pct} %)\nBonnes réponses : ${S.correct} / ${S.total}\nNiveau : ${S.level.name}\n${rec.tentative ? `Tentative : ${rec.tentative} sur ${MAX_ATTEMPTS}\n` : ""}\nLe rapport PDF (${pdfName(rec)}) est joint à ce courriel.\n`;
    return `mailto:${recipientOf(rec).replace(/[^A-Za-z0-9@._+,-]/g, "")}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  async function sendByEmail(rec, opts = {}) {
    setMailStatus(rec, "Envoi du rapport PDF par courriel en cours…");
    const btn = app.querySelector('[data-action="mail"]'); if (btn) btn.disabled = true;
    let doc;
    try { doc = buildPDF(rec, { correction: CORRECTION_DANS_PDF_COURRIEL }); } catch (err) { setMailStatus(rec, esc(err.message), "bad"); if (btn) btn.disabled = false; return; }
    const S = summaryOf(rec);
    const payload = {
      jeton: MAIL.jeton, nomFichier: pdfName(rec), pdf: doc.output("datauristring").split(",")[1],
      candidat: rec.candidat.nom, poste: rec.candidat.poste,
      date: rec.candidat.date, questionnaire: rec.titre, mode: rec.mode, tentative: rec.tentative, maxTentatives: MAX_ATTEMPTS,
      note: S.points, total: S.pointsTotal, bonnesReponses: S.correct, nbQuestions: S.total, pourcentage: S.pct, niveau: S.level.name, recommandation: S.level.rec, reussite: S.pass, seuil: PASS,
      sections: rec.sections.map(s => ({ titre: `${s.numero}. ${s.titre}`, note: secPts(s)[0], total: secPts(s)[1], pourcentage: secPct(s), niveau: levelFor(secPct(s)).name })),
    };
    const ctrl = new AbortController(), timer = setTimeout(() => ctrl.abort(), 45000);
    try {
      const res = await fetch(MAIL.url, { method: "POST", headers: { "Content-Type": "text/plain;charset=utf-8" }, body: JSON.stringify(payload), signal: ctrl.signal, redirect: "follow" });
      const j = await res.json().catch(() => ({ ok: false, erreur: `réponse illisible du serveur (code ${res.status})` }));
      if (!j.ok) throw new Error(j.erreur || "le serveur a refusé l'envoi");
      rec.courriel = { statut: "envoye", date: new Date().toISOString(), destinataires: j.destinataires || "" };
      saveRecord(rec); pending.del(rec.id);
      setMailStatus(rec, mailStatusText(rec), "ok");
    } catch (err) {
      const essais = ((rec.courriel && rec.courriel.essais) || 0) + 1;
      const reseau = !navigator.onLine || err.name === "AbortError" || err instanceof TypeError;
      if (reseau && essais < 6) {
        rec.courriel = { statut: "attente", date: new Date().toISOString(), essais };
        saveRecord(rec); pending.add(rec.id);
        setMailStatus(rec, mailStatusText(rec) + (opts.silent ? "" : ` <a href="#" data-action="pdf" data-id="${rec.id}">Télécharger le PDF maintenant</a>`), "bad");
        return;
      }
      rec.courriel = { statut: "echec", date: new Date().toISOString(), erreur: err.name === "AbortError" ? "délai dépassé" : err.message };
      saveRecord(rec); pending.del(rec.id);
      if (opts.silent) return;
      downloadPDF(rec);
      setMailStatus(rec, `${mailStatusText(rec)} <a href="${mailtoFallback(rec)}">Ouvrir un courriel prérempli</a>`, "bad");
    } finally {
      clearTimeout(timer);
      if (btn) { btn.disabled = false; btn.textContent = rec.courriel && rec.courriel.statut === "envoye" ? "Renvoyer par courriel" : "Envoyer par courriel"; }
    }
  }

  // Envoi avec l'application de courriel de l'appareil (Mail sur iPad, Gmail ou Outlook sur Android, etc.).
  // Le partage de fichiers du système joint le PDF directement. Sinon, le PDF est téléchargé et un courriel prérempli s'ouvre.
  // Doit être appelé pendant un geste de l'utilisateur (toucher « Terminer » ou « Envoyer par courriel »).
  function sendViaDevice(rec) {
    let doc;
    try { doc = buildPDF(rec); } catch (err) { setMailStatus(rec, esc(err.message), "bad"); return; }
    const S = summaryOf(rec), to = recipientOf(rec);
    const subject = `Résultat d'évaluation : ${rec.candidat.nom}, ${rec.titre} (${S.pct} %, ${S.level.name})`;
    const text = `${to ? "À envoyer à : " + to + "\n\n" : ""}Candidat : ${rec.candidat.nom}\nQuestionnaire : ${rec.titre}\nPoints : ${S.points} / ${S.pointsTotal} (${S.pct} %)\nBonnes réponses : ${S.correct} / ${S.total}\nNiveau : ${S.level.name}${rec.tentative ? `\nTentative : ${rec.tentative} sur ${MAX_ATTEMPTS}` : ""}\n\nLe rapport PDF est joint.`;
    const done = statut => { rec.courriel = { statut, date: new Date().toISOString() }; saveRecord(rec); setMailStatus(rec, mailStatusText(rec) + (statut === "telecharge" ? ` <a href="${mailtoFallback(rec)}">Ouvrir le courriel prérempli</a>` : ""), statut === "annule" ? "bad" : "ok"); refreshMailButton(rec); };

    if (canShareFiles()) {
      const file = new File([doc.output("blob")], pdfName(rec), { type: "application/pdf" });
      if (to && navigator.clipboard) navigator.clipboard.writeText(to).catch(() => {});
      setMailStatus(rec, `Choisissez votre application de courriel dans le menu de partage.${to ? ` Destinataire : <strong>${esc(to)}</strong> (adresse copiée : collez-la dans le champ « À »).` : ""}`);
      navigator.share({ files: [file], title: subject, text })
        .then(() => done("partage"))
        .catch(err => {
          if (err && err.name === "AbortError") done("annule");
          else { savePDF(doc, rec); window.location.href = mailtoFallback(rec); done("telecharge"); }
        });
      return;
    }
    // Ordinateur ou navigateur sans partage de fichiers
    savePDF(doc, rec);
    setTimeout(() => { window.location.href = mailtoFallback(rec); }, 400);
    done("telecharge");
  }
  function refreshMailButton(rec) {
    const b = app.querySelector('[data-action="mail"]');
    if (b) b.textContent = rec.courriel && ["envoye", "partage"].includes(rec.courriel.statut) ? "Renvoyer par courriel" : "Envoyer par courriel";
  }
  function sendReport(rec) { if (SERVER) sendByEmail(rec); else sendViaDevice(rec); }

  function autoReport(rec) {
    if (MAIL.envoiAutomatique) sendReport(rec);
  }

  // ---------- Évaluation sur papier : impression ----------
  const idsFromSelect = () => { const el = document.getElementById("paper-select"); return el ? el.value.split(",") : [DATA[0].id]; };
  const paperMsg = (t, kind) => { const el = document.getElementById("paper-msg"); if (el) { el.textContent = t; el.dataset.kind = kind || ""; } };
  const fileBase = ids => (ids.length > 1 ? "complet" : ids[0]);

  function pdfHeader(doc, subtitle, right) {
    const W = doc.internal.pageSize.getWidth();
    doc.setFillColor(20, 35, 60); doc.rect(0, 0, W, 22, "F");
    const LX = pdfLogo(doc, 16, 3.5, 15);
    doc.setTextColor(255); doc.setFont("helvetica", "normal"); doc.setFontSize(10); doc.text(pdfText(subtitle), LX + 6, 13.5);
    if (right) { doc.setFontSize(9); doc.text(pdfText(right), W - 16, 10, { align: "right" }); }
    doc.setTextColor(20, 35, 60);
  }
  function pdfFooters(doc, label) {
    const n = doc.getNumberOfPages(), W = doc.internal.pageSize.getWidth(), H = doc.internal.pageSize.getHeight();
    for (let p = 1; p <= n; p++) {
      doc.setPage(p); doc.setFont("helvetica", "normal"); doc.setFontSize(8); doc.setTextColor(91, 107, 127);
      doc.text(pdfText(label), 16, H - 8); doc.text(`Page ${p} de ${n}`, W - 16, H - 8, { align: "right" });
    }
  }
  function candidateBox(doc, y) {
    doc.autoTable({ startY: y, margin: { left: 16, right: 16 }, theme: "grid", styles: { fontSize: 10, cellPadding: 3.2, lineColor: [191, 191, 191], textColor: [20, 35, 60] },
      columnStyles: { 0: { cellWidth: 42, fontStyle: "bold", fillColor: [222, 234, 246] }, 2: { cellWidth: 30, fontStyle: "bold", fillColor: [222, 234, 246] } },
      body: [["Nom du candidat", "", "Date", ""], ["Poste", { content: "", colSpan: 3 }]] });
    return doc.lastAutoTable.finalY;
  }

  function buildQuestionnairePDF(ids) {
    if (!window.jspdf || !window.jspdf.jsPDF) throw new Error("La bibliothèque PDF n'a pas pu être chargée. Vérifiez la connexion Internet.");
    const doc = new window.jspdf.jsPDF({ unit: "mm", format: "letter" });
    const W = doc.internal.pageSize.getWidth(), H = doc.internal.pageSize.getHeight(), M = 16, INK = [20, 35, 60], STEEL = [91, 107, 127];
    const titre = titleFor(ids), qs = questionsFor(ids), totPts = qs.reduce((a, q) => a + ptsOf(q), 0);
    pdfHeader(doc, "Questionnaire de connaissances techniques", "Version candidat");
    doc.setFont("helvetica", "bold"); doc.setFontSize(20); doc.text(pdfText(titre), M, 38);
    doc.setFont("helvetica", "normal"); doc.setFontSize(10); doc.setTextColor(...STEEL);
    doc.text(pdfText(`${qs.length} questions, ${totPts} points`), M, 45);
    let y = candidateBox(doc, 52) + 8;
    doc.setTextColor(...INK); doc.setFont("helvetica", "bold"); doc.setFontSize(12); doc.text("Instructions", M, y); y += 6;
    doc.setFont("helvetica", "normal"); doc.setFontSize(10);
    const instr = [
      "Une seule réponse est correcte par question. Inscrivez vos réponses sur la feuille de réponses, à la fin du questionnaire, en noircissant ou en cochant le cercle de la lettre choisie. Pour corriger, barrez clairement la mauvaise réponse.",
      "Chaque question vaut 1, 2 ou 3 points selon sa complexité (faible, moyenne ou élevée), indiquée à côté de la question. Le résultat est calculé sur les points obtenus.",
      "Toutes les questions utilisent les unités impériales : pouces (po), pieds (pi), psi, °F, gallons US par minute (gpm), lb·pi et HP. Les unités électriques (V, A, Ω, W, kW, Hz) sont les mêmes dans tous les systèmes. Les normes électriques sont celles du Québec et du Canada (réseau 600 V, 60 Hz).",
      "Aucune documentation n'est permise. Aucune calculatrice n'est nécessaire.",
    ];
    instr.forEach(t => { const lines = doc.splitTextToSize(pdfText(t), W - 2 * M); doc.text(lines, M, y); y += lines.length * 4.6 + 2; });
    if (ids.length > 1) {
      doc.autoTable({ startY: y + 2, margin: { left: M, right: M }, head: [["Section", pdfText("Thème"), "Questions", "Points"]],
        body: ids.map(id => { const t = DATA.find(x => x.id === id); return [String(t.numero), pdfText(t.titre), String(t.questions.length), String(t.questions.reduce((a, q) => a + ptsOf(q), 0))]; }).concat([["", "Total", String(qs.length), String(totPts)]]),
        headStyles: { fillColor: INK }, styles: { fontSize: 9.5 }, columnStyles: { 0: { cellWidth: 20, halign: "center" }, 2: { cellWidth: 24, halign: "center" }, 3: { cellWidth: 22, halign: "center" } } });
    }

    // Questions
    const box = (x, yy) => { doc.setDrawColor(120, 132, 146); doc.setLineWidth(0.3); doc.rect(x, yy - 3.2, 3.6, 3.6); };
    let cur = null;
    doc.addPage(); y = 20;
    qs.forEach((q, k) => {
      if (q.secId !== cur) {
        cur = q.secId;
        if (k > 0) { doc.addPage(); y = 20; }
        doc.setFont("helvetica", "bold"); doc.setFontSize(15); doc.setTextColor(...INK);
        doc.text(pdfText(ids.length > 1 ? `Section ${q.secNum} : ${q.secTitre}` : q.secTitre), M, y);
        doc.setDrawColor(46, 117, 182); doc.setLineWidth(0.6); doc.line(M, y + 2.5, W - M, y + 2.5); y += 10;
      }
      doc.setFontSize(10.5); doc.setFont("helvetica", "bold");
      const qLines = doc.splitTextToSize(pdfText(q.question), W - 2 * M - 10);
      const optLines = q.choix.map(c => doc.splitTextToSize(pdfText(c), W - 2 * M - 22));
      const need = qLines.length * 5 + 5 + optLines.reduce((a, l) => a + l.length * 4.6 + 1.4, 0) + 5;
      if (y + need > H - 16) { doc.addPage(); y = 20; }
      doc.setTextColor(...INK); doc.text(`${q.numInSec}.`, M, y); doc.text(qLines, M + 9, y); y += qLines.length * 5;
      doc.setFont("helvetica", "italic"); doc.setFontSize(8.5); doc.setTextColor(...STEEL);
      doc.text(pdfText(`${ptsOf(q)} point${ptsOf(q) > 1 ? "s" : ""}, complexité ${COMPLEXITE[ptsOf(q)]}`), M + 9, y); y += 5;
      doc.setFont("helvetica", "normal"); doc.setFontSize(10); doc.setTextColor(...INK);
      optLines.forEach((l, oi) => { box(M + 10, y); doc.setFont("helvetica", "bold"); doc.text(`${LETTERS[oi]})`, M + 15.5, y); doc.setFont("helvetica", "normal"); doc.text(l, M + 22, y); y += l.length * 4.6 + 1.4; });
      y += 4;
    });

    // Feuille de réponses
    doc.addPage(); y = 20;
    doc.setFont("helvetica", "bold"); doc.setFontSize(15); doc.text(pdfText("Feuille de réponses"), M, y); y += 4;
    y = candidateBox(doc, y + 2) + 8;
    ids.forEach(id => {
      const t = DATA.find(x => x.id === id), n = t.questions.length, rows = Math.ceil(n / 5), colW = (W - 2 * M) / 5, rowH = 7.5;
      if (y + 8 + rows * rowH + 10 > H - 14) { doc.addPage(); y = 20; }
      doc.setFont("helvetica", "bold"); doc.setFontSize(11); doc.setTextColor(46, 117, 182);
      doc.text(pdfText(ids.length > 1 ? `${t.numero}. ${t.titre}` : t.titre), M, y); y += 3;
      doc.setTextColor(...INK);
      for (let r = 0; r < rows; r++) for (let c = 0; c < 5; c++) {
        const num = c * rows + r + 1; if (num > n) continue;
        const x = M + c * colW, yy = y + r * rowH;
        doc.setDrawColor(191, 191, 191); doc.setLineWidth(0.2); if (r % 2) { doc.setFillColor(242, 242, 242); doc.rect(x, yy, colW, rowH, "FD"); } else doc.rect(x, yy, colW, rowH);
        doc.setFont("helvetica", "bold"); doc.setFontSize(9); doc.text(String(num).padStart(2, "0"), x + 1.8, yy + 5);
        doc.setFont("helvetica", "normal");
        doc.setFontSize(7.5); doc.setTextColor(...STEEL);
        LETTERS.forEach((L, li) => { const cx = x + 12.5 + li * 6.4, cy = yy + rowH / 2; doc.setDrawColor(120, 132, 146); doc.setLineWidth(0.3); doc.circle(cx, cy, 2.5); doc.text(L, cx, cy + 1, { align: "center" }); });
        doc.setTextColor(...INK);
      }
      y += rows * rowH + 5;
      doc.setFont("helvetica", "bold"); doc.setFontSize(9.5);
      doc.text(pdfText(`Bonnes réponses : ______ / ${n}      Points : ______ / ${t.questions.reduce((a, q) => a + ptsOf(q), 0)}      ( ______ % )`), W - M, y, { align: "right" }); y += 9;
    });
    pdfFooters(doc, `Flo-Fab Inc. — ${titre} — version candidat`);
    return doc;
  }

  function printPaper() {
    const ids = idsFromSelect();
    try {
      saveDoc(buildQuestionnairePDF(ids), `Questionnaire_${fileBase(ids)}.pdf`);
      paperMsg("Questionnaire produit. Ouvrez le PDF pour l'imprimer.", "ok");
    } catch (err) { paperMsg(err.message, "bad"); }
  }

  // ---------- Évaluation sur papier : saisie d'une copie ----------
  function renderPaperEntry(ids) {
    if (!unlocked) { requireResp(() => renderPaperEntry(ids)); return; }
    setKeys(null); keepAwake(false); status.textContent = "";
    const titre = titleFor(ids), qs = questionsFor(ids), secsIds = [...new Set(qs.map(q => q.secId))];
    app.innerHTML = `
      <section class="panel start-card">
        <h1>Copie papier : ${esc(titre)}</h1>
        <p class="muted">Saisissez les réponses inscrites par le candidat sur sa feuille de réponses. Le résultat pondéré est calculé automatiquement.</p>
        <form id="paper-form" novalidate>
          <div class="form-grid">
            <div class="field"><label for="p-nom">Nom du candidat</label><input id="p-nom" name="nom" required><div class="error" id="perr-nom" hidden>Inscrivez le nom du candidat.</div><div class="small muted" id="p-attempt" aria-live="polite"></div></div>
            <div class="field"><label for="p-poste">Poste</label><input id="p-poste" name="poste"></div>
            <div class="field"><label for="p-date">Date de l'évaluation</label><input id="p-date" name="date" type="date" value="${today()}"></div>
          </div>
          ${secsIds.map(sid => { const idx = qs.map((q, k) => (q.secId === sid ? k : -1)).filter(k => k >= 0);
            return `<fieldset class="paper-sec"><legend>${esc(ids.length > 1 ? qs[idx[0]].secNum + ". " + qs[idx[0]].secTitre : qs[idx[0]].secTitre)}</legend>
              <div class="paper-grid">${idx.map(k => `<div class="paper-q" role="radiogroup" aria-label="Question ${qs[k].numInSec}">
                <span class="paper-num">${qs[k].numInSec}</span>
                ${LETTERS.map((L, li) => `<label class="paper-opt"><input type="radio" name="pq${k}" value="${li}"><span>${L}</span></label>`).join("")}
                <label class="paper-opt paper-none" title="Sans réponse"><input type="radio" name="pq${k}" value="" checked><span>–</span></label>
              </div>`).join("")}</div></fieldset>`; }).join("")}
          <p class="small muted" id="paper-count" aria-live="polite"></p>
          <div class="btn-row"><button class="btn" type="submit">Calculer le résultat</button><button class="btn btn-ghost" type="button" data-action="home">Retour</button></div>
        </form>
      </section>`;
    const form = document.getElementById("paper-form"), count = document.getElementById("paper-count"), nomI = document.getElementById("p-nom"), att = document.getElementById("p-attempt");
    const upd = () => { const n = qs.filter((q, k) => { const c = form.querySelector(`input[name="pq${k}"]:checked`); return c && c.value !== ""; }).length; count.textContent = `${n} réponse(s) saisie(s) sur ${qs.length}. « – » = sans réponse.`; };
    const updAtt = () => { const nom = nomI.value.trim(); if (!nom) { att.textContent = ""; return; } const u = attemptsUsed(nom, ids); att.textContent = u >= MAX_ATTEMPTS ? `Attention : ce candidat a déjà ${u} tentative(s) pour ce questionnaire (maximum ${MAX_ATTEMPTS}).` : `Ce sera la tentative ${u + 1} sur ${MAX_ATTEMPTS}.`; };
    form.addEventListener("change", upd); nomI.addEventListener("input", updAtt); upd();
    form.addEventListener("submit", e => {
      e.preventDefault();
      const f = new FormData(form), nom = (f.get("nom") || "").trim();
      if (!nom) { document.getElementById("perr-nom").hidden = false; nomI.focus(); return; }
      const answers = qs.map((q, k) => { const v = f.get(`pq${k}`); return v === null || v === "" ? null : Number(v); });
      const doFinish = () => {
        const tentative = registerAttempt(nom, ids, titre);
        const sections = secsIds.map(sid => {
          const idx = qs.map((q, k) => (q.secId === sid ? k : -1)).filter(k => k >= 0), t = DATA.find(x => x.id === sid), ok = idx.filter(k => answers[k] === qs[k].reponse);
          return { id: sid, numero: t.numero, titre: t.titre, total: idx.length, correct: ok.length, points: ok.reduce((a, k) => a + ptsOf(qs[k]), 0), pointsTotal: idx.reduce((a, k) => a + ptsOf(qs[k]), 0) };
        });
        const rec = { id: String(Date.now()), date: new Date().toISOString(), ids, titre, mode: "papier", tentative,
          candidat: { nom, poste: (f.get("poste") || "").trim(), date: f.get("date") || today() },
          answers, sections, durationSec: null };
        const h = store.get(KEY_HISTORY, []); h.push(rec); store.set(KEY_HISTORY, h.slice(-200));
        renderResults(rec, { auto: true });
      };
      const missing = answers.filter(a => a === null).length;
      if (missing) confirmDialog(`${missing} question(s) sans réponse. Elles seront comptées comme incorrectes.`, "Calculer quand même", doFinish); else doFinish();
    });
    nomI.focus();
  }

  // ---------- Export CSV ----------
  function csvCell(v) { const s = String(v ?? ""); return /[;"\n]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s; }
  function download(name, text) {
    const blob = new Blob(["\uFEFF" + text], { type: "text/csv;charset=utf-8" });
    const a = document.createElement("a"); a.href = URL.createObjectURL(blob); a.download = name;
    document.body.appendChild(a); a.click(); setTimeout(() => { URL.revokeObjectURL(a.href); a.remove(); }, 500);
  }
  function exportRecords(recs, name) {
    const rows = [["Date", "Candidat", "Poste", "Questionnaire", "Tentative", "Section", "Bonnes réponses", "Questions", "Points", "Points possibles", "%", "Niveau", "Durée (s)", "Type"]];
    recs.forEach(r => {
      const add = (label, T) => rows.push([r.candidat.date, r.candidat.nom, r.candidat.poste, r.titre, r.tentative || "", label, T.correct, T.total, T.points, T.pointsTotal, T.pct, levelFor(T.pct).name, r.durationSec ?? "", r.mode === "papier" ? "Papier" : "En ligne"]);
      r.sections.forEach(s => add(`${s.numero}. ${s.titre}`, totalsOf([s])));
      if (r.sections.length > 1) add("Résultat global", totalsOf(r.sections));
    });
    download(name, rows.map(r => r.map(csvCell).join(";")).join("\r\n"));
  }

  // ---------- Actions ----------
  const RESP_ACTIONS = ["export-all", "clear-history", "reset-attempts", "view", "export", "pdf", "mail", "share"];
  document.addEventListener("click", e => {
    const el = e.target.closest("[data-action]");
    if (!el) return;
    const a = el.dataset.action;
    if (RESP_ACTIONS.includes(a) && !unlocked) { e.preventDefault(); requireResp(() => { if (!session) renderHome(); }); return; }
    if (unlocked) armLock();
    if (a === "home") { e.preventDefault(); renderHome(); }
    else if (a === "choose") renderStart(el.dataset.ids.split(","));
    else if (a === "resume") { session = store.get(KEY_SESSION, null); if (session) { session.mode = "evaluation"; session.current = Math.min(session.current || 0, session.answers.length - 1); renderQuiz(); } }
    else if (a === "discard") confirmDialog("Abandonner le questionnaire en cours ? Les réponses seront perdues" + (store.get(KEY_SESSION, {}).tentative ? " et la tentative restera comptée." : "."), "Abandonner", () => { store.del(KEY_SESSION); session = null; renderHome(); });
    else if (a === "prev") go(session.current - 1);
    else if (a === "next") go(session.current + 1);
    else if (a === "goto") go(Number(el.dataset.i));
    else if (a === "finish") finish();
    else if (a === "print") window.print();
    else if (a === "print-quiz") requireResp(() => printPaper());
    else if (a === "paper-entry") { const ids = idsFromSelect(); requireResp(() => renderPaperEntry(ids)); }
    else if (a === "unlock") requireResp(() => { if (!session) renderHome(); });
    else if (a === "lock") lock();
    else if (a === "resp-view") { const r = store.get(KEY_HISTORY, []).find(x => x.id === el.dataset.id); if (r) requireResp(() => renderResults(r, { auto: !SERVER && MAIL.envoiAutomatique && !r.courriel })); }
    else if (a === "share") { const r = store.get(KEY_HISTORY, []).find(x => x.id === el.dataset.id); if (r) sharePDF(r); }
    else if (a === "install") { if (installEvent) { installEvent.prompt(); installEvent.userChoice.finally(() => { installEvent = null; renderHome(); }); } }
    else if (a === "hide-install") { store.set("flofab-eval-install-masque", true); const t = document.getElementById("install-tip"); if (t) t.remove(); }
    else if (a === "pdf") { e.preventDefault(); const r = store.get(KEY_HISTORY, []).find(x => x.id === el.dataset.id); if (r) downloadPDF(r); }
    else if (a === "mail") { const r = store.get(KEY_HISTORY, []).find(x => x.id === el.dataset.id); if (r) sendReport(r); }
    else if (a === "view") { const r = store.get(KEY_HISTORY, []).find(x => x.id === el.dataset.id); if (r) renderResults(r); }
    else if (a === "export") { const r = store.get(KEY_HISTORY, []).find(x => x.id === el.dataset.id); if (r) exportRecords([r], `resultat_${r.candidat.nom.replace(/\W+/g, "_")}_${r.candidat.date}.csv`); }
    else if (a === "export-all") exportRecords(store.get(KEY_HISTORY, []), `resultats_evaluations_${today()}.csv`);
    else if (a === "reset-attempts") { const k = el.dataset.key, a2 = store.get(KEY_ATTEMPTS, {})[k];
      confirmDialog(`Réinitialiser les tentatives de ${a2 ? a2.nom : "ce candidat"} pour « ${a2 ? a2.titre : ""} » ? Les résultats déjà enregistrés sont conservés.`, "Réinitialiser", () => { resetAttempts(k); renderHome(); }); }
    else if (a === "clear-history") confirmDialog("Effacer tous les résultats enregistrés dans ce navigateur ? Le compte des tentatives est conservé.", "Effacer", () => { store.del(KEY_HISTORY); renderHome(); });
  });

  if (!DATA.length) { app.innerHTML = `<p class="notice">La banque de questions est introuvable. Vérifiez que le fichier data/questionnaires.js est présent.</p>`; return; }
  refreshRespBtn();
  renderHome();
  updateOnline();
  retryPending();
  if ("serviceWorker" in navigator && (location.protocol === "https:" || location.hostname === "localhost")) {
    navigator.serviceWorker.register("sw.js").catch(() => { /* sans cache hors ligne */ });
  }
})();
