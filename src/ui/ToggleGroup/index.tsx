'use client'

import * as Ark from '@ark-ui/react/toggle-group'

import { styled } from '@/styled'
import { type ToggleGroupVariantProps, toggleGroup } from '@/styled/recipes'

import { createStyleContext } from '../utils/createStyleContext'

const { withProvider, withContext } = createStyleContext(toggleGroup)

export * from '@ark-ui/react/toggle-group'
export type ToggleGroupProps = Ark.ToggleGroupProps & ToggleGroupVariantProps

const ToggleGroupRoot = withProvider(styled(Ark.ToggleGroup.Root), 'root')
export const Toggle = withContext(styled(Ark.ToggleGroup.Toggle), 'toggle')

export const ToggleGroup = Object.assign(ToggleGroupRoot, {
  Root: ToggleGroupRoot,
  Toggle: Toggle
})
