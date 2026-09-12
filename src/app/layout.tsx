import type { Metadata } from 'next'
import './globals.css'

import { Catamaran, Geist } from 'next/font/google'
import { SnowfallComponent } from '@/components/ui/SnowFall'
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const catamaran = Catamaran({
  subsets: ['latin'],
  weight: ['200', '300', '400', '600', '700', '900'],
  variable: '--font-catamaran',
})


export const metadata: Metadata = {
  title: 'MatVzn',
  description: "Matteo's portfolio.",
  icons: {
    icon: ['/favicon.ico'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br" className={cn("scroll-smooth", catamaran.className, "font-sans", geist.variable)}>
      <body className='antialiased bg-zinc-950 text-zinc-200'>
        <SnowfallComponent />
        {children}
      </body>
    </html>
  )
}
