'use client'

import { useRouter, useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'

import { Briefcase, Building, User as UserIcon } from '@/icons'
import { OrganizationType } from '@/types'
import { Box, Button, Center, H1, RadioButtonGroup, Text } from '@/ui'

import { StepComponentProps } from '../page'

const businessTypes = {
  agent: {
    value: 'agent',
    label: 'Corretor',
    description:
      'Você trabalha de forma individual e independente, gerenciando uma quantidade menor de imóveis.',
    icon: Briefcase
  },
  agency: {
    value: 'agency',
    label: 'Imobiliária',
    description:
      'Negócios com equipes de dois ou mais corretores, que gerencia números maiores de imóveis.',
    icon: Building
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
    <Box>
      <H1 fontSize="4xl">Tipo de negócio</H1>
      <Text color="text.muted" mb="12" pr="32">
        O seu perfil de negócio nos ajudará a personalizar o seu painel com as informações mais
        relevantes para você.
      </Text>
      <Box width="100%">
        <RadioButtonGroup.Root
          value={selectedBusinessType}
          variant="outline"
          display="grid"
          gridTemplateColumns="repeat(3, 1fr)"
          onValueChange={(businessType) => {
            setSelectedBusinessType(businessType.value as OrganizationType)
          }}
        >
          {Object.values(businessTypes).map((option, id) => (
            <RadioButtonGroup.Item key={id} value={option.value} height="8vw">
              <RadioButtonGroup.ItemControl />
              <RadioButtonGroup.Label pointerEvents="none">
                <Center flexDirection="column">
                  <option.icon
                    size="10"
                    color={option.value === selectedBusinessType ? 'trusty' : 'slate.12'}
                  />
                  <Text
                    fontSize="md"
                    color={option.value === selectedBusinessType ? 'trusty' : 'slate.12'}
                    mt="3"
                  >
                    {option.label}
                  </Text>
                </Center>
              </RadioButtonGroup.Label>
            </RadioButtonGroup.Item>
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
