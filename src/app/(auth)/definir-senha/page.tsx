'use client'

import { Lock } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'

import { useCreateAccount } from '@/hooks'
import { Box, Button, Center, Flex, H1, H3, Input, Label, Text, VStack } from '@/ui'

interface SetPasswordPageProps {
  searchParams: Record<string, string>
}

export default function SetPasswordPage(props: SetPasswordPageProps) {
  const [password, setPassword] = useState('')
  const [passwordConfirmation, setPasswordConfirmation] = useState('')
  const createAccount = useCreateAccount()
  // const [isSignupSuccessful, setIsSignupSuccessful] = useState(false)

  const handleSignup = async () => {
    if (!passwordConfirmation || passwordConfirmation.length === 0) {
      alert('Digite a confirmação de senha')
    } else if (password.length < 6 || passwordConfirmation.length < 6) {
      alert('Sua senha deve conter ao menos 6 caracteres')
    } else if (password !== passwordConfirmation) {
      alert('A confirmação de senha deve ser idêntica ao campo senha.')
    } else {
      await createAccount({
        email: decodeURIComponent(props.searchParams?.email),
        password: password
      }).then((res) => {
        console.log(res)
        // if (result.error) {
        //   alert(
        //     result.error.message === 'User already registered'
        //       ? 'Já existe uma conta cadastrada com este e-mail'
        //       : 'Tivemos um problema ao criar a sua conta! Por favor, entre em contato com o nosso suporte'
        //   )
        // } else {
        //   window.location.href = '/onboarding'
        // }
      })
    }
  }

  return (
    <>
      <Box
        width={{ base: '100%', md: '50%' }}
        p={{ base: 12, xl: 24 }}
        maxHeight="100%"
        overflow="auto"
      >
        <Box width="100%" maxWidth="680px">
          <Box width="140px" mb={6}>
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
          <form
            onSubmit={(event) => {
              event.preventDefault()
              handleSignup()
            }}
          >
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
                  <Text py={2}>Confirme a senha</Text>
                  <Input
                    size="xl"
                    id="user-confirm-password"
                    onChange={(e) => setPasswordConfirmation(e.target.value)}
                    placeholder="Repita sua senha"
                    type="password"
                  />
                </Label>
              </Box>
              <Button type="submit" size="xl" width="100%" mt={4} onClick={handleSignup}>
                Confirmar e criar minha conta
              </Button>
            </VStack>
          </form>
        </Box>
      </Box>
      <Flex
        display={{ base: 'none', md: 'flex' }}
        bg="slate.1"
        width="50%"
        position="relative"
        overflow="auto"
        height="100%"
        flexDirection="column"
        borderLeft="1px solid token(colors.slate.6)"
        p={{ base: 12, md: 16 }}
      >
        <Center zIndex={20} flex={1} flexDirection="column">
          <Center bg="trusty.2" borderRadius="full" width="100px" height="100px" color="trusty.10">
            <Lock width="40px" height="40px" />
          </Center>
          <H3 size="xl" mt="4" color="trusty.11">
            Dicas de segurança
          </H3>
          <Text mt="4" color="slate.11" textAlign="center" px="4" py="2" lineHeight={2}>
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
      </Flex>
    </>
  )
}
