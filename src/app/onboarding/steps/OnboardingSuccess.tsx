'use client'

import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

import { Button, Center, H1, Text } from '@/ui'

import { SuccessfulOnboardingAnimation } from '../components/SuccessfulOnboardingAnimation'
import { StepComponentProps } from '../page'

export default function OnboardingSuccess({ currentUser }: StepComponentProps) {
  return (
    <Center maxHeight="100vh" overflowY="auto" p={8} flexDirection="column">
      <SuccessfulOnboardingAnimation />
      <H1 color="pine.7" fontSize="4xl" mb="6">
        Tudo certo, {currentUser?.first_name}!
      </H1>
      <Text color="text.muted" mb="12" textAlign="center">
        Nós já preparamos o seu painel onde você poderá{' '}
        <strong>adicionar os seus primeiros imóveis</strong>, <strong>configurar seu site</strong> e{' '}
        <strong>gerenciar seu negócio</strong>.
      </Text>

      <Link href="/app">
        <Button size="2xl">
          Visualizar meu painel
          <ArrowRight />
        </Button>
      </Link>
    </Center>
  )
}
