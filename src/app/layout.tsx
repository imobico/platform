import type { Metadata } from 'next'
import { Plus_Jakarta_Sans } from 'next/font/google'
import localFont from 'next/font/local'

import './globals.css'

export const Heading = localFont({
  src: '../fonts/cal-sans.woff2',
  display: 'swap',
  variable: '--font-heading'
})

export const Body = Plus_Jakarta_Sans({
  display: 'swap',
  subsets: ['latin'],
  variable: '--font-body'
})

// export const Body = Roboto_Flex({
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
      <body className={`${Heading.variable} ${Body.variable}`}>{children}</body>
    </html>
  )
}
