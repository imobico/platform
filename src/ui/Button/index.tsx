import { HTMLStyledProps, styled } from '@/styled'
import { ButtonVariantProps, button } from '@/styled/recipes'

export interface ButtonProps extends ButtonVariantProps, HTMLStyledProps<typeof StyledButton> {
  children: React.ReactNode
  isLoading?: boolean
}
export const StyledButton = styled('button', button)

export const Button = (props: ButtonProps) => {
  return <StyledButton {...props}>{props.children}</StyledButton>
}
