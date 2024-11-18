import { ReactNode } from "react"

interface TitleProps {
    children: ReactNode
}

export function Title({ children }: TitleProps) {
    return (
        <h1 className='mt-10 flex items-center justify-center text-3xl font-semibold'>
            {children}
        </h1>
    )
}