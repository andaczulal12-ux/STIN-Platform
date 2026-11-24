const SEMESTERS = {
  1: [
    { id: "bwl", title: "BWL", sws: "4 SWS", ects: "5 ECTS" },
    { id: "eipro", title: "Einführung in die Programmierung", sws: "8 SWS", ects: "10 ECTS" },
    { id: "math1", title: "Mathematik für Informatik 1", sws: "4 SWS", ects: "5 ECTS" },
    { id: "rbs1", title: "Rechnerstrukturen und Betriebssysteme 1", sws: "4 SWS", ects: "5 ECTS" },
    { id: "theo1", title: "Theoretische Informatik", sws: "4 SWS", ects: "5 ECTS" }
  ],
  2: [
    { id: "algodat", title: "Algorithmen und Datenstrukturen", sws: "4 SWS", ects: "5 ECTS" },
    { id: "math2", title: "Mathematik für Informatik 2", sws: "4 SWS", ects: "5 ECTS" },
    { id: "math3", title: "Mathematik für Informatik 3", sws: "4 SWS", ects: "5 ECTS" },
    { id: "prog1", title: "Programmierkurs 1", sws: "4 SWS", ects: "5 ECTS" },
    { id: "rbs2", title: "Rechnerstrukturen und Betriebssysteme 2", sws: "4 SWS", ects: "5 ECTS" }
  ],
  3: [
    { id: "db1", title: "Datenbanken 1", sws: "4 SWS", ects: "5 ECTS" },
    { id: "math4", title: "Mathematik für Informatik 4", sws: "4 SWS", ects: "5 ECTS" },
    { id: "mci", title: "Mensch-Computer-Interaktion", sws: "4 SWS", ects: "5 ECTS" },
    { id: "prog2", title: "Programmierkurs 2", sws: "4 SWS", ects: "5 ECTS" },
    { id: "swt1", title: "Softwaretechnik 1", sws: "4 SWS", ects: "5 ECTS" }
  ],
  4: [
    { id: "db2", title: "Datenbanken 2", sws: "4 SWS", ects: "5 ECTS" },
    { id: "sec", title: "Informationssicherheit", sws: "4 SWS", ects: "5 ECTS" },
    { id: "netze", title: "Kommunikations- und Rechnernetze", sws: "4 SWS", ects: "5 ECTS" },
    { id: "ki", title: "Künstliche Intelligenz", sws: "4 SWS", ects: "5 ECTS" },
    { id: "swt2", title: "Softwaretechnik 2", sws: "4 SWS", ects: "5 ECTS" }
  ],
  5: [
    { id: "recht", title: "IT-Recht", sws: "2 SWS", ects: "2.5 ECTS" },
    { id: "ges", title: "Informatik und Gesellschaft", sws: "2 SWS", ects: "2.5 ECTS" },
    { id: "proj", title: "Projektarbeit", sws: "4 SWS", ects: "15 ECTS" },
    { id: "wpf", title: "Wahlpflichtmodule (2)", sws: "—", ects: "10 ECTS" }
  ],
  6: [
    { id: "sem", title: "Seminar (Inhalt)", sws: "2 SWS", ects: "2.5 ECTS" },
    { id: "thesis", title: "Thesis mit Kolloquium", sws: "4 SWS", ects: "15 ECTS" }
  ]
};

const STORIES = [
  {
    id: "st1",
    username: "lina.nrw",
    avatarLetter: "L",
    header: "MATHE · VEKTOREN & PUNKTE",
    author: "Von @lina.nrw · iPad GoodNotes",
    likes: 18,
    leftNotes: "Punkte: A(x1 | x2 | x3)\nOrtsvektor: Ursprung -> A\nVerbindungsvektor: AB = B - A\nBetrag: |v| = √(v1² + v2² + v3²)",
    rightNotes: "• Skalarprodukt: a · b = a1·b1 + a2·b2\n• a · b = 0 -> rechter Winkel\n• a · b > 0 -> spitzer Winkel\n• Kollinearität: b = r · a",
    diagramSvg: `<svg viewBox="0 0 180 105" width="100%" height="100" fill="none">
      <line x1="25" y1="88" x2="160" y2="88" stroke="#1f2328" stroke-width="1.3"/>
      <line x1="40" y1="96" x2="40" y2="12" stroke="#1f2328" stroke-width="1.3"/>
      <line x1="40" y1="88" x2="132" y2="26" stroke="#5c1d35" stroke-width="2"/>
      <polygon points="132,26 122,28 127,35" fill="#5c1d35"/>
      <text x="136" y="24" fill="#5c1d35" font-size="13" font-family="Caveat, cursive">v = (x, y)</text>
    </svg>`
  },
  {
    id: "st2",
    username: "kerem.inf",
    avatarLetter: "K",
    header: "ALGORITHMEN · O-NOTATION",
    author: "Von @kerem.inf · iPad Notability",
    likes: 24,
    leftNotes: "O(1) -> konstanter Zugriff\nO(log n) -> binäre Suche\nO(n) -> linearer Durchlauf\nO(n log n) -> Mergesort",
    rightNotes: "• Best / Average / Worst Case\n• Rekursionsbäume sauber zeichnen\n• Schleifeninvariante prüfen\n• Speicherplatz nicht vergessen",
    diagramSvg: `<svg viewBox="0 0 180 105" width="100%" height="100" fill="none">
      <path d="M22 84 Q95 70 158 20" stroke="#156d7a" stroke-width="2.2"/>
      <line x1="22" y1="84" x2="158" y2="52" stroke="#852d4e" stroke-width="1.8" stroke-dasharray="4 3"/>
      <text x="112" y="18" fill="#156d7a" font-size="13" font-family="Caveat, cursive">O(n log n)</text>
    </svg>`
  },
  {
    id: "st3",
    username: "mina.codes",
    avatarLetter: "M",
    header: "LOGIK & BEWEISE",
    author: "Von @mina.codes · iPad Notizen",
    likes: 12,
    leftNotes: "Implikation: A -> B\nKontraposition: ¬B -> ¬A\nÄquivalenz: A <-> B",
    rightNotes: "• De Morgan: ¬(A ∧ B) ≡ ¬A ∨ ¬B\n• Wahrheitstafeln strukturiert füllen\n• Gegenbeispiele klar benennen",
    diagramSvg: `<svg viewBox="0 0 180 105" width="100%" height="100" fill="none">
      <rect x="34" y="20" width="112" height="62" rx="10" stroke="#5c1d35" stroke-width="1.6" fill="rgba(244,143,177,0.16)"/>
      <text x="50" y="48" fill="#5c1d35" font-size="14" font-family="Caveat, cursive">A -> B  ≡  ¬B -> ¬A</text>
      <text x="50" y="68" fill="#156d7a" font-size="13" font-family="Caveat, cursive">✓ Bewiesen</text>
    </svg>`
  },
  {
    id: "st4",
    username: "jonas.math",
    avatarLetter: "J",
    header: "MATRIZEN & LINEARE GLEICHUNGEN",
    author: "Von @jonas.math · iPad GoodNotes",
    likes: 19,
    leftNotes: "Gauß-Elimination schrittweise\nZeilenstufenform (ZSF) herstellen\nRang(A) bestimmen",
    rightNotes: "• Det(A) != 0 -> invertierbar\n• Eindeutige vs. unendlich viele Lösungen\n• Probe immer einsetzen",
    diagramSvg: `<svg viewBox="0 0 180 105" width="100%" height="100" fill="none">
      <path d="M48 22 H40 V84 H48 M132 22 H140 V84 H132" stroke="#1f2328" stroke-width="1.6"/>
      <text x="56" y="44" fill="#5c1d35" font-size="14" font-family="Caveat, cursive">a11  a12  | b1</text>
      <text x="56" y="68" fill="#156d7a" font-size="14" font-family="Caveat, cursive"> 0    a22  | b2</text>
    </svg>`
  },
  {
    id: "st5",
    username: "esra.stud",
    avatarLetter: "E",
    header: "ÜBUNGSBLATT TIPPS",
    author: "Von @esra.stud · iPad Notability",
    likes: 27,
    leftNotes: "Aufgabenstellung zweimal lesen\nGegeben & Gesucht notieren\nZwischenergebnisse nicht runden",
    rightNotes: "• Mit Gruppe abgleichen\n• Unklarheiten direkt markieren\n• Saubere Skizze spart Zeit",
    diagramSvg: `<svg viewBox="0 0 180 105" width="100%" height="100" fill="none">
      <circle cx="90" cy="52" r="30" stroke="#156d7a" stroke-width="2" fill="rgba(67,166,181,0.12)"/>
      <text x="72" y="57" fill="#5c1d35" font-size="15" font-family="Caveat, cursive">Blatt Ready</text>
    </svg>`
  },
  {
    id: "st6",
    username: "kaan.sys",
    avatarLetter: "K",
    header: "KLAUSUR CHECKLISTE",
    author: "Von @kaan.sys · iPad Notizen",
    likes: 15,
    leftNotes: "Zeitplan pro Aufgabe festlegen\nSchwere Aufgaben nicht ewig blockieren\nEinheiten prüfen",
    rightNotes: "• Ausweis & Stifteset bereit\n• Ruhig durchatmen\n• Letzte 10 Min für Kontrolle",
    diagramSvg: `<svg viewBox="0 0 180 105" width="100%" height="100" fill="none">
      <rect x="30" y="24" width="120" height="56" rx="12" stroke="#852d4e" stroke-width="1.6" fill="rgba(248,196,150,0.2)"/>
      <text x="48" y="57" fill="#1f2328" font-size="14" font-family="Caveat, cursive">Fokus & Struktur</text>
    </svg>`
  }
];

/* Her Übungsblatt için farklı kullanıcılar ve özgün içerikler */
const UEBUNGSBLATT_SCENARIOS = {
  1: {
    members: "Lukas, Hannah, Tim, Du",
    time: "11:20",
    messages: [
      { sender: "Lukas", text: "Bei 1b habe ich das Ergebnis direkt eingesetzt – stimmt das so?", time: "11:14", me: false },
      { sender: "Hannah", text: "Ja, im zweiten Schritt fällt der Term sauber weg.", time: "11:20", me: false }
    ]
  },
  2: {
    members: "Mina, Julian, Sofia, Du",
    time: "12:05",
    messages: [
      { sender: "Julian", text: "Hängt noch jemand an der Fallunterscheidung in Aufgabe 2?", time: "11:58", me: false },
      { sender: "Sofia", text: "Ich hab kurz eine kleine Skizze dazu gemacht, schau gleich rein.", time: "12:05", me: false }
    ]
  },
  3: {
    members: "Kerem, Clara, Moritz, Du",
    time: "13:42",
    messages: [
      { sender: "Clara", text: "Für Blatt 3 lohnt es sich, die Definitionen vorab aufzuschreiben.", time: "13:35", me: false },
      { sender: "Moritz", text: "Guter Punkt, vor allem den Grenzfall bei n = 0.", time: "13:42", me: false }
    ]
  },
  4: {
    members: "Esra, Paul, Lea, Du",
    time: "14:19",
    messages: [
      { sender: "Paul", text: "Mein Beweis zu Teilaufgabe c ist etwas lang geworden – passt das?", time: "14:11", me: false },
      { sender: "Esra", text: "Solange jeder Schritt begründet ist, absolut.", time: "14:19", me: false }
    ]
  },
  5: {
    members: "Jonas, Amelie, Finn, Du",
    time: "15:08",
    messages: [
      { sender: "Amelie", text: "Hat jemand die Musterlösung der Vorübung mit Blatt 5 verglichen?", time: "15:02", me: false },
      { sender: "Finn", text: "Ja, die Notation ist fast identisch zur Tafel.", time: "15:08", me: false }
    ]
  },
  6: {
    members: "Kaan, Marie, David, Du",
    time: "15:54",
    messages: [
      { sender: "Marie", text: "Aufgabe 6.2 war am Anfang knifflig, mit Tabelle ging's dann.", time: "15:47", me: false },
      { sender: "David", text: "Welche Spalten hast du angelegt?", time: "15:54", me: false }
    ]
  },
  7: {
    members: "Lina, Noah, Emma, Du",
    time: "16:33",
    messages: [
      { sender: "Noah", text: "Blatt 7 fühlt sich schon deutlich mehr nach Klausurniveau an.", time: "16:26", me: false },
      { sender: "Emma", text: "Finde ich auch, besonders Teil 2.", time: "16:33", me: false }
    ]
  },
  8: {
    members: "Selin, Ben, Laura, Du",
    time: "17:15",
    messages: [
      { sender: "Ben", text: "Ich lade gleich ein Foto von meinem Rechenweg zu 8a hoch.", time: "17:09", me: false },
      { sender: "Laura", text: "Perfekt, danke dir!", time: "17:15", me: false }
    ]
  },
  9: {
    members: "Tarik, Sophie, Leon, Du",
    time: "18:02",
    messages: [
      { sender: "Sophie", text: "Wer gibt Blatt 9 morgen früh vor der Vorlesung ab?", time: "17:55", me: false },
      { sender: "Leon", text: "Ich bin gegen 9:15 Uhr da.", time: "18:02", me: false }
    ]
  },
  10: {
    members: "Mina, Niklas, Zoe, Du",
    time: "18:46",
    messages: [
      { sender: "Niklas", text: "Bei Aufgabe 10.3 musste ich zweimal umformen.", time: "18:40", me: false },
      { sender: "Zoe", text: "Mit Ausklammern wird es viel übersichtlicher.", time: "18:46", me: false }
    ]
  },
  11: {
    members: "Kerem, Hanna, Elias, Du",
    time: "19:21",
    messages: [
      { sender: "Hanna", text: "Blatt 11 hat super viele Themen aus dem Skript gebündelt.", time: "19:14", me: false },
      { sender: "Elias", text: "Richtig gut zum Wiederholen vor der Prüfung.", time: "19:21", me: false }
    ]
  },
  12: {
    members: "Esra, Jonas, Mira, Du",
    time: "20:05",
    messages: [
      { sender: "Mira", text: "Letztes Übungsblatt geschafft! Sollen wir die Knackpunkte sammeln?", time: "19:58", me: false },
      { sender: "Jonas", text: "Unbedingt, eine kurze Liste für alle hilft enorm.", time: "20:05", me: false }
    ]
  }
};

function buildInitialGroups() {
  const list = [
    {
      id: "klausurvorbereitung",
      name: "Klausurvorbereitung",
      avatarText: "K",
      tag: "Prüfung",
      members: "Kerem, Esra, Jonas, Mira, Du",
      time: "17:10",
      isDm: false,
      messages: [
        { sender: "Kerem", text: "Wer geht heute die alten Prüfungsaufgaben durch?", time: "17:02", me: false },
        { sender: "Esra", text: "Ich bin dabei – sollen wir 18 Uhr im Gruppenraum starten?", time: "17:10", me: false }
      ]
    },
    {
      id: "treffen",
      name: "Treffen",
      avatarText: "T",
      tag: "Gruppe",
      members: "Mina, Kaan, Clara, Ben, Du",
      time: "16:45",
      isDm: false,
      messages: [
        { sender: "Mina", text: "Treffen wir uns morgen in der Bibliothek zum Lernen?", time: "16:40", me: false },
        { sender: "Kaan", text: "Ja, oben an den ruhigen Tischen passt gut.", time: "16:45", me: false }
      ]
    }
  ];

  for (let i = 1; i <= 12; i++) {
    const sc = UEBUNGSBLATT_SCENARIOS[i];
    list.push({
      id: `ub-${i}`,
      name: `Übungsblatt ${i}`,
      avatarText: String(i),
      tag: `Blatt ${i}`,
      members: sc.members,
      time: sc.time,
      isDm: false,
      messages: sc.messages.map((m) => ({ ...m }))
    });
  }

  list.push({
    id: "dm-esra",
    name: "Esra",
    avatarText: "E",
    tag: "Direktnachricht",
    members: "Esra · Privat-Chat",
    time: "Jetzt",
    isDm: true,
    messages: [
      { sender: "Esra", text: "Hey! Hast du Lust, kurz 1-zu-1 über die letzte Aufgabe zu schauen?", time: "18:12", me: false },
      { sender: "Esra", text: "Du kannst mir hier auch ein Foto von deiner Skizze schicken.", time: "18:13", me: false }
    ]
  });

  return list;
}

const state = {
  uni: "FH Dortmund",
  major: "Bachelor Informatik (Modulhandbuch)",
  user: "zuelal@fh-dortmund.de",
  password: "••••••••",
  passwordVisible: false,
  semFilter: "all",
  activeCourse: null,
  activeStoryIndex: 0,
  activeGroupId: null,
  backFromNotebook: "screen-course",
  backFromProfile: "screen-course",
  seenStories: new Set(),
  likedStories: new Set(),
  savedStories: new Set(),
  customNotes: [],
  pendingPhotoDataUrl: null,
  pendingPhotoName: "",
  groupsByCourse: {}
};

function showScreen(id) {
  document.querySelectorAll(".step-card, .panel-shell").forEach((el) => el.classList.remove("active"));
  document.getElementById(id).classList.add("active");
}

function updateSavedCount() {
  const total = state.savedStories.size + state.customNotes.length;
  const el = document.getElementById("saved-count-badge");
  if (el) el.textContent = total;
}

function renderHandbook() {
  const board = document.getElementById("handbook-board");
  board.innerHTML = "";
  const semKeys = state.semFilter === "all" ? [1, 2, 3, 4, 5, 6] : [Number(state.semFilter)];

  semKeys.forEach((semNum) => {
    const col = document.createElement("div");
    col.className = "sem-col";

    const head = document.createElement("div");
    head.className = "sem-col-head";
    head.textContent = `${semNum}. Semester`;

    const body = document.createElement("div");
    body.className = "sem-col-body";

    SEMESTERS[semNum].forEach((mod) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "module-tile";
      btn.innerHTML = `
        <span class="module-tile-title">${mod.title}</span>
        <span class="module-tile-meta"><span>${mod.sws}</span><span>${mod.ects}</span></span>
      `;
      btn.addEventListener("click", () => openCoursePage(mod, semNum));
      body.appendChild(btn);
    });

    col.appendChild(head);
    col.appendChild(body);
    board.appendChild(col);
  });
}

function openCoursePage(mod, semNum) {
  state.activeCourse = { ...mod, semNum };
  if (!state.groupsByCourse[mod.id]) {
    state.groupsByCourse[mod.id] = buildInitialGroups().map((g) => ({
      ...g,
      id: `${mod.id}-${g.id}`,
      messages: g.messages.map((m) => ({ ...m }))
    }));
  }
  document.getElementById("active-course-badge").textContent = `${mod.title} · ${semNum}. Semester`;
  updateSavedCount();
  renderStories();
  renderGroups();
  showScreen("screen-course");
}

function renderStories() {
  const row = document.getElementById("course-stories");
  row.innerHTML = "";

  STORIES.forEach((story, index) => {
    const isSeen = state.seenStories.has(story.id);
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = `ig-story-wrap ${isSeen ? "seen" : ""}`;
    btn.innerHTML = `
      <span class="ig-ring">
        <span class="ig-avatar">${story.avatarLetter}</span>
      </span>
      <span class="ig-username">${story.username}</span>
    `;
    btn.addEventListener("click", () => openIpadStory(index));
    row.appendChild(btn);
  });
}

function openIpadStory(index) {
  if (index < 0 || index >= STORIES.length) return;
  state.activeStoryIndex = index;
  const story = STORIES[index];

  state.seenStories.add(story.id);
  renderStories();

  const isLiked = state.likedStories.has(story.id);
  const isSaved = state.savedStories.has(story.id);
  const totalLikes = story.likes + (isLiked ? 1 : 0);

  document.getElementById("ipad-username-badge").textContent = `@${story.username}`;
  document.getElementById("ipad-story-counter").textContent = `${index + 1} / ${STORIES.length}`;
  document.getElementById("ipad-note-header").textContent = story.header;
  document.getElementById("ipad-note-author").textContent = story.author;
  document.getElementById("ipad-col-left").textContent = story.leftNotes;
  document.getElementById("ipad-col-right").textContent = story.rightNotes;
  document.getElementById("ipad-diagram").innerHTML = story.diagramSvg;

  const likeBtn = document.getElementById("modal-like-btn");
  likeBtn.classList.toggle("active", isLiked);
  document.getElementById("modal-like-icon").textContent = isLiked ? "♥" : "♡";
  document.getElementById("modal-like-count").textContent = totalLikes;

  const saveBtn = document.getElementById("modal-save-btn");
  saveBtn.classList.toggle("active", isSaved);
  document.getElementById("modal-save-text").textContent = isSaved ? "Gespeichert" : "Speichern";

  document.getElementById("story-modal").classList.add("open");
}

function renderGroups() {
  const list = document.getElementById("course-groups");
  const groups = state.groupsByCourse[state.activeCourse.id] || [];
  document.getElementById("group-count-label").textContent = `${groups.length} Chats · Gruppen & Direktnachricht`;
  list.innerHTML = "";

  groups.forEach((g) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = `wa-row ${g.isDm ? "dm-row" : ""}`;
    const lastMsgObj = g.messages[g.messages.length - 1];
    const lastText = lastMsgObj ? (lastMsgObj.text || "📷 Foto") : g.members;
    const preview = g.isDm ? lastText : `${lastMsgObj.sender}: ${lastText}`;

    btn.innerHTML = `
      <div class="wa-left">
        <div class="wa-avatar">${g.avatarText}</div>
        <div class="wa-info">
          <div class="wa-title-line">
            <span class="wa-title">${g.name}</span>
            <span class="wa-tag">${g.tag}</span>
          </div>
          <div class="wa-msg">${preview}</div>
        </div>
      </div>
      <div class="wa-right">${g.time}</div>
    `;
    btn.addEventListener("click", () => openWaChat(g.id));
    list.appendChild(btn);
  });
}

function clearPhotoSelection() {
  state.pendingPhotoDataUrl = null;
  state.pendingPhotoName = "";
  document.getElementById("chat-photo-input").value = "";
  const prev = document.getElementById("wa-photo-preview");
  prev.classList.remove("has-img");
  prev.innerHTML = "";
}

function openWaChat(groupId) {
  const groups = state.groupsByCourse[state.activeCourse.id] || [];
  const group = groups.find((g) => g.id === groupId);
  if (!group) return;

  state.activeGroupId = groupId;
  clearPhotoSelection();
  document.getElementById("chat-group-avatar").textContent = group.avatarText;
  document.getElementById("chat-group-title").textContent = group.name;
  document.getElementById("chat-group-members").textContent = group.members;
  renderWaMessages(group);
  document.getElementById("chat-modal").classList.add("open");
}

function renderWaMessages(group) {
  const box = document.getElementById("chat-messages");
  box.innerHTML = "";
  group.messages.forEach((m) => {
    const bubble = document.createElement("div");
    bubble.className = `wa-msg-bubble ${m.me ? "me" : ""}`;
    const imgHtml = m.photo ? `<img class="wa-chat-img" src="${m.photo}" alt="Foto">` : "";
    const textHtml = m.text ? `<div class="wa-text">${m.text}</div>` : "";
    bubble.innerHTML = `
      <span class="wa-sender">${m.sender}</span>
      ${textHtml}
      ${imgHtml}
      <span class="wa-time">${m.time}</span>
    `;
    box.appendChild(bubble);
  });
  box.scrollTop = box.scrollHeight;
}

function renderNotebook() {
  const container = document.getElementById("notebook-list");
  container.innerHTML = "";

  state.customNotes.forEach((n) => {
    const card = document.createElement("div");
    card.className = "saved-note-card";
    card.innerHTML = `<span class="wa-tag">Eigene Notiz</span><strong>${n.title}</strong><p>${n.body}</p>`;
    container.appendChild(card);
  });

  state.savedStories.forEach((id) => {
    const s = STORIES.find((item) => item.id === id);
    if (!s) return;
    const card = document.createElement("div");
    card.className = "saved-note-card";
    card.innerHTML = `<span class="wa-tag">@${s.username}</span><strong>${s.header}</strong><p>${s.leftNotes}</p>`;
    container.appendChild(card);
  });

  if (!container.innerHTML) {
    container.innerHTML = `<p class="step-desc">Noch keine Notizen gespeichert.</p>`;
  }
}

function openNotebook(fromId) {
  state.backFromNotebook = fromId;
  renderNotebook();
  showScreen("screen-notebook");
}

function renderProfileScreen() {
  const email = state.user || "zuelal@fh-dortmund.de";
  const initial = email.trim().charAt(0).toUpperCase() || "S";

  document.getElementById("profile-monogram").textContent = initial;
  document.getElementById("profile-display-name").textContent = email;
  document.getElementById("profile-study-line").textContent = `${state.uni} · ${state.major}`;
  document.getElementById("profile-email-val").textContent = email;
  document.getElementById("profile-uni-val").textContent = state.uni;
  document.getElementById("profile-major-val").textContent = state.major;

  const passEl = document.getElementById("profile-password-val");
  const toggleBtn = document.getElementById("toggle-password-btn");
  passEl.textContent = state.passwordVisible ? state.password : "•".repeat(Math.max(8, state.password.length));
  toggleBtn.textContent = state.passwordVisible ? "Verbergen" : "Anzeigen";

  document.getElementById("metric-saved").textContent = state.savedStories.size + state.customNotes.length;
  document.getElementById("metric-liked").textContent = state.likedStories.size;

  const actList = document.getElementById("profile-activity-list");
  actList.innerHTML = "";

  const courseLabel = state.activeCourse ? `${state.activeCourse.title} (${state.activeCourse.semNum}. Sem)` : "Modulhandbuch";
  const rows = [
    { left: "Aktives Modul", right: courseLabel },
    { left: "Gesehene Stories", right: `${state.seenStories.size} / ${STORIES.length}` },
    { left: "Notizbuch-Einträge", right: `${state.savedStories.size + state.customNotes.length}` }
  ];

  rows.forEach((r) => {
    const row = document.createElement("div");
    row.className = "activity-pill-row";
    row.innerHTML = `<strong>${r.left}</strong><span>${r.right}</span>`;
    actList.appendChild(row);
  });
}

function openProfile(fromId) {
  state.backFromProfile = fromId;
  state.passwordVisible = false;
  renderProfileScreen();
  showScreen("screen-profile");
}

/* Navigasyon ve Olaylar */
document.getElementById("to-login-btn").addEventListener("click", () => {
  const uniEl = document.getElementById("uni-select");
  const majorEl = document.getElementById("major-select");
  state.uni = uniEl.options[uniEl.selectedIndex].text;
  state.major = majorEl.options[majorEl.selectedIndex].text;
  showScreen("screen-login");
});

document.getElementById("back-to-setup-btn").addEventListener("click", () => showScreen("screen-setup"));

document.getElementById("login-submit-btn").addEventListener("click", () => {
  const inputUser = document.getElementById("login-user").value.trim();
  const inputPass = document.getElementById("login-password").value;
  if (inputUser) state.user = inputUser;
  if (inputPass) state.password = inputPass;

  document.getElementById("meta-summary").textContent = `${state.uni} · ${state.major} · ${state.user}`;
  renderHandbook();
  showScreen("screen-curriculum");
});

document.getElementById("back-to-setup-from-curr").addEventListener("click", () => showScreen("screen-setup"));

document.querySelectorAll(".filter-chip").forEach((chip) => {
  chip.addEventListener("click", () => {
    document.querySelectorAll(".filter-chip").forEach((c) => c.classList.remove("active"));
    chip.classList.add("active");
    state.semFilter = chip.dataset.sem;
    renderHandbook();
  });
});

document.getElementById("back-to-handbook-btn").addEventListener("click", () => showScreen("screen-curriculum"));

document.getElementById("prev-story-btn").addEventListener("click", () => {
  openIpadStory((state.activeStoryIndex - 1 + STORIES.length) % STORIES.length);
});

document.getElementById("next-story-btn").addEventListener("click", () => {
  openIpadStory((state.activeStoryIndex + 1) % STORIES.length);
});

let swipeStartX = 0;
const swipeZone = document.getElementById("ipad-swipe-zone");
swipeZone.addEventListener("pointerdown", (e) => {
  swipeStartX = e.clientX;
});
swipeZone.addEventListener("pointerup", (e) => {
  const deltaX = e.clientX - swipeStartX;
  if (Math.abs(deltaX) > 45) {
    if (deltaX < 0) openIpadStory((state.activeStoryIndex + 1) % STORIES.length);
    else openIpadStory((state.activeStoryIndex - 1 + STORIES.length) % STORIES.length);
  }
});

document.getElementById("modal-like-btn").addEventListener("click", () => {
  const story = STORIES[state.activeStoryIndex];
  if (!story) return;
  if (state.likedStories.has(story.id)) state.likedStories.delete(story.id);
  else state.likedStories.add(story.id);
  openIpadStory(state.activeStoryIndex);
});

document.getElementById("modal-save-btn").addEventListener("click", () => {
  const story = STORIES[state.activeStoryIndex];
  if (!story) return;
  if (state.savedStories.has(story.id)) state.savedStories.delete(story.id);
  else state.savedStories.add(story.id);
  updateSavedCount();
  openIpadStory(state.activeStoryIndex);
});

document.getElementById("close-story-modal").addEventListener("click", () => {
  document.getElementById("story-modal").classList.remove("open");
});

document.getElementById("wa-photo-trigger").addEventListener("click", () => {
  document.getElementById("chat-photo-input").click();
});

document.getElementById("chat-photo-input").addEventListener("change", (e) => {
  const file = e.target.files && e.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = () => {
    state.pendingPhotoDataUrl = reader.result;
    state.pendingPhotoName = file.name;
    const prev = document.getElementById("wa-photo-preview");
    prev.classList.add("has-img");
    prev.innerHTML = `<span>📷 ${file.name}</span><button type="button" class="close-x" id="remove-photo-btn">✕</button>`;
    document.getElementById("remove-photo-btn").addEventListener("click", clearPhotoSelection);
  };
  reader.readAsDataURL(file);
});

document.getElementById("send-chat-btn").addEventListener("click", () => {
  const input = document.getElementById("chat-message-input");
  const text = input.value.trim();
  if ((!text && !state.pendingPhotoDataUrl) || !state.activeGroupId) return;

  const groups = state.groupsByCourse[state.activeCourse.id] || [];
  const group = groups.find((g) => g.id === state.activeGroupId);
  if (!group) return;

  const now = new Date();
  const timeStr = `${String(now.getHours()).padStart(2, "0")}:${String(now.getMinutes()).padStart(2, "0")}`;

  group.messages.push({
    sender: state.user || "Du",
    text,
    photo: state.pendingPhotoDataUrl || null,
    time: timeStr,
    me: true
  });
  group.time = timeStr;
  input.value = "";
  clearPhotoSelection();
  renderWaMessages(group);
  renderGroups();
});

document.getElementById("chat-message-input").addEventListener("keydown", (e) => {
  if (e.key === "Enter") document.getElementById("send-chat-btn").click();
});

document.getElementById("close-chat-modal").addEventListener("click", () => {
  document.getElementById("chat-modal").classList.remove("open");
});

document.getElementById("open-create-group-btn").addEventListener("click", () => {
  document.getElementById("new-group-name").value = "";
  document.getElementById("new-group-members").value = "";
  document.getElementById("group-modal").classList.add("open");
});

document.getElementById("close-group-modal").addEventListener("click", () => {
  document.getElementById("group-modal").classList.remove("open");
});

document.getElementById("save-new-group-btn").addEventListener("click", () => {
  const name = document.getElementById("new-group-name").value.trim();
  const members = document.getElementById("new-group-members").value.trim() || "Esra, Du";
  if (!name || !state.activeCourse) return;

  const numMatch = name.match(/\d+/);
  const avatarText = numMatch ? numMatch[0] : name.trim().charAt(0).toUpperCase();

  state.groupsByCourse[state.activeCourse.id].unshift({
    id: `${state.activeCourse.id}-custom-${Date.now()}`,
    name,
    avatarText,
    tag: "Neu",
    members,
    time: "Jetzt",
    isDm: false,
    messages: [{ sender: "System", text: `Gruppe „${name}“ wurde erstellt.`, time: "Jetzt", me: false }]
  });
  document.getElementById("group-modal").classList.remove("open");
  renderGroups();
});

document.getElementById("open-notebook-btn").addEventListener("click", () => openNotebook("screen-course"));
document.getElementById("open-notebook-from-profile").addEventListener("click", () => openNotebook("screen-profile"));
document.getElementById("back-from-notebook-btn").addEventListener("click", () => showScreen(state.backFromNotebook));

document.getElementById("add-custom-note-btn").addEventListener("click", () => {
  const title = document.getElementById("custom-note-title").value.trim();
  const body = document.getElementById("custom-note-body").value.trim();
  if (!title || !body) return;
  state.customNotes.unshift({ title, body });
  document.getElementById("custom-note-title").value = "";
  document.getElementById("custom-note-body").value = "";
  updateSavedCount();
  renderNotebook();
});

document.getElementById("open-profile-btn").addEventListener("click", () => openProfile("screen-course"));
document.getElementById("open-profile-from-notebook").addEventListener("click", () => openProfile("screen-notebook"));
document.getElementById("back-from-profile-btn").addEventListener("click", () => showScreen(state.backFromProfile));

document.getElementById("toggle-password-btn").addEventListener("click", () => {
  state.passwordVisible = !state.passwordVisible;
  renderProfileScreen();
});