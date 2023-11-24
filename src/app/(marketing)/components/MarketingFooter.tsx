'use client'

import Image from 'next/image'

import { Box, Center, Divider, Flex, HStack } from '@/styled'

import { H3, Text } from '@/ui'

export const MarketingFooter = () => {
  return (
    <>
      {/* <Center bg="trusty.2" flexDirection="column">
        <Box width="100%" maxWidth="1220px">
          <Center justifyContent="space-between" width="100%" zIndex={1}>
            <Flex flex="1" mr="12">
              <Box width="140px" mr="12" pt="6">
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
              <HStack flex="1" gap="12">
                <Box flex="1">
                  <H3>Atendimento</H3>
                  <Text>Nosso atendimento funciona de segunda a sábado das 9 as 18:00</Text>
                </Box>
                <Box flex="1">
                  <H3>Localização</H3>
                  <Text>
                    Rua José Fava, 185
                    <br />
                    Planalto Paulista <br /> São Paulo, SP
                  </Text>
                </Box>
              </HStack>
            </Flex>
            <Image
              src="/illustration-trusty-rafiki-city.svg"
              alt="Lista de planos e preços Imobi"
              width={240}
              height={240}
            />
          </Center>
        </Box>
        <Divider borderColor="trusty.3" mt="-8" />
        <Text py="8">
          Copyright © 2023: Todos os direitos reservados a Imoblr Sistemas para Imobiliárias e
          Corretores
        </Text>
      </Center> */}
    </>
  )
}

export default MarketingFooter
