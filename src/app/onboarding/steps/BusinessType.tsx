'use client'

import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import {
  AlignCenterIcon,
  AlignJustifyIcon,
  AlignLeftIcon,
  AlignRightIcon,
  Apple,
  CreditCard
} from 'lucide-react'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'

import { useCurrentUser } from '@/hooks'
import { useUpdateUser } from '@/mutations'
import { browserClient } from '@/supabase'
import { User } from '@/types'
import {
  Box,
  Button,
  H1,
  HStack,
  Input,
  Label,
  Radio,
  RadioButtonGroup,
  RadioControl,
  RadioLabel,
  Text,
  Toggle,
  ToggleGroup
} from '@/ui'

import { StepComponentProps } from '../page'

export default function BusinessType({ currentUser, onComplete }: StepComponentProps) {
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
    updateUser.mutate({ ...formData, id: currentUser?.id })
  }

  const options = [{ value: 'S' }, { value: 'M' }, { value: 'L', disabled: true }, { value: 'XL' }]

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
      <H1 fontSize="4xl">Tipo de negócio</H1>
      <Text color="text.muted" mb="12" pr="32">
        O seu perfil de negócio irá nos ajudar personalizar o seu painel com as informações mais
        relevantes possíveis.
      </Text>
      <form onSubmit={handleSubmit(updateProfile)}>
        <Box width="100%">
          <RadioButtonGroup
            defaultValue="card"
            variant="outline"
            display="grid"
            gridTemplateColumns="repeat(3, 1fr)"
          >
            {[
              { value: 'agent', label: 'Corretor', icon: CreditCard },
              { value: 'agency', label: 'Imobiliária', icon: AlignRightIcon },
              { value: 'owner', label: 'Proprietário', icon: Apple }
            ].map((option, id) => (
              <Radio key={id} value={option.value} height="unset" py="4">
                <RadioControl />
                <RadioLabel flexDirection="column">
                  <option.icon style={{ width: '1.5rem', height: '1.5rem' }} />
                  {option.label}
                </RadioLabel>
              </Radio>
            ))}
          </RadioButtonGroup>

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
