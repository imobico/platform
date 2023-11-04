'use client'

import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { Session } from '@supabase/supabase-js'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'

import { browserClient } from '@/supabase'
import { Box, Button, Center, Divider, H1, HStack, Input, Label, Text } from '@/ui'

export default function Account() {
  const [session, setSession] = useState<Session | null>(null)
  const [loading, setLoading] = useState(true)
  const [username, setUsername] = useState(null)
  const [website, setWebsite] = useState(null)
  const [avatar_url, setAvatarUrl] = useState(null)

  const schema = yup.object().shape({
    first_name: yup.string().required('O campo "Nome" é obrigatório'),
    last_name: yup.string().required('O campo "Sobrenome" é obrigatório'),
    // email: yup.string().required('O campo "Email" é obrigatório'),
    // username: yup.string().required('O campo "Nome de usuário" é obrigatório'),
    photo_url: yup.string()
  })

  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
    reset
  } = useForm({ resolver: yupResolver(schema) })

  useEffect(() => {
    async function getProfile() {
      setLoading(true)
      browserClient.auth.getSession().then(async ({ data: sessionData }) => {
        if (sessionData?.session) {
          setSession(sessionData.session)
        }

        const { data, error } = await browserClient
          .from('profiles')
          .select(`username, website, avatar_url`)
          .eq('id', session?.user.id)
          .single()

        if (error) {
          console.warn(error)
        } else if (data) {
          setUsername(data.username)
          setWebsite(data.website)
          setAvatarUrl(data.avatar_url)
        }

        setLoading(false)
      })
    }

    getProfile()
  }, [])

  async function updateProfile(event, avatarUrl) {
    event.preventDefault()

    setLoading(true)
    const user = session?.user

    const updates = {
      id: user?.id,
      username,
      website,
      avatarUrl,
      updated_at: new Date()
    }

    const { error } = await browserClient.from('profiles').upsert(updates)

    if (error) {
      alert(error.message)
    } else {
      setAvatarUrl(avatarUrl)
    }
    setLoading(false)
  }

  return (
    <Box width="600px" maxWidth="90%" flexDirection="column">
      <H1 fontSize="4xl">Sobre você</H1>
      <Text color="text.muted" mb="12">
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
                placeholder="Digite seu nome"
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
                autoFocus={true}
                id="last_name"
                placeholder="Digite seu sobrenome"
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
