Jay Diamond Asset Recovery — Static Site (Cloudflare Pages Ready)
=================================================================

Deploy steps:
1) Go to https://dash.cloudflare.com → Pages → Create a project → Upload assets directly.
2) Upload the *contents* of this folder (or upload the ZIP).
3) Set the build output directory to `/` and deploy.
4) After deploy, open your Pages project → **Custom domains** → Add `jaydiamondassetrecovery.com`.
   - Cloudflare will prompt you to add/confirm a CNAME record and will issue a free SSL certificate.
5) Replace HubSpot form placeholders in `contact.html` and `consumer.html` with your real `portalId` and `formId` if you want to capture submissions.

Files:
  - index.html (Home)
  - contact.html
  - consumer.html
  - disclosures.html
  - privacy.html
  - terms.html
  - esign.html
  - assets/css/theme.css
  - assets/js/main.js