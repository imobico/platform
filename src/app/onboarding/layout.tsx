import Image from 'next/image'

import { ProvidersWrapper } from '@/providers'
import { Box, Center, Flex, H2, Text } from '@/ui'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ProvidersWrapper>
      <Flex minHeight="100vh" minWidth="100vw" bg="trusty.9">
        <Center width="540px" maxWidth="50vw" p="16" flexDirection="column">
          <Box width="320px" mb="12">
            <Image
              priority
              src="/onboarding.svg"
              alt="Imobi Test"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: '100%', height: 'auto' }}
            />
          </Box>
          <H2 fontSize="3xl" color="trusty.1" mb="4" fontWeight="bolder">
            Bem-vindo à imobi!
          </H2>
          <Text fontSize="lg" color="trusty.2" mb="6" textAlign="center" letterSpacing="-0.5px">
            Já está tudo certo com a sua conta, agora só precisamos saber um pouco mais sobre você e
            sobre o seu negócio.
          </Text>
          <Box bg="trusty.10" p="6" borderRadius="xl" mt="12">
            <Text fontSize="sm" color="trusty.3" textAlign="center">
              Caso precise, você poderá alterar suas informações a qualquer momento nas
              configurações da sua conta.
            </Text>
          </Box>
        </Center>
        <Center
          borderTopLeftRadius="3xl"
          borderBottomLeftRadius="3xl"
          bg="white"
          flex="1"
          boxShadow="0 0 60px 6px token(colors.trusty.10), 0 0 8px 4px token(colors.trusty.10)"
          flexDirection="column"
        >
          {children}
        </Center>
      </Flex>
    </ProvidersWrapper>
  )
}
