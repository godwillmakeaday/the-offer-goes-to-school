# The Offer Goes to School

An editorial research publication exploring the architecture of exchange. Built as a fast static site with durable routes and a Vercel deployment configuration.

## Design and build prompt

Design a serious, mobile-first intellectual publication called **The Offer Goes to School**. Treat it as a living research system rather than a blog, consulting page, sales site, founder brand or conventional university website. Lead with the question: “What happens when the offer itself becomes the object of study?” Establish the proposition: “A market does not begin with a product. It begins with an offer.”

Use editorial modernism: warm ivory paper, deep charcoal ink, oxblood annotation, fine black rules, generous whitespace, a large scholarly display serif and a restrained functional sans. The title may be playful, but the scholarship must feel rigorous. Prefer typography, definitions, research indices, status labels, margin notes and conceptual diagrams over decorative photography. Make the offer map and research taxonomy feel like a laboratory archive.

Build a rich homepage and durable routes for foundational theory, the founding manifesto, Offer Autopsy method, regulated offer convergence in professional services, the public research agenda and About. Every theory article should show its working definition, research status, version, date and related concepts. Navigation must be keyboard accessible, responsive and optimized for reading. Avoid gradients, stock imagery, startup clichés, generic cards and a dominant newsletter or founder portrait.

The result should make a new visitor think: “I thought offers were merely a marketing concept. I had not realized there was this much to investigate.”

## Local build

```bash
npm run build
```

The deployable output is generated in `dist/`.


## Applied School redesign — October 2026

The publication now has a research-led, editable **product library** at `/library` and a functional **workbench** at `/workbench`. The commercial architecture is data-driven in `studio.js` (catalogue entries, category filters, detail pages and states). Editorial visual treatments are in `studio.css`.

### Current release status
- **Available:** Offer Canvas and Price & Margin Calculator, both entirely in-browser and free to use. The calculator is a scenario tool, not professional financial advice.
- **In development:** all other catalogue items. These are product specifications, **not purchasable inventory**. Do not attach a checkout or state a product is on sale until its deliverable, price, terms, fulfilment and support have been verified.
- **No payment integration or customer-data collection** is part of this redesign.

### Follow-up release gates
1. User-test tools on mobile and desktop, including keyboard/screen-reader navigation.
2. Add meaningful downloadable deliverables, support terms, refund rules and payment integration only to products that actually exist.
3. Prioritise the catalogue via interviews and measured demand; avoid conflating planned items with commercial inventory.
4. Add page-level meta/SSR or static route generation if organic search indexing becomes critical; this remains a JavaScript-rendered SPA.

### Build and architecture

Run `npm run build`. Vercel serves `dist/` and rewrites dynamic routes to `index.html`. There are no external application dependencies, no hidden accounts, and no backend.
