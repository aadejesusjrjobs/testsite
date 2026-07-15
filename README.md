# Google sign-in demo — no npm, no Node.js, no build step

Two plain HTML files. Open them directly in a browser (or serve the folder
with any static file host) — nothing to install, nothing to compile.

- **`index.html`** — public page with a "Sign in with Google" button.
- **`dashboard.html`** — reads the session from `localStorage` and bounces
  back to `index.html` if there isn't one.
- **`session.js`** — shared helpers: decodes the Google ID token and
  saves/reads/clears the fake "session" in `localStorage`.

## How it works

This uses **Google Identity Services (GIS)**, Google's own client-side
library, loaded with one `<script>` tag in `index.html`:

```html
<script src="https://accounts.google.com/gsi/client" async defer></script>
```

When someone clicks the button, Google's script handles the whole OAuth
flow in a popup and calls your `handleCredentialResponse(response)`
function with a signed **ID token (a JWT)** containing their name, email,
and photo. `session.js` decodes that token's payload and stores it in
`localStorage`, and `dashboard.html` just checks it's there and not
expired.

## Setup

1. Go to the [Google Cloud Console credentials page](https://console.cloud.google.com/apis/credentials).
2. **Create Credentials → OAuth client ID → Application type: Web application.**
3. Under **Authorized JavaScript origins**, add the origin you'll open the
   page from, e.g. `http://localhost:8080` (GIS requires a real origin —
   opening the file with `file://` won't work).
4. Copy the **Client ID** and paste it into `index.html`, replacing:
   ```
   data-client_id="YOUR_GOOGLE_CLIENT_ID.apps.googleusercontent.com"
   ```
5. Serve the folder with any static server, for example:
   ```bash
   python3 -m http.server 8080
   ```
   (Python ships with most systems — still no npm involved.)
6. Visit `http://localhost:8080/index.html`, sign in, and you'll be able to
   navigate to the dashboard.

No client secret is needed anywhere — that's what makes a pure static-file
version possible.

## The tradeoff, honestly

This is a real, working "session," but it's a weaker one than a proper
Auth.js/NextAuth setup:

| | This demo | Server-based Auth.js |
|---|---|---|
| Where the session lives | `localStorage`, unencrypted | Encrypted, HttpOnly cookie |
| Is the token verified? | No — payload is just decoded, not signature-checked | Yes, verified server-side on every request |
| Can it gate a real API/database? | No — anyone can edit `localStorage` or view page source | Yes — the server enforces it |
| Requires a backend? | No | Yes (Node/Deno/Bun) |

Use this pattern for prototypes, internal tools, or anywhere "who is this
in the UI" is enough. If you ever need to protect real data or an API,
you'll need a server to verify the token (Google publishes a JWKS endpoint
for this) or a lightweight backend using Auth.js — happy to help set that up
when you're ready for it.
