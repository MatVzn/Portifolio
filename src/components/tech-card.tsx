'use client'

import Image from "next/image";
import { useState } from "react";

interface TechCardProps {
    description: string
    name: string
    color: string
    imgName: string
}

export function TechCard({ description, name, color, imgName }: TechCardProps) {
    const [isHovered, setIsHovered] = useState(false)

    const style = {
        '--border-color': isHovered ? color : '#404040',
        boxShadow: isHovered && `20px 10px 70px -25px ${color}`,
    } as React.CSSProperties;

    return (
        <div 
            style={style} 
            className="shadow-lg shadow-zinc-100/5 select-none border-[var(--border-color)] w-full max-h-[84px] gap-4 flex flex-row items-center justify-start p-4 bg-neutral-950 rounded-lg border-[1px] hover:bg-neutral-700/20 transition-all duration-700"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <Image
                src={"/logos/" + imgName + ".png"}
                alt={name + "-logo"}
                width={50}
                height={50}
                className="rounded-md"
            />
            <div className="flex-1 min-w-0">
                <h3 className='capitalize text-zinc-200 font-bold text-lg'>
                    {name}
                </h3>
                <p className='text-zinc-400 text-sm truncate'>{description}</p>
            </div>
        </div>
    )
}