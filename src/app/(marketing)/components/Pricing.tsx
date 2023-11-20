'use client'

import Image from 'next/image'

import { Box, Center, Flex, HStack } from '@/styled'

import { H1, H2, H3, H4, Strong, Text } from '@/ui'

const options = [
  { id: 'aio', label: 'Tudo em um único produto' },
  { id: 'automatize', label: 'Automatize seu trabalho' },
  { id: 'onde', label: 'Onde você estiver' }
]

export const Highlights = () => {
  return (
    <>
      <Center bg="trusty" flexDirection="column" mt="400px" p="12">
        <Box width="100%" maxWidth="1220px" p="16" mt="16">
          <HStack width="100%" gap="0">
            <Center
              position="relative"
              borderRight="2px solid token(colors.slate.5)"
              flex="1"
              py="6"
              px="8"
              bg="white"
              borderTopLeftRadius="3xl"
              borderBottomLeftRadius="3xl"
            >
              <Image src="/pricing-icon-1.svg" alt="Imobi Plano Básico" width={120} height={120} />
              <Flex
                justifyContent="space-between"
                borderTopRightRadius="full"
                borderBottomRightRadius="full"
                alignItems="flex-end"
                position="absolute"
                top="20px"
                left="0"
                py="1"
                px="4"
                bg="trusty.11"
              >
                <H2 color="white" fontSize="xl">
                  <Strong fontWeight={400} color="trusty.3" mr="1">
                    Plano
                  </Strong>
                  Básico
                </H2>
              </Flex>
            </Center>
            <Center
              position="relative"
              flex="1"
              py="6"
              px="8"
              bg="white"
              borderRight="2px solid token(colors.slate.5)"
            >
              <Image src="/pricing-icon-2.svg" alt="Imobi Plano Mais" width={120} height={120} />
              <Flex
                justifyContent="space-between"
                borderTopRightRadius="full"
                borderBottomRightRadius="full"
                alignItems="flex-end"
                position="absolute"
                top="20px"
                left="0"
                py="1"
                px="4"
                bg="trusty.11"
              >
                <H2 color="white" fontSize="xl">
                  <Strong fontWeight={400} color="trusty.3" mr="1">
                    Plano
                  </Strong>
                  Mais
                </H2>
              </Flex>
            </Center>
            <Center
              position="relative"
              flex="1"
              py="6"
              px="8"
              bg="white"
              borderRight="2px solid token(colors.slate.5)"
            >
              <Image src="/pricing-icon-3.svg" alt="Imobi Plano Pro" width={120} height={120} />
              <Flex
                justifyContent="space-between"
                borderTopRightRadius="full"
                borderBottomRightRadius="full"
                alignItems="flex-end"
                position="absolute"
                top="20px"
                left="0"
                py="1"
                px="4"
                bg="trusty.11"
              >
                <H2 color="white" fontSize="xl">
                  <Strong fontWeight={400} color="trusty.3" mr="1">
                    Plano
                  </Strong>
                  Pro
                </H2>
              </Flex>
            </Center>
            <Center
              position="relative"
              flex="1"
              py="6"
              px="8"
              bg="white"
              borderTopRightRadius="3xl"
              borderBottomRightRadius="3xl"
            >
              <Image src="/pricing-icon-4.svg" alt="Imobi Plano Elite" width={120} height={120} />
              <Flex
                justifyContent="space-between"
                borderTopRightRadius="full"
                borderBottomRightRadius="full"
                alignItems="flex-end"
                position="absolute"
                top="20px"
                left="0"
                py="1"
                px="4"
                bg="trusty.11"
              >
                <H2 color="white" fontSize="xl">
                  <Strong fontWeight={400} color="trusty.3" mr="1">
                    Plano
                  </Strong>
                  Elite
                </H2>
              </Flex>
            </Center>
          </HStack>
        </Box>
      </Center>
    </>
  )
}

export default Highlights
