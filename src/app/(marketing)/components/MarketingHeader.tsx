import Image from 'next/image'
import Link from 'next/link'

import { Box, Center, Flex, HStack } from '@/styled'

import { BurgerNavIcon } from '@/components'
import { Button, Text } from '@/ui'

export const MarketingHeader = () => {
  return (
    <Center py={{ base: 4, md: 4 }} px={{ base: 4, md: 4 }}>
      <Flex width="100%" maxWidth="1220px" alignItems="center" justifyContent="space-between">
        <Flex>
          <Box width={{ base: '140px', md: '140px' }}>
            <Image
              priority
              src="/logo-imoblr-light-bg.svg"
              alt="Imobi Test"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: '100%', height: 'auto' }}
            />
          </Box>
          <HStack ml="12" gap="8" display={{ base: 'none', md: 'flex' }}>
            <Box>
              <a href="#funcionalidades">
                <Text fontWeight="bold">Funcionalidades</Text>
              </a>
            </Box>
            <Box>
              <a href="#integracoes">
                <Text fontWeight="bold">Integrações</Text>
              </a>
            </Box>
            <Box>
              <a href="#planos">
                <Text fontWeight="bold">Planos</Text>
              </a>
            </Box>
          </HStack>
        </Flex>
        <Box display={{ base: 'block', md: 'none' }}>
          <BurgerNavIcon />
        </Box>
        <Flex display={{ base: 'none', md: 'flex' }}>
          <HStack>
            <Link href="/entrar">
              <Button borderRadius="full" fontWeight="700" variant="outline">
                Meu painel
              </Button>
            </Link>
            <Link href="/cadastro">
              <Button borderRadius="full" fontWeight="500">
                Faça um<strong style={{ fontWeight: 700, marginLeft: '-4px' }}>teste grátis</strong>
              </Button>
            </Link>
          </HStack>
        </Flex>
      </Flex>
    </Center>
  )
}
