import dynamic from 'next/dynamic'
import Image from 'next/image'

import { H1, Box, Center, Flex, Text, TextLink } from '@/ui'

import bg from '@/public/cool-pattern-alt.svg'

const DynamicForm = dynamic(() => import('../components/SignUpForm'), {
  loading: () => <p>Loading...</p>
})

export default function SignupPage() {
  return (
    <Flex
      bg="white"
      boxShadow="xl"
      border="base"
      borderRadius="xl"
      width={{ base: '100%', xl: 'calc(100% - 24px)' }}
      maxWidth="1440px"
      height={{ base: '100%', xl: 'calc(100% - 24px)' }}
      maxHeight="780px"
      position="relative"
      overflow="hidden"
    >
      <Center width="50%" p={6}>
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
              src="/imobi-logo.svg"
              alt="Imobi Test"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: '100%', height: 'auto' }}
            />
          </Box>
          <Box>
            <H1 fontSize="3xl">Vamos começar?</H1>
            <Text mb={4} color="text.muted">
              Já tem uma conta?{' '}
              <TextLink fontWeight={700} href="/entrar">
                Clique aqui para entrar.
              </TextLink>
            </Text>
            <Text mb={4}>
              Digite o seu e-mail no formulário abaixo
            </Text>
          </Box>
          <DynamicForm />
          {/* <Divider my="8" color="slate.200" />
          <VStack width="100%">
            <Button width="100%" size="lg" variant="outline">
              <Image alt="Entrar com Google" src="/google-logo.svg" width={18} height={18} />
              Usar minha conta <strong>Google</strong>
            </Button>

            <Button width="100%" size="lg" variant="outline">
              <Image alt="Entrar com Apple" src="/apple-logo.svg" width={18} height={18} />
              Usar minha conta <strong>Apple</strong>
            </Button>
          </VStack> */}
        </Box>
      </Center>
      <Flex
        display={{ base: 'none', lg: 'flex' }}
        bg="gray.900"
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
          <Text fontWeight={700} fontSize="2xl" color="trendy.11" textAlign="center" mt="8">
            &ldquo;A Imobi tem nos ajudado a economizar tempo e conseguir mais oportunidades de negócio. Fechamos o último mês com 15% mais vendas!&ldquo;
          </Text>
          <Text
            mt="4"
            fontSize="sm"
            color="white"
            textAlign="center"
            background="trendy.12"
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
          opacity={0.6}
          style={{ backgroundImage: `url("${bg.src}")`, backgroundRepeat: 'repeat' }}
        />
      </Flex>
    </Flex>
  )
}
