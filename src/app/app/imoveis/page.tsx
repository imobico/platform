'use client'

import { CheckCircle } from 'lucide-react'
import Link from 'next/link'

import { Button, Center, Flex, H2, Text } from '@/ui'

interface ImoveisPageProps {
  searchParams: Record<string, string>
}

export default function ImoveisPage(props: ImoveisPageProps) {
  return (
    <Flex
      bg="white"
      boxShadow="xl"
      border="base"
      borderRadius={{ base: 0, lg: 'xl' }}
      width={{ base: '100%', xl: 'calc(100% - 24px)' }}
      maxWidth="1440px"
      height={{ base: '100%', xl: 'calc(100% - 24px)' }}
      maxHeight={{ base: 'unset', lg: '780px' }}
      position="relative"
      overflow="hidden"
    >
      <Center
        width="100%"
        p={6}
        position="absolute"
        height="100%"
        bg="white"
        zIndex={100}
        flexDirection="column"
      >
        <Center width="120px" height="120px" bg="green.3" color="green.9" borderRadius="full">
          <CheckCircle width="60px" height="80px" />
        </Center>
        <H2 size="lg" mt={8} mb={4}>
          Conta confirmada
        </H2>
        <Text color="text.muted" textAlign="center">
          Sua conta com o e-mail <strong>{decodeURIComponent(props.searchParams?.email)}</strong>{' '}
          está confirmada e pronta para uso.
          <br />
          Você já pode fazer login com a sua conta.
        </Text>
        <Link href="/entrar">
          <Button mt={8} size="xl">
            Acessar minha conta
          </Button>
        </Link>
      </Center>
    </Flex>
  )
}
