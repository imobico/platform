import dynamic from 'next/dynamic'
import Image from 'next/image'

import { Box, Center, H1, H2, Text } from '@/ui'

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
            mb={{ base: 6, md: 'unset' }}
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
            <H1 fontSize="3xl">Faça um teste grátis</H1>
            <H2 fontSize="xl" fontWeight={500} color="trusty.5" mt="-2" mb="2">
              (O cadastro leva menos de 1 minuto!)
            </H2>
            <Text color="slate.10">•&nbsp; Não precisa de cartão de crédito.</Text>
            <Text color="slate.10">•&nbsp; Teste grátis por 14 dias!</Text>
            <Text color="slate.10">•&nbsp; Cancele a qualquer momento.</Text>
          </Box>

          <DynamicForm />
        </Box>
      </Center>
    </>
  )
}
