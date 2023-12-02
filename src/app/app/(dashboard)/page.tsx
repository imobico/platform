import { Box, Flex } from '@/styled'

import { ToDoList } from '@/components'
import { H1, H2, Strong, Text } from '@/ui'

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

  const nextStepsList = [
    {
      label: 'Preencha seus dados pessoais',
      isDone: true,
      goToTask: {
        route: '/minha-conta',
        label: 'Ver configurações conta'
      }
    },
    {
      label: 'Complete o seu perfil de negócio',
      isDone: true,
      goToTask: {
        route: '/meu-negocio',
        label: 'Ver configurações de negócio'
      }
    },
    {
      label: 'Adicione o seu primeiro imóvel',
      isDone: false,
      goToTask: {
        route: '/imoveis',
        label: 'Ver página de imóveis'
      }
    },
    {
      label: 'Configure o seu site',
      isDone: false,
      goToTask: {
        route: '/canais',
        label: 'Configurar meu site'
      }
    }
  ]

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
      <Flex
        m="8px"
        bg="white"
        px="10"
        py="6"
        border="1px solid token(colors.slate.6)"
        borderRadius="xl"
        flexDirection={{ base: 'column', md: 'row' }}
      >
        <Box mb={8} maxWidth="480px" flex="1">
          <H2 fontSize="2xl">Próximos passos</H2>
          <Text color="text.muted" pr={16}>
            Para facilitar a sua experiência, aqui estão alguns passo que você pode seguir para
            conseguir ao máximo sua conta Imoblr!
          </Text>
        </Box>
        <Box py={4} flex="1">
          <ToDoList items={nextStepsList} />
        </Box>
      </Flex>
    </Box>
  )
}
