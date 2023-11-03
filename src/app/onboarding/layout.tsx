import Image from 'next/image'

import { ProvidersWrapper } from '@/providers'
import { Box, Center, Flex, H1, Text } from '@/ui'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ProvidersWrapper>
      <Flex minHeight="100vh" minWidth="100vw" bg="trusty.9">
        <Center width="640px" maxWidth="50vw" p="12" flexDirection="column">
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
          <H1 fontSize="4xl" color="white" mb="4">
            Bem-vindo à imobi!
          </H1>
          <Text fontSize="xl" color="trusty.1" mb="6" textAlign="center">
            Já está tudo certo com a sua conta, agora só precisamos saber um pouco mais sobre você e
            o seu negócio.
          </Text>
        </Center>
        <Box borderRadius="3xl" bg="white" m="12" flex="1" boxShadow="xl">
          <Box px="12" py="8">
            {children}
          </Box>
        </Box>
      </Flex>
    </ProvidersWrapper>
  )
}
