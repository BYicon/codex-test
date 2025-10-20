import Link from "next/link";

import { siteConfig } from "@/config/site";

const quickstart = [
  {
    title: "Install dependencies",
    description: "pnpm install | npm install | yarn install",
  },
  {
    title: "Start the dev server",
    description: "pnpm dev (or your preferred package manager)",
  },
  {
    title: "Create your first route",
    description: "Drop a new folder in src/app and export a React component.",
  },
];

const structure = [
  {
    title: "app/",
    description: "Route handlers, server components and layout composition live here.",
  },
  {
    title: "components/",
    description: "UI building blocks organised by domain. Includes reusable layout primitives.",
  },
  {
    title: "config/",
    description: "Centralised metadata, navigation and integration settings.",
  },
  {
    title: "lib/",
    description: "Utility functions and shared helpers. Start by extending utils.ts.",
  },
];

const nextSteps = [
  {
    title: "Connect your design system",
    description:
      "Replace the placeholder styles with tokens from your design system or favourite component library.",
  },
  {
    title: "Wire up analytics",
    description:
      "Drop your preferred analytics script in src/app/layout.tsx and keep environment variables in .env.local.",
  },
  {
    title: "Ship confidently",
    description:
      "Use the built-in lint command and add tests to guarantee quality before every deployment.",
  },
];

export default function Home() {
  return (
    <div className="space-y-20">
      <section className="space-y-6 text-center sm:text-left">
        <p className="text-xs font-semibold uppercase tracking-[0.4em] text-muted-foreground">
          {siteConfig.shortName}
        </p>
        <h1 className="text-balance text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
          A production-ready starting point for your next Next.js project.
        </h1>
        <p className="mx-auto max-w-2xl text-balance text-lg text-muted-foreground sm:mx-0">
          Opinionated defaults, modern tooling and clear documentation so you can focus on building features—not
          boilerplate.
        </p>
        <div className="flex flex-col items-center gap-3 sm:flex-row sm:items-start">
          <Link
            href="https://nextjs.org/docs"
            className="inline-flex items-center justify-center rounded-full bg-foreground px-5 py-2 text-sm font-medium text-background transition-colors hover:bg-foreground/90"
            target="_blank"
            rel="noreferrer"
          >
            Read the Next.js docs
          </Link>
          {siteConfig.links.github ? (
            <Link
              href={siteConfig.links.github}
              className="inline-flex items-center justify-center rounded-full border border-border px-5 py-2 text-sm font-medium text-foreground transition-colors hover:border-foreground/40 hover:text-foreground"
              target="_blank"
              rel="noreferrer"
            >
              View source on GitHub
            </Link>
          ) : null}
        </div>
      </section>

      <section className="space-y-8">
        <SectionTitle
          eyebrow="Kick things off"
          heading="Quickstart workflow"
          description="Follow this lightweight checklist to get productive immediately."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {quickstart.map((item) => (
            <Card key={item.title} {...item} />
          ))}
        </div>
      </section>

      <section className="space-y-8" id="components">
        <SectionTitle
          eyebrow="Organise with intent"
          heading="Suggested project structure"
          description="Start opinionated, adapt as you grow. These directories cover the most common needs."
        />
        <div className="grid gap-6 md:grid-cols-2">
          {structure.map((item) => (
            <Card key={item.title} {...item} />
          ))}
        </div>
      </section>

      <section className="space-y-8">
        <SectionTitle
          eyebrow="Next steps"
          heading="Ship features, not boilerplate"
          description="Extend the template with your own data sources, UI library and deployment pipeline."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {nextSteps.map((item) => (
            <Card key={item.title} {...item} />
          ))}
        </div>
      </section>
    </div>
  );
}

function SectionTitle({
  eyebrow,
  heading,
  description,
}: {
  eyebrow: string;
  heading: string;
  description: string;
}) {
  return (
    <div className="space-y-3 text-center sm:text-left">
      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">{eyebrow}</p>
      <h2 className="text-pretty text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">{heading}</h2>
      <p className="text-pretty text-base text-muted-foreground">{description}</p>
    </div>
  );
}

function Card({ title, description }: { title: string; description: string }) {
  return (
    <div className="flex h-full flex-col gap-3 rounded-2xl border border-border bg-card/40 p-6 text-left shadow-sm shadow-black/5">
      <h3 className="text-lg font-semibold text-foreground">{title}</h3>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  );
}
