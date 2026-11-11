# karthikbabu.in

Personal site for independent R&D: benchmarks, research tracks, and a lab notebook.

Built with [Astro](https://astro.build) (static output), plain CSS, and light Three.js motion on the home hero. No analytics.

## Local development

```bash
npm install
npm run dev
```

Build:

```bash
npm run build
npm run preview
```

## Add a lab-notebook entry

1. Create one Markdown file in `src/content/notebook/`:

   `YYYY-MM-DD-short-slug.md`

2. Frontmatter (required fields):

```md
---
title: Short precise title
date: 2026-03-15
track: A
summary: One or two sentences for cards and RSS.
link: https://github.com/karthikjohnbabu/example
---
```

- `track` must be `A`, `B`, `C`, or `D`
- `link` is optional

3. Body — use these sections:

```md
## What I ran

...

## What I measured

...

## What I found

...
```

4. Save and rebuild (or push). No other files need editing. The home page, notebook index, RSS feed, and sitemap pick it up from the content collection.

## Research tracks

Track copy lives in `src/content/tracks/` (`a.md` … `d.md`). Edit frontmatter there to change letter, title, experiment, builds-toward, or status.

## Deploy (GitHub Pages)

1. Create a GitHub repo (for example `karthikjohnbabu/karthikbabu.in` or a user/org Pages repo).
2. Push this project to the `main` branch.
3. In the repo: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
4. The workflow in `.github/workflows/deploy.yml` builds on every push to `main` and publishes `dist/`.
5. `public/CNAME` already contains `karthikbabu.in`.

### DNS at your registrar

Point the apex domain at GitHub Pages. Exact records:

| Type  | Host / Name | Value                 | TTL  |
| ----- | ----------- | --------------------- | ---- |
| A     | `@`         | `185.199.108.153`     | 3600 |
| A     | `@`         | `185.199.109.153`     | 3600 |
| A     | `@`         | `185.199.110.153`     | 3600 |
| A     | `@`         | `185.199.111.153`     | 3600 |
| AAAA  | `@`         | `2606:50c0:8000::153` | 3600 |
| AAAA  | `@`         | `2606:50c0:8001::153` | 3600 |
| AAAA  | `@`         | `2606:50c0:8002::153` | 3600 |
| AAAA  | `@`         | `2606:50c0:8003::153` | 3600 |
| CNAME | `www`       | `<user>.github.io`    | 3600 |

Replace `<user>` with your GitHub username (for example `karthikjohnbabu.github.io`).

Then in the GitHub repo Pages settings, set the custom domain to `karthikbabu.in` and wait for DNS + HTTPS to become active (can take minutes to hours).

## Copy rules (public text)

Avoid the words “test”, “learning”, “learn”, and “learner” in public copy. Prefer: benchmark, evaluate, measure, research, R&D, experiment.
