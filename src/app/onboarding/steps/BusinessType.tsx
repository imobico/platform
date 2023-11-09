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
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'

import { useCurrentUser } from '@/hooks'
import { useUpdateUser } from '@/mutations'
import BriefcaseIcon from '@/public/icons/Briefcase-05.svg'
import BuildingIcon from '@/public/icons/Building-03.svg'
import UserIcon from '@/public/icons/User.svg'
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

const businessTypes = [
  {
    value: 'agent',
    label: 'Corretor',
    description:
      'Você trabalha de forma individual e independente, gerenciando uma quantidade menor de imóveis.',
    icon: BriefcaseIcon
  },
  {
    value: 'agency',
    label: 'Imobiliária',
    description:
      'Negócios com equipes de dois ou mais corretores, que gerencia números maiores de imóveis.',
    icon: BuildingIcon
  },
  {
    value: 'owner',
    label: 'Proprietário',
    description: 'Você possuí e auto gerencia seus próprios imóveis',
    icon: UserIcon
  }
]

export default function BusinessType({ currentUser, onComplete }: StepComponentProps) {
  const [selectedBusinessType, setSelectedBusinessType] = useState(0)

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

  return (
    <Box>
      <H1 fontSize="4xl">Tipo de negócio</H1>
      <Text color="text.muted" mb="12" pr="32">
        O seu perfil de negócio nos ajudará a personalizar o seu painel com as informações mais
        relevantes possíveis.
      </Text>
      <form onSubmit={handleSubmit(updateProfile)}>
        <Box width="100%">
          <RadioButtonGroup
            defaultValue="agent"
            variant="outline"
            display="grid"
            gridTemplateColumns="repeat(3, 1fr)"
          >
            {businessTypes.map((option, id) => (
              <Radio
                key={id}
                value={option.value}
                height="unset"
                py="4"
                onClick={() => setSelectedBusinessType(id)}
              >
                <RadioControl />
                <RadioLabel flexDirection="column">
                  <option.icon style={{ width: '1.5rem', height: '1.5rem' }} />
                  {option.label}
                </RadioLabel>
              </Radio>
            ))}
          </RadioButtonGroup>

          <Text mt="4" color="text.muted">
            <strong>{businessTypes[selectedBusinessType].label}: &nbsp;</strong>
            {businessTypes[selectedBusinessType].description}
          </Text>

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
