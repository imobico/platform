'use client'

import * as Ark from '@ark-ui/react/tabs'

import { styled } from '@/styled'
import { type TabsVariantProps, tabs } from '@/styled/recipes'

import { createStyleContext } from '../utils/createStyleContext'

const { withProvider, withContext } = createStyleContext(tabs)

export * from '@ark-ui/react/tabs'
export type TabsProps = Ark.TabsProps & TabsVariantProps

const TabsRoot = withProvider(styled(Ark.Tabs.Root), 'root')
export const TabContent = withContext(styled(Ark.Tabs.Content), 'content')
export const TabIndicator = withContext(styled(Ark.Tabs.Indicator), 'indicator')
export const TabList = withContext(styled(Ark.Tabs.List), 'list')
export const TabTrigger = withContext(styled(Ark.Tabs.Trigger), 'trigger')

export const Tabs = Object.assign(TabsRoot, {
  Root: TabsRoot,
  Content: TabContent,
  Indicator: TabIndicator,
  List: TabList,
  Trigger: TabTrigger
})
