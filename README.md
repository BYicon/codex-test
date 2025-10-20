# Next.js Starter Template

An opinionated Next.js 15 starter configured with the App Router, TypeScript and Tailwind CSS. Use it as the baseline for new projects and customise the structure to match your team's workflow.

## What's included

- **Product ready layout** – shared header and footer components, responsive spacing and sensible typography defaults.
- **Centralised configuration** – update metadata, navigation and external links in `src/config/site.ts`.
- **Environment management** – `.env.example` documents required variables for local and production builds.
- **Path aliases** – import modules from `@/` without complex relative paths.
- **Strict TypeScript** – strict mode is enabled by default for safer refactors.

## Getting started

1. **Install dependencies**

   ```bash
   npm install
   # or
   pnpm install
   # or
   yarn install
   ```

2. **Create your environment file**

   ```bash
   cp .env.example .env.local
   ```

   Update the values to match your deployment URLs and product name.

3. **Start the development server**

   ```bash
   npm run dev
   ```

   Visit [http://localhost:3000](http://localhost:3000) to verify the setup.

## Available scripts

| Script        | Description                                                                 |
| ------------- | --------------------------------------------------------------------------- |
| `npm run dev` | Start the Next.js development server with Turbopack.                        |
| `npm run build` | Create an optimised production build.                                       |
| `npm run start` | Run the production build locally.                                           |
| `npm run lint` | Lint the project using the flat ESLint configuration.                      |

## Project structure

```
src/
├─ app/                // App Router layouts, pages and API routes
├─ components/         // Reusable UI building blocks
├─ config/             // Metadata and global configuration
└─ lib/                // Helpers, utilities and cross-cutting logic
```

Tailwind CSS is configured globally in `src/app/globals.css`. Update the design tokens or bring your own component library to match your brand.

## Customising the template

- Update navigation, metadata and footer links in `src/config/site.ts`.
- Add new routes by creating folders inside `src/app` and exporting a React component from `page.tsx`.
- Extend the shared layout in `src/app/layout.tsx` with analytics, providers or global UI state.
- Keep sensitive credentials out of the repository by storing them in `.env.local` (not committed).

## Deployment

Deploy to [Vercel](https://vercel.com) or any platform that supports Node.js. Remember to copy the environment variables from `.env.example` into your hosting provider.
