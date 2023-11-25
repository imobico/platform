'use client'

import Image from 'next/image'

import { Box, Center, Flex, Grid } from '@/styled'

import { H3, Strong, Text } from '@/ui'

const highlightOptions = [
  {
    index: 0,
    id: 'site',
    title: () => (
      <>
        <Strong
          px="1"
          bg="linear-gradient(360deg, token(colors.trusty.3) 0%, token(colors.trusty.3) 30%, rgba(209,226,255,0) 30%, rgba(255,255,255,0) 100%)"
        >
          Seu site otimizado
        </Strong>
        e pronto em 5 minutos
      </>
    ),
    description: () => (
      <>
        Utilizando as mais modernas tecnologias, você terá um site otimizado e pronto em 5 minutos!
        Sem taxa de instalação. Sem custo de personalização. Sem complicação.
      </>
    ),
    imagePath: '/feature-icon-website.svg',
    imageAlt: 'Seu site fica pronto em 5 minutos!'
  },
  {
    index: 1,
    id: 'properties',
    title: () => (
      <>
        <Strong
          px="1"
          bg="linear-gradient(360deg, token(colors.trusty.3) 0%, token(colors.trusty.3) 30%, rgba(209,226,255,0) 30%, rgba(255,255,255,0) 100%)"
        >
          Gerencie seus imóveis
        </Strong>
        em um único lugar.
      </>
    ),
    description: () => (
      <>
        Você cadastra os seus imóveis na Imoblr e nós publicamos automaticamente no seu site e
        diversos canais de integração.
      </>
    ),
    imagePath: '/feature-icon-properties.svg',
    imageAlt: 'Imoblr gerencie seus imoveis'
  },
  {
    index: 1,
    id: 'leads',
    title: () => (
      <>
        <Strong
          px="1"
          bg="linear-gradient(360deg, token(colors.trusty.3) 0%, token(colors.trusty.3) 30%, rgba(209,226,255,0) 30%, rgba(255,255,255,0) 100%)"
        >
          Clientes e leads
        </Strong>
        no automático.
      </>
    ),
    description: () => (
      <>
        Seus clientes e leads categorizados automaticamente. Saiba o status e o histórico de todos
        os seus clientes de forma simples.
      </>
    ),
    imagePath: '/feature-icon-users.svg',
    imageAlt: 'Imoblr gerencie seus imoveis'
  },
  {
    index: 1,
    id: 'leads',
    title: () => (
      <>
        <Strong
          px="1"
          bg="linear-gradient(360deg, token(colors.trusty.3) 0%, token(colors.trusty.3) 30%, rgba(209,226,255,0) 30%, rgba(255,255,255,0) 100%)"
        >
          App mobile
        </Strong>
        na palma da sua mão
      </>
    ),
    description: () => (
      <>
        Gerencie o seu negócio de onde estiver através dos nosso app otimizado para iPhone e
        Android. <br /> Receba notificações e nunca perca oportunidades ou compromissos.
      </>
    ),
    imagePath: '/feature-icon-mobile.svg',
    imageAlt: 'Imoblr app mobile'
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
          <Text fontSize={{ base: '3xl', md: '4xl' }} maxWidth="840px" textAlign="center">
            Concentre-se no seu negócio e clientes.
            <br />
            <Strong
              px="1"
              bg="linear-gradient(360deg, token(colors.trusty.3) 0%, token(colors.trusty.3) 30%, rgba(209,226,255,0) 30%, rgba(255,255,255,0) 100%)"
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
          <Grid width="100%" columns={{ base: 1, md: 2, lg: 4 }} gap="16" alignItems="flex-start">
            {highlightOptions.map((highlight) => (
              <Center
                flex="1"
                flexDirection="column"
                key={`highlights-page-highlight-${highlight.id}`}
              >
                <Image
                  src={highlight.imagePath}
                  alt={highlight.imageAlt || 'Funcionalidade imobi'}
                  width={120}
                  height={120}
                />
                <H3 fontSize="2xl" textAlign="center" lineHeight={1.2} my="6">
                  <highlight.title />
                </H3>
                <Text fontSize="lg" textAlign="center" color="text.muted">
                  <highlight.description />
                </Text>
              </Center>
            ))}
          </Grid>
        </Box>
      </Center>
    </>
  )
}

export default Highlights
