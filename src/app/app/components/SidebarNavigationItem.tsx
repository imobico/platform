import Link from 'next/link'
import { ReactElement, useState } from 'react'

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
  const [isItemHovered, setIsItemHovered] = useState(false)
  const Icon = icon

  return (
    <Link href={route} style={{ zIndex: 999, height: '48px', width: '100%' }}>
      <Flex
        zIndex={999}
        px="10px"
        width="100%"
        cursor="pointer"
        height="48px"
        alignItems="center"
        onMouseEnter={() => {
          setIsItemHovered(true)
        }}
        onMouseLeave={() => {
          setIsItemHovered(false)
        }}
      >
        <Icon size="7" isActive={isActive} isHover={isItemHovered} />
        <Text
          ml="8"
          transition="color 0.15s ease-in-out"
          style={{
            color: isActive
              ? token('colors.trusty.10')
              : isItemHovered
              ? token('colors.slate.12')
              : token('colors.slate.11')
          }}
        >
          {label}
        </Text>
      </Flex>
    </Link>
  )
}
