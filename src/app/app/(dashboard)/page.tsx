'use client'

import { Box } from '@/styled'

import { PageRowLayout } from '@/components'
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
      <PageRowLayout
        pt={12}
        pb={32}
        background="conic-gradient(from -60deg at 50% calc(100%/3),#001f55 0 120deg,#0000 0),
        conic-gradient(from 120deg at 50% calc(200%/3),#001f55 0 120deg,#0000 0),
        conic-gradient(from  60deg at calc(200%/3),#001f55 60deg,#001436 0 120deg,#0000 0),
        conic-gradient(from 180deg at calc(100%/3),#002f81 60deg,#001f55 0 120deg,#0000 0),
        linear-gradient(90deg,#002f81 calc(100%/6),#001436 0 50%,
        #002f81 0 calc(500%/6), #001436 0)"
        backgroundSize="132px 76px"
        // V2
        // background="conic-gradient(from 75deg,#001436   15deg ,#001f55 0 30deg ,#0000 0 180deg, #001f55 0 195deg,#001436 0 210deg,#0000 0) calc(0.5*32px) calc(0.5*32px/0.577),
        // conic-gradient(#001436   30deg ,#002f81 0 75deg, #001436 0 90deg, #001f55 0 105deg, #002f81 0 150deg, #001f55 0 180deg,#002f81 0 210deg, #001436 0 256deg, #001f55 0 270deg,#001436 0 286deg, #001f55 0 331deg,#002f81 0)"
        // backgroundSize="32px calc(32px/0.577)"
        // V1
        // backgroundImage="repeating-radial-gradient( circle at 0 0, transparent 0, #001F55 32px ), repeating-linear-gradient( #00143655, #001436 )"
        // backgroundColor="trusty.12"
      >
        <Box width="100%" px={10}>
          <H1 fontSize="3xl" color="trusty.1">
            <Strong fontWeight={900}>{greeting}</Strong>
            {currentUserData?.first_name && <>, </>}
            {currentUserData?.first_name && 'Kaue'}
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
      </PageRowLayout>
      <PageRowLayout mt={-16}>
        <NextSteps />
      </PageRowLayout>
    </>
  )
}
