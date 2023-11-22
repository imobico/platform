'use client'

import Image from 'next/image'

import { Box, Center, Divider, Flex, HStack } from '@/styled'

import { H1, H2, H3, H4, Strong, Text } from '@/ui'

export const Integrations = () => {
  return (
    <>
      <Center flexDirection="column" mt="400px" pt="24" pb="32" bg="trusty.1" id="integracoes">
        <Box width="100%" maxWidth="1220px">
          <Center justifyContent="space-between" width="100%">
            <Image
              src="/illustration-trusty-rafiki-integrations.svg"
              alt="Lista de planos e preços Imobi"
              width={420}
              height={420}
            />
            <Box flex="1" ml="24">
              <H1 fontSize="4xl" color="trusty.11" mb="4">
                <Strong
                  px="2"
                  bg="linear-gradient(360deg, token(colors.trusty.3) 0%, token(colors.trusty.3) 30%, rgba(209,226,255,0) 30%, rgba(255,255,255,0) 100%)"
                >
                  Integrações com portais e plataformas
                </Strong>
                &nbsp;para criar poderosas automações (em breve)
              </H1>
              <Text color="trusty.10" fontSize="xl" maxWidth="680px">
                Você só precisa cadastrar seus imóveis e nós publicamos automaticamente no seu site,
                portais de imóveis como Zap Imoveis, Viva Real, etc. Além de integrações com
                plataformas de redes sociais, Google Calendar e mais!
              </Text>
            </Box>
          </Center>
        </Box>
      </Center>
    </>
  )
}

export default Integrations
