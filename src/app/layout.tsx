import type { Metadata } from 'next'
import localFont from 'next/font/local'

// import { Plus_Jakarta_Sans } from 'next/font/google'
import { CrispChat } from '@/components'

import './globals.css'

// Font files can be colocated inside of `app`
const globalFont = localFont({
  src: '../fonts/Satoshi-Variable.ttf',
  display: 'swap',
  variable: '--font-global'
})

// export const Heading = Outfit({
//   display: 'swap',
//   subsets: ['latin'],
//   variable: '--font-heading'
// })

// export const Heading = Plus_Jakarta_Sans({
//   display: 'swap',
//   subsets: ['latin'],
//   variable: '--font-heading'
// })

// export const Body = Plus_Jakarta_Sans({
//   display: 'swap',
//   subsets: ['latin'],
//   variable: '--font-body'
// })

export const metadata: Metadata = {
  title: 'Imobi: O melhor software para imobiliárias e corretores.',
  description: 'Imobi: O melhor software para imobiliárias e corretores.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <CrispChat />
      <body className={`${globalFont.variable}`}>{children}</body>
    </html>
  )
}
