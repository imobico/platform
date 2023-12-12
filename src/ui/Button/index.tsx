import { SpinnerCircular } from 'spinners-react/lib/esm/SpinnerCircular'

import { Box, HTMLStyledProps, styled } from '@/styled'
import { ButtonVariantProps, button } from '@/styled/recipes'

export interface ButtonProps extends ButtonVariantProps, HTMLStyledProps<typeof StyledButton> {
  children: React.ReactNode
  isLoading?: boolean
}
export const StyledButton = styled('button', button)

export const Button = (props: ButtonProps) => {
  return (
    <StyledButton
      {...props}
      style={{
        opacity: props.isLoading ? 0.3 : 1,
        pointerEvents: props.isLoading ? 'none' : 'all'
      }}
    >
      {props.isLoading ? (
        <Box position="absolute">
          <SpinnerCircular />
        </Box>
      ) : (
        props.children
      )}
    </StyledButton>
  )
}
