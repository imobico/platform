import Image from 'next/image'
import Link from 'next/link'

import { Box, Center, Flex, HStack } from '@/styled'

import { Button, Text } from '@/ui'

export const MarketingHeader = () => {
  return (
    <Center py="4">
      <Flex width="100%" maxWidth="1220px" alignItems="center" justifyContent="space-between">
        <Flex>
          <Box width="110px">
            <Image
              priority
              src="/logo-imobi-trusty.svg"
              alt="Imobi Test"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: '100%', height: 'auto' }}
            />
          </Box>
          <HStack ml="12" gap="8">
            <Box>
              <Text fontWeight="semibold">Funcionalidades</Text>
            </Box>
            <Box>
              <Text fontWeight="semibold">Integrações</Text>
            </Box>
            <Box>
              <Text fontWeight="semibold">Sobre</Text>
            </Box>
            <Box>
              <Text fontWeight="semibold">Planos</Text>
            </Box>
          </HStack>
        </Flex>
        <Flex>
          <HStack>
            <Link href="/entrar">
              <Button borderRadius="full" size="md" fontWeight="700" variant="outline">
                Meu painel
              </Button>
            </Link>
            <Link href="/cadastro">
              <Button borderRadius="full" size="md" fontWeight="500">
                Faça um<strong style={{ fontWeight: 700, marginLeft: '-6px' }}>Teste grátis</strong>
              </Button>
            </Link>
          </HStack>
        </Flex>
      </Flex>
    </Center>
  )
}
