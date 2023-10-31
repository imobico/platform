import { type HTMLStyledProps, styled } from '@/styled'
import { input } from '@/styled/recipes'

export const Input = styled('input', input)
export type InputProps = HTMLStyledProps<typeof Input>
