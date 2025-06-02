'use client'

import { cn } from "@/lib/utils";
import { useState } from "react";
import { NavLink } from "./nav-link";
import { MenuIcon } from "../../public/animated-icons/menu-icon";
import { UserIcon } from "../../public/animated-icons/user-icon";
import { GripIcon } from "../../public/animated-icons/grip-icon";
import { AtSignIcon } from "../../public/animated-icons/at-sign-icon";

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
                <NavLink id="aboutIcon2" href="#about">
                    <UserIcon parentSelector="#aboutIcon2"/>
                    Sobre
                </NavLink>
                <NavLink id="projectsButton2" href="#projects">
                    <GripIcon parentSelector="#projectsButton2"/>
                    Projetos
                </NavLink>
                <NavLink id="contactButton2" href="#contact">
                    <AtSignIcon parentSelector="#contactButton2"/>
                    Contato 
                </NavLink>
            </nav>
        </div>

        <header className="z-20 bg-neutral-950 fixed w-full h-[66px] top-0 pl-6 border-b-[1px] border-t-[1px] border-zinc-700 items-center justify-between flex flex-row lg:hidden">
            
            <a href="/" className="text-xl text-center font-medium hover:text-sky-500 transition-all duration-200">
                <h3>Matteo Vanzan</h3>
            </a>

            <div className="flex flex-row">
                <button onClick={mobileModalSwitch} className="p-[18px] flex flex-col rounded-l-full fixed top-0 right-0 border-[1px] border-r-0 border-neutral-700 hover:bg-neutral-700/20 text-zinc-400 hover:text-zinc-200 transition-transform duration-200">
                    <MenuIcon isModalOpen={isModalOpen}/>
                </button>
            </div>
            
        </header>
        
        <span id='about' className="h-[65px] w-full lg:h-[8px]"></span>
        {/*Espaço vazio para manter a header na altura correta no topo da pagina*/}
        </>
    )
}