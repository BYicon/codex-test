import Link from "next/link";

import { siteConfig } from "@/config/site";

export function SiteFooter() {
  return (
    <footer className="border-t bg-background">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-6 px-4 py-10 text-sm text-muted-foreground sm:px-6">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-center">
          <div className="max-w-md space-y-2">
            <p className="text-xs uppercase tracking-[0.3em] text-foreground/70">
              {siteConfig.shortName}
            </p>
            <p className="text-balance text-foreground/70">
              {siteConfig.description}
            </p>
          </div>
          <nav className="flex flex-wrap items-center gap-x-4 gap-y-2 text-foreground/70">
            {siteConfig.footerLinks.map((link) => (
              <FooterLink key={link.title} {...link} />
            ))}
          </nav>
        </div>
        <div className="flex flex-col gap-2 text-xs text-foreground/60 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
          <div className="flex items-center gap-3">
            {siteConfig.links.github ? (
              <a
                href={siteConfig.links.github}
                target="_blank"
                rel="noreferrer"
                className="font-medium text-foreground/80 transition-colors hover:text-foreground"
              >
                GitHub
              </a>
            ) : null}
            <Link
              href="/"
              className="font-medium text-foreground/80 transition-colors hover:text-foreground"
            >
              Back to top
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterLink({
  href,
  title,
  external,
}: {
  href: string;
  title: string;
  external?: boolean;
}) {
  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className="transition-colors hover:text-foreground"
      >
        {title}
      </a>
    );
  }

  return (
    <Link href={href} className="transition-colors hover:text-foreground">
      {title}
    </Link>
  );
}
