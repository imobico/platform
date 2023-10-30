"use client"

import { CheckCircle } from 'lucide-react'
import Image from 'next/image'

import { icon } from '@/styled/recipes'

import { Box, Button, Center, Flex, H1, H3, Input, Text, VStack, Label, H2 } from '@/ui'

import bg from '@/public/cool-pattern-dark.svg'
import { useEffect, useState } from 'react'
import { browserClient } from '@/supabase'
import Link from 'next/link'

interface LoginPageProps {
  searchParams: Record<string, string>
}

export default function LoginPage(props: LoginPageProps) {
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
      <Center width="100%" p={6} position="absolute" height="100%" bg="white" zIndex={100} flexDirection="column">
        <Center width="120px" height="120px" bg="green.3" color="green.9" borderRadius="full">
          <CheckCircle width="60px" height="80px"/>
        </Center>
        <H2 size="lg" mt={8} mb={4}>
          Conta confirmada
        </H2>
        <Text color="text.muted" textAlign="center">
          Sua conta com o e-mail <strong>{decodeURIComponent(props.searchParams?.email)}</strong> está confirmada e pronta para uso.
          <br/>
          Você já pode fazer login com a sua conta.
        </Text>
        <Link href="/entrar">
          <Button mt={8} size="xl">Acessar minha conta</Button>
        </Link>
      </Center>
    </Flex>
  )
}
