import omit from 'lodash-es/omit'
import { SpinnerCircularFixed } from 'spinners-react/lib/esm/SpinnerCircularFixed'

import { Center, HTMLStyledProps, styled } from '@/styled'
import { ButtonVariantProps, button } from '@/styled/recipes'
import { token } from '@/styled/tokens'

import { Text } from '../Text'

export interface ButtonProps extends ButtonVariantProps, HTMLStyledProps<typeof StyledButton> {
  children: React.ReactNode
  isLoading?: boolean
  loadingLabel?: string
}
export const StyledButton = styled('button', button)

export const Button = ({ loadingLabel = 'Carregando...', ...props }: ButtonProps) => {
  return (
    <StyledButton
      {...omit(props, ['isLoading', 'loadingLabel'])}
      style={{
        opacity: props.isLoading ? 0.75 : 1,
        pointerEvents: props.isLoading ? 'none' : 'all'
      }}
    >
      {props.isLoading ? (
        <Center width="100%" height="100%">
          <SpinnerCircularFixed
            style={{ height: '60%' }}
            thickness={200}
            color={!props.variant || props.variant === 'solid' ? 'white' : token('colors.trusty.8')}
            secondaryColor={
              !props.variant || props.variant === 'solid'
                ? 'rgba(255,255,255,0.3)'
                : token('colors.trusty.4')
            }
          />
          <Text style={{ paddingLeft: '2%' }}>{loadingLabel}</Text>
        </Center>
      ) : (
        props.children
      )}
    </StyledButton>
  )
}
