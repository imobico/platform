'use client'

import { ArrowRight } from 'lucide-react'
import { useState } from 'react'

import { Box, Button, Input, Label, Text, VStack } from '@/ui'
import { browserClient } from '@/supabase'

export const LoginForm = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = async () => {
    if(password.length === 0 || email.length === 0) {
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
        <Label htmlFor="user-email">
          <Text py={2}>Email</Text>
          <Input id="user-email" placeholder="Digite seu e-mail" type="email" autoFocus onChange={(e) => setEmail(e.target.value)} />
        </Label>
      </Box>
      <Box width="100%">
        <Label htmlFor="user-password">
          <Text py={2}>Senha</Text>
          <Input id="user-password" placeholder="Digite sua senha" type="password" onChange={(e) => setPassword(e.target.value)} />
        </Label>
      </Box>
      <Button size="lg" width="100%" mt={4} onClick={handleLogin}>
        Entrar com meu e-mail
      </Button>
    </VStack>
  )
}

export default LoginForm
