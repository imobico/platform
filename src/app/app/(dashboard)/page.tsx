import { Box } from '@/styled'

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
  const greeting = getGreeting()

  return (
    <Box>
      <Box p="10" m="8px">
        <H1 fontSize="3xl">
          <Strong fontWeight={900}>{greeting}</Strong>
          {true && <>, </>}
          {true && 'Kaue'}
          !&nbsp; 👋
        </H1>
        <Text fontSize="lg">Aqui você consegue ter uma visão geral do seu negócio.</Text>
      </Box>
      <NextSteps />
    </Box>
  )
}
