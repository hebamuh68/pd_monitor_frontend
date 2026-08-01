
export default function VoiceMonitorPage() {
  return (
    <div className="min-h-dvh bg-background text-foreground">
      <main className="mx-auto flex max-w-3xl flex-col items-center px-6 py-24 text-center sm:py-32">
        <span className="mb-4 inline-flex items-center rounded-full border border-border px-3 py-1 text-xs font-medium text-muted-foreground">
          Voice Analysis
        </span>

        <h1 className="text-4xl font-bold tracking-tight text-balance sm:text-5xl">
          PD Voice Features Detection
        </h1>

        <p className="mt-4 mb-8 max-w-xl text-lg text-muted-foreground text-pretty">
          Upload your dataset audio files, and monitor the changes in PD
          patients voices over time.
        </p>

      </main>
    </div>
  );
}
