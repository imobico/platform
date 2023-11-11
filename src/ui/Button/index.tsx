import { ark } from '@ark-ui/react'
import { ReactNode } from 'react'
import { PropagateLoader } from 'react-spinners'

import { Center, styled } from '@/styled'
import { button } from '@/styled/recipes'
import { FontSizeToken } from '@/styled/tokens'

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
          <PropagateLoader color="rgba(255,255,255,0.4)" />
        </Center>
      ) : (
        children
      )}
    </BaseButton>
  )
}
