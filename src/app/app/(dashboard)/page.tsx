'use client'

import { Box } from '@/styled'

import { PageRowLayout } from '@/components'
import { PageHeaderLayout } from '@/components/PageHeaderLayout'
import { useCurrentUser } from '@/hooks'
import useCurrentOrganization from '@/hooks/useCurrentOrganization'
import { H1, Strong, Text } from '@/ui'

import { NextSteps } from './components/NextSteps'

const getGreeting = () => {
  const day = new Date()
  const hr = day.getHours()
  if (hr >= 4 && hr < 12) {
    return 'Bom dia'
  } else if (hr >= 12 && hr <= 17) {
    return 'Boa tarde'
  } else {
    return 'Boa noite'
  }
}
export default function Home() {
  const { data: currentUserData } = useCurrentUser()
  const { data: currentOrganizationData } = useCurrentOrganization()
  const greeting = getGreeting()

  // CRIAR COMPONENT PAGE LAYOUT QUE APLICA O PADDING
  // TIRAR PADDING DO LAYOUT PRINCIPAL
  // CRIAR PAGE HEADER COMPONENT COM PADDING CORRETO

  return (
    <>
      <PageHeaderLayout>
        <Box width="100%" animationName="fadeIn" animationDuration="0.8s">
          <H1 fontSize="3xl" color="trusty.1">
            <Strong fontWeight={900}>{greeting}</Strong>
            {currentUserData?.first_name && <>, {currentUserData?.first_name}</>}
            !&nbsp; 👋
          </H1>
          <Text color="trusty.1" fontSize="lg" opacity={0.8}>
            Aqui você consegue ter uma visão geral do seu negócio
            {currentOrganizationData?.name && (
              <Strong>&nbsp;({currentOrganizationData?.name})</Strong>
            )}
            .
          </Text>
        </Box>
      </PageHeaderLayout>
      <PageRowLayout mt={-16}>
        <NextSteps />
      </PageRowLayout>
    </>
  )
}
