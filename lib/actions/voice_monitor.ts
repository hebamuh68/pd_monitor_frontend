'use server'


export async function getVoiceFeatures(audioPath: string){
    const res = await fetch(
        `${process.env.BACKEND_URL}/voice_monitor/`,
        {
        method: "POST",
        headers:{"Content-Type":"application/json"},
        body: JSON.stringify({audio:audioPath}),
        }
    )
    if (!res.ok) throw new Error(`Backend error ${res.status}`)
    return res.json() as Promise<{ pitch: number; jitter: number; shimmer: number; hnr: number; gender: string }>
}