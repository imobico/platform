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
          <H2 fontSize="4xl" color="trusty.1" mb="4" fontWeight="bolder">
            Bem-vindo à imobi!
          </H2>
          <Text fontSize="xl" color="trusty.2" mb="6" textAlign="center" letterSpacing="-0.5px">
            Já está tudo certo com a sua conta, agora só precisamos saber um pouco mais sobre você e
            o seu negócio.
          </Text>
        </Center>
        <Center
          borderTopLeftRadius="3xl"
          borderBottomLeftRadius="3xl"
          bg="white"
          flex="1"
          boxShadow="0 0 60px 6px token(colors.trusty.10), 0 0 8px 4px token(colors.trusty.10)"
          flexDirection="column"
        >
          <Box px="12" py="8">
            {children}
          </Box>
        </Center>
      </Flex>
    </ProvidersWrapper>
  )
}
