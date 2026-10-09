# RG Energy Integration Solutions: website project

Everything needed to understand, rebuild or extend the site at https://rgeis.com.
Last updated 2026-10-10.

## What it is

A five-page marketing site for Raymond Greenfield's business, which does hardware-software
integration for New Zealand and Australian solar and battery installers.

| Page | Path | Purpose |
| --- | --- | --- |
| Home | `app/page.tsx` | Headline, services overview, CSIP Gateway feature, call to action |
| About | `app/about/page.tsx` | Background and expertise |
| Services | `app/services/page.tsx` | Four services, process, why work with me |
| Contact | `app/contact/page.tsx` | Contact form and details |
| CSIP Gateway | `app/csip-gateway/page.tsx` | Product page, linked from the photo on Home and Services |

## Stack and hosting

- Next.js (App Router, TypeScript) with **Tailwind CSS v4**
- GitHub: `rginnz/nextjs-boilerplate`, deployed automatically by Vercel on every push to `main`
- Domain and DNS: Only Domains. Email: Titan, hosted by Only Domains (`hello@rgeis.com`)

**Tailwind v4 rule:** `app/globals.css` must start with `@import "tailwindcss";`.
The old `@tailwind base;` lines do nothing in v4, and the site renders completely unstyled.
Do not add an unlayered `* { margin: 0 }` reset, because it overrides every Tailwind utility.

## DNS records (Only Domains)

| Host | Type | Value | Note |
| --- | --- | --- | --- |
| `@` | A | `76.76.21.21` | Vercel. `216.198.79.1` is Vercel's newer recommendation, both work |
| `www` | CNAME | a `*.vercel.app` address (Vercel also accepts `cname.vercel-dns.com`) | |
| `@` | MX | `mx1.titan.email` (10), `mx2.titan.email` (20) | Email. Do not change |
| `@` | TXT | DKIM record, Google Search Console verification record | |
| `@` | TXT | SPF: `v=spf1 include:spf.titan.email ~all` | **Check it exists**, it was missing on 2026-10-10 |

In Vercel, `rgeis.com` and `www.rgeis.com` are both attached to the production environment.
Google Search Console is verified for the `rgeis.com` domain property.

## Brand and design

- Logo: integration hub mark, no letters in the mark. Sources are in `brand/`.
- Brand blue `#0F3D7B`. Device-node palette from the logo: solar amber `#F5A524`,
  battery teal `#12A594`, protocols and grid blue.
- Amber is used for buttons only. Service cards carry the colour of their device node as a top edge.
- Sections use flat sky-blue tints. Footer is deep navy (`bg-blue-950`).
- Masthead reads **RG Energy Integration Solutions**. Browser tab reads **RG Energy Solutions**.
- Hero logo is sized `w-32 h-44 sm:w-40 sm:h-56 md:w-48 md:h-64`. It was once oversized because of the Tailwind v4 problem above.

## Content decisions

- Headline: "If your devices won't talk to each other, talk to me." with a second line for energy systems.
- Raymond is described as a registered New Zealand electrician working with Australia and New Zealand
  standards, and a telecom software architect, with 20+ years of experience.
- The Australasian installer ecosystem is the stated market.
- The CSIP Gateway page lists only features that work today. It was rewritten on 2026-10-10 to cover GX monitoring, operator commands, CSIP-AUS reporting, the operator portal and internet updates. Check it against the firmware before changing it.

## How to redo this from scratch

1. Create the Next.js app and push it to a private GitHub repo. Connect it to Vercel.
2. Make `app/globals.css` start with `@import "tailwindcss";`.
3. Build the five pages. The scripts in `scripts/` show every wording and styling change, in order.
4. Add `rgeis.com` and `www.rgeis.com` in Vercel, and set the DNS records above.
5. Verify the domain in Google Search Console.

Working method that suited this project: Raymond cannot paste long commands into the terminal, so
changes were delivered as small `.ps1` scripts downloaded and run with
`powershell -ExecutionPolicy Bypass -File C:\Users\OEM\Downloads\<script>.ps1`.
Binary files (photos) must be embedded in the script as base64, because downloading them separately failed.
Never name a PowerShell variable `$home` (it is reserved).

## Open items

- **Make the repo private.** GitHub, repo Settings, Danger Zone, Change visibility. It is public at the time of writing.
- Check the SPF TXT record exists (see DNS).
- `scripts/add-operator.ps1` is superseded: the rewritten gateway page already covers the network operator link.
- The gateway's on-screen text says "RG Energy Integrations" and "Integration Services". The site says "Integration Solutions". Align the firmware text.
- Add a sitemap, `robots.txt` and a description for each page (Google indexing).
- Request indexing for each page in Search Console.
- Optional: Google Business Profile for local search.

## Files

- `brand/`: logo SVG and HTML sources
- `scripts/`: the PowerShell scripts that made each change (history, not needed to run the site)
- `public/cyd-gateway.jpg`: product photo of the CSIP Gateway
