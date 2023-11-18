import { Metadata } from 'next'
import { ReactNode } from 'react'

import { Box } from '@/styled'

import { MarketingHeader } from './components/MarketingHeader'

export const metadata: Metadata = {
  title: 'Imobi: O sistema mais moderno para imobiliárias e corretores'
}

export default function MarketingLayout({ children }: { children: ReactNode }) {
  return (
    <Box minWidth="100vw" minHeight="100vh">
      <MarketingHeader />
      {children}
    </Box>
  )
}
