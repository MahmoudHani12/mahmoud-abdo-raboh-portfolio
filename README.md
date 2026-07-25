# Mahmoud Hani — Portfolio

Dark-themed, static portfolio built for GitHub Pages. No build tools, no frameworks, no backend.

## File Structure

```
portfolio/
├── index.html                  ← Main homepage
├── assets/
│   ├── css/
│   │   └── style.css           ← All styles (single file)
│   ├── js/
│   │   └── main.js             ← Minimal JS (nav, scroll)
│   └── mahmoud-hani-cv.pdf     ← Add your CV PDF here
└── projects/
    ├── coda.html               ← CODA case study
    ├── ecoloop.html            ← EcoLoop case study
    └── edugrip.html            ← EDUGRIP case study
```

## How to Deploy on GitHub Pages

1. Create a GitHub repository named: `yourusername.github.io`
   (or any repo name — then your site will be at `yourusername.github.io/repo-name`)
2. Push all files from this folder to the repository
3. Go to **Settings → Pages → Source**: set to `main` branch, `/ (root)` folder
4. Wait ~1 minute, then visit your live URL

## How to Add Content Later

### Add your CV
- Place your PDF in `/assets/mahmoud-hani-cv.pdf`
- The Download CV button already points to this path

### Add project images
- Create a folder: `/projects/assets/coda/`, `/projects/assets/ecoloop/`, etc.
- Replace placeholder `<div>` blocks with `<img src="assets/coda/your-image.jpg">` inside the `.asset-placeholder` elements

### Add PDFs / presentations
- Place files in `/projects/assets/` or `/assets/`
- Replace placeholder `<div>` blocks with links:
  `<a href="assets/coda-bmc.pdf" download>Download BMC</a>`

### Update LinkedIn URL
- Open `index.html`
- Find `href="https://linkedin.com"` in the contact section
- Replace with your actual LinkedIn profile URL

### Add real outcome metrics
- Project pages have placeholder metric blocks marked with "Add [number] Here"
- Replace placeholder text with real figures as they become available

## Updating Content

All content is plain HTML — edit directly in any text editor.
No compilation, no build step, no dependencies.
Just save the file and push to GitHub.
