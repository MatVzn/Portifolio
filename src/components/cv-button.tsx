'use client'

import { cn } from "@/lib/utils"
import { ComponentProps, useState } from "react"
import { DownloadIcon } from "../../public/animated-icons/download-icon";

interface CvButtonProps extends ComponentProps<'a'> {}

export function CvButton({ href, children, type, ...props } : CvButtonProps) {

    const [isClicked, setIsClicked] = useState(false);
    const [isHovered, setIsHovered] = useState(false)

    function handleCopy() {
        navigator.clipboard.writeText("matteovoleite@gmail.com")
        setIsClicked(true)
        setTimeout(() => {
            setIsClicked(false);
        }, 1000);
    }

    return (
        <a 
            {...props} 
            id="cvButton" 
            href="/curriculo.pdf" 
            download="MatteoCurrículo.pdf"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <button     
                onClick={handleCopy}
                disabled={isClicked} 
                className={cn(
                    "shadow-[1px_2px_8px_-6px#FFF] hover:shadow-[1px_2px_8px_-4px#FFF] h-9 w-28 overflow-hidden relative text-sm items-center justify-start border-neutral-700 py-1 px-3 border-[1px] flex flex-row gap-2 hover:bg-neutral-700/20 text-zinc-400 hover:text-zinc-200 rounded-full transition-all duration-200",
                    {
                        "bg-green-900/20 text-green-500 hover:bg-green-900/20 hover:text-green-500" : isClicked
                    }
                )}>
                <DownloadIcon isHovered={isHovered}/> 
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