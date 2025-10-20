import Link from "next/link";

import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex h-16 w-full max-w-5xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="text-sm font-semibold uppercase tracking-[0.3em] text-foreground/80">
          {siteConfig.shortName}
        </Link>
        <nav className="flex items-center gap-3 text-sm text-foreground/80">
          {siteConfig.mainNav.map((item) => (
            <NavLink key={item.title} {...item} />
          ))}
        </nav>
      </div>
    </header>
  );
}

function NavLink({
  href,
  title,
  external,
}: {
  href: string;
  title: string;
  external?: boolean;
}) {
  const className = cn(
    "rounded-full px-3 py-1 font-medium transition-colors",
    "hover:bg-foreground/10 hover:text-foreground"
  );

  if (external) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className={className}>
        {title}
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {title}
    </Link>
  );
}
