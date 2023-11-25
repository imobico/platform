'use client'

import Image from 'next/image'

import { Box, Center, Flex, Grid, HStack } from '@/styled'

import { H3, HighlightedUnderlineText, Strong, Text } from '@/ui'

const highlightOptions = [
  {
    index: 0,
    id: 'site',
    title: () => (
      <>
        Crie seu site, gerencie seus imóveis, clientes/leads, marketing e muito mais através de um
        único produto e um único plano. <Strong>Menos complicação. Mais resultados.</Strong>
      </>
    ),
    description: () => (
      <>
        Utilizando as mais modernas tecnologias, você terá um site otimizado e pronto em 5 minutos!
        Sem taxa de instalação. Sem custo de personalização. Sem complicação.
      </>
    ),
    imagePath: '/pricing-icon-1.svg'
  }
]

export const Highlights = () => {
  return (
    <>
      <Center
        pt={{ base: '280px', md: '500px' }}
        pb="140px"
        bg="slate.3"
        mt={{ base: '-240px', md: '-480px' }}
        flexDirection="column"
      >
        <Flex
          width="100%"
          maxWidth="1220px"
          alignItems="center"
          justifyContent="center"
          id="funcionalidades"
          px={{ base: 12, md: 0 }}
        >
          <Text fontSize={{ base: '2xl', md: '4xl' }} maxWidth="840px" textAlign="center">
            Concentre-se no seu negócio e clientes.
            <br />
            <HighlightedUnderlineText highlightColorMode="lightPrimary" px="2">
              Deixe o resto com a gente!
            </HighlightedUnderlineText>
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
          <Grid width="100%" columns={{ base: 1, md: 2, lg: 4 }} gap="16" alignItems="flex-start">
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
          </Grid>
        </Box>
      </Center>
    </>
  )
}

export default Highlights
