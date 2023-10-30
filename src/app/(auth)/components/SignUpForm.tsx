'use client'

import { ArrowRight } from 'lucide-react'
import { useState } from 'react'

import { Box, Button, Input, Label, Text, VStack } from '@/ui'

export const SignUpForm = () => {
  const [email, setEmail] = useState('')

  const goToSetPassword = () => {
    window.location.href = `/definir-senha?email=${encodeURIComponent(email)}`
  }

  return (
    <VStack alignItems="flex-end">
      <Box width="100%">
        <Label htmlFor="user-email" size="xl">
          <Text color="black" py={2}>
            Email
          </Text>
          <Input
            size="xl"
            id="user-email"
            placeholder="Exemplo: joao@meuemail.com"
            type="email"
            autoFocus
            onChange={(evt) => setEmail(evt.target.value)}
          />
        </Label>
      </Box>
      <Button
        size="xl"
        mt={4}
        onClick={() => {
          goToSetPassword()
        }}
      >
        Criar minha conta
        <ArrowRight width="24px" height="24px" />
      </Button>
    </VStack>
  )
}

export default SignUpForm
