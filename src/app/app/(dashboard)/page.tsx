'use client'

import { Box } from '@/styled'

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

  return (
    <Box>
      <Box
        py={16}
        width="100vw"
        bg="trusty.12"
        pl={{ base: '160px', lg: '214px' }}
        ml={{ base: '-148px', lg: '-208px' }}
        mb="12"
      >
        <H1 fontSize="3xl" color="slate.1">
          <Strong fontWeight={900}>{greeting}</Strong>
          {currentUserData?.first_name && <>, </>}
          {currentUserData?.first_name && 'Kaue'}
          !&nbsp; 👋
        </H1>
        <Text color="slate.4" fontSize="lg">
          Aqui você consegue ter uma visão geral do seu negócio.
        </Text>
      </Box>
      <NextSteps />
    </Box>
  )
}
