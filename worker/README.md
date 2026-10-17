# Formulaire de contact qayacom.com

Worker Cloudflare `qayacom-contact` sur https://contact.qayacom.com :
vérifie l'anti-robot (Cloudflare Turnstile, champ piège, temps minimum),
puis envoie le message par Cloudflare Email Routing (`Reply-To` = visiteur).

- Tests : `npm test`
- Publication : `npx wrangler deploy`
- Secrets : `npx wrangler secret put TURNSTILE_SECRET` et `DESTINATION`
