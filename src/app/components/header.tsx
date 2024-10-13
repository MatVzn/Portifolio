'use client'

import { cn } from "@/lib/utils";
import { ChevronLeftIcon, CircleUserRoundIcon, FolderIcon, HomeIcon, MailIcon } from "lucide-react";
import { useState } from "react";
import { NavLink } from "./nav-link";

export function Header() {

    const [isModalOpen, setIsModalOpen] = useState<boolean>(false)

    function mobileModalSwitch() {
        setIsModalOpen(!isModalOpen)
    }

    return (
        <>
        <div className={cn(
            "z-10 fixed top-[-200px] transition-all duration-500 bg-neutral-950 w-full lg:hidden",
            {
                'top-16' : isModalOpen,
            }
        )}>
            <nav className={cn(
                "opacity-0 transition-all duration-200 delay-0",
                {
                    "opacity-100 delay-200" : isModalOpen
                }
            )}>
                <NavLink onClick={mobileModalSwitch} href="/">
                    <HomeIcon strokeWidth="2px" size={18}/>
                    Home
                </NavLink>
                <NavLink onClick={mobileModalSwitch} href="#about">
                    <CircleUserRoundIcon strokeWidth="2px" size={18}/>
                    Sobre
                </NavLink>
                <NavLink onClick={mobileModalSwitch} href="#projects">
                    <FolderIcon strokeWidth="2px" size={18}/>
                    Projetos
                </NavLink>
                <NavLink onClick={mobileModalSwitch} href="#contact">
                    <MailIcon strokeWidth="2px" size={18}/>
                    Contato 
                </NavLink>
            </nav>
        </div>

        <header className="z-20 bg-neutral-950 fixed w-full h-[66px] top-0 pl-6 border-b-[1px] border-zinc-700 items-center justify-between flex flex-row lg:hidden">
            
            <a href="/" className="text-xl text-center font-medium hover:text-green-500 transition-all duration-200">
                <h3>Matteo Vanzan</h3>
            </a>

            <div className="flex flex-row">
                <button onClick={mobileModalSwitch} className="rounded-l-full fixed top-0 right-0 border-[1px] border-r-0 border-neutral-700 hover:bg-neutral-700/20 text-zinc-400 hover:text-zinc-200 transition-transform duration-200">
                    <ChevronLeftIcon className={cn(
                        "transition-all duration-300 p-5 size-full rounded-l-full",
                        {
                            "-rotate-90 rounded-t-full translate-y-[-3px]" : isModalOpen
                        }
                    )}/>
                    <ChevronLeftIcon className={cn(
                        "opacity-100 transition-all duration-300 top-[1px] fixed size-16 p-5",
                        {
                            "opacity-100 top-[4px] right-[0px] -rotate-[270deg]" : isModalOpen
                        }
                    )}/>
                </button>
            </div>
            
        </header>
        
        <span id='about' className="h-[65px] w-full lg:h-[8px]"></span>
        {/*Espaço vazio para manter a header na altura correta no topo da pagina*/}
        </>
    )
}