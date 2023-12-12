import type {} from 'ldrs'
import type { Metadata } from 'next'
import { Outfit, Plus_Jakarta_Sans } from 'next/font/google'

import { CrispChat } from '@/components'

import './globals.css'

export const Heading = Outfit({
  display: 'swap',
  subsets: ['latin'],
  variable: '--font-heading'
})

export const Body = Plus_Jakarta_Sans({
  display: 'swap',
  subsets: ['latin'],
  variable: '--font-body'
})

export const metadata: Metadata = {
  title: 'Imobi: O melhor software para imobiliárias e corretores.',
  description: 'Imobi: O melhor software para imobiliárias e corretores.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <script
        type="module"
        defer
        src="https://cdn.jsdelivr.net/npm/ldrs/dist/auto/squircle.js"
      ></script>
      <CrispChat />
      <body className={`${Heading.variable} ${Body.variable}`}>{children}</body>
    </html>
  )
}
