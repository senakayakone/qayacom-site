// Contact message: validation and the e-mail sent to Qayacom.

export const LIMITS = { name: 100, email: 200, message: 5000, minMessage: 10 };
// A human needs a few seconds to fill the form; robots post at once.
export const MIN_FILL_MS = 3000;

const EMAIL = /^[^\s@<>()",;:]+@[^\s@<>()",;:]+\.[a-z]{2,}$/i;

const oneLine = (s) => String(s ?? "").replace(/[\r\n\t]+/g, " ").trim();

/** Checks the form; returns { ok, error?, data? } (data is cleaned). */
export function validate(body) {
  if (!body || typeof body !== "object") return { ok: false, error: "invalid" };
  if (oneLine(body.website)) return { ok: false, error: "spam" }; // hidden honeypot field
  if (!(Number(body.elapsed) >= MIN_FILL_MS)) return { ok: false, error: "spam" };
  const name = oneLine(body.name);
  const email = oneLine(body.email);
  const message = String(body.message ?? "").replace(/\r\n?/g, "\n").trim();
  if (!name || name.length > LIMITS.name) return { ok: false, error: "name" };
  if (!EMAIL.test(email) || email.length > LIMITS.email) return { ok: false, error: "email" };
  if (message.length < LIMITS.minMessage || message.length > LIMITS.message) return { ok: false, error: "message" };
  return { ok: true, data: { name, email, message, page: oneLine(body.page).slice(0, 200) } };
}

const b64 = (text) => {
  const bytes = new TextEncoder().encode(text);
  let bin = "";
  for (const b of bytes) bin += String.fromCharCode(b);
  return btoa(bin);
};
const encodedWord = (text) => `=?UTF-8?B?${b64(text)}?=`;
const wrap76 = (s) => s.replace(/.{1,76}/g, "$&\r\n");

/** Raw MIME e-mail (UTF-8 text, base64) with Reply-To set to the visitor. */
export function buildMime({ from, to, data, date = new Date(), id = crypto.randomUUID() }) {
  const text = [
    `Name: ${data.name}`,
    `E-mail: ${data.email}`,
    data.page ? `Page: ${data.page}` : null,
    "",
    data.message,
  ].filter((l) => l !== null).join("\n");
  const headers = [
    `From: ${encodedWord("Site qayacom.com")} <${from}>`,
    `To: <${to}>`,
    `Reply-To: ${encodedWord(data.name)} <${data.email}>`,
    `Subject: ${encodedWord(`[qayacom.com] Message de ${data.name}`)}`,
    `Date: ${date.toUTCString()}`,
    `Message-ID: <${id}@qayacom.com>`,
    "MIME-Version: 1.0",
    "Content-Type: text/plain; charset=UTF-8",
    "Content-Transfer-Encoding: base64",
  ];
  return `${headers.join("\r\n")}\r\n\r\n${wrap76(b64(text))}`;
}
