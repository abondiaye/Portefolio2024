// Pluie de code façon "Matrix" en fond de page
(function () {
  var canvas = document.getElementById("matrix-rain");
  if (!canvas) return;

  var prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;
  var isTouchDevice =
    "ontouchstart" in window || navigator.maxTouchPoints > 0;
  var isMobile = window.innerWidth <= 600 || isTouchDevice;
  // Désactivé sur mobile : la barre d'adresse qui apparait/disparait au
  // scroll déclenche un resize en boucle qui réinitialise le canvas.
  if (prefersReducedMotion || isMobile) return;

  var ctx = canvas.getContext("2d");
  var chars = "01{}[]()<>;=+-*/$#&%01010110".split("");
  var fontSize = 14;
  var refreshRate = 50;
  var columns, drops;
  var lastWidth = null;

  function resize() {
    if (lastWidth === window.innerWidth) return;
    lastWidth = window.innerWidth;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    columns = Math.floor(canvas.width / fontSize);
    drops = new Array(columns).fill(1);
  }

  function draw() {
    ctx.fillStyle = "rgba(0, 0, 0, 0.08)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "#2ee323";
    ctx.font = fontSize + "px monospace";

    for (var i = 0; i < drops.length; i++) {
      var char = chars[Math.floor(Math.random() * chars.length)];
      var x = i * fontSize;
      var y = drops[i] * fontSize;

      ctx.fillText(char, x, y);

      if (y > canvas.height && Math.random() > 0.975) {
        drops[i] = 0;
      }
      drops[i]++;
    }
  }

  resize();
  window.addEventListener("resize", resize);

  setInterval(draw, refreshRate);
})();
