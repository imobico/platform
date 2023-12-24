import { type HTMLStyledProps, styled } from '@/styled'
import { baseInput } from '@/styled/recipes'

export const BaseInput = styled('input', baseInput)
export type BaseInputProps = HTMLStyledProps<typeof BaseInput>
