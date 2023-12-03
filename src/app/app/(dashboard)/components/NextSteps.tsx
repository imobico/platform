import { Box, Flex } from '@/styled'

import { ProgressBar, ToDoList } from '@/components'
import { H2, Strong, Text } from '@/ui'

export const NextSteps = () => {
  const nextStepsList = [
    {
      label: 'Preencha seus dados pessoais',
      isDone: true,
      goToTask: {
        route: '/app/minha-conta',
        label: 'Ver configurações conta'
      }
    },
    {
      label: 'Complete o seu perfil de negócio',
      isDone: true,
      goToTask: {
        route: '/app/meu-negocio',
        label: 'Ver configurações de negócio'
      }
    },
    {
      label: 'Adicione o seu primeiro imóvel',
      isDone: false,
      goToTask: {
        route: '/app/imoveis',
        label: 'Ver página de imóveis'
      }
    },
    {
      label: 'Configure o seu site',
      isDone: false,
      goToTask: {
        route: '/app/canais',
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
        <H2 fontSize="2xl" mb={2}>
          Próximos passos
        </H2>
        <Box maxWidth="380px" mr="12" mb={4}>
          <Text color="text.muted" mb={2}>
            <Strong color="accent.default">2 de 4</Strong> objetivos concluídos!
          </Text>
          <ProgressBar completed={2} total={4} />
        </Box>
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
