// Año del pie de página
document.getElementById("year").textContent = new Date().getFullYear();

// Contadores animados de las cifras
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
document.querySelectorAll(".num[data-target]").forEach((el) => {
  const target = Number(el.dataset.target);
  if (reduceMotion) { el.textContent = target; return; }
  const duration = 900;
  const start = performance.now();
  const tick = (now) => {
    const t = Math.min((now - start) / duration, 1);
    el.textContent = Math.round(target * (1 - Math.pow(1 - t, 3)));
    if (t < 1) requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
});

// Botón "Copiar email": toma la dirección del enlace mailto
const copyBtn = document.getElementById("copy-email");
const email = document.getElementById("email-link").getAttribute("href").replace("mailto:", "");
copyBtn.addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(email);
    copyBtn.textContent = "¡Copiado!";
  } catch {
    copyBtn.textContent = email;
  }
  setTimeout(() => (copyBtn.textContent = "Copiar email"), 2000);
});
