import Link from "next/link"
import { ComponentProps, ReactNode } from "react"

interface IconButtonProps extends ComponentProps<'a'> {
    href: string
    children: ReactNode
}

export function IconButton({ href, children, ...props}: IconButtonProps) {
    return(
        <Link href={href} className="rounded-full" {...props}>
            <button className='shadow-[1px_2px_8px_-6px#FFF] hover:shadow-[1px_2px_8px_-4px#FFF] border-[1px] rounded-full border-neutral-700 p-4 hover:bg-neutral-700/20 text-zinc-400 hover:text-zinc-200 fill-zinc-400 hover:fill-zinc-200 transition-all duration-200'>
                {children}
            </button>
        </Link>
    )
}