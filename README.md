# Sai Graphic Designs Website

A fast, responsive, static business website built with plain HTML, CSS and JavaScript.

## Files
- `index.html` — website structure and content
- `style.css` — responsive design
- `script.js` — menu, portfolio filters and WhatsApp enquiry form
- `assets/` — logo/favicon and your future portfolio images

## Replace portfolio placeholders
The current portfolio uses CSS artwork placeholders so the site works immediately.
To use your real projects, add images to `assets/` and replace the `.project-art` blocks in `index.html` with `<img>` elements.

## Contact details currently used
Phone/WhatsApp: +91 63811 28781
Email: saigraphicdesings@gmail.com

## Free Cloudflare Pages deployment
1. Create a GitHub repository, e.g. `sai-graphic-designs`.
2. Upload `index.html`, `style.css`, `script.js`, `assets/`, and this README.
3. In Cloudflare: Workers & Pages → Create application → Pages → Import existing Git repository.
4. Select the GitHub repository.
5. Production branch: `main`.
6. Build command: `exit 0` (or leave blank for a plain static site).
7. Build output directory: the repository root / your static site directory.
8. Deploy.

Cloudflare will provide a `*.pages.dev` address.
