import dynamic from 'next/dynamic'
import Image from 'next/image'

import bg from '@/public/cool-pattern-trusty.svg'
import { Box, Button, Center, Divider, Flex, H1, HStack, Text, TextLink } from '@/ui'

const DynamicForm = dynamic(() => import('../components/LoginForm'), {
  loading: () => <p>Loading...</p>
})

export default function LoginPage() {
  return (
    <Flex
      bg="white"
      boxShadow="xl"
      border="base"
      borderRadius={{ base: 0, lg: 'xl' }}
      width={{ base: '100%', xl: 'calc(100% - 24px)' }}
      maxWidth="1440px"
      height={{ base: '100%', xl: 'calc(100% - 24px)' }}
      maxHeight={{ base: 'unset', lg: '780px' }}
      position="relative"
      overflow="hidden"
    >
      <Center width={{ base: '100%', lg: '50%' }} p={6}>
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

          <Divider my="6" />
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
          </HStack>
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
          <Text fontWeight={600} fontSize="xl" color="trusty.11" textAlign="center" mt="8">
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
          opacity={0.6}
          style={{ backgroundImage: `url("${bg.src}")`, backgroundRepeat: 'repeat' }}
        />
      </Flex>
    </Flex>
  )
}
