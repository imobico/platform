'use client'

import { useState } from 'react'

import { Box, Flex } from '@/styled'

import { Text } from '@/ui'

import './style.css'

export const BurgerNavIcon = () => {
  const [isNavActive, setIsNavActive] = useState(false)

  return (
    <Box>
      <Flex
        alignItems="center"
        justifyContent="center"
        borderRadius="full"
        py={2}
        px={4}
        border={
          isNavActive ? '2px solid token(colors.trusty.5)' : '2px solid token(colors.slate.5)'
        }
        onClick={() => {
          setIsNavActive(!isNavActive)
        }}
        boxShadow={isNavActive ? `0 0 20px 0 token(colors.trusty.2)` : 'none'}
        transition="all 0.2s ease-in-out"
      >
        <Text mr={2}>{isNavActive ? 'Fechar' : 'Navegação'}</Text>
        <Box className={`burger-nav-icon ${isNavActive ? 'open' : 'closed'}`}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </Box>
      </Flex>
    </Box>
  )
}

export default BurgerNavIcon
