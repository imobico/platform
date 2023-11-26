'use client'

import Link from 'next/link'
import { useState } from 'react'

import { Box, Flex, VStack } from '@/styled'

import { Button, Text } from '@/ui'

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
          <Box
            mt={12}
            mb={8}
            position="relative"
            width={{ base: '100%', md: 'unset' }}
            px={{ base: 8, md: 'unset' }}
          >
            <Link href="/entrar">
              <Button
                borderRadius="full"
                size="2xl"
                variant="outline"
                width={{ base: '100%', md: 'unset' }}
              >
                Acessar meu painel
              </Button>
            </Link>
          </Box>
          <Box
            position="relative"
            width={{ base: '100%', md: 'auto' }}
            px={{ base: 8, md: 'unset' }}
          >
            <Link href="/cadastro">
              <Button
                borderRadius="full"
                size="2xl"
                fontWeight="500"
                width={{ base: '100%', md: 'auto' }}
              >
                Faça um
                <strong style={{ fontWeight: 700, marginLeft: '-6px' }}>teste grátis</strong>
              </Button>
            </Link>
          </Box>
          <Box
            position="relative"
            width={{ base: '100%', md: 'unset' }}
            px={{ base: 8, md: 'unset' }}
          >
            <Link href="/entrar">
              <Button
                borderRadius="full"
                size="2xl"
                variant="outline"
                width={{ base: '100%', md: 'unset' }}
              >
                Agende uma apresentação
              </Button>
            </Link>
          </Box>
        </VStack>
      )}

      <Flex
        float="right"
        display="flex"
        position={isNavActive ? 'fixed' : 'unset'}
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
