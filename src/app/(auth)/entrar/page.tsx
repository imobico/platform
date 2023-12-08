import dynamic from 'next/dynamic'
import Image from 'next/image'

import bg from '@/public/auth-bg.jpg'
import { Box, Center, Flex, H1, Text, TextLink } from '@/ui'

const DynamicForm = dynamic(() => import('../components/LoginForm'), {
  loading: () => <p>Loading...</p>
})

export default function LoginPage() {
  return (
    <>
      <Center width={{ base: '100%', lg: '60%' }} p={6}>
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
          <Box>
            <H1 fontSize="3xl">Bem-vindo de volta!</H1>
            <Text color="text.muted" mb={8}>
              Ainda não tem uma conta?{' '}
              <TextLink fontWeight={700} href="/cadastro">
                Faça um teste grátis!
              </TextLink>
            </Text>
          </Box>

          <DynamicForm />

          {/* <Divider my="6" />
          <HStack
            width="100%"
            gap={{ base: '0', lg: '4' }}
            flexDirection={{ base: 'column', lg: 'row' }}
          >
            <Button width="100%" size="xl" variant="outline">
              <Image
                alt="Entrar usando minha conta Google"
                src="/google-logo.svg"
                width={18}
                height={18}
              />
              Entrar com Google
            </Button>

            <Button width="100%" size="xl" variant="outline">
              <Image
                alt="Usar minha conta Apple para entrar"
                src="/apple-logo.svg"
                width={18}
                height={18}
              />
              Entrar com Apple
            </Button>
          </HStack> */}
        </Box>
      </Center>
      <Flex
        display={{ base: 'none', lg: 'flex' }}
        bg="trusty.11"
        width="40%"
        height="100%"
        position="relative"
        overflow="hidden"
        flexDirection="column"
      >
        <Center zIndex={20} flex={1} p="16" flexDirection="column" height="100%">
          <Image
            priority
            alt="Eduarda Machado CEO na ImobiliPlace"
            src="/woman-ceo-avatar.png"
            width={100}
            height={100}
          />
          <Text fontWeight={600} fontSize="lg" color="white" textAlign="center" mt="8">
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
          zIndex={10}
          width="100%"
          height="100%"
          position="absolute"
          top={0}
          left={0}
          opacity={0.4}
          style={{
            backgroundImage: `url("${bg.src}")`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'fixed',
            backgroundSize: 'cover'
          }}
        />
      </Flex>
    </>
  )
}
