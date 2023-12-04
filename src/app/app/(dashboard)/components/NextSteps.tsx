import { Box, Flex } from '@/styled'

import { ProgressBar, ToDoList } from '@/components'
import { useCurrentUser } from '@/hooks'
import { H2, Strong, Text } from '@/ui'

export const NextSteps = () => {
  const { data: currentUserData } = useCurrentUser()

  const nextStepsList = [
    {
      label: 'Preencha seus dados pessoais',
      isDone: !!currentUserData?.first_name && !!currentUserData?.last_name,
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

  const stepsCount = nextStepsList.length
  const completedStepsCount = nextStepsList.filter((step) => step.isDone).length

  return (
    <Flex
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
            <Strong color="accent.default">
              {completedStepsCount} de {stepsCount}
            </Strong>{' '}
            objetivos concluídos!
          </Text>
          <ProgressBar completed={completedStepsCount} total={stepsCount} />
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
