'use client'

import { cn } from "@/lib/utils"
import { DownloadIcon } from "lucide-react"
import { ComponentProps, useState } from "react"

interface CvButtonProps extends ComponentProps<'a'> {}

export function CvButton({ href, children, type, ...props } : CvButtonProps) {

    const [isClicked, setIsClicked] = useState(false);

    function handleCopy() {
        navigator.clipboard.writeText("matteovoleite@gmail.com")
        setIsClicked(true)
        setTimeout(() => {
            setIsClicked(false);
        }, 1000);
    }

    return (
        <a {...props} href="/curriculo.pdf" download="MatteoCurrículo.pdf">
            <button     
                onClick={handleCopy}
                disabled={isClicked} 
                className={cn(
                    "h-9 w-28 overflow-hidden relative text-sm items-center justify-start border-neutral-700 py-1 px-3 border-[1px] flex flex-row gap-2 hover:bg-neutral-700/20 text-zinc-400 hover:text-zinc-200 rounded-full",
                    {
                        "bg-green-900/20 text-green-500 hover:bg-green-900/20 hover:text-green-500" : isClicked
                    }
                )}>
                <DownloadIcon className="w-4 transition-all duration-300"/> 
                <span className={cn(
                    "flex-1 pt-0.5 truncate absolute translate-x-6 transition-all duration-300",
                    {
                        "opacity-0 -translate-y-10" : isClicked
                    }
                )}>
                    Baixar CV
                </span>
                <span className={cn(
                    "flex-1 pt-0.5 truncate absolute translate-x-6 translate-y-10 opacity-0 transition-all duration-300",
                    {
                        "opacity-100 translate-y-0" : isClicked
                    }
                )}>
                    Baixado!
                </span> 
            </button>
        </a>
    )
}