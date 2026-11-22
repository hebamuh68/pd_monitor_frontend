'use server'


export async function getVoiceFeatures(formData: FormData){
    const voice = formData.get('voice')
    const res = await fetch(
        `${process.env.BACKEND_URL}/voice_monitor/`,
        {
        method: "POST",
        body: formData,
        }
    )
    if (!res.ok) throw new Error(`Backend error ${res.status}`)
    return res.json() as Promise<{ pitch: number; jitter: number; shimmer: number; hnr: number; gender: string }>
}