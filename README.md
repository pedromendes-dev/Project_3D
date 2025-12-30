Project 3D Portfolio
====================

Live demo
---------
- https://pedromendes-dev.github.io/Project_3D/

Stack
-----
- HTML5 and CSS3
- AOS (Animate On Scroll) for scroll animations
- Spline Web Viewer for the 3D embed

Project structure
-----------------
- index.html: landing layout and Spline viewer embed
- style.css: layout, gradients, blur layer, buttons
- img/: static assets
- .github/workflows/deploy.yml: GitHub Pages deploy via GitHub Actions

Run locally
-----------
1. Clone the repo
2. Option A: open index.html directly in the browser
3. Option B: serve locally (recommended to avoid CORS issues)
	- python -m http.server 5500

Deploy (GitHub Pages via Actions)
---------------------------------
- On every push to main, the workflow publishes the static files to GitHub Pages.
- Pages settings: Source = GitHub Actions. Custom domain left empty (using the free github.io URL).

Custom domain (optional)
------------------------
- If you add a custom domain, create a CNAME file with the domain and configure DNS A records to the GitHub Pages IPs. For www, create a CNAME to pedromendes-dev.github.io.
