import { test } from "node:test";
import assert from "node:assert/strict";
import { buildMime, validate, MIN_FILL_MS } from "../src/message.js";

const good = { name: "Somchai", email: "somchai@example.com", message: "Hello, I need an app for my shop.", elapsed: MIN_FILL_MS + 1, website: "" };

test("accepts a normal message", () => {
  const r = validate(good);
  assert.equal(r.ok, true);
  assert.equal(r.data.name, "Somchai");
});

test("flags the hidden honeypot field as spam", () => {
  assert.equal(validate({ ...good, website: "http://spam.example" }).error, "spam");
});

test("flags forms sent too fast as spam", () => {
  assert.equal(validate({ ...good, elapsed: 500 }).error, "spam");
  assert.equal(validate({ ...good, elapsed: undefined }).error, "spam");
});

test("rejects a bad e-mail, an empty name and a too short message", () => {
  assert.equal(validate({ ...good, email: "not-an-email" }).error, "email");
  assert.equal(validate({ ...good, name: "   " }).error, "name");
  assert.equal(validate({ ...good, message: "hi" }).error, "message");
});

test("removes line breaks from header fields (no header injection)", () => {
  const r = validate({ ...good, name: "Eve\r\nBcc: victim@example.com" });
  assert.equal(r.ok, true);
  assert.ok(!/[\r\n]/.test(r.data.name));
  const raw = buildMime({ from: "noreply@qayacom.com", to: "me@example.com", data: r.data, id: "x" });
  assert.ok(!/^Bcc:/m.test(raw));
});

test("builds a UTF-8 e-mail that replies to the visitor", () => {
  const data = validate({ ...good, name: "ສົມໃຈ", message: "ສະບາຍດີ, I would like an app." }).data;
  const raw = buildMime({ from: "noreply@qayacom.com", to: "me@example.com", data, id: "abc" });
  assert.match(raw, /^From: =\?UTF-8\?B\?.+\?= <noreply@qayacom.com>\r$/m);
  assert.match(raw, /^Reply-To: =\?UTF-8\?B\?.+\?= <somchai@example.com>\r$/m);
  const body = raw.split("\r\n\r\n")[1].replace(/\r\n/g, "");
  const text = new TextDecoder().decode(Uint8Array.from(atob(body), (c) => c.charCodeAt(0)));
  assert.match(text, /ສະບາຍດີ, I would like an app\./);
  assert.match(text, /^Name: ສົມໃຈ$/m);
});
