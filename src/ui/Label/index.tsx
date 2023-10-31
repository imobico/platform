import { type HTMLStyledProps, styled } from '@/styled/jsx'
import { label } from '@/styled/recipes'

export const Label = styled('label', label)
export type LabelProps = HTMLStyledProps<typeof Label>
