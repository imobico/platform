import dynamic from 'next/dynamic'
import Image from 'next/image'

import { Box, Center, H1, Text, TextLink } from '@/ui'

const DynamicForm = dynamic(() => import('../components/SignUpForm'), {
  loading: () => <p>Loading...</p>
})

export default function SignupPage() {
  return (
    <>
      <Center width="100%" p={6}>
        <Box width="100%" maxWidth="480px">
          <Box
            width="140px"
            position={{ base: 'unset', xl: 'absolute' }}
            mb={{ base: 6 }}
            left={{ base: 'unset', xl: 8 }}
            top={{ base: 'unset', xl: 8 }}
          >
            <Image
              priority
              src="/logo-imobi-trusty.svg"
              alt="Imobi Test"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: '100%', height: 'auto' }}
            />
          </Box>
          <Box mb="12">
            <H1 fontSize="3xl">Cadastre sua conta</H1>
            <Text mb={4} color="text.muted">
              Já tem uma conta?{' '}
              <TextLink fontWeight={700} href="/entrar">
                Clique para acessar.
              </TextLink>
            </Text>
          </Box>
          <DynamicForm />
        </Box>
      </Center>
    </>
  )
}
