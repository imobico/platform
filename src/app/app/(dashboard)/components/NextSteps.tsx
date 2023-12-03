import { Box, Flex } from '@/styled'

import { ToDoList } from '@/components'
import { H2, Text } from '@/ui'

export const NextSteps = () => {
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
  )
}
