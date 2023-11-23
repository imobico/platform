'use client'

import Image from 'next/image'

import { Box, Center, Flex, HStack } from '@/styled'

import { H3, Strong, Text } from '@/ui'

export const Highlights = () => {
  return (
    <>
      <Center pt="580px" pb="140px" bg="slate.3" mt="-500px" flexDirection="column">
        <Flex
          width="100%"
          maxWidth="1220px"
          alignItems="center"
          justifyContent="center"
          id="funcionalidades"
        >
          <Text fontSize="4xl" maxWidth="840px" textAlign="center">
            Concentre-se no seu negócio e clientes.
            <br />
            <Strong
              px="2"
              bg="linear-gradient(360deg, token(colors.trusty.4) 0%, token(colors.trusty.4) 30%, rgba(209,226,255,0) 30%, rgba(255,255,255,0) 100%)"
            >
              Deixe o resto com a gente!
            </Strong>
          </Text>
        </Flex>

        <Box
          bg="white"
          mb="-540px"
          borderRadius="30px"
          width="100%"
          maxWidth="1220px"
          p="16"
          pb="120px"
          mt="16"
        >
          <HStack width="100%" gap="16" alignItems="flex-start">
            <Center flex="1" flexDirection="column">
              <Image
                src="/feature-icon-website.svg"
                alt="Imoblr site pronto rápido"
                width={120}
                height={120}
              />
              <H3 fontSize="xl" textAlign="center" lineHeight={1.2} my="6">
                Seu otimizado e pronto em{' '}
                <Strong
                  px="1"
                  bg="linear-gradient(360deg, token(colors.trusty.3) 0%, token(colors.trusty.3) 30%, rgba(209,226,255,0) 30%, rgba(255,255,255,0) 100%)"
                >
                  5 minutos
                </Strong>
              </H3>
              <Text textAlign="center" color="text.muted">
                Utilizando as mais modernas tecnologias, você terá um site otimizado e pronto em 5
                minutos! Sem taxa de instalação. Sem custo de personalização. Sem complicação.
              </Text>
            </Center>
            <Center flex="1" flexDirection="column">
              <Image
                src="/feature-icon-properties.svg"
                alt="Imoblr gerencie seus imoveis"
                width={120}
                height={120}
              />
              <H3 fontSize="xl" textAlign="center" lineHeight={1.2} my="6">
                Gerencie seus imóveis em{' '}
                <Strong
                  px="1"
                  bg="linear-gradient(360deg, token(colors.trusty.3) 0%, token(colors.trusty.3) 30%, rgba(209,226,255,0) 30%, rgba(255,255,255,0) 100%)"
                >
                  um único lugar.
                </Strong>
              </H3>
              <Text textAlign="center" color="text.muted">
                Você cadastra os seus imóveis na Imoblr e nós publicamos automaticamente no seu site
                e diversos canais de integração.
              </Text>
            </Center>
            <Center flex="1" flexDirection="column">
              <Image
                src="/feature-icon-users.svg"
                alt="Imoblr gerencie seus clientes"
                width={120}
                height={120}
              />
              <H3 fontSize="xl" textAlign="center" lineHeight={1.2} my="6">
                Clientes e leads
                <Strong
                  px="1"
                  bg="linear-gradient(360deg, token(colors.trusty.3) 0%, token(colors.trusty.3) 30%, rgba(209,226,255,0) 30%, rgba(255,255,255,0) 100%)"
                >
                  no automático.
                </Strong>
              </H3>
              <Text textAlign="center" color="text.muted">
                Seus clientes e leads categorizados automaticamente. Saiba o status e o histórico de
                todos os seus clientes de forma simples.
              </Text>
            </Center>
            <Center flex="1" flexDirection="column">
              <Image
                src="/feature-icon-mobile.svg"
                alt="Imoblr app mobile"
                width={120}
                height={120}
              />
              <H3 fontSize="xl" textAlign="center" lineHeight={1.2} my="6">
                <Strong
                  px="1"
                  bg="linear-gradient(360deg, token(colors.trusty.3) 0%, token(colors.trusty.3) 30%, rgba(209,226,255,0) 30%, rgba(255,255,255,0) 100%)"
                >
                  App mobile
                </Strong>
                na palma da sua mão
              </H3>
              <Text textAlign="center" color="text.muted">
                Gerencie o seu negócio de onde estiver através dos nosso app otimizado para iPhone e
                Android.
              </Text>
            </Center>
          </HStack>
        </Box>
      </Center>
    </>
  )
}

export default Highlights
