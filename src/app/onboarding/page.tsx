'use client'

import Image from 'next/image'
import { createElement, useState } from 'react'
import { BarLoader } from 'react-spinners'

import { useCurrentUser } from '@/hooks'
import { useCreateOrganization } from '@/mutations'
import { trusty } from '@/theme/colors'
import { OrganizationType, User } from '@/types'
import { Box, Button, Center, H2, Text, VStack } from '@/ui'

import BusinessProfileComponent from './steps/BusinessProfile'
import BusinessTypeComponent from './steps/BusinessType'
import OnboardingSuccessComponent from './steps/OnboardingSuccess'
import PersonalProfileComponent from './steps/PersonalProfile'

export type Steps = 1 | 2 | 3 | 4

export type StepComponentProps = {
  currentStep: Steps
  currentUser: User | undefined
  onComplete: () => void
}

const stepComponents = {
  1: PersonalProfileComponent,
  2: BusinessTypeComponent,
  3: BusinessProfileComponent,
  4: OnboardingSuccessComponent
}

const CurrentStepComponent = ({ currentStep, currentUser, onComplete }: StepComponentProps) => {
  return createElement(stepComponents[currentStep], {
    currentStep,
    currentUser,
    onComplete
  })
}

export default function Onboarding() {
  const [isWelcomeDismissed, setIsWelcomeDismissed] = useState(false)
  const [currentStep, setCurrentStep] = useState<Steps>(1) // Changed from 0 to 1
  const {
    data: currentUserData,
    isLoading: isCurrentUserLoading,
    error: currentUserError
  } = useCurrentUser()
  const createOrganization = useCreateOrganization()

  async function skipOnboarding() {
    try {
      await createOrganization.mutateAsync({
        name: 'Meu Negócio Imobiliário',
        type: 'agency' as OrganizationType
      })
    } catch (error) {
      alert('algo deu errado')
      console.error(error)
    } finally {
      alert('foi!')
    }
  }

  return (
    <>
      {currentUserError ? (
        <Box>Algo deu errado</Box>
      ) : (
        <>
          {!isWelcomeDismissed ? (
            <Center
              width={{ base: '100vw', lg: '540px' }}
              maxWidth={{ base: '100vw', lg: '50vw' }}
              height="100%"
              p={{ base: 8, lg: '16' }}
              flexDirection="column"
              position="absolute"
              zIndex={10}
              top={{ base: '0', lg: 'unset' }}
              left={{ base: '0', lg: 'unset' }}
              bg={{ base: 'trusty', lg: 'white' }}
            >
              <Box width={{ base: '240px', lg: '320px' }} mb="12">
                <Image
                  priority
                  src="/onboarding.svg"
                  alt="Imobi Test"
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: '100%', height: 'auto' }}
                />
              </Box>
              <H2 fontSize="3xl" color="trusty.1" mb="2" textAlign="center">
                Bem-vindo à imobi!
              </H2>
              <Text
                fontSize="lg"
                color="trusty.2"
                mb="6"
                textAlign="center"
                letterSpacing="-0.5px"
                lineHeight={1.3}
              >
                Já está tudo certo com a sua conta, agora só precisamos saber um pouco mais sobre
                você e sobre o seu negócio.
              </Text>
              <Box
                bg="trusty.10"
                p="6"
                borderRadius="xl"
                mt="12"
                display={{ base: 'none', lg: 'block' }}
              >
                <Text fontSize="sm" color="trusty.1" textAlign="center">
                  Caso precise, você poderá alterar suas informações a qualquer momento nas
                  configurações da sua conta.
                </Text>
              </Box>

              <VStack gap={8} width="100%" mt="8">
                <Button
                  bg="white"
                  color="trusty"
                  size="2xl"
                  width="100%"
                  onClick={() => {
                    setIsWelcomeDismissed(true)
                  }}
                >
                  Completar perfil
                </Button>
                <Button
                  variant="link"
                  color="white"
                  onClick={() => {
                    skipOnboarding()
                  }}
                >
                  Pular essa etapa
                </Button>
              </VStack>
            </Center>
          ) : (
            <Box width="600px" maxWidth="90%" flexDirection="column">
              {isCurrentUserLoading || !currentUserData ? (
                <Center width="100%" height="100%">
                  <Box bg={trusty[4].value} borderRadius="300px" overflow="hidden" color="blue">
                    <BarLoader
                      color={trusty[8].value}
                      width="200px"
                      height="10px"
                      speedMultiplier={2}
                    />
                  </Box>
                </Center>
              ) : (
                <CurrentStepComponent
                  currentStep={currentStep}
                  currentUser={currentUserData}
                  onComplete={() => {
                    if (currentStep < Object.keys(stepComponents).length) {
                      setCurrentStep((currentStep + 1) as Steps)
                    }
                  }}
                />
              )}
            </Box>
          )}
        </>
      )}
    </>
  )
}
