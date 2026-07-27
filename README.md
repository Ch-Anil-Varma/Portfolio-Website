# Anil Varma Chitturi — Portfolio

A production-ready personal portfolio built with Next.js 15 (App Router), TypeScript, Tailwind CSS, and Framer Motion — designed for an AI & Robotics engineering student applying to top AI, robotics, and software companies.

## Tech stack

- **Next.js 15** (App Router, React Server Components where possible)
- **TypeScript**
- **Tailwind CSS v4**
- **Framer Motion** for animation
- **Lucide** for icons
- Fully responsive, dark/light mode with persisted preference, SEO metadata, JSON-LD, sitemap.xml and robots.txt

## Getting started

```bash
npm install
npm run dev
```

Visit `http://localhost:3000`.

## Build for production

```bash
npm run build
npm start
```

## Deploying to Vercel

1. Push this project to a GitHub repository.
2. Go to vercel.com/new and import the repository.
3. Vercel auto-detects Next.js — no extra configuration is required.
4. Click Deploy.

No environment variables are required for the current build. The contact form is client-side only (validates input and shows a success state); to make it actually send email, wire the `onSubmit` handler in `src/components/contact.tsx` to an API route or a service like Resend, Formspree, or EmailJS.

## Project structure

```
src/
  app/
    layout.tsx        Root layout, metadata, JSON-LD, theme script
    page.tsx           Assembles all page sections
    globals.css         Design tokens, utility classes
    sitemap.ts          Dynamic sitemap.xml
    robots.ts           Dynamic robots.txt
  components/
    header.tsx, footer.tsx, hero.tsx, about.tsx, skills.tsx,
    experience.tsx, projects.tsx, education.tsx, certifications.tsx,
    achievements.tsx, testimonials.tsx, blog.tsx, contact.tsx
    ui.tsx               Shared Reveal / SectionHeading / Card / Badge
    theme-provider.tsx   Dark/light mode context
    scroll-progress.tsx, back-to-top.tsx
    brand-icons.tsx      GitHub / LinkedIn icon components
  lib/
    data.ts    All resume content in one typed file — edit this to update the site
    utils.ts   Tailwind class helper
public/
  images/profile.jpeg                    Profile photo
  Anil_Varma_Chitturi_Resume.pdf          Downloadable resume (hero "Download resume" button)
```

## Editing content

Almost everything you'll want to change (name, projects, skills, experience, education, certifications, achievements, testimonials) lives in `src/lib/data.ts`. Update the arrays there and the whole site updates automatically — no need to touch individual components for text changes.

To replace the profile photo or resume file, drop new files into `public/images/profile.jpeg` and `public/Anil_Varma_Chitturi_Resume.pdf` (keeping the same filenames), or update the paths in `src/lib/data.ts`.

## Notes

- Fonts use a system font stack (no external font requests at build time), so builds are fast and do not depend on network access. Swap in a Google Font via `next/font/google` in `src/app/layout.tsx` if you would like a specific typeface.
- The "Case study" expandable panel, project filtering, testimonials carousel, and contact form validation are all built from scratch with Framer Motion and React state — no extra UI library required.
- Social/GitHub links, testimonials, and blog posts are placeholders — update the URLs and copy in `src/lib/data.ts` once you have live links.
