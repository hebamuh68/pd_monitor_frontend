import Link from "next/link";
import {ArrowRight, BookOpen } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import {Navbar} from "@/components/ui/navbar"


export default function HomePage() {
  return (
    <div className="min-h-dvh bg-background text-foreground">
      <Navbar />

      <main className="mx-auto flex max-w-3xl flex-col items-center px-6 py-24 text-center sm:py-32">
        <span className="mb-4 inline-flex items-center rounded-full border border-border px-3 py-1 text-xs font-medium text-muted-foreground">
          System Control Panel
        </span>

        <h1 className="text-4xl font-bold tracking-tight text-balance sm:text-5xl">
          Welcome Back, Developer
        </h1>

        <p className="mt-4 max-w-xl text-lg text-muted-foreground text-pretty">
          Select a platform segment or system track below to monitor active
          systems or view reference guides.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link href="/voice_monitor" className={buttonVariants({ size: "lg" })}>
            Go to Voice Monitor
            <ArrowRight />
          </Link>
          <Link
            href="/docs"
            className={buttonVariants({ variant: "outline", size: "lg" })}
          >
            <BookOpen />
            Open Documentation
          </Link>
        </div>
      </main>
    </div>
  );
}
