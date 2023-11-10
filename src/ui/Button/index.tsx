import { ark } from '@ark-ui/react'
import { defineRecipe } from '@pandacss/dev'
import { Children, ReactNode } from 'react'
import { BarLoader, FadeLoader, PropagateLoader } from 'react-spinners'

import { Box, Center, styled } from '@/styled'
import { button } from '@/styled/recipes'

import { User } from '@/icons'
import { trusty } from '@/theme/colors'

export type BaseButtonProps = typeof BaseButton
export interface ButtonProps extends BaseButtonProps {
  isLoading: boolean
  children: ReactNode
}

export const BaseButton = styled(ark.button, button)

export const Button = ({ isLoading, children, ...rest }: ButtonProps) => {
  return (
    <BaseButton
      style={{ pointerEvents: isLoading ? 'none' : 'all', opacity: isLoading ? '0.8' : '1' }}
      {...rest}
    >
      {isLoading ? (
        <Center
          style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            transform: 'translateY(-5px) scale(0.6)',
            justifyContent: 'center'
          }}
        >
          <PropagateLoader color={trusty[4].value} height />
        </Center>
      ) : (
        children
      )}
    </BaseButton>
  )
}
