export type NavigationItem = {
  title: string;
  href: string;
  external?: boolean;
};

export const siteConfig = {
  name: process.env.NEXT_PUBLIC_APP_NAME ?? "Next.js Starter",
  shortName: "Next Starter",
  description:
    "A batteries-included Next.js template with sensible defaults for modern product teams.",
  url: process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000",
  keywords: [
    "Next.js",
    "React",
    "TypeScript",
    "Starter",
    "Template",
  ],
  authors: [{ name: "Your Team" }],
  ogImage: "/og-image.svg",
  mainNav: [
    { title: "Documentation", href: "https://nextjs.org/docs", external: true },
    { title: "Routing", href: "https://nextjs.org/docs/app", external: true },
    { title: "Components", href: "#components" },
  ] satisfies NavigationItem[],
  footerLinks: [
    {
      title: "Next.js",
      href: "https://nextjs.org/learn",
      external: true,
    },
    {
      title: "Tailwind CSS",
      href: "https://tailwindcss.com/docs",
      external: true,
    },
    {
      title: "Vercel",
      href: "https://vercel.com",
      external: true,
    },
  ] satisfies NavigationItem[],
  links: {
    github: "https://github.com/your-org/nextjs-starter",
  },
};

export type SiteConfig = typeof siteConfig;
