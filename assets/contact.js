// Contact form → https://contact.qayacom.com (worker in /worker).
// Anti-robot: Cloudflare Turnstile, hidden field, minimum fill time.
(() => {
  const ENDPOINT = "https://contact.qayacom.com";
  const SITE_KEY = "0x4AAAAAAFZTGERzE9LpxuvL";
  const MSG = {
    en: { sending: "Sending…", sent: "Thank you! Your message has been sent. We will reply soon.", captcha: "Please complete the anti-robot check.",
          name: "Please enter your name.", email: "Please enter a valid e-mail address.", message: "Your message is too short (10 characters minimum).",
          error: "Sorry, the message could not be sent. Please try again in a moment." },
    fr: { sending: "Envoi…", sent: "Merci ! Votre message a bien été envoyé. Nous répondrons vite.", captcha: "Merci de valider le contrôle anti-robot.",
          name: "Indiquez votre nom.", email: "Indiquez une adresse e-mail valide.", message: "Votre message est trop court (10 caractères minimum).",
          error: "Désolé, le message n'a pas pu être envoyé. Réessayez dans un instant." },
    lo: { sending: "ກຳລັງສົ່ງ…", sent: "ຂອບໃຈ! ສົ່ງຂໍ້ຄວາມແລ້ວ. ພວກເຮົາຈະຕອບໄວໆນີ້.", captcha: "ກະລຸນາຢືນຢັນວ່າທ່ານບໍ່ແມ່ນຫຸ່ນຍົນ.",
          name: "ກະລຸນາໃສ່ຊື່.", email: "ກະລຸນາໃສ່ອີເມວທີ່ຖືກຕ້ອງ.", message: "ຂໍ້ຄວາມສັ້ນເກີນໄປ (ຢ່າງໜ້ອຍ 10 ຕົວອັກສອນ).",
          error: "ຂໍອະໄພ, ສົ່ງຂໍ້ຄວາມບໍ່ໄດ້. ກະລຸນາລອງໃໝ່." },
  };
  const t = (key) => (MSG[document.documentElement.lang] || MSG.en)[key];

  const form = document.querySelector("[data-contact-form]");
  if (!form) return;
  const status = form.querySelector("[data-form-status]");
  const button = form.querySelector("button[type=submit]");
  const openedAt = Date.now();
  let widget = null;

  // Called by the Turnstile script once loaded.
  window.qayacomCaptcha = () => {
    widget = window.turnstile.render(form.querySelector("[data-captcha]"), {
      sitekey: SITE_KEY,
      language: "auto",
      theme: "light",
    });
  };

  function show(kind, text) {
    status.className = `form-status ${kind}`;
    status.textContent = text;
  }

  function localCheck(data) {
    if (!data.name.trim()) return "name";
    if (!/^[^\s@]+@[^\s@]+\.[a-z]{2,}$/i.test(data.email.trim())) return "email";
    if (data.message.trim().length < 10) return "message";
    return null;
  }

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(form));
    const problem = localCheck(data);
    if (problem) return show("error", t(problem));
    const token = widget !== null ? window.turnstile.getResponse(widget) : "";
    if (!token) return show("error", t("captcha"));

    button.disabled = true;
    show("", t("sending"));
    try {
      const res = await fetch(ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, token, elapsed: Date.now() - openedAt, page: location.href }),
      });
      const out = await res.json().catch(() => ({}));
      if (out.ok) {
        form.reset();
        show("success", t("sent"));
      } else {
        show("error", t(MSG.en[out.error] ? out.error : "error"));
      }
    } catch {
      show("error", t("error"));
    } finally {
      button.disabled = false;
      if (widget !== null) window.turnstile.reset(widget);
    }
  });
})();
