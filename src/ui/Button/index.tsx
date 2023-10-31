import { ark } from '@ark-ui/react'

import { styled } from '@/styled'
import { button } from '@/styled/recipes'

export type ButtonProps = typeof Button
export const Button = styled(ark.button, button)
