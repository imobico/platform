'use client'

import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useSearchParams } from 'next/navigation'
import { useForm } from 'react-hook-form'

import { useSwitchOrganization } from '@/hooks'
import { useCreateOrganization } from '@/mutations'
import { OrganizationType } from '@/types'
import { Box, Button, H1, HStack, Input, Label, Text } from '@/ui'

import { StepComponentProps } from '../page'

type BusinessTypes = 'agent' | 'agency' | 'owner'

const schema = yup.object().shape({
  name: yup.string().required('O campo "Nome" é obrigatório')
})

export default function BusinessProfile({ currentUser, onComplete }: StepComponentProps) {
  const createOrganization = useCreateOrganization()
  const params = useSearchParams()
  const switchOrganization = useSwitchOrganization()

  const businessType = params.get('businessType')

  const inputPlaceholders = {
    agent: `${currentUser?.first_name} ${currentUser?.last_name} Negócios Imobiliários`,
    agency: 'Imobiliária São José',
    owner: 'Praia do Futuro Casas'
  }

  const {
    handleSubmit,
    register
    // formState: { errors, isSubmitting }
    // reset
  } = useForm({ resolver: yupResolver(schema) })

  async function createBusiness(formData: { name: string }) {
    try {
      await createOrganization
        .mutateAsync({
          ...formData,
          type: (businessType || 'agency') as OrganizationType
        })
        .then((data) => {
          const newOrganization = data[0]

          switchOrganization(newOrganization.id, () => {
            onComplete()
          })
        })
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <Box maxHeight="100vh" overflowY="auto" p={8}>
      <H1 fontSize={{ base: '3xl', lg: '4xl' }}>Sobre o seu negócio</H1>

      <Text
        color="text.muted"
        fontSize={{ base: 'md', md: 'lg' }}
        mb={{ base: 8, lg: 12 }}
        pr={{ base: 0, lg: '32' }}
      >
        Agora só precisamos saber um pouco mais sobre o seu negócio
        <br />
        Essas informações serão visualizadas por seus clientes em seu site por exemplo
      </Text>
      <form onSubmit={handleSubmit(createBusiness)}>
        <Box width="100%">
          <HStack width="100%" gap="4" mb="8">
            <Box flex="1">
              <Label size="xl" htmlFor="name">
                Nome
              </Label>
              <Input
                mt="2"
                size="xl"
                autoFocus={true}
                id="name"
                placeholder={`Exemplo: ${inputPlaceholders[businessType as BusinessTypes]}`}
                {...register('name')}
              />
            </Box>
          </HStack>

          <Button type="submit" size="xl" width="100%">
            {createOrganization.isPending ? 'Salvando...' : 'Salvar e finalizar'}
          </Button>
        </Box>
      </form>
    </Box>
  )
}
