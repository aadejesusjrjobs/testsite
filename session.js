// session.js — tiny helper shared by both pages.
// No npm, no build step: this file is loaded with a plain <script> tag.

const SESSION_KEY = "gsi_session";

/**
 * Decodes the payload of a Google ID token (a JWT) *without* verifying its
 * signature. That's fine here because the token never leaves the browser —
 * we're just reading the profile fields Google put in it to render the UI.
 *
 * IMPORTANT: this is NOT the same as a verified server session. Don't use
 * this pattern to gate access to real data or APIs — see the README.
 */
function decodeJwtPayload(jwt) {
  const base64Url = jwt.split(".")[1];
  const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
  const json = decodeURIComponent(
    atob(base64)
      .split("")
      .map((c) => "%" + c.charCodeAt(0).toString(16).padStart(2, "0"))
      .join("")
  );
  return JSON.parse(json);
}

function saveSession(credential) {
  const payload = decodeJwtPayload(credential);
  const session = {
    credential, // the raw ID token, kept in case you want to verify it server-side later
    name: payload.name,
    email: payload.email,
    picture: payload.picture,
    sub: payload.sub, // Google's stable user id
    exp: payload.exp, // unix timestamp (seconds) when the token expires
  };
  localStorage.setItem(SESSION_KEY, JSON.stringify(session));
  return session;
}

function getSession() {
  const raw = localStorage.getItem(SESSION_KEY);
  if (!raw) return null;

  const session = JSON.parse(raw);
  const isExpired = session.exp * 1000 < Date.now();
  if (isExpired) {
    clearSession();
    return null;
  }
  return session;
}

function clearSession() {
  localStorage.removeItem(SESSION_KEY);
}
