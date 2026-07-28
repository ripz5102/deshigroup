# Deshi Group Website

A production-ready, framework-free corporate website for **Deshi Group**, designed for direct deployment from GitHub to Netlify. It uses semantic HTML5, modern CSS, lightweight vanilla JavaScript and locally created SVG artwork. There is no package manager, build command, database or CMS.

## Project structure

```text
deshi-group-website/
├── index.html
├── about.html
├── divisions.html
├── restaurant.html
├── import-export.html
├── commodity-trading.html
├── contact.html
├── privacy.html
├── terms.html
├── thank-you.html
├── 404.html
├── robots.txt
├── sitemap.xml
├── netlify.toml
├── README.md
├── .gitignore
├── site.webmanifest
├── css/
│   └── style.css
├── js/
│   └── script.js
├── images/
│   ├── logo-placeholder.svg
│   ├── favicon.svg
│   ├── hero-business.svg
│   ├── restaurant.svg
│   ├── import-export.svg
│   └── commodity-trading.svg
└── assets/
    └── .gitkeep
```

## Open locally

The site works by opening `index.html` directly in a browser. For a more realistic local preview, use a simple static server:

```bash
cd deshi-group-website
python3 -m http.server 8000
```

Then visit `http://localhost:8000`. The Netlify form will not actually submit when the site is opened locally; deploy a preview to test form processing.

## Edit company information

Search the entire project for `[ADD`:

```bash
grep -R "\[ADD" .
```

Replace placeholders consistently in `contact.html`, `privacy.html`, `terms.html` and this README. Update the Organization JSON-LD in `index.html` only with verified details. Do not add a registration number, regulated status, office, certification or achievement unless it is accurate and supportable.

The confirmed email is `info@deshigroup.pl`. If it changes, search all files:

```bash
grep -R "info@deshigroup.pl" .
```

## Replace the logo and images

- Replace `images/logo-placeholder.svg` with the final logo, ideally keeping the filename to avoid editing every page.
- Replace `images/favicon.svg` and update `site.webmanifest` if the format or filename changes.
- The four other SVG files are original temporary illustrations. Keep the same filenames and dimensions where practical.
- If using photographs, optimise them as WebP or AVIF, retain meaningful `alt` text, specify width and height, and keep below-the-fold images lazy-loaded.
- Update Open Graph image metadata on each page if a dedicated social-sharing image is added. For best social-network compatibility, use a verified absolute HTTPS URL to a 1200×630 PNG or JPG.

## Test the contact form

1. Deploy the repository to Netlify.
2. Open the deployed `contact.html`.
3. Submit a non-sensitive test enquiry.
4. Confirm the browser reaches `thank-you.html`.
5. In Netlify, open **Forms** and confirm `business-enquiry` appears.
6. Verify that the submission is recorded and any chosen email notification works.
7. Test required fields, invalid email format, the consent checkbox and the honeypot.

The HTML form name and hidden `form-name` value are both `business-enquiry`. JavaScript adds accessible feedback but leaves normal HTML submission intact.

## Publish to GitHub

Create an empty GitHub repository, for example `deshi-group-website`. Do not initialise it with another README if using these exact commands.

```bash
cd deshi-group-website
git init
git add .
git commit -m "Build Deshi Group corporate website"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/deshi-group-website.git
git push -u origin main
```

Replace `YOUR-USERNAME` with the correct GitHub account or organisation. If the repository already exists, inspect it before adding or overwriting files.

## Connect GitHub to Netlify

1. Sign in to Netlify and choose **Add new site** → **Import an existing project**.
2. Select GitHub and authorise only the required repository where possible.
3. Choose the Deshi Group repository.
4. Use these deployment settings:
   - **Production branch:** `main`
   - **Build command:** leave blank
   - **Publish directory:** `.`
5. Deploy the site.
6. Open the generated Netlify URL and test navigation, responsive layouts, the 404 page and the form.

`netlify.toml` also sets the publish directory, security headers, caching, custom 404 handling and the `www` redirect. There is no build process.

## Enable Netlify form detection

The form contains `data-netlify="true"`, a matching hidden form-name field and a honeypot. Netlify should detect it during deployment.

In the Netlify site dashboard:

1. Open **Forms**.
2. Ensure form detection is enabled for the site.
3. Trigger a fresh deployment after changing form markup.
4. Submit a test from the deployed URL.
5. Add submission notifications only to authorised recipients.

Do not test with real payment data, bank credentials or confidential transaction documents.

## Connect `deshigroup.pl`

1. In Netlify, open **Domain management** → **Add a domain**.
2. Add `deshigroup.pl` and follow Netlify’s current DNS instructions.
3. Set `deshigroup.pl` as the primary domain.
4. Add `www.deshigroup.pl` as a domain alias.
5. Confirm HTTPS provisioning completes.
6. Test both hostname versions. The included rule redirects `www` to the apex domain.

The chosen primary domain and DNS setup must match the redirect in `netlify.toml`. If `www` becomes the primary domain instead, change or remove that redirect to prevent contradictory configuration.

### Preserve existing email DNS records

The domain already uses email, so record all existing DNS entries before changing nameservers or DNS providers. In particular, preserve:

- MX records
- SPF TXT record
- DKIM CNAME or TXT records
- DMARC TXT record
- Any mail verification, autodiscover or Zimbra-related records

Changing the website’s A/CNAME records does not require deleting email records. If moving authoritative DNS to Netlify, recreate every valid email record before switching nameservers. Afterward, test sending and receiving mail at `info@deshigroup.pl`.

## Update the website after launch

Edit files, preview locally, then commit and push:

```bash
git add .
git commit -m "Update website content"
git push
```

Netlify automatically deploys commits pushed to `main`. Use a branch and a Netlify deploy preview for larger updates:

```bash
git switch -c update/company-details
git add .
git commit -m "Add verified company details"
git push -u origin update/company-details
```

Open a pull request, review the deploy preview, and merge after approval.

## Pre-launch checklist

- [ ] Replace every placeholder listed below.
- [ ] Install the final logo and social-sharing image.
- [ ] Confirm all company descriptions and services are accurate.
- [ ] Review telephone, WhatsApp, email, address and business hours.
- [ ] Confirm the correct legal entity, registration and VAT details.
- [ ] Complete professional review of the Privacy Policy and Terms of Use.
- [ ] Confirm data retention, processing locations and enquiry-handling workflow.
- [ ] Test all internal links and navigation with mouse and keyboard.
- [ ] Test mobile navigation, dropdown, Escape key and focus states.
- [ ] Test widths around 375px, 768px, 1024px and 1440px.
- [ ] Check for horizontal overflow and image layout shifts.
- [ ] Test with JavaScript disabled.
- [ ] Test Netlify form detection and the thank-you redirect.
- [ ] Confirm custom 404 handling.
- [ ] Confirm HTTPS and both apex/`www` hostnames.
- [ ] Validate `robots.txt`, `sitemap.xml`, canonical URLs and social metadata.
- [ ] Preserve and test email DNS records.
- [ ] Review Netlify security headers after adding any future external services.
- [ ] Confirm no credentials, API keys or confidential documents are committed.

## Legal-review checklist

- [ ] Insert the full legal entity and registered address.
- [ ] Confirm registration and VAT disclosures required in the relevant jurisdiction.
- [ ] Confirm the privacy controller identity and contact details.
- [ ] Identify lawful bases for actual enquiry processing.
- [ ] Set a documented retention period.
- [ ] Review Netlify’s current data-processing terms and processing locations.
- [ ] Assess international transfer requirements.
- [ ] Confirm user-rights language and supervisory authority information.
- [ ] Select governing law and jurisdiction.
- [ ] Review liability and intellectual-property wording.
- [ ] Confirm sanctions, AML, export-control, product-compliance and due-diligence wording against actual operations.
- [ ] Update policies if analytics, marketing cookies, embedded media, live chat or other third-party services are added.

## Remaining placeholders

The following placeholders are intentionally retained because no verified details were provided:

| Placeholder | Files / purpose |
|---|---|
| `[ADD TELEPHONE NUMBER]` | `contact.html` |
| `[ADD WHATSAPP NUMBER]` | `contact.html` |
| `[ADD REGISTERED ADDRESS]` | `contact.html`, `privacy.html`, `terms.html` |
| `[ADD BUSINESS HOURS]` | `contact.html` |
| `[ADD POLICY EFFECTIVE DATE]` | `privacy.html` |
| `[ADD FULL LEGAL ENTITY AND REGISTERED ADDRESS]` | `privacy.html` |
| `[ADD RETENTION PERIOD OR POLICY]` | `privacy.html` |
| `[ADD IF APPLICABLE]` | Privacy contact, registration and VAT details |
| `[ADD TERMS EFFECTIVE DATE]` | `terms.html` |
| `[ADD GOVERNING LAW AND JURISDICTION]` | `terms.html` |
| `[ADD FULL LEGAL ENTITY NAME]` | `terms.html` |

LinkedIn and Facebook links were omitted because no verified URLs were supplied. They can be added to the footer after verification.

## Technical notes

- No npm install or build command is required.
- CSS uses the requested local system font stack: `Inter, Arial, Helvetica, sans-serif`.
- JavaScript is deferred, dependency-free and limited to navigation, footer year, form enhancements, query-string preselection and back-to-top behavior.
- The site includes reduced-motion support, visible focus states, a skip link, semantic landmarks and responsive layouts.
- Security headers may need adjustment if legitimate third-party fonts, analytics, embeds or services are introduced later.
