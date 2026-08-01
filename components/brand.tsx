import Link from "next/link"
import { AudioLines } from "lucide-react";


export function Brand(){
    return(
        <div>
            <Link href="/" className="flex items-center gap-2.5">
            <span className="grid size-8 place-items-center rounded-full bg-gradient-to-br from-primary to-[#608bc1] text-primary-foreground shadow-sm">
                <AudioLines className="size-4" />
            </span>
            <span className="text-sm font-semibold tracking-tight">
                PD Monitor
            </span>
            </Link>
        </div>
    )
}