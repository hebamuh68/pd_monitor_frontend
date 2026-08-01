import Link from "next/link";
import { FileText } from "lucide-react";
import {Brand} from "@/components/brand"

const topics = [
  { href: "/docs/pd", label: "PD" },
  { href: "/docs/human_voice_features", label: "Human Voice Features" },
  { href: "/docs/voice_monitor", label: "PD Voice Monitor" },
];

export function Sidebar({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-dvh bg-background text-foreground">
      <aside className="flex w-64 shrink-0 flex-col border-r border-border p-4">
        <Link
          href="/docs"
          className="mb-3 block px-3 text-sm font-semibold tracking-tight"
        >
          Documentation
        </Link>

        <nav className="flex flex-col gap-1">
          {topics.map((topic) => (
            <Link
              key={topic.href}
              href={topic.href}
              className="flex items-center gap-2 rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            >
              <FileText className="size-4" />
              {topic.label}
            </Link>
          ))}
        </nav>

        <div className="mt-auto flex flex-col gap-3 px-3 text-sm font-semibold tracking-tight">
            <Brand />
        </div>
      </aside>

      <main className="flex-1 p-8">{children}</main>
    </div>
  );
}
