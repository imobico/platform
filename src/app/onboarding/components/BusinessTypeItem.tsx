import { useState } from 'react'

import { IconElement } from '@/icons'
import { Box, Center, RadioButtonGroup, Text } from '@/ui'

export interface BusinessTypeItemProps {
  label: string
  value: string
  icon: IconElement
  isActive?: boolean
}

export const BusinessTypeItem = ({ label, value, icon, isActive }: BusinessTypeItemProps) => {
  const [isItemHovered, setIsItemHovered] = useState(false)

  const Icon = icon

  return (
    <RadioButtonGroup.Item
      value={value}
      height={{ base: '8vh', lg: '8vw' }}
      onMouseEnter={() => {
        setIsItemHovered(true)
      }}
      onMouseLeave={() => {
        setIsItemHovered(false)
      }}
    >
      <RadioButtonGroup.ItemControl />
      <RadioButtonGroup.Label pointerEvents="none">
        <Center flexDirection={{ base: 'row', lg: 'column' }}>
          <Box display={{ base: 'block', lg: 'none' }}>
            <Icon size="7" isHover={isItemHovered} isActive={isActive} />
          </Box>
          <Box display={{ base: 'none', lg: 'block' }}>
            <Icon size="9" isHover={isItemHovered} isActive={isActive} />
          </Box>
          <Text mt={{ base: 0, lg: '2' }} ml={{ base: 2, lg: 0 }}>
            {label}
          </Text>
        </Center>
      </RadioButtonGroup.Label>
    </RadioButtonGroup.Item>
  )
}
