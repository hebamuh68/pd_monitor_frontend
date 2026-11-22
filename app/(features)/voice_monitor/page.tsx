"use client";
import {getVoiceFeatures} from '@/lib/actions/voice_monitor'
import { useState } from 'react';


export default function VoiceMonitorPage() {

  const [features, setFeatures] = useState<{ pitch: number; jitter: number; shimmer: number; hnr: number; gender: string } | null>(null)

  async function getVoice(e: React.ChangeEvent<HTMLInputElement>) {
    //.files is a list, because inputs can allow picking several files. [0] takes the first one.
    // keeps it from crashing if files is empty.
    const voice = e.target.files?.[0] 
    if (!voice) return

    const formData = new FormData()
    formData.append("voice", voice)

    setFeatures(await getVoiceFeatures(formData))
  }



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

        {/* the label is the styled box, clicking anywhere on it opens the hidden input */}
        <label className="flex w-full cursor-pointer flex-col items-center gap-2 rounded-xl border-2 border-dashed border-border bg-muted/30 px-6 py-12 hover:border-primary/50 hover:bg-muted/60">
          <span className="font-medium">Click to upload an audio file</span>
          <span className="text-sm text-muted-foreground">WAV or MP3 voice recording</span>
          <input onChange={getVoice} type='file' accept='audio/*' className="hidden"/>
        </label>

        {features && (
          <div className="mt-10 w-full text-left">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-lg font-semibold">Results</h2>
              <span className="rounded-full bg-secondary px-3 py-1 text-xs font-medium capitalize text-secondary-foreground">
                {features.gender}
              </span>
            </div>

            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
              <div className="rounded-xl border border-border bg-card p-4">
                <p className="text-sm text-muted-foreground">Pitch</p>
                <p className="mt-1 text-2xl font-semibold">{features.pitch.toFixed(1)} <span className="text-sm font-normal text-muted-foreground">Hz</span></p>
              </div>
              <div className="rounded-xl border border-border bg-card p-4">
                <p className="text-sm text-muted-foreground">Jitter</p>
                <p className="mt-1 text-2xl font-semibold">{features.jitter}</p>
              </div>
              <div className="rounded-xl border border-border bg-card p-4">
                <p className="text-sm text-muted-foreground">Shimmer</p>
                <p className="mt-1 text-2xl font-semibold">{features.shimmer}</p>
              </div>
              <div className="rounded-xl border border-border bg-card p-4">
                <p className="text-sm text-muted-foreground">HNR</p>
                <p className="mt-1 text-2xl font-semibold">{features.hnr} <span className="text-sm font-normal text-muted-foreground">dB</span></p>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
