'use client'

import Lottie from 'lottie-react'
import { ArrowRight } from 'lucide-react'
import { useSearchParams } from 'next/navigation'

import successAnimation from '@/public/successAnimation.json'
import { Button, Center, H1, Text } from '@/ui'

import { StepComponentProps } from '../page'

export default function OnboardingSuccess({ currentUser }: StepComponentProps) {
  const params = useSearchParams()

  return (
    <Center flexDirection="column">
      <Lottie
        loop={false}
        style={{ width: '30%', height: '30%' }}
        animationData={successAnimation}
        // initialSegment={[0, 54]}
      />
      <H1 color="pine.7" fontSize="4xl" mb="6">
        Tudo pronto!
      </H1>
      <Text color="text.muted" mb="12" textAlign="center">
        Nós já preparamos o seu painel onde você poderá adicionar os seus primeiros imóveis,
        configurar o seu site e gerenciar e o otimizar o seu negócio.
      </Text>

      <Button size="2xl">
        Gerenciar Kaue Negócios Imobiliários
        <ArrowRight />
      </Button>
    </Center>
  )
}
