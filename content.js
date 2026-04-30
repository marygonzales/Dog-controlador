(() => {
  const ID = "__DOG_BLOCKER_OVERLAY__";

  function show(until) {
    if (document.getElementById(ID)) return;

    const overlay = document.createElement("div");
    overlay.id = ID;
    Object.assign(overlay.style, {
      position: "fixed", inset: "0", zIndex: "2147483647",
      backgroundColor: "black", display: "flex", flexDirection: "column",
      alignItems: "center", justifyContent: "center", color: "white"
    });

    const video = document.createElement("video");
    video.src = chrome.runtime.getURL("perro_controlador.mp4");
    video.autoplay = video.loop = video.muted = video.playsInline = true;
    Object.assign(video.style, { width: "100%", maxHeight: "70vh", objectFit: "contain" });

    const timerText = document.createElement("div");
    timerText.style.cssText = "font-family: Arial, sans-serif; font-size: 40px; margin-top: 20px; font-weight: bold; color: #fbbf24;";

    overlay.appendChild(video);
    overlay.appendChild(timerText);
    document.documentElement.appendChild(overlay);
    document.documentElement.style.overflow = "hidden";

    const interval = setInterval(() => {
      const remaining = until - Date.now();
      if (remaining <= 0) {
        overlay.remove();
        document.documentElement.style.overflow = "";
        clearInterval(interval);
      } else {
        const m = Math.floor(remaining / 60000);
        const s = Math.floor((remaining % 60000) / 1000);
        timerText.textContent = `🐾 TIEMPO RESTANTE: ${m}:${s < 10 ? '0' : ''}${s}`;
      }
    }, 1000);
  }

  chrome.runtime.onMessage.addListener((m) => {
    if (m.type === "START") show(m.until);
    if (m.type === "STOP") {
      const el = document.getElementById(ID);
      if (el) el.remove();
      document.documentElement.style.overflow = "";
    }
  });
})();