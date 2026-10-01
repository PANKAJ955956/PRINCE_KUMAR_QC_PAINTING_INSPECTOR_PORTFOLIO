# Prince Kumar — QC Painting Inspector Portfolio

A static, multi-page HTML/CSS/JavaScript portfolio designed for GitHub Pages.

## Pages
- `index.html` — Home
- `about.html` — Profile and career objective
- `experience.html` — Work experience and offer (clearly distinguished)
- `skills.html` — Painting inspection skills and equipment
- `projects.html` — Project showcase with category filters
- `certifications.html` — Education and credentials
- `achievements.html` — Career highlights
- `contact.html` — Email-based contact form

## Run locally
Open `index.html` in a browser, or run a local server:
```bash
python -m http.server 8000
```
Then visit `http://localhost:8000`.

## Deploy on GitHub Pages
1. Create a GitHub repository, e.g. `prince-kumar-qc-painting-portfolio`.
2. Upload the contents of this folder to the repository root (not the enclosing ZIP folder).
3. Open **Settings → Pages**.
4. Under **Build and deployment**, select **Deploy from a branch**.
5. Select `main` and `/ (root)`, then Save.
6. After deployment, open the URL shown in the Pages section.

## Personalization before publishing
- Replace the initials avatar with a professional image if desired.
- Add a verified CV at `assets/Prince_Kumar_CV.pdf` (the download button points there).
- Add only project photos and documents that you have permission to publish.
- Confirm experience dates, certification status and contact information.
- The 2026 Oman offer is represented as an offer, not as completed employment.
- Passport number, personal identification numbers, home address and salary are intentionally excluded from the public portfolio.

## Editing
All pages share `css/style.css` and `js/main.js`. Navigation and footer are currently repeated in each HTML file to keep the site simple and GitHub Pages compatible.
