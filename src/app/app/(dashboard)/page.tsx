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
        backgroundImage="repeating-radial-gradient( circle at 0 0, transparent 0, #001F55 32px ), repeating-linear-gradient( #00143655, #001436 )"
        backgroundColor="trusty.12"
        width={{
          base: 'calc(100vw + 8px)',
          // 2 * SIDEBAR_GUTTER + COLLAPSED_SIDEBAR_WIDTH
          md: 'calc(100vw + 96px)',
          // 2 * SIDEBAR_GUTTER + COLLAPSED_SIDEBAR_WIDTH + 50
          lg: 'calc(100vw + 146px)',
          // 2 * SIDEBAR_GUTTER + EXPANDED_SIDEBAR_WIDTH + 100
          xl: 'calc(100vw + 396px)',
          // 2 * SIDEBAR_GUTTER + EXPANDED_SIDEBAR_WIDTH + 200
          '2xl': 'calc(100vw + 496px)'
        }}
        pl={{
          base: '8px',
          // 2 * SIDEBAR_GUTTER + COLLAPSED_SIDEBAR_WIDTH
          md: '96px',
          // 2 * SIDEBAR_GUTTER + COLLAPSED_SIDEBAR_WIDTH + 50
          lg: '146px',
          // 2 * SIDEBAR_GUTTER + EXPANDED_SIDEBAR_WIDTH + 100
          xl: '396px',
          // 2 * SIDEBAR_GUTTER + EXPANDED_SIDEBAR_WIDTH + 200
          '2xl': '496px'
        }}
        pr={{
          base: '8px',
          // SIDEBAR_GUTTER
          md: '8px',
          // SIDEBAR_GUTTER + 50
          lg: '58px',
          // SIDEBAR_GUTTER + 100
          xl: '108px',
          // SIDEBAR_GUTTER + 200
          '2xl': '208px'
        }}
        ml={{
          base: '-8px',
          // 2 * SIDEBAR_GUTTER + COLLAPSED_SIDEBAR_WIDTH
          md: '-96px',
          // 2 * SIDEBAR_GUTTER + COLLAPSED_SIDEBAR_WIDTH + 50
          lg: '-146px',
          // 2 * SIDEBAR_GUTTER + EXPANDED_SIDEBAR_WIDTH + 100
          xl: '-396px',
          // 2 * SIDEBAR_GUTTER + EXPANDED_SIDEBAR_WIDTH + 200
          '2xl': '-496px'
        }}
        mb="12"
      >
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
      <NextSteps />
    </Box>
  )
}
