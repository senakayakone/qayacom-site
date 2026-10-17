// Qayacom – languages and reveal on scroll. English is in the HTML.
// Lao to be proofread.
(() => {
  const T = {
    fr: {
      nav_services: "Services", nav_process: "Méthode", nav_work: "Réalisations", nav_contact: "Contact", nav_cta: "Démarrer un projet",
      hero_pill: "Studio d'applications mobiles à Vientiane, Laos",
      hero_title_1: "Nous créons les applications", hero_title_2: "dont votre entreprise a besoin",
      hero_lead: "Applications mobiles sur mesure pour iPhone et Android, sites web et systèmes de caisse (POS). Conçus et développés à Vientiane, publiés sur l'App Store et Google Play.",
      hero_cta: "Parlons de votre projet", hero_cta2: "Voir nos réalisations",
      chip_web: "Sites web", chip_pos: "Caisses POS",
      services_kicker: "Ce que nous faisons", services_title: "Du sur-mesure, de l'idée au lancement",
      services_sub: "Chaque projet est construit autour de votre activité : vos clients, vos produits, votre langue.",
      sv1_t: "Applications mobiles sur mesure", sv1_p: "Des apps pour iPhone et Android, développées une seule fois et publiées à votre nom sur les stores.",
      sv1_1: "Design et expérience utilisateur", sv1_2: "Achats intégrés, comptes, notifications", sv1_3: "Publication App Store et Google Play",
      sv2_t: "Sites web", sv2_p: "Des sites rapides et modernes, parfaits sur téléphone, en lao, anglais ou français.",
      sv2_1: "Sites d'entreprise et de produits", sv2_2: "Catalogues en ligne et réservations", sv2_3: "Nom de domaine, hébergement et HTTPS",
      sv3_t: "Systèmes de caisse (POS)", sv3_p: "Logiciels de caisse pour boutiques, restaurants et cafés, sur tablette ou ordinateur.",
      sv3_1: "Ventes, stock et tickets", sv3_2: "Kip, baht et dollar", sv3_3: "Rapports quotidiens pour le gérant",
      process_kicker: "Notre méthode", process_title: "Quatre étapes claires", process_sub: "Vous savez toujours où en est votre projet.",
      st1_t: "Écouter", st1_p: "Nous nous rencontrons, comprenons vos besoins et fixons un plan et un prix clairs.",
      st2_t: "Concevoir", st2_p: "Vous voyez les écrans avant le développement, et nous les ajustons ensemble.",
      st3_t: "Développer", st3_p: "Nous développons et vous testez de vraies versions sur votre téléphone.",
      st4_t: "Lancer et suivre", st4_p: "Nous publions, suivons les premiers utilisateurs et gardons l'app à jour.",
      work_kicker: "Réalisations", work_title: "Créé par Qayacom", work_type: "App éducative · iPhone et iPad",
      work_p: "Une app qui apprend l'alphabet lao aux enfants : sons, écriture dans le bon sens, jeux et autocollants, en trois langues. Sur l'App Store depuis 2020.",
      tag_iap: "Achat intégré", tag_lang: "3 langues", work_cta: "Découvrir l'app",
      why_kicker: "Pourquoi Qayacom", why_title: "Une équipe locale, des standards internationaux",
      w1_t: "Basés à Vientiane", w1_p: "Nous vous rencontrons en personne et connaissons le marché lao.",
      w2_t: "Lao, anglais, français", w2_p: "Des apps et sites pour vos clients au Laos et à l'étranger.",
      w3_t: "Publication sur les stores", w3_p: "Nous gérons l'App Store et Google Play pour vous.",
      w4_t: "Suivi dans la durée", w4_p: "Mises à jour, corrections et nouvelles fonctions après le lancement.",
      contact_title: "Une idée d'application ?", contact_p: "Parlez-nous de votre projet. Nous répondons vite avec des idées, un plan et un prix.",
      contact_place: "📍 Vientiane, RDP lao", footer_tag: "Développement d'applications mobiles, Vientiane", privacy: "Politique de confidentialité",
    },
    lo: {
      nav_services: "ບໍລິການ", nav_process: "ວິທີເຮັດວຽກ", nav_work: "ຜົນງານ", nav_contact: "ຕິດຕໍ່", nav_cta: "ເລີ່ມໂຄງການ",
      hero_pill: "ສະຕູດິໂອພັດທະນາແອັບມືຖື ຢູ່ນະຄອນຫຼວງວຽງຈັນ",
      hero_title_1: "ພວກເຮົາສ້າງແອັບ", hero_title_2: "ທີ່ທຸລະກິດຂອງທ່ານຕ້ອງການ",
      hero_lead: "ແອັບມືຖືຕາມຄວາມຕ້ອງການ ສຳລັບ iPhone ແລະ Android, ເວັບໄຊ ແລະ ລະບົບຂາຍໜ້າຮ້ານ (POS). ອອກແບບ ແລະ ພັດທະນາຢູ່ວຽງຈັນ, ເຜີຍແຜ່ໃນ App Store ແລະ Google Play.",
      hero_cta: "ປຶກສາໂຄງການຂອງທ່ານ", hero_cta2: "ເບິ່ງຜົນງານ",
      chip_web: "ເວັບໄຊ", chip_pos: "ລະບົບ POS",
      services_kicker: "ບໍລິການຂອງພວກເຮົາ", services_title: "ອອກແບບຕາມຄວາມຕ້ອງການ, ຕັ້ງແຕ່ແນວຄິດຈົນເປີດໃຊ້",
      services_sub: "ທຸກໂຄງການສ້າງຂຶ້ນຕາມທຸລະກິດຂອງທ່ານ: ລູກຄ້າ, ສິນຄ້າ ແລະ ພາສາຂອງທ່ານ.",
      sv1_t: "ແອັບມືຖືຕາມສັ່ງ", sv1_p: "ແອັບສຳລັບ iPhone ແລະ Android, ເຜີຍແຜ່ໃນນາມຂອງທ່ານ.",
      sv1_1: "ອອກແບບ ແລະ ປະສົບການຜູ້ໃຊ້", sv1_2: "ການຊື້ໃນແອັບ, ບັນຊີຜູ້ໃຊ້, ການແຈ້ງເຕືອນ", sv1_3: "ເຜີຍແຜ່ໃນ App Store ແລະ Google Play",
      sv2_t: "ເວັບໄຊ", sv2_p: "ເວັບໄຊທັນສະໄໝ ແລະ ໄວ, ໃຊ້ໄດ້ດີໃນມືຖື, ພາສາລາວ, ອັງກິດ ຫຼື ຝຣັ່ງ.",
      sv2_1: "ເວັບໄຊບໍລິສັດ ແລະ ສິນຄ້າ", sv2_2: "ແຄັດຕາລັອກອອນລາຍ ແລະ ການຈອງ", sv2_3: "ໂດເມນ, ໂຮສຕິ້ງ ແລະ HTTPS",
      sv3_t: "ລະບົບຂາຍໜ້າຮ້ານ (POS)", sv3_p: "ໂປຣແກຣມຂາຍສຳລັບຮ້ານຄ້າ, ຮ້ານອາຫານ ແລະ ຮ້ານກາເຟ, ໃນແທັບເລັດ ຫຼື ຄອມພິວເຕີ.",
      sv3_1: "ການຂາຍ, ສະຕັອກ ແລະ ໃບບິນ", sv3_2: "ກີບ, ບາດ ແລະ ໂດລາ", sv3_3: "ລາຍງານປະຈຳວັນສຳລັບເຈົ້າຂອງ",
      process_kicker: "ວິທີເຮັດວຽກ", process_title: "ສີ່ຂັ້ນຕອນທີ່ຊັດເຈນ", process_sub: "ທ່ານຮູ້ສະເໝີວ່າໂຄງການຢູ່ຂັ້ນໃດ.",
      st1_t: "ຮັບຟັງ", st1_p: "ພົບກັນ, ເຂົ້າໃຈຄວາມຕ້ອງການ ແລະ ຕົກລົງແຜນງານ ແລະ ລາຄາ.",
      st2_t: "ອອກແບບ", st2_p: "ທ່ານເຫັນໜ້າຈໍກ່ອນພັດທະນາ ແລະ ປັບປຸງນຳກັນ.",
      st3_t: "ພັດທະນາ", st3_p: "ພວກເຮົາພັດທະນາ ແລະ ທ່ານທົດລອງໃນມືຖືຂອງທ່ານ.",
      st4_t: "ເປີດໃຊ້ ແລະ ດູແລ", st4_p: "ເຜີຍແຜ່, ຕິດຕາມຜູ້ໃຊ້ ແລະ ອັບເດດແອັບ.",
      work_kicker: "ຜົນງານ", work_title: "ສ້າງໂດຍ Qayacom", work_type: "ແອັບການສຶກສາ · iPhone ແລະ iPad",
      work_p: "ແອັບສອນພະຍັນຊະນະລາວໃຫ້ເດັກນ້ອຍ: ສຽງ, ການຂຽນທີ່ຖືກວິທີ, ເກມ ແລະ ສະຕິກເກີ, ສາມພາສາ. ມີໃນ App Store ຕັ້ງແຕ່ປີ 2020.",
      tag_iap: "ການຊື້ໃນແອັບ", tag_lang: "3 ພາສາ", work_cta: "ເບິ່ງແອັບ",
      why_kicker: "ເປັນຫຍັງຕ້ອງ Qayacom", why_title: "ທີມງານທ້ອງຖິ່ນ, ມາດຕະຖານສາກົນ",
      w1_t: "ຢູ່ວຽງຈັນ", w1_p: "ພົບກັນໂດຍກົງ ແລະ ເຂົ້າໃຈຕະຫຼາດລາວ.",
      w2_t: "ລາວ, ອັງກິດ, ຝຣັ່ງ", w2_p: "ແອັບ ແລະ ເວັບໄຊສຳລັບລູກຄ້າໃນລາວ ແລະ ຕ່າງປະເທດ.",
      w3_t: "ເຜີຍແຜ່ໃນ Store", w3_p: "ພວກເຮົາຈັດການ App Store ແລະ Google Play ໃຫ້ທ່ານ.",
      w4_t: "ດູແລໄລຍະຍາວ", w4_p: "ອັບເດດ, ແກ້ໄຂ ແລະ ເພີ່ມຟັງຊັນໃໝ່ຫຼັງເປີດໃຊ້.",
      contact_title: "ມີແນວຄິດແອັບບໍ?", contact_p: "ບອກພວກເຮົາກ່ຽວກັບໂຄງການຂອງທ່ານ. ພວກເຮົາຕອບໄວ ພ້ອມແນວຄິດ, ແຜນງານ ແລະ ລາຄາ.",
      contact_place: "📍 ນະຄອນຫຼວງວຽງຈັນ, ສປປ ລາວ", footer_tag: "ພັດທະນາແອັບມືຖື, ວຽງຈັນ", privacy: "ນະໂຍບາຍຄວາມເປັນສ່ວນຕົວ",
    },
  };
  const LANGS = ["en", "fr", "lo"];
  const english = {};
  document.querySelectorAll("[data-i18n]").forEach((el) => { english[el.dataset.i18n] = el.textContent; });

  function savedLang() {
    try { return localStorage.getItem("lang"); } catch { return null; }
  }
  function setLang(lang) {
    const dict = T[lang] || {};
    document.documentElement.lang = lang;
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      el.textContent = dict[el.dataset.i18n] || english[el.dataset.i18n];
    });
    document.querySelectorAll("[data-lang]").forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.lang === lang)));
    try { localStorage.setItem("lang", lang); } catch { /* private mode: not remembered */ }
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("shown"); observer.unobserve(e.target); } });
  }, { threshold: 0.15 });
  document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

  document.querySelectorAll("[data-lang]").forEach((b) => b.addEventListener("click", () => setLang(b.dataset.lang)));
  const fromUrl = new URLSearchParams(location.search).get("lang");
  const browser = (navigator.language || "en").slice(0, 2);
  setLang([fromUrl, savedLang(), browser].find((l) => LANGS.includes(l)) || "en");
})();
