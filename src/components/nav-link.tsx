import { ComponentProps, ReactNode } from "react"
import Link from 'next/link'
import { useState } from "react";
import React from "react";

interface LinkProps extends ComponentProps<'a'> {
    href: string
    children: ReactNode
}

export function NavLink({ href, children, ...props }: LinkProps) {

    return(
        <Link 
            href={href} {...props} 
            className="flex gap-3 items-center py-5 px-7 font-semibold text-zinc-400 border-b-[1px] border-neutral-700 hover:bg-neutral-700/20 hover:text-zinc-200 w-full duration-200"
        >
            {children}
        </Link>
    )
}