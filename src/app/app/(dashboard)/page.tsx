// import { css } from '@/styled/css'
import { Box } from '@/styled'

import { Checkbox, H1, H2, Strong, Text } from '@/ui'

// import { Button } from '@/components/Button'
// import { Input } from '@/components/Input'
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
          {greeting}
          {true && <>, </>}
          {true && <Strong fontWeight={900}>Kaue</Strong>}!&nbsp; 👋
        </H1>
        <Text color="text.muted" fontSize="lg">
          Aqui você consegue ter uma visão geral do seu negócio.
        </Text>
      </Box>
      <Box
        m="8px"
        bg="white"
        px="10"
        py="6"
        border="1px solid token(colors.slate.6)"
        borderRadius="xl"
      >
        <Box>
          <H2 fontSize="2xl">Próximos passos</H2>
          <Text color="text.muted" width="40%" fontSize="sm">
            Para facilitar a sua experiência, aqui estão alguns passo que você pode seguir para
            conseguir tirar o máximo proveito da sua conta Imoblr!
          </Text>
        </Box>
        <Box>
          <Checkbox colorPalette="red" />
        </Box>
      </Box>
    </Box>
  )
}
