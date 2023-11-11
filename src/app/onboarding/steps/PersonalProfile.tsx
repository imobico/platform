'use client'

import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'

import { useCurrentUser } from '@/hooks'
import { useUpdateUser } from '@/mutations'
import { browserClient } from '@/supabase'
import { User } from '@/types'
import { Box, Button, H1, HStack, Input, Label, Text } from '@/ui'

import { StepComponentProps } from '../page'

export default function PersonalProfile({ currentUser, onComplete }: StepComponentProps) {
  console.log('currentUser', currentUser)
  const schema = yup.object().shape({
    first_name: yup.string().required('O campo "Nome" é obrigatório'),
    last_name: yup.string().required('O campo "Sobrenome" é obrigatório')
  })

  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
    reset
  } = useForm({ resolver: yupResolver(schema) })

  const updateUser = useUpdateUser()

  async function updateProfile(formData: User) {
    await updateUser.mutate({ ...formData, id: currentUser?.id })

    onComplete()
  }

  useEffect(() => {
    if (currentUser) {
      reset({
        first_name: currentUser.first_name,
        last_name: currentUser.last_name
      })
    }
  }, [currentUser])

  return (
    <Box>
      <H1 fontSize="4xl">Sobre você</H1>
      <Text color="text.muted" mb="12" pr="24">
        Suas informações pessoais básicas.
        <br />
        (Nenhuma dessas informações será divulgada)
      </Text>
      <form onSubmit={handleSubmit(updateProfile)}>
        <Box width="100%">
          <HStack width="100%" gap="4">
            <Box flex="1">
              <Label size="xl" htmlFor="first_name">
                Nome
              </Label>
              <Input
                mt="2"
                size="xl"
                autoFocus={true}
                id="first_name"
                placeholder="Exemplo: Regina"
                {...register('first_name')}
              />
            </Box>

            <Box flex="1">
              <Label size="xl" htmlFor="last_name">
                Sobrenome
              </Label>
              <Input
                mt="2"
                size="xl"
                id="last_name"
                placeholder="Exemplo: Fagundes"
                {...register('last_name')}
              />
            </Box>
          </HStack>

          <Button
            mt={8}
            colorScheme="black"
            type="submit"
            size="xl"
            width="100%"
            // isLoading={isProfileUpdating}
            // loadingText="Salvando..."
          >
            Continuar
          </Button>
        </Box>
      </form>
    </Box>
  )
}
