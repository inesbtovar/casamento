(function () {
  const C = CASAMENTO;
  const $ = (id) => document.getElementById(id);

  const escapeHtml = (s) =>
    String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  const inicio = new Date(C.dataHora);
  const fim = new Date(C.dataHoraFim || inicio.getTime() + 8 * 3600 * 1000);

  // ---------- Preencher conteúdo ----------
  const iniciais = `${C.nome1[0]} & ${C.nome2[0]}`;
  $("nav-logo").textContent = iniciais;
  $("hero-names").innerHTML = `${escapeHtml(C.nome1)}<span class="amp">&amp;</span>${escapeHtml(C.nome2)}`;
  $("footer-names").textContent = `${C.nome1} & ${C.nome2}`;
  document.title = `${C.nome1} & ${C.nome2} · O Nosso Casamento`;

  const dataTexto = inicio.toLocaleDateString("pt-PT", {
    weekday: "long", day: "numeric", month: "long", year: "numeric",
  });
  $("hero-date").textContent = dataTexto.charAt(0).toUpperCase() + dataTexto.slice(1);
  $("hero-place").textContent = C.festa.nome;
  $("frase").textContent = C.frase;

  const cartao = (icone, titulo, local) => `
    <div class="card-icon">${icone}</div>
    <h3>${titulo}</h3>
    <p class="card-time">${escapeHtml(local.hora)}</p>
    <p class="card-place">${escapeHtml(local.nome)}</p>
    <p class="card-address">${escapeHtml(local.morada)}</p>
    <a class="btn btn-ghost" href="${escapeHtml(local.mapa)}" target="_blank" rel="noopener">Ver no mapa</a>`;
  $("card-cerimonia").innerHTML = cartao("⛪", "Cerimónia", C.cerimonia);
  $("card-festa").innerHTML = cartao("🥂", "Festa", C.festa);

  $("timeline").innerHTML = C.programa
    .map((p) => `
      <li class="reveal">
        <time>${escapeHtml(p.hora)}</time>
        <div><h3>${escapeHtml(p.titulo)}</h3><p>${escapeHtml(p.texto)}</p></div>
      </li>`)
    .join("");

  $("dress-titulo").textContent = C.dressCode.titulo;
  $("dress-texto").textContent = C.dressCode.texto;
  $("dress-evitar").textContent = C.dressCode.evitar || "";
  $("dress-cores").innerHTML = (C.dressCode.cores || [])
    .map((cor) => `<span style="background:${escapeHtml(cor)}" title="${escapeHtml(cor)}"></span>`)
    .join("");

  $("presentes-texto").textContent = C.presentes.texto;
  $("amazon-link").href = C.presentes.amazon;
  if (C.presentes.iban) {
    $("iban-texto").textContent = C.presentes.ibanTexto;
    $("iban").textContent = C.presentes.iban;
  } else {
    $("iban-box").hidden = true;
  }

  $("rsvp-prazo").innerHTML = `Por favor confirma até <strong>${escapeHtml(C.rsvp.prazo)}</strong>.`;
  if (C.rsvp.formulario) $("rsvp-form").href = C.rsvp.formulario;
  else $("rsvp-form").hidden = true;
  if (C.rsvp.email) {
    const assunto = encodeURIComponent(`RSVP – Casamento ${C.nome1} & ${C.nome2}`);
    $("rsvp-email").href = `mailto:${C.rsvp.email}?subject=${assunto}`;
  } else {
    $("rsvp-email").hidden = true;
  }

  $("faq-list").innerHTML = C.faq
    .map((f) => `<details><summary>${escapeHtml(f.p)}</summary><p>${escapeHtml(f.r)}</p></details>`)
    .join("");

  // ---------- Contagem decrescente ----------
  const pad = (n) => String(n).padStart(2, "0");
  function atualizarContagem() {
    const diff = inicio - new Date();
    if (diff <= 0) {
      $("countdown").classList.add("done");
      $("countdown").textContent = new Date() < fim ? "É hoje! 🎉" : "Obrigado por celebrarem connosco ♡";
      clearInterval(timer);
      return;
    }
    $("cd-dias").textContent = Math.floor(diff / 86400000);
    $("cd-horas").textContent = pad(Math.floor((diff / 3600000) % 24));
    $("cd-min").textContent = pad(Math.floor((diff / 60000) % 60));
    $("cd-seg").textContent = pad(Math.floor((diff / 1000) % 60));
  }
  const timer = setInterval(atualizarContagem, 1000);
  atualizarContagem();

  // ---------- Adicionar ao calendário (.ics) ----------
  const icsDate = (d) => d.toISOString().replace(/[-:]/g, "").replace(/\.\d{3}/, "");
  $("add-calendar").addEventListener("click", () => {
    const ics = [
      "BEGIN:VCALENDAR",
      "VERSION:2.0",
      "PRODID:-//Casamento//PT",
      "BEGIN:VEVENT",
      `UID:casamento-${icsDate(inicio)}@site`,
      `DTSTAMP:${icsDate(new Date())}`,
      `DTSTART:${icsDate(inicio)}`,
      `DTEND:${icsDate(fim)}`,
      `SUMMARY:Casamento ${C.nome1} & ${C.nome2}`,
      `LOCATION:${C.cerimonia.nome}\\, ${C.cerimonia.morada.replace(/,/g, "\\,")}`,
      `DESCRIPTION:Cerimónia ${C.cerimonia.hora} – ${C.cerimonia.nome}\\nFesta ${C.festa.hora} – ${C.festa.nome}\\n${location.href.split("#")[0]}`,
      "END:VEVENT",
      "END:VCALENDAR",
    ].join("\r\n");
    const url = URL.createObjectURL(new Blob([ics], { type: "text/calendar;charset=utf-8" }));
    const a = Object.assign(document.createElement("a"), { href: url, download: "casamento.ics" });
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
  });

  // ---------- Copiar IBAN ----------
  function toast(msg) {
    const t = $("toast");
    t.textContent = msg;
    t.classList.add("show");
    setTimeout(() => t.classList.remove("show"), 2200);
  }
  $("copy-iban").addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(C.presentes.iban.replace(/\s/g, ""));
      toast("IBAN copiado ✓");
    } catch {
      toast("Não foi possível copiar");
    }
  });

  // ---------- Navegação ----------
  const nav = $("nav");
  const links = $("nav-links");
  const toggle = $("nav-toggle");
  window.addEventListener("scroll", () => nav.classList.toggle("scrolled", window.scrollY > 40), { passive: true });
  toggle.addEventListener("click", () => {
    const aberto = links.classList.toggle("open");
    toggle.setAttribute("aria-expanded", aberto);
  });
  links.addEventListener("click", (e) => {
    if (e.target.tagName === "A") {
      links.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    }
  });

  // ---------- Animações ao fazer scroll ----------
  const observer = new IntersectionObserver(
    (entries) => entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add("visible");
        observer.unobserve(e.target);
      }
    }),
    { threshold: 0.15 }
  );
  document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
})();
