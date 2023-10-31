'use client'

import { Lock, MailCheck } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'

import bg from '@/public/cool-pattern-trusty.svg'
import { browserClient } from '@/supabase'
import { Box, Button, Center, Flex, H1, H2, H3, Input, Label, Text, VStack } from '@/ui'

interface LoginPageProps {
  searchParams: Record<string, string>
}

export default function LoginPage(props: LoginPageProps) {
  const [password, setPassword] = useState('')
  const [passwordConfirmation, setPasswordConfirmation] = useState('')
  const [isSignupSuccessful, setIsSignupSuccessful] = useState(false)

  const handleSignup = async () => {
    if (password !== passwordConfirmation) {
      return alert('A senha ou confirmação de senha é inválida')
    } else {
      await browserClient.auth
        .signUp({
          email: decodeURIComponent(props.searchParams?.email),
          password: password,
          options: {
            emailRedirectTo: `${window.location.origin}/conta-confirmada?email=${encodeURIComponent(
              props.searchParams?.email
            )}`
          }
        })
        .then((res) => {
          setIsSignupSuccessful(true)
        })
    }
  }

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
      {isSignupSuccessful && (
        <Center
          width="100%"
          p={6}
          position="absolute"
          height="100%"
          bg="white"
          zIndex={100}
          flexDirection="column"
        >
          <Center width="120px" height="120px" bg="green.3" color="green.9" borderRadius="full">
            <MailCheck width="60px" height="80px" />
          </Center>
          <H2 size="lg" mt={8} mb={4}>
            Confirme sua conta
          </H2>
          <Text color="text.muted" maxWidth="30vw" textAlign="center">
            Sua conta foi criada e agora é só clicar no link que enviamos para o seu e-mail (
            <strong>{props.searchParams?.email}</strong>) para confirmar a sua conta
          </Text>
        </Center>
      )}
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
            <H1 fontSize="3xl">Defina sua {!props.searchParams?.email && 'nova '}senha</H1>
            <Text color="text.muted" mb={8}>
              {props.searchParams?.email &&
                'Defina uma senha segura que você utilizará com o seu e-mail '}
              {props.searchParams?.email && (
                <strong>{decodeURIComponent(props.searchParams?.email)}</strong>
              )}
              &nbsp;para acessar sua conta.
            </Text>
          </Box>
          <VStack>
            <Box width="100%">
              <Label size="xl" htmlFor="user-password">
                <Text py={2}>Senha</Text>
                <Input
                  size="xl"
                  id="user-password"
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Digite sua senha"
                  type="password"
                  autoFocus
                />
              </Label>
            </Box>
            <Box width="100%">
              <Label size="xl" htmlFor="user-confirm-password">
                <Text py={2}>Repita a senha</Text>
                <Input
                  size="xl"
                  id="user-confirm-password"
                  onChange={(e) => setPasswordConfirmation(e.target.value)}
                  placeholder="Repita a mesma senha"
                  type="password"
                />
              </Label>
            </Box>
            <Button size="xl" width="100%" mt={4} onClick={handleSignup}>
              Confirmar e criar minha conta
            </Button>
          </VStack>
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
        <Center zIndex={20} flex={1} p="24" flexDirection="column" justifyContent="flex-end">
          <Center color="tomato.2" bg="trusty.9" borderRadius="full" width="100px" height="100px">
            <Lock width="40px" height="40px" />
          </Center>
          <H3 size="xl" mt="4" color="trusty.11">
            Dicas de segurança
          </H3>
          <Text mt="4" color="trusty.12" textAlign="center" px="4" py="2">
            &#8226; Sua senha deve conter pelo menos 8 caracteres
            <br />
            &#8226; Utilize pelo menos 1 letra maiúscula e 1 minúscula
            <br />
            &#8226; Opcional: Utilize números e caracteres especiais
            <br />
            &#8226; Não utilize senhas fáceis de adivinhar, como datas de aniversário ou nomes de
            familiares
          </Text>
        </Center>
        <Box
          zIndex={30}
          width="100%"
          height="120px"
          background="rgba(0,0,0,0.0)"
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
