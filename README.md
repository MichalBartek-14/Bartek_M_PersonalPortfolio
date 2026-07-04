# Michal Bartek — GI & Remote Sensing Portfolio

A single-page, responsive portfolio website built with plain HTML, CSS and JavaScript. No build tools, frameworks, or dependencies required.

## Folder structure

```
portfolio/
├── index.html          # All page content and structure
├── css/
│   └── styles.css      # All styling (design tokens at the top)
├── js/
│   └── script.js       # Nav behavior, mobile menu, HUD readout, contact form
├── assets/
│   └── favicon.svg      # Browser tab icon
└── README.md
```

## Running it locally

You don't need to install anything to preview the site — but opening `index.html` directly by double-clicking it works too (all paths are relative). For the closest match to how it'll behave once deployed, serve it locally:

**Option A — Python (already on most machines):**
```bash
cd portfolio
python3 -m http.server 8000
```
Then open `http://localhost:8000` in your browser.

**Option B — VS Code Live Server extension:**
Open the `portfolio` folder in VS Code, install the "Live Server" extension, right-click `index.html`, and choose "Open with Live Server."

**Option C — Node's `serve` package:**
```bash
npx serve portfolio
```

## Editing content

Everything text-based lives directly in `index.html` — there's no CMS or data file. Search for the section by its `id` (e.g. `id="projects"`) to find what you're looking for. Key things you'll likely want to personalize further:

- **Email / phone / LinkedIn** — used in the Contact section and in the hero. Search for `mailto:`, `tel:`, and `linkedin.com` in `index.html`.
- **Project links** — the "Visit GitHub Profile" button in the Projects section links to `https://github.com/MichalBartek-14`. If you create individual repos for specific projects, add a link inside that project's `.project-body` (a small `<a class="btn btn-outline">` works well).
- **Colors** — all colors are defined once as CSS variables at the top of `css/styles.css` under `:root`. Change a value there and it updates everywhere.
- **Fonts** — loaded from Google Fonts in the `<head>` of `index.html` (Space Grotesk for headings, Inter for body text, JetBrains Mono for small labels/HUD text).

## The contact form

The form doesn't have a backend — this is a static site. On submit, it opens the visitor's email client with a pre-filled message (via a `mailto:` link, handled in `js/script.js`). This works everywhere with zero setup, but requires the visitor to have an email client configured.

If you'd rather have messages land directly in your inbox without opening the visitor's email app, two free, no-backend options that work well with static sites:

- **[Formspree](https://formspree.io)** — free tier available. Change the form's behavior to POST to your Formspree endpoint instead of using `mailto:`.
- **Netlify Forms** — if you deploy via Netlify (see below), add `netlify` and `data-netlify="true"` attributes to the `<form>` tag and Netlify will handle submissions automatically, no extra code needed.

## Deployment

This is a fully static site, so any static host works. Two free, beginner-friendly options:

### Option 1: GitHub Pages

1. Create a new repository on GitHub (e.g. `portfolio`).
2. Push the contents of this folder to the repository:
   ```bash
   cd portfolio
   git init
   git add .
   git commit -m "Initial portfolio site"
   git branch -M main
   git remote add origin https://github.com/MichalBartek-14/portfolio.git
   git push -u origin main
   ```
3. On GitHub, go to **Settings → Pages**.
4. Under "Build and deployment," set **Source** to "Deploy from a branch," choose the `main` branch and `/ (root)` folder, then save.
5. Your site will be live at `https://michalbartek-14.github.io/portfolio/` within a minute or two.

### Option 2: Netlify

1. Go to [netlify.com](https://www.netlify.com) and sign up (free).
2. From the dashboard, choose **Add new site → Deploy manually**, then drag the `portfolio` folder into the browser window.
3. Netlify will instantly give you a live URL (e.g. `random-name-123.netlify.app`).
4. Optionally, connect it to your GitHub repo instead for automatic redeploys whenever you push changes, and set a custom subdomain under **Site settings → Domain management**.

Both options are free and require no server management, database, or ongoing maintenance — perfect for a portfolio like this one.

## Performance & SEO notes

- No images are used — all visuals are inline SVG, so there's nothing to optimize or lazy-load, and load times stay fast.
- Google Fonts are loaded with `preconnect` hints and `font-display: swap` to avoid blocking text rendering.
- `<meta name="description">` and `<meta name="keywords">` are set in the `<head>` for search engines; update them if you retitle sections or add new project keywords.
- The site uses semantic HTML5 landmarks (`<header>`, `<main>`, `<footer>`, `<section>`) and includes a "skip to content" link for accessibility and SEO alike.

## Browser support

Built with standard, well-supported CSS (Grid, custom properties, `clamp()`) and vanilla JS — works in all current versions of Chrome, Firefox, Safari, and Edge.
=======

