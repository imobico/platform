'use client'

import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import Lottie from 'lottie-react'
import { createElement, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'

import { useCurrentUser } from '@/hooks'
import { useUpdateUser } from '@/mutations'
import loadingAnimation from '@/public/lottie-loading.json'
import { browserClient } from '@/supabase'
import { User } from '@/types'
import { Box, Button, Center, H1, HStack, Input, Label, Text } from '@/ui'

import PersonalProfileComponent from './steps/PersonalProfile'

export type Steps = 1 | 2

export type StepComponentProps = {
  currentStep: Steps
  currentUser: User | undefined
  onComplete: () => void
}

const stepComponents = {
  1: PersonalProfileComponent,
  2: PersonalProfileComponent
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
        <CurrentStepComponent
          currentStep={currentStep}
          currentUser={currentUserData}
          onComplete={() => {
            if (currentStep < Object.keys(stepComponents).length)
              setCurrentStep((currentStep + 1) as Steps)
          }}
        />
      </Box>
    </>
  )
}
