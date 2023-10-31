'use client'

import { useState } from 'react'

import { browserClient } from '@/supabase'
import { Box, Button, Input, Label, Text, VStack } from '@/ui'

export const LoginForm = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = async () => {
    if (password.length === 0 || email.length === 0) {
      return alert('Email e senha não podem estar em branco')
    } else {
      await browserClient.auth.signInWithPassword({
        email,
        password
      })

      window.location.href = '/app'
    }
  }

  return (
    <VStack>
      <Box width="100%">
        <Label htmlFor="user-email" size="xl">
          <Text py={2}>Email</Text>
          <Input
            size="xl"
            id="user-email"
            placeholder="Digite seu e-mail"
            type="email"
            autoFocus
            onChange={(e) => setEmail(e.target.value)}
          />
        </Label>
      </Box>
      <Box width="100%">
        <Label htmlFor="user-password" size="xl">
          <Text py={2}>Senha</Text>
          <Input
            size="xl"
            id="user-password"
            placeholder="Digite sua senha"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </Label>
      </Box>
      <Button size="xl" width="100%" mt={4} onClick={handleLogin}>
        Entrar com meu e-mail
      </Button>
    </VStack>
  )
}

export default LoginForm
