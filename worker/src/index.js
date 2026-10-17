// qayacom.com contact form → e-mail to Qayacom (Cloudflare Email Routing).
// Anti-robot: Cloudflare Turnstile + honeypot field + minimum fill time.
import { EmailMessage } from "cloudflare:email";
import { buildMime, validate } from "./message.js";

const ALLOWED_ORIGINS = ["https://qayacom.com", "https://www.qayacom.com"];
const TURNSTILE_HOSTS = ["qayacom.com", "www.qayacom.com"];
const SENDER = "noreply@qayacom.com";

function cors(origin) {
  const allowed = ALLOWED_ORIGINS.includes(origin) ? origin : ALLOWED_ORIGINS[0];
  return {
    "Access-Control-Allow-Origin": allowed,
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    "Vary": "Origin",
  };
}

const reply = (status, body, origin) =>
  new Response(JSON.stringify(body), { status, headers: { "Content-Type": "application/json", ...cors(origin) } });

async function humanChecked(token, ip, secret) {
  if (!token || !secret) return false;
  const form = new FormData();
  form.append("secret", secret);
  form.append("response", token);
  if (ip) form.append("remoteip", ip);
  const res = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", { method: "POST", body: form });
  const out = await res.json();
  return out.success === true && TURNSTILE_HOSTS.includes(out.hostname);
}

export default {
  async fetch(request, env) {
    const origin = request.headers.get("Origin") || "";
    if (request.method === "OPTIONS") return new Response(null, { status: 204, headers: cors(origin) });
    if (request.method !== "POST") return reply(405, { ok: false, error: "method" }, origin);
    if (!ALLOWED_ORIGINS.includes(origin)) return reply(403, { ok: false, error: "origin" }, origin);

    let body;
    try {
      body = await request.json();
    } catch {
      return reply(400, { ok: false, error: "invalid" }, origin);
    }
    const checked = validate(body);
    // Robots get the same answer as people, so they learn nothing.
    if (checked.error === "spam") return reply(200, { ok: true }, origin);
    if (!checked.ok) return reply(400, { ok: false, error: checked.error }, origin);

    const ip = request.headers.get("CF-Connecting-IP");
    if (!(await humanChecked(body.token, ip, env.TURNSTILE_SECRET))) {
      return reply(400, { ok: false, error: "captcha" }, origin);
    }

    try {
      const raw = buildMime({ from: SENDER, to: env.DESTINATION, data: checked.data });
      await env.CONTACT_EMAIL.send(new EmailMessage(SENDER, env.DESTINATION, raw));
    } catch (e) {
      console.error("contact: e-mail not sent", e && e.message);
      return reply(502, { ok: false, error: "send" }, origin);
    }
    return reply(200, { ok: true }, origin);
  },
};
