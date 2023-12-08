import { Metadata } from 'next'
import { ReactNode } from 'react'

import { Box, Center } from '@/ui'

export const metadata: Metadata = {
  title: 'Entrar | Imobi'
}

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <Box height="100vh" width="100vw" bg="slate.1">
      <Center
        height="100vh"
        width="100vw"
        background="conic-gradient(from -60deg at 50% calc(100%/3),token(colors.slate.3) 0 120deg,#0000 0),
        conic-gradient(from 120deg at 50% calc(200%/3),token(colors.slate.3) 0 120deg,#0000 0),
        conic-gradient(from  60deg at calc(200%/3),token(colors.slate.3) 60deg,token(colors.slate.4) 0 120deg,#0000 0),
        conic-gradient(from 180deg at calc(100%/3),token(colors.slate.2) 60deg,token(colors.slate.3) 0 120deg,#0000 0),
        linear-gradient(90deg,token(colors.slate.2) calc(100%/6),token(colors.slate.4) 0 50%,
        token(colors.slate.2) 0 calc(500%/6), token(colors.slate.4) 0)"
        backgroundSize="132px 76px"
        opacity="1"
      >
        <Center
          boxShadow="0 0 120px 0 token(colors.slate.5), 0 0 6px 6px token(colors.slate.5)"
          border="1px solid token(colors.slate.6)"
          borderRadius="xl"
          width={{ base: '100vw', xl: 'calc(100% - 24px)' }}
          height={{ base: '100vh', xl: 'calc(100% - 24px)' }}
          maxWidth="1200px"
          maxHeight={{ base: 'unset', lg: '780px' }}
          position="relative"
          bg="white"
          overflow="hidden"
        >
          {children}
        </Center>
      </Center>
    </Box>
  )
}
