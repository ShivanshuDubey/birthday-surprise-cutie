/* =========================================================
   BIRTHDAY SURPRISE — CONFIGURATION
   Change everything in this section to personalize the site.
   Nothing below "END CONFIGURATION" needs to be touched to
   personalize the site — it just reads from this object.
   ========================================================= */
const birthdayConfig = {
  herName: "HER NAME",
  myName: "MY NAME",
  birthday: "DATE",              // e.g. "September 20"
  relationshipStart: "DATE",     // e.g. "March 2021"

  // The surprise stays locked behind a "not yet" screen until this
  // exact moment. Use the format "YYYY-MM-DDTHH:MM:SS" (24-hour time,
  // in whatever timezone she'll be opening the link from).
  unlockDateTime: "2026-09-19T23:45:00",

  // Shown one by one, in order (cycling back to the start if she taps
  // more times than there are entries) if she tries to open the
  // surprise before the unlock moment above. Each entry can have
  // "text", "gif", or both — text (if given) shows on top, gif (if
  // given) shows below it. Leave either one as "" to skip it.
  // Put your gif files in images/gifs/ using these exact names, or
  // change the "gif" path to whatever you use.
  lockedMessages: [
    { text: "Nice try. The surprise is still wrapping itself up. 🎁", gif: "images/gifs/locked-1.gif" },
    { text: "Patience, birthday girl. It's not time yet. 😏", gif: "images/gifs/locked-2.gif" },
    { text: "I can feel you tapping. It still won't open early. 💕", gif: "images/gifs/locked-3.gif" },
    { text: "Soon. Not yet. But soon. ⏳", gif: "images/gifs/locked-4.gif" },
    { text: "The surprise says: 'not ready, come back later.' 🙈", gif: "images/gifs/locked-5.gif" },
    { text: "Okay but no. Try again closer to midnight. 😌", gif: "images/gifs/locked-6.gif" },
    { text: "You really thought that would work, huh? 😂", gif: "images/gifs/locked-7.gif" },
    { text: "It's locked tighter than my last text before this website. 🔒", gif: "images/gifs/locked-8.gif" },
    { text: "Still wrapping. Still not you. Still worth the wait. 🎀", gif: "images/gifs/locked-9.gif" },
    { text: "Cute attempt. The countdown didn't even flinch. ⏰", gif: "images/gifs/locked-10.gif" },
    { text: "I promise it's worth the wait. Just... not yet. 🙃", gif: "images/gifs/locked-11.gif" },
    { text: "Okay, I see you. The surprise sees you too. And says no. 😌💕", gif: "images/gifs/locked-12.gif" }
  ],

  // How many taps it takes to pop the balloon on screen 2.
  balloonPopClicks: 10,

  // Gif shown hanging at the bottom of the balloon->teddy stack
  // after the gift is unwrapped.
  revealGif: "images/gifs/reveal.gif",

  // Screen 3: the big question, and her two buttons.
  proposalQuestion: "Are You Excited To Marry Me?",

  // Shown one by one, in order, every time she taps "No" while it
  // still counts (cycles back to the start if she taps more times
  // than there are entries). Same text/gif rule as lockedMessages above.
  noMessages: [
    { text: "Oh? Buying yourself some time, huh? 😏", gif: "images/gifs/no-1.gif" },
    { text: "Wait, no?? Okay, let's talk about this over cake. 🎂", gif: "images/gifs/no-2.gif" },
    { text: "Bold choice. My heart just skipped a beat anyway. 😅", gif: "images/gifs/no-3.gif" },
    { text: "Interesting. Playing hard to get on your own birthday? 😂", gif: "images/gifs/no-4.gif" },
    { text: "Noted. I'll just keep asking, then. 💍", gif: "images/gifs/no-5.gif" },
    { text: "Okay, tough crowd. I still think you mean yes. 😌", gif: "images/gifs/no-6.gif" },
    { text: "Hmm, six times now. I admire the commitment. 😂", gif: "images/gifs/no-7.gif" },
    { text: "Last chance to change your mind... or not. I'll wait. 🥹", gif: "images/gifs/no-8.gif" }
  ],

  // Shown one by one, in order, under the "She said YES!" message
  // (cycles back to the start on replay).
  proposalSuccessGifs: [
    "images/gifs/yes-1.gif",
    "images/gifs/yes-2.gif",
    "images/gifs/yes-3.gif",
    "images/gifs/yes-4.gif",
    "images/gifs/yes-5.gif"
  ],

  // Photos for the memory gallery (polaroid stack).
  photos: [
    { src: "images/photo1.jpg", caption: "The day everything started..." },
    { src: "images/photo2.jpg", caption: "One of my favorite smiles ❤️" },
    { src: "images/photo3.jpg", caption: "Us being completely ridiculous 😂" },
    { src: "images/photo4.jpg", caption: "A moment I wish I could relive." }
  ],

  // Her photo for the final letter screen.
  herPhoto: "images/her-photo.jpg",

  // Number of candles to blow out on the cake screen.
  candleCount: 3,

  // The final letter. Each array item becomes its own paragraph.
  // Replace freely with your own words, inside jokes, and memories.
  letter: [
    "Happy Birthday to the girl who somehow makes even my most ordinary days feel a little more special. ❤️",
    "Honestly, I still don't know how I got so lucky to have you in my life, but I'm really grateful that I did. And I never want to take that for granted.",
    "Your smile, your little habits, the way you laugh, our random conversations, the stupid things we laugh about, and even those moments when you annoy me a little 😂 — somehow, all of it has become such an important part of my life.",
    "I hope this year brings you everything you've been wishing for, even the things you don't always say out loud. I hope you laugh a lot, chase your dreams, travel to all the places you want to see, and always remember how special and loved you are.",
    "Happy Birthday, my love. ❤️",
    "Here's to you, here's to us, and to all the crazy, beautiful memories we still have left to make together. ♾️❤️"
  ],
  psLine: "I love you more than this website can possibly explain. ❤️",

  // Shown at the very end, under the final letter.
  // REPLACE: images/gifs/final.gif with your own closing gif.
  finalGif: "images/gifs/final.gif",

  music: "audio/our-song.mp3"
};
/* ======================= END CONFIGURATION ======================= */


(function () {
  "use strict";

  const $ = (sel, ctx) => (ctx || document).querySelector(sel);
  const $$ = (sel, ctx) => Array.from((ctx || document).querySelectorAll(sel));
  const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];

  function shuffle(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  /* ---------------------------------------------------------------
     Personalize static text from config
  --------------------------------------------------------------- */
  function applyConfigText() {
    const heroName = $("#hero-name");
    if (birthdayConfig.herName && birthdayConfig.herName !== "HER NAME") {
      heroName.textContent = `Hey, ${birthdayConfig.herName}! 💕`;
    }
    const letterName = $("#letter-name");
    if (letterName) {
      letterName.textContent = (birthdayConfig.herName && birthdayConfig.herName !== "HER NAME")
        ? birthdayConfig.herName
        : "Love";
    }
    const heroPhoto = $("#her-photo");
    if (heroPhoto) heroPhoto.src = birthdayConfig.herPhoto;
    const propQ = $("#proposal-question");
    if (propQ && birthdayConfig.proposalQuestion) propQ.textContent = birthdayConfig.proposalQuestion;
    const revealGif = $("#reveal-gif");
    if (revealGif && birthdayConfig.revealGif) revealGif.src = birthdayConfig.revealGif;
  }

  /* ---------------------------------------------------------------
     Helper: fill a {text, gif} entry into a text element + img element,
     hiding whichever half is missing, showing both if both are given.
  --------------------------------------------------------------- */
  function renderTextGif(entry, textEl, imgEl, wrapperEl) {
    const text = (entry && entry.text) ? entry.text.trim() : "";
    const gif = (entry && entry.gif) ? entry.gif.trim() : "";

    if (text) {
      textEl.textContent = text;
      textEl.classList.remove("hidden");
    } else {
      textEl.textContent = "";
      textEl.classList.add("hidden");
    }

    if (gif) {
      imgEl.src = gif;
      imgEl.classList.remove("hidden");
    } else {
      imgEl.removeAttribute("src");
      imgEl.classList.add("hidden");
    }

    if (wrapperEl) {
      if (text || gif) wrapperEl.classList.remove("hidden");
      else wrapperEl.classList.add("hidden");
    }
  }

  /* ---------------------------------------------------------------
     Ambient hearts + sparkles (subtle, continuous, low density)
  --------------------------------------------------------------- */
  const ambientLayer = $("#ambient-layer");
  const HEART_CHARS = ["💗", "💕", "💖", "💓"];
  const RIBBON_COLORS = ["#dba646", "#c9628a", "#b79ce0", "#e9a9c0", "#fff6ef"];

  function spawnFloaty() {
    const el = document.createElement("div");
    el.className = "floaty";
    el.textContent = pick(HEART_CHARS);
    const size = 14 + Math.random() * 18;
    el.style.left = Math.random() * 100 + "vw";
    el.style.fontSize = size + "px";
    el.style.setProperty("--drift", (Math.random() * 60 - 30) + "px");
    el.style.animationDuration = (7 + Math.random() * 6) + "s";
    ambientLayer.appendChild(el);
    setTimeout(() => el.remove(), 14000);
  }

  function spawnSparkleBurst(x, y, count) {
    for (let i = 0; i < (count || 8); i++) {
      const s = document.createElement("div");
      s.className = "sparkle-pop";
      s.textContent = "✨";
      const angle = Math.random() * Math.PI * 2;
      const dist = 30 + Math.random() * 70;
      s.style.left = x + Math.cos(angle) * dist + "px";
      s.style.top = y + Math.sin(angle) * dist + "px";
      s.style.fontSize = (10 + Math.random() * 14) + "px";
      ambientLayer.appendChild(s);
      setTimeout(() => s.remove(), 950);
    }
  }

  setInterval(spawnFloaty, 2200);
  for (let i = 0; i < 3; i++) setTimeout(spawnFloaty, i * 700);

  if (window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
    document.body.classList.add("heart-cursor");
  }

  const confettiRoot = $("#confetti-root");

  // Keep the confetti/ribbon layer's height matched to the *actual*
  // visible viewport (not the CSS vh unit, which some mobile browsers
  // size to the largest possible viewport even while the address bar
  // is showing and shrinking what's really on screen). This is what
  // makes ribbons/confetti reliably disappear right at the edge of
  // the visible screen instead of lingering past it while scrolling.
  function syncConfettiRootHeight() {
    const vh = window.visualViewport ? window.visualViewport.height : window.innerHeight;
    confettiRoot.style.height = vh + "px";
  }
  syncConfettiRootHeight();
  window.addEventListener("resize", syncConfettiRootHeight);
  if (window.visualViewport) window.visualViewport.addEventListener("resize", syncConfettiRootHeight);

  function launchConfetti(count) {
    const root = confettiRoot;
    const colors = ["#dba646", "#c9628a", "#ddc9ef", "#f6d3de", "#fff6ef"];
    const total = count || 60;
    for (let i = 0; i < total; i++) {
      setTimeout(() => {
        const piece = document.createElement("div");
        piece.className = "confetti-piece";
        piece.style.left = Math.random() * 100 + "vw";
        piece.style.background = pick(colors);
        piece.style.animationDuration = (2.4 + Math.random() * 1.6) + "s";
        piece.style.opacity = String(0.7 + Math.random() * 0.3);
        piece.style.transform = `rotate(${Math.random() * 360}deg)`;
        root.appendChild(piece);
        setTimeout(() => piece.remove(), 4200);
      }, i * 30);
    }
  }

  // Ribbon streamers dropping top to bottom — used alongside confetti
  // at the biggest celebration moments.
  function launchRibbons(count) {
    const root = confettiRoot;
    const total = count || 26;
    for (let i = 0; i < total; i++) {
      setTimeout(() => {
        const ribbon = document.createElement("div");
        ribbon.className = "ribbon-piece";
        ribbon.style.left = Math.random() * 100 + "vw";
        ribbon.style.top = "-60px";
        ribbon.style.background = pick(RIBBON_COLORS);
        const fallDuration = 2.6 + Math.random() * 1.8;
        ribbon.style.animationDuration = fallDuration + "s";
        ribbon.style.setProperty("--ribbon-spin", (300 + Math.random() * 300) + "deg");
        // Use a fixed pixel fall distance (based on the actual visible
        // viewport right now) instead of vh units, so the ribbon always
        // fully floats past the bottom edge of the screen even if the
        // browser chrome/address bar resizes the viewport mid-fall.
        const vh = window.visualViewport ? window.visualViewport.height : window.innerHeight;
        ribbon.style.setProperty("--ribbon-drop", (vh + 200) + "px");
        root.appendChild(ribbon);
        // Remove it the moment it finishes falling off screen, with a
        // timeout as a safety net in case the animationend event
        // doesn't fire for any reason.
        ribbon.addEventListener("animationend", () => ribbon.remove());
        setTimeout(() => ribbon.remove(), fallDuration * 1000 + 400);
      }, i * 45);
    }
  }

  /* ---------------------------------------------------------------
     Screen navigation
  --------------------------------------------------------------- */
  const progressIndicator = $("#progress-indicator");
  const progressCurrent = $("#progress-current");
  const musicToggle = $("#music-toggle");

  function goToScreen(n) {
    const current = $(`.screen.active`);
    const next = $(`#screen-${n}`);
    if (!next || next === current) return;

    if (current) {
      current.classList.add("leaving");
      setTimeout(() => current.classList.remove("active", "leaving"), 380);
    }

    setTimeout(() => {
      next.classList.add("active");
      progressCurrent.textContent = n;
      progressIndicator.classList.remove("hidden");
      musicToggle.classList.remove("hidden");
      window.scrollTo(0, 0);

      if (n === 3) initProposal();
      if (n === 5) initGallery();
      if (n === 6) initCake();
    }, current ? 200 : 0);
  }

  /* ---------------------------------------------------------------
     SCREEN 1 — The Surprise Door (time-locked)
  --------------------------------------------------------------- */
  const openBtn = $("#open-surprise-btn");
  const lockBox = $("#lock-box");
  const lockMessage = $("#lock-message");
  const lockGif = $("#lock-gif");
  const countdownLine = $("#countdown-line");
  let countdownTimer = null;

  function getUnlockTime() {
    const t = new Date(birthdayConfig.unlockDateTime).getTime();
    return isNaN(t) ? 0 : t; // if misconfigured, treat as already unlocked
  }
  function isUnlocked() {
    // return true;
    return Date.now() >= getUnlockTime(); 
  }

  function formatCountdown(ms) {
    if (ms <= 0) return "";
    const totalSeconds = Math.floor(ms / 1000);
    const days = Math.floor(totalSeconds / 86400);
    const hours = Math.floor((totalSeconds % 86400) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
    if (days > 0) return `Unlocks in ${days}d ${hours}h ${minutes}m`;
    if (hours > 0) return `Unlocks in ${hours}h ${minutes}m ${seconds}s`;
    return `Unlocks in ${minutes}m ${seconds}s`;
  }

  function tickCountdown() {
    const remaining = getUnlockTime() - Date.now();
    if (remaining <= 0) {
      countdownLine.classList.add("hidden");
      clearInterval(countdownTimer);
      return;
    }
    // countdownLine.textContent = formatCountdown(remaining);
    countdownLine.classList.remove("hidden");
  }

  if (!isUnlocked()) {
    tickCountdown();
    countdownTimer = setInterval(tickCountdown, 1000);
  }

  let lockMessageIndex = 0;

  openBtn.addEventListener("click", (e) => {
    if (!isUnlocked()) {
      const list = birthdayConfig.lockedMessages;
      const entry = list[lockMessageIndex % list.length];
      lockMessageIndex++;
      renderTextGif(entry, lockMessage, lockGif, lockBox);
      // restart the little shake-in animation on every tap
      lockBox.style.animation = "none";
      void lockBox.offsetWidth;
      lockBox.style.animation = "";
      return;
    }
    spawnSparkleBurst(e.clientX, e.clientY, 14);
    for (let i = 0; i < 6; i++) setTimeout(spawnFloaty, i * 90);
    setTimeout(() => goToScreen(2), 350);
  });

  /* ---------------------------------------------------------------
     SCREEN 2 — Blow up the balloon, then meet the teddy
  --------------------------------------------------------------- */
  const balloon = $("#balloon");
  const balloonScene = $("#balloon-scene");
  const balloonTitle = $("#balloon-title");
  const balloonHint = $("#balloon-hint");
  const balloonBurstMessage = $("#balloon-burst-message");
  const giftRevealScene = $("#gift-reveal-scene");
  const revealStack = $("#reveal-stack");

  let balloonClicks = 0;
  let balloonPopped = false;

  function growBalloon() {
    balloonClicks++;
    const progress = Math.min(balloonClicks / birthdayConfig.balloonPopClicks, 1);
    const scale = 1 + progress * 1.6;
    balloon.style.transform = `scale(${scale})`;
    spawnSparkleBurst(
      balloon.getBoundingClientRect().left + balloon.clientWidth / 2,
      balloon.getBoundingClientRect().top + balloon.clientHeight / 2,
      3
    );
    if (balloonClicks >= birthdayConfig.balloonPopClicks) popBalloon(scale);
  }

  function popBalloon(finalScale) {
    balloonPopped = true;
    balloon.style.setProperty("--pop-scale", finalScale);
    balloon.classList.add("popped");
    const rect = balloon.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    spawnSparkleBurst(cx, cy, 26);
    launchConfetti(70);
    launchRibbons(24);

    setTimeout(() => {
      balloonScene.classList.add("hidden");
      balloonTitle.classList.add("hidden");
      balloonHint.classList.add("hidden");
      balloonBurstMessage.classList.remove("hidden");

      // A little fireworks flourish across the screen for extra excitement
      const w = window.innerWidth, h = window.innerHeight;
      for (let i = 0; i < 5; i++) {
        setTimeout(() => {
          spawnSparkleBurst(Math.random() * w, Math.random() * h * 0.6, 18);
          launchConfetti(20);
        }, i * 350);
      }
    }, 280);

    setTimeout(() => {
      balloonBurstMessage.classList.add("hidden");
      giftRevealScene.classList.remove("hidden");
      spawnSparkleBurst(window.innerWidth / 2, window.innerHeight * 0.35, 26);
      setTimeout(() => spawnSparkleBurst(window.innerWidth / 2, window.innerHeight * 0.5, 16), 300);
    }, 2600);
  }

  balloon.addEventListener("click", () => { if (!balloonPopped) growBalloon(); });

  $("#to-screen-3-btn").addEventListener("click", (e) => {
    // The balloon lifts the whole teddy stack up and away
    const btn = e.currentTarget;
    btn.disabled = true;
    revealStack.classList.add("rising");
    const rect = revealStack.getBoundingClientRect();
    spawnSparkleBurst(rect.left + rect.width / 2, rect.top, 20);
    setTimeout(() => goToScreen(3), 950);
  });

  /* ---------------------------------------------------------------
     SCREEN 3 — The Question (Yes dodges first, then No dodges)
  --------------------------------------------------------------- */
  const proposalStage = $("#proposal-stage");
  const yesBtn = $("#prop-yes");
  const noBtn = $("#prop-no");
  const proposalFeedbackBox = $("#proposal-feedback-box");
  const proposalFeedback = $("#proposal-feedback");
  const proposalFeedbackGif = $("#proposal-feedback-gif");
  const proposalQuestionView = $("#proposal-question-view");
  const proposalSuccess = $("#proposal-success");
  const proposalSuccessGif = $("#proposal-success-gif");

  const NO_CLICKS_NEEDED = 6;
  const DODGE_RADIUS = 90;
  const MIN_BUTTON_GAP = 110;
  let noClickCount = 0;
  let proposalResolved = false;

  let proposalSuccessGifIndex = 0;

  function initProposal() {
    noClickCount = 0;
    proposalResolved = false;
    proposalQuestionView.classList.remove("hidden");
    proposalSuccess.classList.add("hidden");
    proposalFeedbackBox.classList.add("hidden");
    proposalFeedback.textContent = "";
    proposalFeedbackGif.classList.add("hidden");
    yesBtn.style.left = "";
    yesBtn.style.top = "";
    yesBtn.style.transform = "";
    noBtn.style.left = "";
    noBtn.style.top = "";
    yesBtn.classList.add("dodging");
    noBtn.classList.remove("dodging");
  }

  function centerOf(btn) {
    const stageRect = proposalStage.getBoundingClientRect();
    const btnRect = btn.getBoundingClientRect();
    return {
      x: btnRect.left - stageRect.left + btnRect.width / 2,
      y: btnRect.top - stageRect.top + btnRect.height / 2
    };
  }

  function moveButtonAway(btn, otherBtn) {
    const stageRect = proposalStage.getBoundingClientRect();
    const btnW = btn.offsetWidth || 120;
    const btnH = btn.offsetHeight || 50;
    const maxLeft = Math.max(10, stageRect.width - btnW - 10);
    const maxTop = Math.max(10, stageRect.height - btnH - 10);

    let bestLeft = 10, bestTop = 10, bestDist = -1;
    for (let attempt = 0; attempt < 12; attempt++) {
      const newLeft = 10 + Math.random() * maxLeft;
      const newTop = 10 + Math.random() * maxTop;
      if (otherBtn) {
        const other = centerOf(otherBtn);
        const cx = newLeft + btnW / 2;
        const cy = newTop + btnH / 2;
        const dist = Math.hypot(cx - other.x, cy - other.y);
        if (dist > bestDist) { bestDist = dist; bestLeft = newLeft; bestTop = newTop; }
        if (dist >= MIN_BUTTON_GAP) break;
      } else {
        bestLeft = newLeft; bestTop = newTop; break;
      }
    }
    btn.style.transform = "";
    btn.style.left = bestLeft + "px";
    btn.style.top = bestTop + "px";
  }

  function pointerNearButton(px, py, btn) {
    const stageRect = proposalStage.getBoundingClientRect();
    const btnRect = btn.getBoundingClientRect();
    const bx = btnRect.left - stageRect.left + btnRect.width / 2;
    const by = btnRect.top - stageRect.top + btnRect.height / 2;
    const dist = Math.hypot(px - bx, py - by);
    return dist < DODGE_RADIUS;
  }

  function handleStagePointer(clientX, clientY) {
    if (proposalResolved) return;
    const stageRect = proposalStage.getBoundingClientRect();
    const px = clientX - stageRect.left;
    const py = clientY - stageRect.top;
    [yesBtn, noBtn].forEach((btn) => {
      const other = btn === yesBtn ? noBtn : yesBtn;
      if (btn.classList.contains("dodging") && pointerNearButton(px, py, btn)) {
        moveButtonAway(btn, other);
      }
    });
  }

  proposalStage.addEventListener("mousemove", (e) => handleStagePointer(e.clientX, e.clientY));
  proposalStage.addEventListener("touchstart", (e) => {
    const t = e.touches[0];
    handleStagePointer(t.clientX, t.clientY);
  }, { passive: true });
  proposalStage.addEventListener("touchmove", (e) => {
    const t = e.touches[0];
    handleStagePointer(t.clientX, t.clientY);
  }, { passive: true });

  function switchToNoDodges() {
    yesBtn.classList.remove("dodging");
    noBtn.classList.add("dodging");
    // give Yes a clear, inviting spot, safely away from No
    yesBtn.style.left = "50%";
    yesBtn.style.top = "35%";
    yesBtn.style.transform = "translate(-50%, -50%)";
    moveButtonAway(noBtn, yesBtn);
  }

  yesBtn.addEventListener("click", () => {
    if (proposalResolved) return;
    if (yesBtn.classList.contains("dodging")) {
      moveButtonAway(yesBtn, noBtn);
      return;
    }
    proposalResolved = true;
    const rect = yesBtn.getBoundingClientRect();
    spawnSparkleBurst(rect.left + rect.width / 2, rect.top + rect.height / 2, 30);
    launchConfetti(90);
    launchRibbons(30);
    proposalQuestionView.classList.add("hidden");
    proposalSuccess.classList.remove("hidden");

    const gifs = birthdayConfig.proposalSuccessGifs || [];
    if (gifs.length) {
      proposalSuccessGif.src = gifs[proposalSuccessGifIndex % gifs.length];
      proposalSuccessGifIndex++;
      proposalSuccessGif.classList.remove("hidden");
    } else {
      proposalSuccessGif.classList.add("hidden");
    }
  });

  noBtn.addEventListener("click", () => {
    if (proposalResolved) return;
    if (noBtn.classList.contains("dodging")) {
      moveButtonAway(noBtn, yesBtn);
      return;
    }
    const list = birthdayConfig.noMessages;
    const entry = list[noClickCount % list.length];
    noClickCount++;
    renderTextGif(entry, proposalFeedback, proposalFeedbackGif, proposalFeedbackBox);
    if (noClickCount >= NO_CLICKS_NEEDED) {
      switchToNoDodges();
    }
  });

  $("#to-screen-4-btn").addEventListener("click", () => goToScreen(4));

  /* ---------------------------------------------------------------
     SCREEN 4 — Catch the Hearts mini game
  --------------------------------------------------------------- */
  let gameActive = false;
  let gameScore = 0;
  let gameTimeLeft = 20;
  let gameTimerId = null;
  let gameSpawnId = null;

  function attachStartGameListener() {
    const btn = $("#start-game-btn");
    if (btn) btn.addEventListener("click", startGame);
  }
  attachStartGameListener();

  function startGame() {
    gameActive = true;
    gameScore = 0;
    gameTimeLeft = 20;
    $("#game-score").textContent = "0";
    $("#game-timer").textContent = "20";
    $("#game-result").classList.add("hidden");

    const field = $("#game-field");
    field.innerHTML = "";

    gameTimerId = setInterval(() => {
      gameTimeLeft--;
      $("#game-timer").textContent = gameTimeLeft;
      if (gameTimeLeft <= 0) endGame();
    }, 1000);

    let spawnDelay = 850;
    function scheduleSpawn() {
      gameSpawnId = setTimeout(() => {
        if (!gameActive) return;
        spawnHeart();
        spawnDelay = Math.max(320, spawnDelay - 18);
        scheduleSpawn();
      }, spawnDelay);
    }
    scheduleSpawn();
  }

  function spawnHeart() {
    const field = $("#game-field");
    const fw = field.clientWidth;
    const fh = field.clientHeight;
    const heart = document.createElement("button");
    heart.className = "game-heart";
    heart.textContent = pick(HEART_CHARS);
    heart.style.left = Math.max(10, Math.random() * (fw - 40)) + "px";
    heart.style.top = "-40px";
    const duration = 2.6 + Math.random() * 1.2;
    heart.style.setProperty("--fh", fh + "px");
    heart.style.animationDuration = duration + "s";

    const pop = (e) => {
      if (heart.classList.contains("popped")) return;
      e && e.preventDefault();
      heart.classList.add("popped");
      gameScore++;
      $("#game-score").textContent = gameScore;
      const r = heart.getBoundingClientRect();
      spawnSparkleBurst(r.left + 15, r.top + 15, 6);
      setTimeout(() => heart.remove(), 260);
    };
    heart.addEventListener("click", pop);
    heart.addEventListener("touchstart", pop, { passive: false });
    heart.addEventListener("animationend", () => {
      if (!heart.classList.contains("popped")) heart.remove();
    });

    field.appendChild(heart);
  }

  function endGame() {
    gameActive = false;
    clearInterval(gameTimerId);
    clearTimeout(gameSpawnId);
    $$(".game-heart").forEach(h => h.remove());

    let msg;
    if (gameScore < 8) msg = "I think you were too busy being cute to concentrate. 😌❤️";
    else if (gameScore < 16) msg = "Not bad, birthday girl! 😏❤️";
    else msg = "Okay WOW. Apparently you're good at catching hearts... especially mine. ❤️";

    $("#game-result-text").textContent = msg;
    $("#game-result").classList.remove("hidden");
  }

  $("#to-screen-5-btn").addEventListener("click", () => goToScreen(5));

  $("#skip-game-btn").addEventListener("click", () => {
    gameActive = false;
    clearInterval(gameTimerId);
    clearTimeout(gameSpawnId);
    $$(".game-heart").forEach(h => h.remove());
    goToScreen(5);
  });

  $("#replay-game-btn").addEventListener("click", () => {
    startGame();
  });

  /* ---------------------------------------------------------------
     SCREEN 5 — Memory Lane: swipeable polaroid stack
  --------------------------------------------------------------- */
  let galleryInited = false;
  let cardOrder = [];
  const cardTilts = [];

  function initGallery() {
    if (galleryInited) return;
    galleryInited = true;
    cardOrder = birthdayConfig.photos.map((_, i) => i);
    birthdayConfig.photos.forEach(() => cardTilts.push((Math.random() * 10 - 5).toFixed(1)));
    renderDots();
    renderStack();
  }

  function renderDots() {
    const dotsWrap = $("#polaroid-dots");
    dotsWrap.innerHTML = "";
    birthdayConfig.photos.forEach(() => {
      const dot = document.createElement("span");
      dot.className = "polaroid-dot";
      dotsWrap.appendChild(dot);
    });
    updateDots();
  }

  function updateDots() {
    const dots = $$(".polaroid-dot");
    dots.forEach((d, i) => d.classList.toggle("active", i === cardOrder[0]));
  }

  function renderStack() {
    const stack = $("#polaroid-stack");
    stack.innerHTML = "";
    const visibleCount = Math.min(3, cardOrder.length);

    for (let depth = visibleCount - 1; depth >= 0; depth--) {
      const photoIndex = cardOrder[depth];
      const photo = birthdayConfig.photos[photoIndex];
      const card = document.createElement("div");
      card.className = "polaroid-card";
      card.style.zIndex = String(visibleCount - depth);

      const baseTilt = parseFloat(cardTilts[photoIndex]);
      const offsetX = depth * 6 * (photoIndex % 2 === 0 ? 1 : -1);
      const offsetY = depth * 12;
      const scale = 1 - depth * 0.05;
      const rotate = depth === 0 ? baseTilt : baseTilt + depth * 4;
      card.style.transform = `translate(${offsetX}px, ${offsetY}px) rotate(${rotate}deg) scale(${scale})`;
      card.style.opacity = depth === visibleCount - 1 && visibleCount > 2 ? "0.85" : "1";

      const photoWrap = document.createElement("div");
      photoWrap.className = "polaroid-photo-wrap";

      const img = document.createElement("img");
      img.className = "polaroid-photo";
      img.src = photo.src;
      img.alt = photo.caption || "";
      img.loading = "lazy";
      img.onerror = () => {
        img.removeAttribute("src");
        img.style.display = "flex";
        img.style.alignItems = "center";
        img.style.justifyContent = "center";
        img.style.fontSize = "2.6rem";
        img.alt = "💗";
      };
      photoWrap.appendChild(img);

      const caption = document.createElement("p");
      caption.className = "polaroid-caption";
      caption.textContent = photo.caption || "";

      card.appendChild(photoWrap);
      card.appendChild(caption);

      if (depth === 0) attachDragHandlers(card);

      stack.appendChild(card);
    }

    updateDots();
  }

  function advanceStack(direction) {
    const stack = $("#polaroid-stack");
    const front = stack.querySelector(".polaroid-card:last-child") || stack.lastElementChild;
    if (front) front.classList.add(direction === "left" ? "flying-left" : "flying-right");
    setTimeout(() => {
      cardOrder.push(cardOrder.shift());
      renderStack();
    }, 260);
  }

  function attachDragHandlers(card) {
    let startX = 0, startY = 0, dx = 0, dragging = false;

    const onDown = (clientX, clientY) => {
      dragging = true;
      startX = clientX;
      startY = clientY;
      card.style.transition = "none";
    };
    const onMove = (clientX, clientY) => {
      if (!dragging) return;
      dx = clientX - startX;
      const dy = (clientY - startY) * 0.2;
      card.style.transform = `translate(${dx}px, ${dy}px) rotate(${dx / 18}deg)`;
    };
    const onUp = () => {
      if (!dragging) return;
      dragging = false;
      card.style.transition = "";
      if (Math.abs(dx) > 70) {
        advanceStack(dx > 0 ? "right" : "left");
      } else if (Math.abs(dx) < 6) {
        advanceStack(Math.random() > 0.5 ? "left" : "right");
      } else {
        renderStack();
      }
      dx = 0;
    };

    card.addEventListener("mousedown", (e) => onDown(e.clientX, e.clientY));
    window.addEventListener("mousemove", (e) => onMove(e.clientX, e.clientY));
    window.addEventListener("mouseup", onUp);

    card.addEventListener("touchstart", (e) => { const t = e.touches[0]; onDown(t.clientX, t.clientY); }, { passive: true });
    card.addEventListener("touchmove", (e) => { const t = e.touches[0]; onMove(t.clientX, t.clientY); }, { passive: true });
    card.addEventListener("touchend", onUp);
  }

  $("#to-screen-6-btn").addEventListener("click", () => goToScreen(6));

  /* ---------------------------------------------------------------
     SCREEN 6 — Blow out the candles, then reveal the letter
  --------------------------------------------------------------- */
  let cakeInited = false;
  let blownCount = 0;
  let letterPlayed = false;
  const CANDLE_COLORS = ["#e07a9c", "#dba646", "#9d7fd1", "#6fb3a8", "#e8967a"];

  function initCake() {
    if (cakeInited) return;
    cakeInited = true;
    buildCandles();
  }

  function buildCandles() {
    const row = $("#candle-row");
    row.innerHTML = "";
    blownCount = 0;
    for (let i = 0; i < birthdayConfig.candleCount; i++) {
      const candle = document.createElement("button");
      candle.className = "candle";
      candle.setAttribute("aria-label", "Blow out candle");
      candle.innerHTML = `
        <span class="candle-glow"></span>
        <span class="candle-flame">🔥</span>
        <span class="candle-stick" style="background: linear-gradient(180deg, #fff, ${CANDLE_COLORS[i % CANDLE_COLORS.length]});"></span>
      `;
      candle.addEventListener("click", () => blowCandle(candle));
      row.appendChild(candle);
    }
  }

  function blowCandle(candle) {
    if (candle.classList.contains("blown")) return;

    const rect = candle.getBoundingClientRect();
    for (let i = 0; i < 3; i++) {
      const puff = document.createElement("span");
      puff.className = "smoke-puff";
      puff.textContent = "💨";
      puff.style.left = rect.left + rect.width / 2 - 8 + (i * 6 - 6) + "px";
      puff.style.top = rect.top + "px";
      puff.style.setProperty("--puff-drift", (i * 10 - 10) + "px");
      puff.style.animationDelay = (i * 60) + "ms";
      document.body.appendChild(puff);
      setTimeout(() => puff.remove(), 900 + i * 60);
    }
    spawnSparkleBurst(rect.left + rect.width / 2, rect.top, 6);

    const cake = $("#the-cake");
    cake.classList.add("shake");
    setTimeout(() => cake.classList.remove("shake"), 320);

    candle.classList.add("blown");
    blownCount++;

    // Actually remove the candle once its fade/shrink transition finishes,
    // so the row visibly loses it instead of just hiding it in place.
    setTimeout(() => candle.remove(), 440);

    if (blownCount >= birthdayConfig.candleCount) {
      setTimeout(() => {
        $("#cake-scene").classList.add("hidden");
        $("#letter-scene").classList.remove("hidden");
        playLetter();
      }, 700);
    }
  }

  function playLetter() {
    if (letterPlayed) return;
    letterPlayed = true;

    const body = $("#letter-body");
    body.innerHTML = "";
    birthdayConfig.letter.forEach(() => body.appendChild(document.createElement("p")));

    const paragraphs = Array.from(body.children);
    let pIndex = 0;

    function typeParagraph() {
      if (pIndex >= paragraphs.length) {
        $("#ps-line").textContent = birthdayConfig.psLine;
        launchConfetti(60);
        launchRibbons(20);
        const finalGif = $("#final-gif");
        if (birthdayConfig.finalGif) {
          finalGif.src = birthdayConfig.finalGif;
          finalGif.classList.remove("hidden");
        }
        return;
      }
      const text = birthdayConfig.letter[pIndex];
      const target = paragraphs[pIndex];
      target.classList.add("typewriter");
      let charIndex = 0;
      const speed = 16;
      const interval = setInterval(() => {
        target.textContent = text.slice(0, charIndex + 1);
        charIndex++;
        if (charIndex >= text.length) {
          clearInterval(interval);
          target.classList.remove("typewriter");
          pIndex++;
          setTimeout(typeParagraph, 180);
        }
      }, speed);
    }
    typeParagraph();
  }

  $("#replay-btn").addEventListener("click", () => {
    // --- reset gif cycling so it starts from the beginning again ---
    lockMessageIndex = 0;
    proposalSuccessGifIndex = 0;

    // --- reset screen 2: balloon ---
    balloonClicks = 0;
    balloonPopped = false;
    balloon.style.transform = "scale(1)";
    balloon.classList.remove("popped");
    balloonScene.classList.remove("hidden");
    balloonTitle.classList.remove("hidden");
    balloonHint.classList.remove("hidden");
    balloonBurstMessage.classList.add("hidden");
    giftRevealScene.classList.add("hidden");
    revealStack.classList.remove("rising");
    $("#to-screen-3-btn").disabled = false;

    // --- reset screen 3: the question ---
    initProposal();

    // --- reset screen 4: game ---
    $("#game-field").innerHTML = '<button class="glow-button" id="start-game-btn">Start Game</button>';
    attachStartGameListener();
    $("#game-result").classList.add("hidden");

    // --- reset screen 5: gallery ---
    galleryInited = false;
    cardOrder = [];
    cardTilts.length = 0;

    // --- reset screen 6: cake + letter ---
    cakeInited = false;
    letterPlayed = false;
    $("#letter-scene").classList.add("hidden");
    $("#cake-scene").classList.remove("hidden");
    $("#final-gif").classList.add("hidden");

    progressIndicator.classList.add("hidden");
    goToScreen(1);
  });

  /* ---------------------------------------------------------------
     Music (must be tapped to start — never autoplay)
  --------------------------------------------------------------- */
  const music = $("#bg-music");
  let musicPlaying = false;

  musicToggle.addEventListener("click", () => {
    if (!musicPlaying) {
      music.play().then(() => {
        musicPlaying = true;
        musicToggle.classList.add("playing");
        musicToggle.textContent = "♫ Playing";
      }).catch(() => {
        musicToggle.textContent = "♫ No Song Yet";
        setTimeout(() => { musicToggle.textContent = "♫ Our Song"; }, 1800);
      });
    } else {
      music.pause();
      musicPlaying = false;
      musicToggle.classList.remove("playing");
      musicToggle.textContent = "♫ Our Song";
    }
  });

  /* ---------------------------------------------------------------
     Init
  --------------------------------------------------------------- */
  applyConfigText();
})();
