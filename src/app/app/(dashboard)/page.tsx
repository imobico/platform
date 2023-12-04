'use client'

import { Box } from '@/styled'

import { PageRowLayout } from '@/components'
import { useCurrentUser } from '@/hooks'
import { H1, Strong, Text } from '@/ui'

import { NextSteps } from './components/NextSteps'

const getGreeting = () => {
  const day = new Date()
  const hr = day.getHours()
  if (hr >= 4 && hr < 12) {
    return 'Bom dia'
  } else if (hr >= 12 && hr <= 17) {
    return 'Boa tarde'
  } else {
    return 'Boa noite'
  }
}
export default function Home() {
  const { data: currentUserData } = useCurrentUser()
  const greeting = getGreeting()

  // CRIAR COMPONENT PAGE LAYOUT QUE APLICA O PADDING
  // TIRAR PADDING DO LAYOUT PRINCIPAL
  // CRIAR PAGE HEADER COMPONENT COM PADDING CORRETO

  return (
    <>
      <PageRowLayout
        py={16}
        backgroundImage="repeating-radial-gradient( circle at 0 0, transparent 0, #001F55 32px ), repeating-linear-gradient( #00143655, #001436 )"
        backgroundColor="trusty.12"
        mb="12"
      >
        <Box width="100%">
          <H1 fontSize="3xl" color="trusty.1">
            <Strong fontWeight={900}>{greeting}</Strong>
            {currentUserData?.first_name && <>, </>}
            {currentUserData?.first_name && 'Kaue'}
            !&nbsp; 👋
          </H1>
          <Text color="trusty.1" fontSize="lg" opacity={0.8}>
            Aqui você consegue ter uma visão geral do seu negócio.
          </Text>
        </Box>
      </PageRowLayout>
      <PageRowLayout>
        <NextSteps />
      </PageRowLayout>
    </>
  )
}
