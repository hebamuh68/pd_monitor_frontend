import Link from "next/link";
import { FileText } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";


const topics = [
  { href: "/docs/pd", label: "PD" },
  { href: "/docs/human_voice_features", label: "Human Voice Features" },
  { href: "/docs/voice_monitor", label: "PD Voice Monitor" },
];


export default function DocsPage() {
  return (
    <div className="min-h-dvh bg-background text-foreground">
      <main className="mx-auto flex max-w-3xl flex-col items-center px-6 py-24 text-center sm:py-32">
        <span className="mb-4 inline-flex items-center rounded-full border border-border px-3 py-1 text-xs font-medium text-muted-foreground">
          Docs
        </span>

        <h1 className="text-4xl font-bold tracking-tight text-balance sm:text-5xl">
          PD &amp; PD Voice Monitor
        </h1>

        <p className="mt-4 mb-4 max-w-xl text-lg text-muted-foreground text-pretty">
          Check our Documentations about:
        </p>

        <div className="flex gap-4">
            {topics.map((topic) => (
              <Link
                key={topic.href}
                href={topic.href}
                className={buttonVariants({ variant: "secondary", size: "lg" })}              >
                <FileText className="size-4" />
                {topic.label}
              </Link>
            ))}
        </div>

      </main>
    </div>
  );
}
