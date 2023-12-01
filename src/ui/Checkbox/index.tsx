'use client'

import { Checkbox as ArkCheckbox } from '@ark-ui/react'

import { styled } from '@/styled'
import { checkbox } from '@/styled/recipes'

import { createStyleContext } from '../utils/createStyleContext'

const { withProvider, withContext } = createStyleContext(checkbox)

export const CheckboxRoot = withProvider(styled(ArkCheckbox.Root), 'root')
export const CheckboxControl = withContext(styled(ArkCheckbox.Control), 'control')
export const CheckboxIndicator = withContext(styled(ArkCheckbox.Indicator), 'indicator')
export const CheckboxLabel = withContext(styled(ArkCheckbox.Label), 'label')

export const Checkbox = Object.assign(CheckboxRoot, {
  Root: CheckboxRoot,
  Control: CheckboxControl,
  Indicator: CheckboxIndicator,
  Label: CheckboxLabel
})

export type CheckboxProps = typeof CheckboxRoot
export type CheckboxControlProps = typeof CheckboxControl
export type CheckboxIndicatorProps = typeof CheckboxIndicator
export type CheckboxLabelProps = typeof CheckboxLabel
