import type {} from 'ldrs'

import { HTMLStyledProps, styled } from '@/styled'
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
      <l-squircle></l-squircle>
      {props.children}
    </StyledButton>
  )
}
