# EstateFrame Digital — Editorial Post-Production for Real Estate

A Next.js starter for EstateFrame Digital, a boutique real-estate post-production studio composing eight disciplines:

1. Single Frame Composition
2. HDR Blending
3. Day-to-Night Conversion
4. Twilight Finishing
5. Virtual Staging
6. Property Film
7. Item Removal
8. Aerial & Drone Finishing

## Included

- Next.js App Router + React + TypeScript
- Home, Services, HDR Studio, Portfolio, Studio (About), and Contact pages
- Dark luxury editorial theme — ink + bronze + ivory on Fraunces (display) and Inter (body)
- Reusable header, footer, before/after slider, portfolio gallery/lightbox, FAQ accordion, and brief form
- SEO metadata
- Accessible focus styles and reduced-motion support
- Phone and WhatsApp links (currently placeholders — `+91 63837 50315`)

## Requirements

- Node.js 20.9 or newer
- npm

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Production build

```bash
npm run build
npm start
```

## Before publishing

1. Replace placeholder contact details (`+91 63837 50315`, `agilansr222@gmail.com`) with real values across pages, header, footer, and metadata.
2. Replace the existing stock/demo imagery in `public/images/` with licensed, client-approved frames. The hero comparison uses illustrative pairs — swap each before with the real source frame of its after.
3. The contact form is a UI prototype — connect it to a form provider or inbox before launch.
4. Set the production domain in `app/layout.tsx` metadata (`metadataBase`).
5. Add real studio credits, verified testimonials, and legal content only after the owner supplies them.
6. Review image licensing, SEO metadata, and mobile layouts before deploy.

## Project structure

```text
app/
  about/page.tsx
  contact/page.tsx
  HDR/page.tsx
  portfolio/page.tsx
  services/page.tsx
  globals.css
  layout.tsx
  page.tsx
components/
  before-after-slider.tsx
  boot-loader.tsx
  contact-form.tsx
  faq-accordion.tsx
  footer.tsx
  header.tsx
  loader.tsx
  portfolio-gallery.tsx
  scroll-reveal.tsx
  service-video-player.tsx
data/
  comparisons.ts
  faq.ts
  services.tsx
  testimonials.ts
```

## Deployment

Deploy to Vercel or any platform that supports Next.js. Configure the production domain and form-provider environment variables in the deployment dashboard. Never commit API keys or secrets.
