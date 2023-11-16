import { Metadata } from 'next'
import { ReactNode } from 'react'

// import { Box } from '@/ui'
import { MarketingHeader } from './components/MarketingHeader'

export const metadata: Metadata = {
  title: 'Login | Platforms Starter Kit'
}

export default function MarketingLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      <MarketingHeader />
      {children}
    </div>
    // <Box minWidth="100vw" minHeight="100vh">
    //   <MarketingHeader />
    //   {children}
    // </Box>
  )
}
