'use client'

import Image from 'next/image'

import { Box, Center } from '@/styled'

import { H1, Strong, Text } from '@/ui'

export const Integrations = () => {
  return (
    <>
      <Center flexDirection="column" mt="400px" pt="12" pb={16} bg="trusty.1" id="integracoes">
        <Box width="100%" maxWidth="1220px">
          <Center
            justifyContent="space-between"
            width="100%"
            flexDirection={{ base: 'column', lg: 'row' }}
          >
            <Box
              width={{ base: '100%', md: '560px', lg: '420px' }}
              px={{ base: 16, lg: 0 }}
              mb={{ base: 12, lg: 0 }}
            >
              <Image
                src="/illustration-trusty-rafiki-integrations.svg"
                alt="A Imoblr tem diversas integrações com portais de imóveis!"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: '100%', height: 'auto' }}
              />
            </Box>
            <Center
              flex="1"
              flexDirection="column"
              alignItems={{ base: 'center', lg: 'flex-start' }}
            >
              <H1
                fontSize={{ base: '3xl', md: '4xl' }}
                color="trusty.11"
                px={{ base: 8, md: 16 }}
                mb="4"
                textAlign={{ base: 'center', lg: 'left' }}
              >
                <Strong
                  px="2"
                  bg="linear-gradient(360deg, token(colors.trusty.3) 0%, token(colors.trusty.3) 30%, rgba(209,226,255,0) 30%, rgba(255,255,255,0) 100%)"
                >
                  Integrações com diversos portais
                </Strong>
                &nbsp;para criar poderosas automações (em breve)
              </H1>
              <Text
                color="trusty.10"
                fontSize="xl"
                maxWidth="680px"
                textAlign={{ base: 'center', lg: 'left' }}
                px={{ base: 12, md: 16 }}
              >
                Você só precisa cadastrar seus imóveis e nós publicamos automaticamente no seu site,
                portais de imóveis como Zap Imoveis, Viva Real, etc. Além de integrações com
                plataformas de redes sociais, Google Calendar e mais!
              </Text>
            </Center>
          </Center>
        </Box>
      </Center>
    </>
  )
}

export default Integrations
