'use client'

import { useState } from 'react'

import { Box, Flex, VStack } from '@/styled'

import { Text } from '@/ui'

import './style.css'

export const BurgerNavIcon = () => {
  const [isNavActive, setIsNavActive] = useState(false)

  return (
    <Box>
      {isNavActive && (
        <VStack
          alignItems="center"
          justifyContent="center"
          position="fixed"
          left="0"
          top="0"
          width="100%"
          height="100%"
          bg="white"
          zIndex={10}
        >
          <Box
            onClick={() => {
              setIsNavActive(false)
            }}
          >
            <a href="#funcionalidades">
              <Text fontSize="2xl" fontWeight="bold">
                Funcionalidades
              </Text>
            </a>
          </Box>
          <Box
            onClick={() => {
              setIsNavActive(false)
            }}
          >
            <a href="#integracoes">
              <Text fontSize="2xl" fontWeight="bold">
                Integrações
              </Text>
            </a>
          </Box>
          <Box
            onClick={() => {
              setIsNavActive(false)
            }}
          >
            <a href="#planos">
              <Text fontSize="2xl" fontWeight="bold">
                Planos
              </Text>
            </a>
          </Box>
        </VStack>
      )}

      <Flex
        position={isNavActive ? 'fixed' : 'relative'}
        top={isNavActive ? '16px' : 'unset'}
        right={isNavActive ? '16px' : 'unset'}
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
        zIndex={999}
      >
        <Text zIndex={999} mr={2}>
          {isNavActive ? 'Fechar' : 'Navegação'}
        </Text>
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
