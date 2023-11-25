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
            position={{ base: 'relative', xl: 'absolute' }}
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
      {/* <Flex
        display={{ base: 'none', lg: 'flex' }}
        bg="trusty.12"
        width="50%"
        position="relative"
        overflow="hidden"
        flexDirection="column"
      >
        <Center zIndex={20} flex={1} p="28" flexDirection="column" justifyContent="flex-end">
          <Image
            priority
            alt="Eduarda Machado CEO na ImobiliPlace"
            src="/woman-ceo-avatar.png"
            width={100}
            height={100}
          />
          <Text fontWeight={600} fontSize="xl" color="white" textAlign="center" mt="8">
            &ldquo;A Imobi tem nos ajudado a economizar tempo e conseguir mais oportunidades de
            negócio. Fechamos o último mês com 15% mais vendas!&ldquo;
          </Text>
          <Text
            mt="4"
            fontSize="sm"
            color="white"
            textAlign="center"
            background="trusty.12"
            opacity="0.75"
            px="4"
            py="2"
            borderRadius="full"
            backdropFilter="blur(4px)"
          >
            Eduarda Machado - <strong>CEO na ImobiliPlace</strong>
          </Text>
        </Center>
        <Box
          zIndex={30}
          width="100%"
          height="120px"
          background="rgba(0,0,0,0)"
          borderBottomRightRadius="xl"
        ></Box>
        <Box
          zIndex={10}
          width="100%"
          height="100%"
          position="absolute"
          top={0}
          left={0}
          opacity={0.5}
          style={{
            backgroundImage: `url("${bg.src}")`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'fixed',
            backgroundSize: 'cover'
          }}
        />
      </Flex> */}
    </>
  )
}
