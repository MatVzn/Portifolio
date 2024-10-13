import type { Metadata } from 'next'
import './globals.css'

import { Catamaran } from 'next/font/google'

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
    <html lang="pt-br" className={`${catamaran.className} scroll-smooth scroll-pt-16 scroll-pl-44 overflow-x-hidden lg:scroll-pt-0`}>
      <body className='antialiased bg-neutral-950 text-zinc-200'>
        {children}
      </body>
    </html>
  )
}