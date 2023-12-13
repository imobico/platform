import { type HTMLStyledProps, styled } from '@/styled'
import { textarea } from '@/styled/recipes'

export const Textarea = styled('textarea', textarea)
export interface TextareaProps extends HTMLStyledProps<typeof Textarea> {}
