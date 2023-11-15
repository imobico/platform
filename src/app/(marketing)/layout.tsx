import { Metadata } from 'next'
import { ReactNode } from 'react'

import { Box } from '@/ui'

import { MarketingHeader } from './components/MarketingHeader'

// import bg from '@/public/cool-pattern.svg'

export const metadata: Metadata = {
  title: 'Login | Platforms Starter Kit'
}

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <Box minWidth="100vw" minHeight="100vh">
      <MarketingHeader />
      {children}
    </Box>
  )
}
