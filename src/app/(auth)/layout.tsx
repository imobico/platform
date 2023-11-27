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
        background="radial-gradient(circle at top,transparent 9%, token(colors.slate.3) 10% ,token(colors.slate.3) 15% , transparent 16%), radial-gradient(circle at bottom,transparent 9%, token(colors.slate.3) 10% ,token(colors.slate.3) 15% , transparent 16%), radial-gradient(circle at right,transparent 9%, token(colors.slate.3) 10% ,token(colors.slate.3) 15% , transparent 16%), radial-gradient(circle at left,transparent 9%, token(colors.slate.3) 10% ,token(colors.slate.3) 15% , transparent 16%)"
        backgroundSize="3em 3em"
        opacity="1"
      >
        <Center
          boxShadow="0 0 120px 0 token(colors.slate.3), 0 0 6px 6px token(colors.slate.3)"
          border="1px solid token(colors.slate.6)"
          borderRadius="xl"
          width={{ base: '100vw', xl: 'calc(100% - 24px)' }}
          height={{ base: '100vh', xl: 'calc(100% - 24px)' }}
          maxWidth="1200px"
          maxHeight={{ base: 'unset', lg: '780px' }}
          position="relative"
          bg="white"
          mx={{ base: 0, lg: 8 }}
          overflow="hidden"
        >
          {children}
        </Center>
      </Center>
    </Box>
  )
}
