import Link from "next/link";
import { AudioLines } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/voice_monitor", label: "Voice Monitor" },
  { href: "/docs", label: "Docs" },
];

function Navbar() {
  return (
    <div className="sticky top-0 z-50 px-4 pt-4">
      <nav className="relative mx-auto flex h-14 max-w-5xl items-center justify-between rounded-full border border-border/60 bg-background/70 pr-2 pl-4 shadow-lg shadow-primary/5 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60">
        {/* Brand */}
        <Link href="/" className="flex items-center gap-2.5">
          <span className="grid size-8 place-items-center rounded-full bg-gradient-to-br from-primary to-[#608bc1] text-primary-foreground shadow-sm">
            <AudioLines className="size-4" />
          </span>
          <span className="text-sm font-semibold tracking-tight">
            PD Monitor
          </span>
        </Link>

        {/* Center links (absolutely centered, hidden on mobile) */}
        <div className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-1 sm:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-full px-4 py-1.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* CTA */}
        <Link
          href="/voice_monitor"
          className={cn(buttonVariants({ size: "sm" }), "rounded-full px-4")}
        >
          Get Started
        </Link>
      </nav>
    </div>
  );
}

export { Navbar };
