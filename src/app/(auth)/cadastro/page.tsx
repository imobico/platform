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
            position={{ base: 'relative', xl: 'absolute' }}
            mb={{ base: 6 }}
            left={{ base: 'unset', xl: 8 }}
            top={{ base: 'unset', xl: 8 }}
          >
            <Image
              priority
              src="/logo-imoblr-light-bg.svg"
              alt="Imobi Test"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: '100%', height: 'auto' }}
            />
          </Box>
          <Box mb="12">
            <H1 animationName="fadeIn" fontSize="3xl">
              Faça um teste grátis
            </H1>
            <H2 animationName="fadeIn" fontSize="xl" fontWeight={500} color="trusty.5" mb="2">
              (O cadastro leva menos de 1 minuto!)
            </H2>
            <Text
              animationName="fadeInUp"
              animationDelay="0.2s"
              animationDuration="0.1s"
              color="slate.10"
            >
              •&nbsp; Não precisa de cartão de crédito.
            </Text>
            <Text
              animationName="fadeInUp"
              animationDelay="0.4s"
              animationDuration="0.1s"
              color="slate.10"
            >
              •&nbsp; Teste grátis por 14 dias!
            </Text>
            <Text
              animationName="fadeInUp"
              animationDelay="0.6s"
              animationDuration="0.1s"
              color="slate.10"
            >
              •&nbsp; Cancele a qualquer momento.
            </Text>
          </Box>
          <Box animationName="zoomIn" animationDelay="0.8s">
            <DynamicForm />
          </Box>
        </Box>
      </Center>
    </>
  )
}
