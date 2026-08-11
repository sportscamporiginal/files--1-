SPORTSCAMP INFRA — GYM EQUIPMENT PAGE
======================================

This version has:
- Original page header/navbar removed.
- Original footer removed.
- Breadcrumb removed so the existing SportsCamp Infra header/navigation can be used.
- Gym Equipment content, Indoor/Outdoor toggle, product cards and detail modal retained.
- Quote buttons now target #contact for integration with the main website contact form.

Recommended integration:
1. Copy this folder as a page/folder inside your existing SportsCamp Infra project.
2. Keep index.html + assets/ together.
3. If using as a separate page, link to it from the existing site's Gym Equipment / Services menu.
4. If the page should use the main site's contact form, make sure the main page has id="contact".
5. If the page is in a subfolder and the contact form is on the main index.html, change href="#contact" to href="../index.html#contact" (adjust ../ as needed).
6. The page uses assets/data.js and assets/app.js; do not rename/remove them unless paths are updated.
