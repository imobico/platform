import { type HTMLStyledProps, styled } from '@/styled'
import { baseInput } from '@/styled/recipes'

export const Input = styled('input', baseInput)
export type InputProps = HTMLStyledProps<typeof Input>

export const BaseInput = styled('input', baseInput)
export type BaseInputProps = HTMLStyledProps<typeof BaseInput>
