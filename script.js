/* =========================================================
   A Story Called Srija — Chapter 18
   script.js  —  vanilla JS, no dependencies
   ---------------------------------------------------------
   MODULES
     0. CONTENT          <- edit everything here
     1. helpers
     2. Sky (canvas stars) + petals
     3. Scenes (fade transitions)
     4. Gate
     5. Intro
     6. Hub constellation
     7. Chapters (panel renderers)
     8. Music (Srija FM + mini player)
     9. Finale: candles, letter, closing
   ========================================================= */

/* =========================================================
   0.  === EDIT SRIJA CONTENT HERE ===
   Everything Srija reads lives in this object.
   Replace text freely — nothing below depends on the wording.
   ========================================================= */
const CONTENT = {
  /* --- 🌻 HER WORLD --------------------------------------------------- */
  herWorld: {
    intro: "A few things that make up your world. Tap a sunflower.",
    flowers: [
      {
        tag: "Ambition",
        icon: "assets/images/her-world/ambition.png",
        title: "Ambition",
        text: "I hope you become everything you're working toward.",
      },
      {
        tag: "Travel",
        icon: "assets/images/her-world/travel.png",
        title: "Travel",
        text: "There is a whole world waiting for you.",
      },
      {
        tag: "Books",
        icon: "assets/images/her-world/books.png",
        title: "Books",
        text: "You love getting lost in stories.",
      },
      {
        tag: "Dreams",
        icon: "assets/images/her-world/dreams.png",
        title: "Dreams",
        text: "You don't just want a life.\nYou want to build one.",
      },
      {
        tag: "Dark Romance",
        icon: "assets/images/her-world/dark-romance.png",
        title: "Dark Romance",
        text: "Okay… this explains some things. 👀",
      },
      {
        tag: "Horror",
        icon: "assets/images/her-world/horror.png",
        title: "Horror Movies",
        text: "Apparently being scared is fun.",
      },
      {
        tag: "Drawing",
        icon: "assets/images/her-world/drawing.png",
        title: "Drawing",
        text: "You used to draw. I hope that part of you comes back someday.",
      },
      {
        tag: "Japan",
        icon: "assets/images/her-world/japan.png",
        title: "Japan",
        text: "A place that once lived in your dreams. 🇯🇵",
      },
      
    ],
    coloursNote:
      "And your colours — the quiet ones. Black. White. Nothing loud, and somehow still the most striking thing in the room.",
  },

  /* --- 📚 HER STORY (book pages) -------------------------------------- */

  herStory: [
    "Once upon a time, there was a girl who wanted more from life.",

    "She dreamed of seeing the world — one place, one adventure at a time. 🌍",

    "She wanted to build a life she could be proud of.",

    "She wanted to chase her dreams, even when the road wasn't easy. ✨",

    "She wanted to become the person she imagined in her head.",

    "And she's only 18. 🌻",

    "There's so much life ahead of her — so many dreams to chase, places to see, and beautiful moments to live. ❤️",
  ],

  /* --- 👀 THE FIRST LOOK ---------------------------------------------- */
  firstLook: [
    "The first time I met you…",
    "I noticed your eyes.",
    "And that little mark near your eye.",
    "In that moment, my heart skipped a beat. ❤️",
    "Jani na keno sei moment amar ajo clearly mone ache. Hoyto oi muhurtei kichu ekta feel korechilam, ja tokhon bujhini — but somehow, you became a memory I never wanted to forget. ❤️",
  ],
  /* --- 🍦 TWO LITTLE MEMORIES ----------------------------------------- */
  memories: {
    title: "A few moments worth keeping.",
    cards: [
      {
        photo: "assets/images/memories/memory 1.jpeg",
        cap: "A moment",
        heading: "One of my favourite memories.",
        text: "Red and black — our little matching moment. I remember your eyes, the little mark near your eye, and the warmth of holding your hand. A moment I’ll always carry close to my heart.",
        chain: ["Talking", "Laughing", "Remembering"],
      },
      {
        photo: "assets/images/memories/memory 2.png",
        cap: "Another moment",
        heading: "A moment I still think about.",
        text: "Your hug caught me completely by surprise. I wasn’t prepared for my first hug to feel like that. Walking together, sharing ice cream, and just being close to you - it’s a memory that still makes me smile.” ❤️",
        chain: ["Walking", "Talking", "Smiling", "Ice cream 🍦"],
      },
    ],
    outro: [
      "We may not have a thousand memories yet.",
      "But the ones we have already mean something to me.",
    ],
    whisper: "Maybe it's the little things that become the best memories. ❤️",
  },

  /* --- ❤️ THINGS I LOVE ------------------------------------------------ */
  thingsILove: [
    "I love your eyes.",
    "I love your ambition.",
    "I love how honest you are with me.",
    "I love your confidence.",
    "I love the way you dream about your future.",
    "I love that you stood beside me when I was at my lowest.",
    "I love the little things you probably don't realize I notice.",
  ],

  /* --- 🌍 PLACES WE'LL GO ---------------------------------------------
     x / y are percentages on the stylised map. Add your own freely.   */
  places: [
    {
      name: "Japan",
      x: 79,
      y: 34,
      special: true,
      lines: [
        "Someday. 🇯🇵",
        "One of your dreams. One I want to experience with you. ❤️",
      ],
    },

    {
      name: "Lapland",
      x: 43,
      y: 17,
      lines: [
        "Northern lights. ✨",
        "Snow, cold nights, and a sky worth staying up for.",
      ],
    },

    {
      name: "Edinburgh",
      x: 50,
      y: 28,
      lines: [
        "A little Hogwarts dream. 🏰",
        "Old streets, magical corners, and a little bit of wonder.",
      ],
    },

    {
      name: "New York",
      x: 24,
      y: 33,
      lines: [
        "The city that never sleeps. 🗽",
        "City lights, busy streets, and getting lost together.",
      ],
    },

    {
      name: "Sikkim",
      x: 62,
      y: 53,
      lines: [
        "Mountains calling. 🏔️",
        "Quiet roads, beautiful views, and somewhere peaceful together.",
      ],
    },
  ],
  placesIntro:
    "Some places we've dreamed about. Some places we'd love to discover together. Tap a light.",

  /* --- 🎵 SRIJA FM -----------------------------------------------------
   Songs selected from Srija's listening history.
*/
  radio: [
    {
      key: "energy",
      label: "🌻 Srija Energy",
      tracks: [
        {
          title: "Pavazha Malli",
          note: "The one you keep coming back to. 🌻",
          src: "assets/music/Pavazha Malli.mp3",
        },
        {
          title: "Katchi Sera",
          note: "For when Srija energy is required. ✨",
          src: "assets/music/Katchi Sera.mp3",
        },
        {
          title: "Maamadura",
          note: "Just pure energy. 💃",
          src: "assets/music/Maamadura.mp3",
        },
      ],
    },

    {
      key: "2am",
      label: "🌙 2 AM Srija",
      tracks: [
        {
          title: "Tere Ishk Mein",
          note: "For the quieter hours. 🌙",
          src: "assets/music/Tere Ishk Mein.mp3",
        },
        {
          title: "Tum Ho Toh",
          note: "Some songs just feel softer at night. ❤️",
          src: "assets/music/Tum Ho Toh.mp3",
        },
        {
          title: "Tere Liye",
          note: "One for the heart. ❤️",
          src: "assets/music/Tere Liye.mp3",
        },
      ],
    },

    {
      key: "afterdark",
      label: "⚡ Srija After Dark",
      tracks: [
        {
          title: "KALYANI PHONK",
          note: "Same song. Completely different universe. ⚡",
          src: "assets/music/KALYANI PHONK.mp3",
        },
        {
          title: "Shampoo (Nightcore)",
          note: "Apparently 2 AM has another personality. 🌙",
          src: "assets/music/Shampoo (Nightcore).mp3",
        },
        {
          title: "FREAKED OUT",
          note: "No explanation required. 😂",
          src: "assets/music/FREAKED OUT.mp3",
        },
      ],
    },
  ],

  /* --- 💌 FOR LATER ---------------------------------------------------- */
  letters: {
    open: [
      {
        icon: "💌",
        label: "Open when you're sad",
        body: [
          "Oii,",
          "If you're reading this, I hope you know it's okay to have bad days. You don't have to handle everything alone. I'm always h  ere to listen, support you, and stand beside you. Whenever things feel heavy, remember that you'll always have my shoulder to lean on. 🫂 I'll be with you, always and forever. I'll support you through the good days and the difficult ones. You can always count on me. I'm here. I'm with you. Always. ❤️",
          "- Your Idiot ❤️",
        ],
      },

      {
        icon: "💌",
        label: "Open when you're happy",
        body: [
          "Oii,",
          "If you're reading this, I hope something made you smile today. 😊 Hold on to that happiness. You deserve all the little moments that make your heart feel light. And honestly, seeing you happy makes me happy too. So keep smiling, keep being you, and enjoy this moment. I hope there are many, many more reasons for you to smile. ❤️",
          "- Your Idiot ❤️",
        ],
      },

      {
        icon: "💌",
        label: "Open when you need a hug",
        body: [
          "Oii,",
          "Come here. 🫂 A big, tight hug — the kind where I don't let go easily, the kind that lasts until me smell like you. ❤️ Just stay here for a little while. My arms are always your safe place. Until I can give you that hug for real, consider this one from me. 🫂❤️",
          "- Your Idiot ❤️",
        ],
      },

      {
        icon: "💌",
        label: "Open when you want to know how much I love you",
        body: [
          "Oii,",
          "How much do I love you? More than I know how to put into words. ❤️ I love you in the little moments, in the random conversations, in your smiles, and even in the moments when you don't realize how special you are. I don't need a reason to love you. I just do. And if you ever wonder how much — come a little closer, because I don't think even a thousand words would be enough. I love you. More than you know. ❤️",
          "- Your Idiot ❤️",
        ],
      },

      {
        icon: "💌",
        label: "Open when you doubt yourself",
        body: [
          "Srija,",
          "Don't let one difficult moment make you forget how capable you are. I believe in you, even on the days when you don't believe in yourself. Keep going. Keep chasing your dreams. You are stronger than you think. And whenever you forget that, I'll be here to remind you. I'm always proud of you. ❤️",
          "- Your Idiot ❤️",
        ],
      },
    ],

    locked: [
      {
        icon: "🔒",
        label: "Open when we meet again",
        body: [
          "Hey,",
          "So... we finally meet again. ❤️ I wonder if you'll smile first, or if I'll just stand there looking at you for a moment. But one thing I know — I'm going to want that hug. The kind where neither of us wants to let go. Until then, I'll be counting the moments until I get to see you again. See you soon, beautiful. ❤️",
          "- Your Idiot ❤️",
        ],
      },

      {
        icon: "🔒",
        label: "Open on your 19th birthday",
        body: [
          "Happy 19th Birthday! 🎂❤️",
          "Another year of you, and I'm so happy I get to be a little part of your story. I hope this year brings you closer to your dreams, gives you countless reasons to smile, and fills your life with beautiful moments. Keep being the wonderful person you are. And remember, I'll always be here cheering for you. Happy birthday, birthday girl. ❤️",
          "- Your Idiot ❤️",
        ],
      },

      {
        icon: "🔒",
        label: "Open after our next adventure",
        body: [
          "Hey,",
          "So... we made another memory together. ❤️ Whatever happened, I hope we laughed, got a little lost, and enjoyed every moment of it. I already know I'll want to do it all again with you. One adventure finished, and hopefully many more waiting for us. You said you want to see the world. I still want to see it with you. 🌍❤️",
          "- Your Idiot ❤️",
        ],
      },
    ],

    lockedMsg: "Not yet. This one hasn't happened yet. 🌙",
  },

  /* --- ⭐ Wishes For You ---------------------------------------------------- */
  wishes: [
    "I wish you the courage to chase every dream you keep close to your heart. ❤️",

    "I wish you success in everything you choose to build for yourself.",

    "I wish you the confidence to believe in yourself, even on difficult days.",

    "I wish you endless reasons to smile — especially the unexpected ones. 😊",

    "I wish you a life filled with adventures you'll remember for years.",

    "I wish you get to see Japan someday, exactly the way you've imagined it. 🇯🇵",

    "I wish you northern lights, snowy nights, and all the little travel dreams you have. ✨",

    "I wish your drawings always have a place in your life, no matter how busy it gets. 🎨",

    "I wish you the freedom to become whoever you want to be.",

    "I wish you people who understand your heart and always respect it.",

    "I wish you peaceful days when life feels too loud.",

    "I wish you the strength to walk away from anything that makes you feel less than enough.",

    "I wish you a future that feels like something you chose for yourself.",

    "I wish you moments that make you stop and think, 'I'm really happy right now.' ❤️",

    "I wish you all the little things you've quietly wished for but never said out loud.",

    "I wish you a life full of places you've dreamed of seeing and stories worth telling.",

    "I wish you happiness that stays, not just happiness that visits.",

    "And I wish I get to be beside you while you live it all. ❤️",
  ],

  /* --- 🔮 THE UNWRITTEN PAGES ------------------------------------------ */

  unwritten: {
    chapters: ["Chapter 19", "Chapter 20", "Chapter 21"],

    lines: [
      "There are so many pages left&nbsp;📖✨",
      "We don't know what happens yet.",
      "Maybe that's the best part&nbsp;🌻",
      "There are still so many beautiful moments waiting for us to discover.&nbsp;❤️",
    ],

    maybes: [
      "More little moments. ✨",
      "More long walks. 🌙",
      "More ice cream dates. 🍦",
      "More hugs. 🫂",
      "A future adventure. 🌍",
      "A future trip. ✈️",
      "More memories we haven't imagined yet. ❤️",
    ],

    disclaimer:
      "And maybe, someday, we'll look back and smile at how much of the story was still waiting to be written. 📖❤️",
  },

  /* --- 🎁 SECRET -------------------------------------------------------- */
  secret: {
  reveal: "You really thought that was everything? 😂",

  media: "assets/images/secret/secret-01.jpeg",

  body: [
    "Achha... tahole eta khuje peye gechoo...I guess you deserve a little extra secret. 😏❤️ You're cute, ektu tei rege jao, majhe majhe tomake parisan korte valoi lage... 😂🌻",
    "Aro onek kichui achee jegulo likhatm ekhane but thak amader secreat amader moddhei thakuk, hihihi", 
    
  ],
},

  /* --- FINAL LETTER ----------------------------------------------------- */
  finalLetter: {
    greeting: "Srija,",

    paras: [
      "Ajke tomar 18th Birthday, and ami chaina tomake shudhu ekta simple “Happy Birthday” likhte.",

      "Ami chai emon kichu korte, jeta tumi always tomar mone rekhe dibe, aar majhe majhe abar fire eshe dekhte chaibe. ❤️",

      "Ami chai tumi tomar nijer moto kore boro hoyo, tomar dreams gulo chase koro, aar je life ta tumi imagine koro, shetai successfully build koro.",

      "Tomar shob dreams jeno ekdin real hoy. Japan theke Northern Lights, Hogwarts theke New York — shob jaygay jeno ekdin pouchhate paro. R amakeo sathe rekho. 🌍❤️",

      "But mostly, ami chai tumi happy thako.",

      "Thank you for being such an important part of my life. Tomar sathe kotha bola, hashahashi, choto choto moments — shob kichu amar kache special.",

      "Tumi amar safe place, feel like home, amar comfort zone. I hope amio tomar kache same. ❤️",

      "Ami jani na future er prottekta chapter kemon hobe. But ekta jinis ami jani — ami tomar pashe thakte chai. Tomar sathe thakte chai.",

      "Tomar bhalo din e, tomar kharap din e, tomar dreams er shomoy, aar jokhon nijeke niye doubt korbe tokhono.",

      "I'll support you. I'll believe in you. And I'll always want to see you happy. 🌻",

      "Tumi bolechile tumi puro world ta dekhte chao. Ami shei world ta tomar sathe dekhte chai. ❤️",

      "Happy 18th, Srija. 🌻❤️",
    ],

    signOff: ["— Your Idiot :) ❤️"],
  },
};

/* =========================================================
   1. HELPERS
   ========================================================= */
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const wait = (ms) => new Promise((r) => setTimeout(r, ms));
const el = (tag, cls, html) => {
  const n = document.createElement(tag);
  if (cls) n.className = cls;
  if (html != null) n.innerHTML = html;
  return n;
};
const reduceMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)",
).matches;

/* stagger a group of .line elements */
async function playLines(nodes, gap = 1700, first = 500) {
  await wait(first);
  for (const n of nodes) {
    n.classList.add("is-shown");
    await wait(reduceMotion ? 350 : gap);
  }
}

/* =========================================================
   2. SKY — canvas starfield + drifting sunflower petals
   ========================================================= */
const Sky = (() => {
  const cv = $("#sky"),
    ctx = cv.getContext("2d");
  let stars = [],
    w = 0,
    h = 0,
    dpr = 1,
    expand = 0,
    raf;

  function resize() {
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    w = cv.width = innerWidth * dpr;
    h = cv.height = innerHeight * dpr;
    cv.style.width = innerWidth + "px";
    cv.style.height = innerHeight + "px";
    build();
  }
  function build() {
    const count = Math.round((innerWidth * innerHeight) / 9000);
    stars = Array.from({ length: Math.min(count, 190) }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      r: (Math.random() * 1.2 + 0.3) * dpr,
      a: Math.random(),
      s: Math.random() * 0.012 + 0.003,
      warm: Math.random() > 0.82,
    }));
  }
  function frame() {
    ctx.clearRect(0, 0, w, h);
    const cx = w / 2,
      cy = h / 2;
    for (const st of stars) {
      st.a += st.s;
      const tw = 0.35 + Math.abs(Math.sin(st.a)) * 0.65;
      const x = st.x + (st.x - cx) * expand;
      const y = st.y + (st.y - cy) * expand;
      ctx.beginPath();
      ctx.fillStyle = st.warm
        ? `rgba(242,193,78,${tw * 0.9})`
        : `rgba(244,238,227,${tw * 0.8})`;
      ctx.arc(x, y, st.r * (1 + expand * 0.6), 0, 6.283);
      ctx.fill();
    }
    raf = requestAnimationFrame(frame);
  }
  /* used at the intro -> hub transition */
  function burst() {
    const t0 = performance.now();
    (function step(t) {
      const p = Math.min((t - t0) / 1400, 1);
      expand = Math.sin(p * Math.PI) * 1.4;
      if (p < 1) requestAnimationFrame(step);
      else expand = 0;
    })(t0);
  }
  addEventListener("resize", resize, { passive: true });
  resize();
  if (!reduceMotion) frame();
  else frame();
  return { burst };
})();

/* soft sunflower petals, very sparse */
(function petals() {
  if (reduceMotion) return;
  const box = $("#petals");
  setInterval(() => {
    if (document.hidden || box.childElementCount > 8) return;
    const p = el("i", "petal");
    p.style.left = Math.random() * 100 + "vw";
    p.style.setProperty("--dx", Math.random() * 120 - 60 + "px");
    p.style.animationDuration = 14 + Math.random() * 12 + "s";
    p.style.opacity = 0.18 + Math.random() * 0.3;
    box.appendChild(p);
    setTimeout(() => p.remove(), 28000);
  }, 2600);
})();

/* =========================================================
   3. SCENES
   ========================================================= */
const Scenes = (() => {
  let current = $("#scene-gate");
  async function go(id) {
    const next = $(id);
    if (!next || next === current) return;
    current.classList.add("is-fading");
    await wait(reduceMotion ? 120 : 800);
    current.classList.remove("is-active", "is-fading");
    current = next;
    next.classList.add("is-active");
    next.scrollTop = 0;
    document.dispatchEvent(new CustomEvent("scene:enter", { detail: id }));
  }
  return {
    go,
    get current() {
      return current;
    },
  };
})();

/* =========================================================
   4. SECRET GATE
   (experience-level only — not a security mechanism)
   ========================================================= */
(function gate() {
  const form = $("#gate-form"),
    msg = $("#gate-msg");
  const dd = $("#gate-dd"),
    mm = $("#gate-mm"),
    yy = $("#gate-yyyy");
  const KEY = 889575051; // djb2/xor of the remembered date

  const hash = (s) => {
    let x = 5381;
    for (let i = 0; i < s.length; i++) {
      x = ((x << 5) + x) ^ s.charCodeAt(i);
      x >>>= 0;
    }
    return x;
  };

  /*
    Robust date entry:
    - digits only
    - typing 2 digits moves DD -> MM -> YYYY
    - pasting 8 digits splits into DD / MM / YYYY
    - Backspace moves to the previous field when empty
    - Enter submits from any date field
  */
  const fields = [dd, mm, yy];

  const focusField = (i) => {
    const field = fields[i];
    if (!field) return;
    requestAnimationFrame(() => {
      field.focus();
      field.select?.();
    });
  };

  const showGateMessage = (text, ok = false) => {
    msg.textContent = text;
    msg.classList.add("is-shown");
    msg.classList.toggle("is-right", ok);
  };

  const cleanDate = (value) => String(value ?? "").replace(/\D/g, "");

  fields.forEach((inp, i) => {
    inp.addEventListener("input", () => {
      let value = cleanDate(inp.value);

      /* If an 8-digit birthday is pasted into any field, distribute it. */
      if (value.length >= 8) {
        const full = value.slice(0, 8);
        dd.value = full.slice(0, 2);
        mm.value = full.slice(2, 4);
        yy.value = full.slice(4, 8);
        focusField(2);
        return;
      }

      value = value.slice(0, inp.maxLength);
      inp.value = value;

      if (value.length >= inp.maxLength && fields[i + 1]) {
        focusField(i + 1);
      }

      msg.classList.remove("is-shown", "is-right");
      msg.textContent = "";
    });

    inp.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        form.requestSubmit();
        return;
      }

      if (e.key === "Backspace" && !inp.value && fields[i - 1]) {
        e.preventDefault();
        focusField(i - 1);
      }

      if (e.key === "ArrowLeft" && i > 0 && inp.selectionStart === 0) {
        e.preventDefault();
        focusField(i - 1);
      }

      if (
        e.key === "ArrowRight" &&
        fields[i + 1] &&
        inp.selectionStart === inp.value.length
      ) {
        e.preventDefault();
        focusField(i + 1);
      }
    });

    inp.addEventListener("paste", (e) => {
      const pasted = cleanDate(e.clipboardData?.getData("text") || "");
      if (pasted.length < 8) return;

      e.preventDefault();
      dd.value = pasted.slice(0, 2);
      mm.value = pasted.slice(2, 4);
      yy.value = pasted.slice(4, 8);
      focusField(2);
    });
  });

  const pad = (v, n) => cleanDate(v).padStart(n, "0");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const day = pad(dd.value, 2);
    const month = pad(mm.value, 2);
    const year = pad(yy.value, 4);
    const guess = day + month + year;

    msg.classList.add("is-shown");

    /* Don't let incomplete/invalid dates silently become a wrong hash. */
    const d = Number(day);
    const m = Number(month);
    const y = Number(year);
    const validDate =
      /^\d{2}$/.test(day) &&
      /^\d{2}$/.test(month) &&
      /^\d{4}$/.test(year) &&
      m >= 1 &&
      m <= 12 &&
      d >= 1 &&
      d <= new Date(y, m, 0).getDate();

    if (!validDate) {
      showGateMessage("Enter a real date — DD / MM / YYYY. 🌙");
      form.classList.remove("shake");
      void form.offsetWidth;
      form.classList.add("shake");
      return;
    }

    if (hash(guess) === KEY) {
  showGateMessage("I knew you'd remember. ❤️", true);
  document.body.classList.remove("is-locked");

  Music.enable();
  Radio.startLandingSong();

  await wait(1200);
  Scenes.go("#scene-intro");
}
else {
      showGateMessage("Hmm… think about the beginning. 🌙");
      form.classList.remove("shake");
      void form.offsetWidth;
      form.classList.add("shake");
      focusField(0);
    }
  });
})();

/* =========================================================
   5. INTRO
   ========================================================= */
document.addEventListener(
  "scene:enter",
  async (e) => {
    if (e.detail !== "#scene-intro") return;
    await playLines($$("#intro-lines .line"), 2400, 900);
    await wait(900);
    $("#intro-title").classList.add("is-shown");
  },
  { once: false },
);

$('#open-chapter').addEventListener('click', async () => {
  Sky.burst();

  await wait(500);

  Scenes.go('#scene-hub');
});
/* =========================================================
   6. HUB CONSTELLATION
   ========================================================= */
const Hub = (() => {
  const NODES = [
  // Top of the heart
  { id: "world", emoji: "🌻", label: "Her World", x: 28, y: 25 },
  { id: "story", emoji: "📚", label: "Your Story", x: 72, y: 25 },

  // Upper sides
  { id: "memories", emoji: "🍦", label: "Our Moments", x: 14, y: 40 },
  { id: "love", emoji: "❤️", label: "Things I Love", x: 50, y: 38 },
  { id: "look", emoji: "👀", label: "The First Look", x: 86, y: 40 },

  // Middle
  { id: "places", emoji: "🌍", label: "Places We'll Go", x: 22, y: 55 },
  { id: "unwritten", emoji: "🔮", label: "Unwritten Pages", x: 78, y: 55 },

  // Lower heart
  { id: "letters", emoji: "💌", label: "For Later", x: 34, y: 70 },
  { id: "wishes", emoji: "⭐", label: "WISHES FOR YOU", x: 50, y: 84 },

  // Hidden until all other chapters are explored
  { id: "secret", emoji: "🎁", label: "Secret", x: 66, y: 70, hidden: true },
];

//   const NODES = [
//   { id: "world", emoji: "🌻", label: "Her World", x: 28, y: 25 },

//   { id: "story", emoji: "📚", label: "Your Story", x: 72, y: 25 },

//   { id: "memories", emoji: "🍦", label: "Our Moments", x: 14, y: 40 },

//   { id: "love", emoji: "❤️", label: "Things I Love", x: 50, y: 38 },

//   { id: "look", emoji: "👀", label: "The First Look", x: 86, y: 40 },

//   { id: "places", emoji: "🌍", label: "Places We'll Go", x: 22, y: 55 },

//   { id: "unwritten", emoji: "🔮", label: "Unwritten Pages", x: 78, y: 55 },

//   { id: "letters", emoji: "💌", label: "For Later", x: 34, y: 70 },

//   { id: "wishes", emoji: "⭐", label: "WISHES FOR YOU", x: 50, y: 84 },

//   { id: "secret", emoji: "🎁", label: "Secret", x: 66, y: 70, hidden: true },
// ];
  const seen = new Set();
  const hub = $("#hub");

  function build() {
    NODES.forEach((n, i) => {
      const b = el("button", "node");
      b.type = "button";
      b.dataset.id = n.id;
      b.style.left = n.x + "%";
      b.style.top = n.y + "%";
      b.style.animationDelay = i * 0.45 + "s";
      b.innerHTML = `<span class="node__dot"></span>
         <span class="node__emoji" aria-hidden="true">${n.emoji}</span>
         <span class="node__label">${n.label}</span>`;
      if (n.hidden) {
        b.hidden = true;
        b.dataset.hidden = "1";
      }
      b.addEventListener("click", () => open(n.id));
      hub.appendChild(b);
    });
  }

  function open(id) {
    const isChapter = NODES.some((n) => n.id === id);

if (isChapter) {
  seen.add(id);
  $(`.node[data-id="${id}"]`)?.classList.add("is-seen");
  $("#hub-count").textContent = seen.size;
}
    Panel.open(id);
    /* the gift reveals itself once she's wandered a while */
    if (seen.size >= 6) $("#secret-tease").hidden = false;
    // if (seen.size >= 9) {
    //   const s = $('.node[data-hidden="1"]');
    //   if (s) s.hidden = false;
    // }

    if (seen.size >= 9) {
  const s = $('.node[data-hidden="1"]');

  if (s) {
    s.hidden = false;

    // Once Secret appears, slightly reshape the lower
    // half so the 10-node constellation stays balanced.
    const secret = s;
    const letters = $('.node[data-id="letters"]');
    const wishes = $('.node[data-id="wishes"]');

    if (letters) {
      letters.style.left = "31%";
      letters.style.top = "68%";
    }

    if (wishes) {
      wishes.style.left = "50%";
      wishes.style.top = "88%";
    }

    secret.style.left = "69%";
    secret.style.top = "68%";
  }
}
    /* after everything is explored, nudge toward the candles */
    if (seen.size >= 10) {
      $("#hub-finale").hidden = false;
      $("#hub-hint").innerHTML = `The story has brought you this far.
         <span>When you’re ready… there are candles waiting.</span>`;
    }
  }

  /* a way into the finale once she has wandered enough */
  const finaleBtn = el("button", "btn btn--glow", "Light the candles →");
  finaleBtn.id = "hub-finale";
  finaleBtn.type = "button";
  finaleBtn.hidden = true;
  finaleBtn.addEventListener("click", () => Candles.start());
  $("#scene-hub").appendChild(finaleBtn);

  $("#secret-tease").addEventListener("click", () => open("secret"));
  build();
  return { open, seen };
})();

/* =========================================================
   8. MUSIC — Srija\'s Playlist + persistent mini player
   ========================================================= */
const Music = (() => {
  let unlocked = false;
  const audio = $("#audio");
  const mini = $("#mini-player");
  const miniBtn = $("#mini-toggle");
  const label = $("#mini-label");
  const eq = $("#eq");

  function enable() {
    if (unlocked) return;
    unlocked = true;
    if (mini) mini.hidden = false;
  }

  function paint() {
    if (!audio || !miniBtn || !eq) return;
    const on = !audio.paused && !!audio.src;
    miniBtn.textContent = on ? "❚❚" : "▶";
    eq.classList.toggle("is-on", on);
  }

  function startTrack(src, title) {
    enable();
    audio.src = src;
    label.textContent = title || "Srija's Playlist";
    audio.play().catch(() => {});
    paint();
  }

  if (miniBtn) miniBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    if (!audio.src) { Hub.open("radio"); return; }
    audio.paused ? audio.play().catch(() => {}) : audio.pause();
  });

  if (mini) mini.addEventListener("click", (e) => {
    if (e.target === miniBtn) return;
    Hub.open("radio");
  });

  ["play", "pause", "ended"].forEach((event) => audio.addEventListener(event, paint));
  audio.addEventListener("error", () => { label.textContent = "Add songs to assets/music"; paint(); });

  return { enable, audio, setLabel: (t) => { label.textContent = t; }, startTrack, get unlocked() { return unlocked; } };
})();

const Radio = (() => {
  const audio = Music.audio;
  let cat = 0, trackIdx = -1, listEl = null, refs = {};

  function render(root) {
    const w = el("div", "wrap");
    const radio = el("div", "radio");
    radio.innerHTML = `
      <div class="radio__screen"><p class="radio__now">Now playing</p><p class="radio__track" id="r-title">— select a track —</p><p class="radio__note" id="r-note"></p></div>
      <div class="radio__controls"><button class="rbtn" id="r-prev" type="button" aria-label="Previous track">⏮</button><button class="rbtn rbtn--main" id="r-play" type="button" aria-label="Play or pause">▶</button><button class="rbtn" id="r-next" type="button" aria-label="Next track">⏭</button></div>
      <div class="radio__bar"><i id="r-bar"></i></div>`;
    const tabs = el("div", "tabs");
    CONTENT.radio.forEach((c, i) => {
      const t = el("button", "tab" + (i === cat ? " is-active" : ""), c.label);
      t.type = "button";
      t.addEventListener("click", () => { cat = i; trackIdx = -1; paintTabs(tabs); paintList(); paintNow(); });
      tabs.appendChild(t);
    });
    listEl = el("ul", "tracklist");
    w.append(radio, tabs, listEl);
    w.appendChild(el("p", "tiny-note", "A little soundtrack for Srija. 🎧❤️"));
    root.appendChild(w);
    refs = { title: $("#r-title", w), note: $("#r-note", w), bar: $("#r-bar", w), play: $("#r-play", w) };
    $("#r-play", w).addEventListener("click", toggle);
    $("#r-next", w).addEventListener("click", () => step(1));
    $("#r-prev", w).addEventListener("click", () => step(-1));
    paintList(); paintNow();
  }
  const tracks = () => CONTENT.radio[cat].tracks;
  function paintTabs(tabs) { $$(".tab", tabs).forEach((t, i) => t.classList.toggle("is-active", i === cat)); }
  function paintList() {
    if (!listEl) return; listEl.innerHTML = "";
    tracks().forEach((t, i) => { const li = el("li"), b = el("button"); b.type = "button"; b.innerHTML = `<span class="num">${String(i + 1).padStart(2, "0")}</span><span class="meta"><strong>${t.title}</strong><small>${t.note || ""}</small></span>`; b.addEventListener("click", () => play(i)); li.appendChild(b); listEl.appendChild(li); });
    markPlaying();
  }
  function markPlaying() { if (!listEl) return; $$("li", listEl).forEach((li, i) => li.classList.toggle("is-playing", i === trackIdx)); }
  function paintNow() { if (!refs.title) return; const t = tracks()[trackIdx]; refs.title.textContent = t ? t.title : "— select a track —"; refs.note.textContent = t ? t.note || "" : ""; refs.play.textContent = audio.paused ? "▶" : "❚❚"; }
  function play(i) { const t = tracks()[i]; if (!t) return; Music.enable(); trackIdx = i; audio.src = t.src; Music.setLabel(t.title); audio.play().catch(() => { if (refs.note) refs.note.textContent = "No audio file yet — add " + t.src; }); markPlaying(); paintNow(); }
  function toggle() { if (trackIdx < 0) return play(0); audio.paused ? audio.play().catch(() => {}) : audio.pause(); paintNow(); }
  function startLandingSong() { const t = CONTENT.radio[1]?.tracks[1]; if (!t) return; trackIdx = 1; audio.src = t.src; Music.enable(); Music.setLabel(t.title); audio.play().catch(() => {}); paintNow(); }
  function step(d) { const list = tracks(); if (!list.length) return; play((trackIdx + d + list.length) % list.length); }
  audio.addEventListener("timeupdate", () => { if (refs.bar && audio.duration && Number.isFinite(audio.duration)) refs.bar.style.width = (audio.currentTime / audio.duration) * 100 + "%"; });
  audio.addEventListener("ended", () => step(1));
  ["play", "pause"].forEach((event) => audio.addEventListener(event, paintNow));
  return { render, startLandingSong };
})();

/* =========================================================
   7. CHAPTERS — rendered into the panel shell
   ========================================================= */
const Panel = (() => {
  const panel = $("#panel"),
    body = $("#panel-body"),
    title = $("#panel-title");
  let io;

  const TITLES = {
    world: "Her World",
    story: "Your Story",
    look: "The First Look",
    memories: "Our Moments",
    love: "Things I Love About You",
    places: "Places We'll Go",
    radio: "🎧 Srija's Playlist",
    wishes: "WISHES FOR YOU",
    unwritten: "The Unwritten Pages",
    secret: "Secret",
  };

  function observeReveals() {
    io?.disconnect();
    io = new IntersectionObserver(
      (es) => {
        es.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-in");
            io.unobserve(e.target);
          }
        });
      },
      { root: body, threshold: 0.15 },
    );
    $$(".reveal", body).forEach((n) => io.observe(n));
  }

  async function open(id) {
    title.textContent = TITLES[id] || "";
    body.innerHTML = "";
    panel.hidden = false;
    document.body.classList.add("is-open");
    document.body.classList.toggle("hide-fm", id === "love");
    requestAnimationFrame(() => panel.classList.add("is-open"));
    (Chapters[id] || (() => {}))(body);
    observeReveals();
    body.focus({ preventScroll: true });
  }

  async function close() {
    panel.classList.remove("is-open");
    // Radio.pausePreviewOnly();
    await wait(reduceMotion ? 80 : 450);
    panel.hidden = true;
    body.innerHTML = "";
    document.body.classList.remove("is-open");
    document.body.classList.remove("hide-fm");
  }

  $("#panel-back").addEventListener("click", close);
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !panel.hidden) close();
  });
  return { open, close, body };
})();

const Chapters = {
  /* ---------- 🌻 HER WORLD ---------- */
  world(root) {
    const w = el("div", "wrap");
    w.appendChild(el("p", "intro-note reveal is-in", CONTENT.herWorld.intro));

    const card = el(
      "article",
      "flower-card reveal is-in",
      `<h3>Start here</h3><p>Tap any sunflower to open it.</p>`,
    );

    const grid = el("div", "field-grid");
    CONTENT.herWorld.flowers.forEach((f) => {
      const b = el("button", "flower");
      b.type = "button";
      b.innerHTML = `<img class="flower__bloom" src="${f.icon}" alt="" aria-hidden="true">
                     <span class="flower__tag">${f.tag}</span>`;
      b.addEventListener("click", () => {
        $$(".flower", grid).forEach((x) => x.classList.remove("is-open"));
        b.classList.add("is-open");
        card.innerHTML = `<h3>🌻 ${f.title}</h3><p>${f.text.replace(/\n/g, "<br>")}</p>`;
        card.animate?.(
          [
            { opacity: 0, transform: "translateY(8px)" },
            { opacity: 1, transform: "none" },
          ],
          { duration: 520, easing: "cubic-bezier(.22,.61,.36,1)" },
        );
      });
      grid.appendChild(b);
    });

    w.append(grid, card);
    const sw = el("div", "reveal");
    sw.innerHTML = `<p class="intro-note" style="margin-bottom:18px">${CONTENT.herWorld.coloursNote}</p>
       <div class="swatches">
         <span class="swatch"><i style="background:#0b0b0d"></i>Black</span>
         <span class="swatch"><i style="background:#f4eee3"></i>White</span>
         <span class="swatch"><i style="background:var(--sun)"></i>Sunflower</span>
       </div>`;
    w.appendChild(sw);
    root.appendChild(w);
  },

  /* ---------- 📚 Your STORY ---------- */
  story(root) {
    const w = el("div", "wrap");
    const book = el("div", "book");
    const pages = CONTENT.herStory;
    let idx = 0;

    pages.forEach((txt, i) => {
      const last = i === pages.length - 1;
      const p = el("div", "book__page" + (last ? " book__page--final" : ""));
      p.style.zIndex = pages.length - i;
      p.innerHTML = `<p>${txt}</p><span class="pagenum">${i + 1} / ${pages.length}</span>`;
      book.appendChild(p);
    });

    const controls = el("div", "book-controls");
    const next = el("button", "btn", "Turn the page →");
    const again = el("button", "btn btn--ghost", "Read again ↻");
    again.hidden = true;

    next.addEventListener("click", () => {
      /* Keep the final page visible */
      if (idx >= pages.length - 1) {
        next.hidden = true;
        again.hidden = false;
        return;
      }

      const p = book.children[idx];
      p.classList.add("is-turned");
      idx++;

      /* Page 7 is now visible */
      if (idx >= pages.length - 1) {
        next.hidden = true;
        again.hidden = false;
      }
    });

    again.addEventListener("click", () => {
      idx = 0;
      again.hidden = true;
      next.hidden = false;
      next.textContent = "Turn the page →";

      $$(".book__page", book).forEach((p) => p.classList.remove("is-turned"));
    });

    controls.append(next, again);
    w.append(book, controls);
    root.appendChild(w);
  },
  /* ---------- 👀 THE FIRST LOOK ---------- */
  // look(root) {
  //   const w = el('div', 'wrap');
  //   const scene = el('div', 'eye-scene');
  //   const eye = el('div', 'eye');
  //   eye.innerHTML = `<span class="eye__shape"></span><span class="eye__iris"></span>
  //                    <span class="eye__lid"></span><span class="eye__mark"></span>`;
  //   const lines = el('div', 'eye-lines');
  //   CONTENT.firstLook.forEach((t, i) => {
  //     lines.appendChild(el('p', 'line' + (i === 2 ? ' line--accent' : (i === 3 ? ' line--small' : '')), t));
  //   });
  //   const heart = el('div', 'big-heart', '❤️');
  //   scene.append(eye, lines, heart);
  //   w.appendChild(scene);
  //   root.appendChild(w);

  //   (async () => {
  //     await wait(600); eye.classList.add('is-shown');
  //     const ls = $$('.line', lines);
  //     await wait(1400); ls[0].classList.add('is-shown');
  //     await wait(2600); ls[1].classList.add('is-shown');
  //     await wait(2800); ls[2].classList.add('is-shown'); $('.eye__mark', eye).classList.add('is-shown');
  //     await wait(3000); ls[3].classList.add('is-shown');
  //     await wait(2200); heart.classList.add('is-shown');
  //   })();
  // },

  look(root) {
    const w = el("div", "wrap");

    const scene = el("div", "first-look-scene");

    const photo = el("div", "first-look-photo");
    photo.innerHTML = `
    <img
      src="assets/images/first-look/first-look-placeholder-eye.jpeg"
      alt="A close-up placeholder for her eye"
    >
    <span class="first-look-photo__glow"></span>
  `;

    const lines = el("div", "first-look-lines");

    CONTENT.firstLook.forEach((t, i) => {
      let cls = "first-look-line";

      if (i === 2) cls += " first-look-line--accent";
      if (i === 3) cls += " first-look-line--heartbeat";
      if (i === 4) cls += " first-look-line--small";

      lines.appendChild(el("p", cls, t));
    });

    const beat = el(
      "div",
      "heartbeat",
      "<span>╱╲╱╲</span><b>♡</b><span>╱╲╱╲</span>",
    );

    const heart = el("div", "big-heart", "❤️");

    scene.append(photo, lines, beat, heart);
    w.appendChild(scene);
    root.appendChild(w);

    (async () => {
      await wait(500);
      photo.classList.add("is-shown");

      const ls = $$(".first-look-line", lines);

      await wait(1000);
      ls[0].classList.add("is-shown");

      await wait(1800);
      ls[1].classList.add("is-shown");

      await wait(2200);
      ls[2].classList.add("is-shown");

      await wait(1800);
      ls[3].classList.add("is-shown");
      beat.classList.add("is-shown");

      await wait(2400);
      ls[4].classList.add("is-shown");

      await wait(1800);
      heart.classList.add("is-shown");
    })();
  },

  /* ---------- 🍦 TWO LITTLE MEMORIES ---------- */
  memories(root) {
    const M = CONTENT.memories;
    const w = el("div", "wrap");
    w.appendChild(el("p", "intro-note reveal is-in", M.title));

    const row = el("div", "polaroids");
    const detail = el(
      "article",
      "memory-detail reveal is-in",
      `<h3>Tap a photo</h3><p>A little moment worth remembering.</p>`,
    );

    M.cards.forEach((m, i) => {
      const b = el("button", "polaroid");
      b.type = "button";
      b.style.setProperty("--rot", (i % 2 ? 2.4 : -2.4) + "deg");
      /* === REPLACE the placeholder div with: <img src="assets/images/memories/memory-0X.jpg" alt=""> === */
      // b.innerHTML = `<span class="polaroid__img">${m.photo}</span>
      //                <span class="polaroid__cap">${m.cap}</span>`;
      b.innerHTML = `<span class="polaroid__img">
                 <img src="${m.photo}" alt="${m.cap}">
               </span>
               <span class="polaroid__cap">${m.cap}</span>`;
      b.addEventListener("click", () => {
        detail.innerHTML = `<h3>${m.heading}</h3><p>${m.text}</p>
          <ul class="chain">${m.chain.map((c) => `<li>${c}</li>`).join("")}</ul>`;
        detail.animate?.([{ opacity: 0 }, { opacity: 1 }], { duration: 500 });
      });
      row.appendChild(b);
    });

    w.append(row, detail);
    M.outro.forEach((t) => {
      const p = el("p", "line reveal", t);
      p.classList.add("is-shown");
      w.appendChild(p);
    });
    w.appendChild(el("p", "whisper reveal", M.whisper));
    root.appendChild(w);
  },

  /* ---------- ❤️ THINGS I LOVE ---------- */
  love(root) {
    const w = el("div", "wrap");
    const list = el("div", "love-list");
    CONTENT.thingsILove.forEach((t) =>
      list.appendChild(el("p", "love-card reveal", t)),
    );
    const fin = el("div", "finale-love");
    const a = el("p", "line", "And honestly…");
    const b = el("p", "line line--accent", "I love you so much. ❤️");
    fin.append(a, b);
    w.append(list, fin);
    root.appendChild(w);

    /* the last two lines wait until the cards have been read */
    const last = list.lastElementChild;
    const io = new IntersectionObserver(
      async (es) => {
        if (!es[0].isIntersecting) return;
        io.disconnect();
        await wait(1200);
        a.classList.add("is-shown");
        await wait(2200);
        b.classList.add("is-shown");
      },
      { root: Panel.body, threshold: 0.6 },
    );
    io.observe(last);
  },

  /* ---------- 🌍 PLACES WE'LL GO ---------- */
  places(root) {
    const w = el("div", "wrap");
    w.appendChild(el("p", "intro-note reveal is-in", CONTENT.placesIntro));

    const map = el("div", "map");
    const card = el(
      "article",
      "place-card reveal is-in",
      `<h3>Anywhere</h3><p>As long as we get to travel there together. ❤️</p>`,
    );

    CONTENT.places.forEach((p) => {
      const b = el("button", "pin" + (p.special ? " pin--special" : ""));
      b.type = "button";
      b.style.left = p.x + "%";
      b.style.top = p.y + "%";
      b.setAttribute("aria-label", p.name);
      b.innerHTML = `<i class="star">✦</i><span>${p.name}</span>`;
      b.addEventListener("click", async () => {
        $$(".pin", map).forEach((x) => x.classList.remove("is-active"));
        b.classList.add("is-active");
        card.innerHTML = `<h3>${p.name}</h3>`;
        for (const line of p.lines) {
          const n = el("p", "line line--small", line);
          card.appendChild(n);
          await wait(120);
          n.classList.add("is-shown");
          await wait(reduceMotion ? 200 : 1100);
        }
      });
      map.appendChild(b);
    });

    w.append(map, card);

    w.appendChild(
      el(
        "p",
        "tiny-note reveal places-closing",
        "You said you want to see the world.<br><strong>I want to see it with you. ❤️</strong>",
      ),
    );

    root.appendChild(w);
  },

  /* ---------- 🎵 SRIJA FM ---------- */
  radio(root) {
    Radio.render(root);
  },

  /* ---------- 💌 FOR LATER ---------- */
  letters(root) {
    const L = CONTENT.letters;
    const w = el("div", "wrap");
    w.appendChild(
      el(
        "p",
        "intro-note reveal is-in",
        "Some things are better saved for the right moment.",
      ),
    );

    const card = el(
      "article",
      "letter-card reveal is-in",
      `<h3>Choose one</h3><p>They'll still be here tomorrow.</p>`,
    );

    const grid = el("div", "envelopes");
    L.open.forEach((l) => {
      const b = el("button", "env");
      b.type = "button";
      b.innerHTML = `<em aria-hidden="true">${l.icon}</em><span>${l.label}</span>`;
      b.addEventListener("click", () => {
        card.innerHTML =
          `<h3>${l.label}</h3>` + l.body.map((p) => `<p>${p}</p>`).join("");
        card.animate?.(
          [
            { opacity: 0, transform: "translateY(10px)" },
            { opacity: 1, transform: "none" },
          ],
          { duration: 620, easing: "cubic-bezier(.22,.61,.36,1)" },
        );
      });
      grid.appendChild(b);
    });
    L.locked.forEach((l) => {
      const b = el("button", "env env--locked");
      b.type = "button";
      b.innerHTML = `<em aria-hidden="true">${l.icon}</em><span>${l.label}</span>`;
      b.addEventListener("click", () => {
        card.innerHTML = `<h3>${l.label}</h3><p>${L.lockedMsg}</p>`;
      });
      grid.appendChild(b);
    });

    w.append(grid, card);
    root.appendChild(w);
  },

  /* ---------- ⭐ Wishes For You ---------- */
  wishes(root) {
    const W = CONTENT.wishes;
    const w = el("div", "wrap");
    w.appendChild(
      el(
        "p",
        "intro-note wish-intro reveal is-in",
        "Eighteen stars. Eighteen wishes. <br>One for each year.",
      ),
    );

    const sky = el("div", "wish-sky");
    const card = el(
      "article",
      "wish-card reveal is-in",
      `<span class="num">00</span><p>Every star is a wish. The last one is mine.</p>`,
    );
    const done = new Set();

    /* numbered sequence: 01 → 17 around the circle, 18 in the center */
    const wishPositions = [
      [50, 8], // 01
      [65, 11], // 02
      [77, 19], // 03
      [86, 31], // 04
      [90, 46], // 05
      [87, 61], // 06
      [79, 74], // 07
      [67, 84], // 08
      [54, 91], // 09
      [39, 91], // 10
      [26, 84], // 11
      [16, 73], // 12
      [10, 59], // 13
      [9, 44], // 14
      [14, 30], // 15
      [25, 19], // 16
      [36, 11], // 17
      [50, 50], // 18
    ];

    W.forEach((text, i) => {
      const last = i === W.length - 1;
      const [x, y] = wishPositions[i];

      const b = el("button", "wstar" + (last ? " wstar--last" : ""));
      b.type = "button";

      b.style.left = x + "%";
      b.style.top = y + "%";

      b.setAttribute("aria-label", `Wish ${i + 1}`);

      b.innerHTML = last
        ? "<i>🌻</i>"
        : `<i>✦</i><span>${String(i + 1).padStart(2, "0")}</span>`;

      b.addEventListener("click", () => {
        b.classList.add("is-done");
        done.add(i);

        card.classList.toggle("is-final", last);

        card.innerHTML =
          `<span class="num">${String(i + 1).padStart(2, "0")}</span>` +
          `<p>${text}</p>`;

        card.animate?.([{ opacity: 0 }, { opacity: 1 }], { duration: 520 });

        if (last) finale(b);
      });

      sky.appendChild(b);
    });

    const toCandles = el("button", "btn btn--glow", "Light the candles → 🕯️");
    toCandles.style.marginTop = "26px";
    toCandles.hidden = true;
    toCandles.addEventListener("click", async () => {
      await Panel.close();
      Candles.start();
    });

    async function finale(star) {
      sparkle(star);
      toCandles.hidden = false;
      $$(".wstar", sky).forEach((s) => s.classList.add("is-done"));
    }

    w.append(sky, card, toCandles);
    root.appendChild(w);
  },

  /* ---------- 🔮 THE UNWRITTEN PAGES ---------- */
  unwritten(root) {
    const U = CONTENT.unwritten;
    const w = el("div", "wrap");
    const wrap = el("div", "chapters");
    U.chapters.forEach((c) => {
      wrap.appendChild(
        el(
          "article",
          "blank-page reveal",
          `<h3>${c}</h3><hr><p>To be written... ✨</p>`,
        ),
      );
    });
    w.appendChild(wrap);
    U.lines.forEach((t, i) => {
      const p = el("p", "line reveal" + (i === 2 ? " line--accent" : ""), t);
      p.classList.add("is-shown");
      w.appendChild(p);
    });
    const ul = el("ul", "maybe-list");
    U.maybes.forEach((m) => ul.appendChild(el("li", "reveal", m)));
    w.append(ul, el("p", "tiny-note reveal", U.disclaimer));
    root.appendChild(w);
  },

  /* ---------- 🎁 SECRET ---------- */
  secret(root) {
    const S = CONTENT.secret;
    const w = el("div", "wrap secret-box");
    const line = el("p", "line line--accent", S.reveal);
    line.style.marginInline = "auto";
    /* === REPLACE with <img> or <video> from assets/images/srija/ === */
    const media = el(
  "div",
  "secret-media",
  `<img src="${S.media}" alt="A little secret" />`
);
    const card = el(
      "article",
      "letter-card",
      S.body.map((p) => `<p>${p}</p>`).join(""),
    );
    w.append(line, media, card);
    root.appendChild(w);
    setTimeout(() => line.classList.add("is-shown"), 400);
  },
};

/* small spark burst, used by the 18th star and the candles */
function sparkle(fromEl) {
  if (reduceMotion) return;
  const r = fromEl.getBoundingClientRect();
  const box = el("div", "burst");
  document.body.appendChild(box);
  for (let i = 0; i < 46; i++) {
    const s = el("i", "spark");
    const a = Math.random() * 6.283,
      d = 60 + Math.random() * 230;
    s.style.left = r.left + r.width / 2 + "px";
    s.style.top = r.top + r.height / 2 + "px";
    s.style.setProperty("--sx", Math.cos(a) * d + "px");
    s.style.setProperty("--sy", Math.sin(a) * d + "px");
    s.style.background = i % 4 === 0 ? "var(--rose)" : "var(--sun)";
    s.style.animationDelay = Math.random() * 0.25 + "s";
    box.appendChild(s);
  }
  setTimeout(() => box.remove(), 2200);
}

/* =========================================================
   9. FINALE — candles, letter, closing
   ========================================================= */
const Candles = (() => {
  const TOTAL = 18;
  const cake = $("#cake"),
    counter = $("#candle-count"),
    cta = $("#candles-cta"),
    glow = $("#afterglow");
  let lit = 0,
    started = false;

  async function start() {
    await Scenes.go("#scene-candles");
    if (started) return;
    started = true;
    cake.innerHTML = "";
    lit = 0;
    for (let i = 0; i < TOTAL; i++) {
      const c = el("button", "candle is-new");
      c.type = "button";
      c.setAttribute("aria-label", `Candle ${i + 1}, tap to blow out`);
      c.innerHTML = '<span class="flame"></span>';
      c.addEventListener("click", () => out(c));
      cake.appendChild(c);
      lit++;
      counter.textContent = lit + (lit === 1 ? " candle" : " candles");
      await wait(reduceMotion ? 20 : i < 3 ? 900 : 260);
    }
    await wait(700);
    cta.classList.add("is-shown");
  }

  async function out(c) {
    if (c.classList.contains("is-out")) return;
    c.classList.add("is-out");
    lit--;
    counter.textContent =
      lit > 0
        ? lit + (lit === 1 ? " candle left" : " candles left")
        : "all out ✨";
    if (lit === 0) await finish();
  }

  async function finish() {
    cta.textContent = "…";
    await wait(900);
    sparkle(cake);
    cake.style.transition = "opacity 1.4s ease";
    cake.style.opacity = ".12";
    cta.classList.remove("is-shown");
    await wait(1200);
    glow.hidden = false;
    requestAnimationFrame(() => glow.classList.add("is-shown"));
  }

  /* a gentle way in, even if she never taps the 18th star */
  return { start };
})();

$("#to-letter").addEventListener("click", () => Scenes.go("#scene-letter"));
$("#to-closing").addEventListener("click", () => Scenes.go("#scene-closing"));
$("#restart").addEventListener("click", () => location.reload());

/* render the final letter from CONTENT */
(function buildLetter() {
  const L = CONTENT.finalLetter;
  $("#final-letter").innerHTML =
    `<h2>${L.greeting}</h2>` +
    L.paras
      .map((p) => {
        const ph = /^\[.*\]$/.test(p.trim());
        return `<p${ph ? ' class="ph"' : ""}>${p}</p>`;
      })
      .join("") +
    `<p class="sign">${L.signOff.join("<br>")}</p>`;
})();

/* closing scene: play the lines, then the book shuts */
document.addEventListener("scene:enter", (e) => {
  if (e.detail === "#scene-closing")
    playLines($$("#scene-closing .line"), 2300, 1600);
});
