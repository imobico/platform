'use client'

import { useRouter, useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'

import { BriefcaseIcon, BuildingIcon, UserIcon } from '@/icons'
import { OrganizationType } from '@/types'
import { Box, Button, H1, RadioButtonGroup, Text } from '@/ui'

import { BusinessTypeItem } from '../components/BusinessTypeItem'
import { StepComponentProps } from '../page'

const businessTypes = {
  agent: {
    value: 'agent',
    label: 'Corretor',
    description:
      'Você trabalha de forma individual e independente, gerenciando uma quantidade menor de imóveis.',
    icon: BriefcaseIcon
  },
  agency: {
    value: 'agency',
    label: 'Imobiliária',
    description:
      'Negócios com equipes de dois ou mais corretores, que gerencia números maiores de imóveis.',
    icon: BuildingIcon
  },
  owner: {
    value: 'owner',
    label: 'Proprietário',
    description:
      'Você possuí um ou mais imóveis e quer gerenciar suas locações anuais e por temporada.',
    icon: UserIcon
  }
}

export default function BusinessType({ onComplete }: StepComponentProps) {
  const [selectedBusinessType, setSelectedBusinessType] = useState<OrganizationType>('agency')

  const { push } = useRouter()

  const searchParams = useSearchParams()
  const businessTypeParam = searchParams.get('businessType')

  async function submitBusinessType() {
    push(`?businessType=${businessTypes[selectedBusinessType as OrganizationType].value}`)
    onComplete()
  }

  useEffect(() => {
    if (businessTypeParam !== null) {
      setSelectedBusinessType(businessTypeParam as OrganizationType)
    }
  }, [businessTypeParam])

  return (
    <Box maxHeight="100vh" overflowY="auto" p={8}>
      <H1 fontSize={{ base: '3xl', lg: '4xl' }}>Tipo de negócio</H1>
      <Text
        fontSize={{ base: 'md', md: 'lg' }}
        color="text.muted"
        mb={{ base: 8, lg: 12 }}
        pr={{ base: 0, lg: '32' }}
      >
        O seu perfil de negócio nos ajudará a personalizar o seu painel com as informações mais
        relevantes para você.
      </Text>
      <Box width="100%">
        <RadioButtonGroup.Root
          value={selectedBusinessType}
          variant="outline"
          display="grid"
          gridTemplateColumns={{ base: 'repeat(1, 1fr)', lg: 'repeat(3, 1fr)' }}
          onValueChange={(businessType) => {
            setSelectedBusinessType(businessType.value as OrganizationType)
          }}
        >
          {Object.values(businessTypes).map((option, index) => (
            <BusinessTypeItem
              key={`BusinessTypeItem-${index}`}
              value={option.value}
              label={option.label}
              icon={option.icon}
              isActive={selectedBusinessType === option.value}
            />
          ))}
        </RadioButtonGroup.Root>

        <Text mt="4" color="trusty.8">
          <strong>{businessTypes[selectedBusinessType].label}: &nbsp;</strong>
          {businessTypes[selectedBusinessType].description}
        </Text>

        <Button
          mt={8}
          colorScheme="black"
          size="xl"
          width="100%"
          onClick={() => {
            submitBusinessType()
          }}
          // isLoading={isProfileUpdating}
          // loadingText="Salvando..."
        >
          Continuar
        </Button>
      </Box>
    </Box>
  )
}
