'use client'

import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'

import { useUpdateUser } from '@/mutations'
import { User } from '@/types'
import { Box, Button, Grid, H1, Input, Label, Text } from '@/ui'

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
    // formState: { errors, isSubmitting },
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
  }, [currentUser, reset])

  return (
    <Box maxHeight="100vh" overflowY="auto" p={8}>
      <H1 fontSize={{ base: '3xl', lg: '4xl' }}>Sobre você</H1>
      <Text
        fontSize={{ base: 'md', md: 'lg' }}
        color="text.muted"
        mb={{ base: 8, lg: 12 }}
        pr={{ base: 0, lg: '24' }}
      >
        Suas informações pessoais básicas.
        <br />
        (Nenhuma dessas informações será divulgada)
      </Text>
      <form onSubmit={handleSubmit(updateProfile)}>
        <Box width="100%">
          <Grid width="100%" gap="4" columns={{ base: 1, md: 2 }}>
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
          </Grid>

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
