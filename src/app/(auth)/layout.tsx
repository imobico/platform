import { Metadata } from 'next'
import { ReactNode } from 'react'

import { Box, Center, Flex } from '@/ui'

export const metadata: Metadata = {
  title: 'Entrar | Imobi'
}

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <Box height="100vh" width="100vw" bg="slate.2">
      <Center
        height="100vh"
        width="100vw"
        background="radial-gradient(circle at top,transparent 9%, token(colors.slate.4) 10% ,token(colors.slate.4) 15% , transparent 16%), radial-gradient(circle at bottom,transparent 9%, token(colors.slate.4) 10% ,token(colors.slate.4) 15% , transparent 16%), radial-gradient(circle at right,transparent 9%, token(colors.slate.4) 10% ,token(colors.slate.4) 15% , transparent 16%), radial-gradient(circle at left,transparent 9%, token(colors.slate.4) 10% ,token(colors.slate.4) 15% , transparent 16%)"
        backgroundSize="3em 3em"
        opacity="1"
      >
        <Flex
          boxShadow="0 0 120px 0 token(colors.slate.4), 0 0 6px 6px token(colors.slate.4)"
          border="base"
          borderRadius="xl"
          width={{ base: '100%', xl: 'calc(100% - 24px)' }}
          maxWidth="1440px"
          height={{ base: '100%', xl: 'calc(100% - 24px)' }}
          maxHeight="780px"
          position="relative"
          overflow="hidden"
          bg="white"
        >
          {children}
        </Flex>
      </Center>
    </Box>
  )
}
