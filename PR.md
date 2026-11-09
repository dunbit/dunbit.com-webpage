# Redesign dunbit.com with a new lightweight theme

## Why
The site runs on the stock Airspace template, with placeholder content still in config (a French locale, a stray team bio), the intro paragraph duplicated, typos ("Expertize", "perfroming do diligence"), and seven services in a flat list. Contact had no form.

## What changes
- **New theme `themes/dunbit`**: no Bootstrap, jQuery, carousel or icon kit — one CSS file, one small JS file, both minified and fingerprinted via Hugo Pipes.
- **Pages**: Home, Services, Approach, Contact, Terms; blog and jobs keep working through generic list and single layouts.
- **Copy rewrite**: new headline and lead, the "simple, modular, efficient, straightforward" motto shown as four principles, and services grouped under Architect / Build / Advise.
- **Services**: now 6. Removed Technical management and Training; added AI-native SDLC. Each service is an accessible `<details>` accordion with outcomes and an "Ask about this" deep link (`/en/contact/?topic=…`).
- **Contact form**: topic chips, inline validation, honeypot, and Formspree delivery when `params.formspree` is set; otherwise falls back to a pre-filled `mailto:` to info@dunbit.com.
- **Ljubljana only**: Antwerp references removed.
- **Config**: French locale disabled (it held template placeholder copy only), menus rebuilt, SEO description and Open Graph tags added, analytics moved to gtag.js using the existing ID.
- **Content**: all editable copy now lives in `data/en/home.yml` and `data/en/service.yml`.

## Not removed
`themes/airspace-hugo` is left in place, so you can roll back by switching `theme` back. It can be deleted in a follow-up.

## To check before merging
- [ ] Add a Formspree form ID (or confirm the mailto fallback is enough)
- [ ] Confirm the "reply within two working days" promise
- [ ] Review the AI-native SDLC copy
- [ ] `hugo server` and click through every page
- [ ] UA analytics properties stopped processing in 2023 — swap `googleAnalitycsID` for a GA4 `G-…` ID

## How to apply
Copy the contents of this folder (except PR.md) over the repo root on a new branch, e.g. `redesign/dunbit-theme`, then commit and open the PR with this file as the description.
