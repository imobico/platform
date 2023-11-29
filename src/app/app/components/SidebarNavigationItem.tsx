import Link from 'next/link'
import { ReactElement } from 'react'

import { Flex } from '@/styled'
import { token } from '@/styled/tokens'

import { IconProps } from '@/icons'
import { Text } from '@/ui'

export type SidebarNavigationItemProps = {
  route: string
  label: string
  icon: (props: IconProps) => ReactElement
  isActive: boolean
}

export const SidebarNavigationItem = ({
  route,
  label,
  icon,
  isActive
}: SidebarNavigationItemProps) => {
  const Icon = icon
  return (
    <Link href={route} style={{ zIndex: 999, height: '48px', width: '100%' }}>
      <Flex
        zIndex={999}
        px={3}
        width="100%"
        className="group"
        cursor="pointer"
        height="48px"
        alignItems="center"
      >
        <Icon size="6" isActive />
        <Text
          _groupHover={{ color: 'slate.12' }}
          color="slate.10"
          ml="8"
          transition="color 0.15s ease-in-out"
          style={{
            color: isActive ? token('colors.trusty') : undefined
          }}
        >
          {label}
        </Text>
      </Flex>
    </Link>
  )
}
