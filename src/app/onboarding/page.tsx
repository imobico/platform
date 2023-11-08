'use client'

import { createElement, useState } from 'react'
import { BarLoader } from 'react-spinners'

import { useCurrentUser } from '@/hooks'
import { trusty } from '@/theme/colors'
import { User } from '@/types'
import { Box, Center } from '@/ui'

import BusinessTypeComponent from './steps/BusinessType'
import PersonalProfileComponent from './steps/PersonalProfile'

export type Steps = 1 | 2

export type StepComponentProps = {
  currentStep: Steps
  currentUser: User | undefined
  onComplete: () => void
}

const stepComponents = {
  1: PersonalProfileComponent,
  2: BusinessTypeComponent
}

const CurrentStepComponent = ({ currentStep, currentUser, onComplete }: StepComponentProps) => {
  return createElement(stepComponents[currentStep], {
    currentStep,
    currentUser,
    onComplete
  })
}

export default function Onboarding() {
  const {
    data: currentUserData,
    isLoading: isCurrentUserLoading,
    error: currentUserError
  } = useCurrentUser()

  const [currentStep, setCurrentStep] = useState<Steps>(1) // Changed from 0 to 1

  return (
    <>
      <Box width="600px" maxWidth="90%" flexDirection="column">
        {!currentUserData ? (
          <Center width="100%" height="100%">
            <Box bg={trusty[4].value} borderRadius="300px" overflow="hidden" color="blue">
              <BarLoader color={trusty[8].value} width="200px" height="10px" speedMultiplier={2} />
            </Box>
          </Center>
        ) : (
          <CurrentStepComponent
            currentStep={currentStep}
            currentUser={currentUserData}
            onComplete={() => {
              console.log('oncomplete')
              if (currentStep < Object.keys(stepComponents).length) {
                console.log('increasing step to ', currentStep + 1)
                setCurrentStep((currentStep + 1) as Steps)

                console.log(currentStep)
              }
            }}
          />
        )}
      </Box>
    </>
  )
}
