'use client'

import { EllipsisVerticalIcon, ExternalLinkIcon, XIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { GithubIcon } from "../../../public/github";
import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";

interface ProjectCardProps {
  name: string
  description: string
  imagePath: string
  year: string
  stack: string[]
  pageLink: string
  githubLink: string
}

export function ProjectCard({ name, description, imagePath, year, stack, pageLink, githubLink } : ProjectCardProps) {

    let StackQuantity = stack.length

    const [isDescriptionOpen, setIsDescriptionOpen] = useState<boolean>(false)
    const [height, setHeight] = useState<string | number>('auto');
    const descriptionRef = useRef<HTMLParagraphElement>(null);

    function descriptionSwitch() {
      setIsDescriptionOpen(!isDescriptionOpen)
    }

    useEffect(() => {
      if (descriptionRef.current) {
        if (isDescriptionOpen) {
          setHeight(descriptionRef.current.scrollHeight);
        } else {
          setHeight(0);
        }
      }
    }, [isDescriptionOpen]);

    return (
        <div className='overflow-hidden h-auto transition-all duration-500 ease-in-out w-full bg-zinc-800/20 max-w-80 flex flex-col items-center rounded-3xl gap-5'>
              
          <div className='object-cover relative overflow-hidden w-full h-44 rounded-t-3xl'>
            <Image
              src={imagePath}
              alt={name + "-image"}
              className='object-cover object-top transition-all duration-300'
              sizes='500'
              fill
            />
          </div>

          <div className='flex flex-col w-full px-6 pb-6'>

            <div>
              <div className="flex flex-row justify-between items-center">
                <h1 className='text-2xl text-center'>{name}</h1>
                <button  
                  className={cn(
                    'flex justify-center items-center rounded-full hover:bg-zinc-500/10 text-zinc-200 h-auto p-1 animate-pulse hover:text-zinc-200 hover:animate-none transition-all duration-200',
                    {
                    'animate-none text-zinc-400' : isDescriptionOpen
                    }
                  )}
                  onClick={descriptionSwitch}
                >
                  <EllipsisVerticalIcon className={cn(
                    "opacity-100 transition-all duration-200 rounded-full size-4 absolute z-20",
                    {
                      "opacity-0 -rotate-45" : isDescriptionOpen
                    }
                  )}/>
                  <XIcon className={cn(
                    "transition-all opacity-0 rotate-45 duration-300 rounded-full size-4",
                    {
                      "opacity-100 -rotate-200" : isDescriptionOpen
                    }
                  )}/>
                </button>
              </div>

              <p style={{ height }} ref={descriptionRef} className={cn(
                "opacity-0 mb-2 duration-500 text-zinc-400 text-base overflow-hidden ease-in-out",
                {
                  "opacity-100 mt-4 mb-2" : isDescriptionOpen
                }
              )}>
                {description}
              </p>
            </div>

            <div className="flex flex-col gap-2 mb-4 mt-2">
              <p className="flex items-center justify-center py-0.5 font-semibold text-base text-zinc-200 border-[1px] border-neutral-700 rounded-full">
                {year}
              </p>

              <span className="grid grid-cols-2 flex-grow gap-2">
                {(StackQuantity % 2 === 0 ? 
                  stack.map((tech) => (
                    <div className="rounded-full flex items-center justify-center bg-green-900/30 select-none hover:bg-green-900/50 transition-all duration-200 text-green-500 px-3 w-auto" key={tech}>
                      {tech}
                    </div>
                  )) : (() => {
                    let x = 0;
                    let content = []
                    while (x < StackQuantity) {
                      {x === StackQuantity - 1 
                        ? content.push(
                          <div className="rounded-full flex col-span-2 items-center justify-center bg-green-900/30 select-none hover:bg-green-900/50 transition-all duration-200 text-green-500 px-3 w-auto" key={stack[x]}>
                            {stack[x]} {/* Última tech da lista */}
                          </div>
                        ) 
                        : content.push(
                          <div className="rounded-full flex items-center justify-center bg-green-900/30 select-none hover:bg-green-900/50 transition-all duration-200 text-green-500 px-3 w-auto" key={stack[x]}>
                            {stack[x]}
                          </div>
                        ) 
                      }
                      x++
                    }
                    return content;
                  })()
                )}
              </span>

            </div>

            <div className='flex flex-row gap-2 items-center w-full'>

              <Link href={pageLink} target="_blank" className="rounded-full">
                <button 
                  disabled={pageLink === "none"} 
                  className={cn(
                    'flex justify-center items-center bg-neutral-950 rounded-full p-3 border-[1px] border-neutral-700 text-zinc-400 hover:bg-neutral-900/20 hover:text-zinc-200 transition-all duration-200',
                    {
                      'opacity-60 cursor-not-allowed hover:bg-neutral-950 hover:fill-zinc-400' : pageLink === "none"
                    }
                  )}
                >
                  <ExternalLinkIcon className='size-4'/> 
                </button>
              </Link>

              <Link href={githubLink} target="_blank" className="rounded-full">
                <button 
                  disabled={githubLink === "none"} 
                  className={cn(
                    'flex justify-center items-center bg-neutral-950 rounded-full p-3 border-[1px] border-neutral-700 fill-zinc-400 hover:bg-neutral-900/20 hover:fill-zinc-200 transition-all duration-200',
                    {
                      'opacity-60 cursor-not-allowed hover:bg-neutral-950 hover:fill-zinc-400' : githubLink === "none"
                    }
                  )}
                >
                  <div className="size-4 flex justify-center items-center">
                    <GithubIcon/> 
                  </div>
                </button>
              </Link>

            </div>

          </div>
        </div>
    )
}