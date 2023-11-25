'use client'

import Image from 'next/image'
import Link from 'next/link'

import { Box, Center, Divider, Flex, Grid } from '@/styled'

import { Button, H1, H2, Strong, Text } from '@/ui'

const pricingOptions = [
  {
    index: 0,
    id: 'basic',
    title: 'Básico',
    pricePerUser: 28,
    minimumUsers: 2,
    label: 'Para corretores, proprietários e pequenos negócios.',
    imagePath: '/pricing-icon-1.svg',
    features: [
      { label: 'Site personalizável incluso', featured: true },
      { label: 'Limite de 40 imóveis' },
      { label: 'Gerenciador de imóveis' },
      { label: 'Gerenciador de clientes' }
    ]
  },
  ,
  {
    index: 1,
    id: 'pro',
    title: 'Pro',
    pricePerUser: 38,
    minimumUsers: 4,
    label: 'Para imobiliárias que precisam de mais funcionalidades.',
    imagePath: '/pricing-icon-2.svg',
    features: [
      { label: 'Site personalizável incluso', featured: true },
      { label: 'Limite de 120 imóveis' },
      { label: 'Gerenciador de imóveis' },
      { label: 'Gerenciador de clientes' },
      { label: 'Automatização com IA' },
      { label: '1 foto 3D por imóvel' },
      { label: 'Universidade Imoblr inclusa' }
    ]
  },
  {
    index: 2,
    id: 'elite',
    title: 'Elite',
    pricePerUser: 48,
    minimumUsers: 8,
    label: 'Para as maiores imobiliárias que exigem o máximo de funcionalidade e eficiência.',
    imagePath: '/pricing-icon-3.svg',
    features: [
      { label: '2 Sites personalizáveis inclusos', featured: true },
      { label: 'Limite de 600 imóveis' },
      { label: 'Gerenciador de imóveis' },
      { label: 'Gerenciador de clientes' },
      { label: 'Automatização com IA' },
      { label: 'Fotos 3D ilimitadas' },
      { label: 'Universidade Imoblr inclusa' }
    ]
  }
]

export interface PricingFeature {
  label: string
  featured?: boolean
}

export interface PricingCardProps {
  index: number
  id: string
  title: string
  pricePerUser: number
  minimumUsers: number
  label: string
  imagePath: string
  features: PricingFeature[]
}

export const PricingCard = ({
  index,
  id,
  title,
  pricePerUser,
  minimumUsers,
  label,
  imagePath,
  features
}: PricingCardProps) => {
  return (
    <Center
      key={`pricing-option-${index}-${id}`}
      position="relative"
      flex="1"
      flexDirection="column"
      py="8"
      bg="white"
      borderLeft={{
        base: 'none',
        md: index === 0 ? 'none' : '1px solid token(colors.border.default)'
      }}
      borderTopLeftRadius={{ base: '2xl', lg: index === 0 ? '3xl' : 'unset' }}
      borderBottomLeftRadius={{ base: '2xl', lg: index === 0 || index === 1 ? '3xl' : 'unset' }}
      borderTopRightRadius={{ base: '2xl', lg: index === 2 ? '3xl' : 'unset' }}
      borderBottomRightRadius={{ base: '2xl', lg: index === 2 ? '3xl' : 'unset' }}
      boxShadow={{
        base: '0 0 20px 0 token(colors.trusty.10), 0 0 4px 1px token(colors.trusty.10)',
        md: 'none'
      }}
    >
      <Image src={imagePath} alt={label} width={120} height={120} />
      <Flex
        justifyContent="space-between"
        borderTopRightRadius="full"
        borderBottomRightRadius="full"
        alignItems="flex-end"
        position="absolute"
        top="20px"
        left="0"
        py="1"
        px="6"
        bg="trusty.11"
      >
        <H2 color="white" fontSize="2xl">
          <Strong fontWeight={400} color="trusty.3" mr="1">
            Plano
          </Strong>
          {title}
        </H2>
      </Flex>
      <Text fontSize="lg" fontWeight="600" mr="6" letterSpacing={0} mb="4" color="trusty.10">
        R$
        <Strong mx="1" fontSize="4xl" fontFamily="heading" fontWeight="900" color="trusty.10">
          {pricePerUser}
        </Strong>
      </Text>
      <Text fontSize="sm" fontWeight={700} mb="2" textAlign="center">
        Valor mensal por usuário
        <br />A partir de {minimumUsers} usuários
      </Text>

      {features.map((feature) => (
        <>
          <Divider my="4" />
          <Text fontWeight={feature.featured ? 700 : 500}>{feature.label}</Text>
        </>
      ))}
      <Divider mt="4" mb="8" />
      <Box width="100%" px="8">
        <Link href={`/cadastro?plan=${id}`}>
          <Button borderRadius="xl" size="xl" fontWeight="500" width="100%" bg="trusty.10">
            Faça um
            <strong style={{ fontWeight: 700, marginLeft: '-6px' }}>teste grátis</strong>
          </Button>
        </Link>
      </Box>
    </Center>
  )
}

export const Pricing = () => {
  return (
    <>
      <Center
        bg="trusty"
        flexDirection="column"
        id="planos"
        pt={{ base: 16, md: 8, lg: 0 }}
        pb={16}
        px={{ base: 0, lg: 8 }}
      >
        <Box width="100%" maxWidth="1220px">
          <Center justifyContent="space-between" width="100%" mb={{ base: 16, lg: 0 }}>
            <Box px={{ base: 8 }} flex="1">
              <H1
                fontSize="4xl"
                color="white"
                maxWidth="540px"
                mb="4"
                textAlign={{ base: 'center', lg: 'left' }}
              >
                <Strong
                  px="2"
                  bg="linear-gradient(360deg, token(colors.trusty.9) 0%, token(colors.trusty.9) 30%, rgba(209,226,255,0) 30%, rgba(255,255,255,0) 100%)"
                >
                  Planos flexíveis
                </Strong>
                &nbsp;que se encaixam com as suas necessidades
              </H1>
              <Text
                color="trusty.3"
                fontSize="xl"
                maxWidth="680px"
                textAlign={{ base: 'center', lg: 'left' }}
              >
                <Strong>A nossa promessa para você</Strong>: Nós <Strong>sempre</Strong>{' '}
                ofereceremos os melhores preços e a mais moderna tecnologia do mercado!
              </Text>
            </Box>
            <Box
              width={{ base: '100%', md: '380px', lg: '420px' }}
              display={{ base: 'none', md: 'block' }}
            >
              <Image
                src="/illustration-trusty-rafiki-pricing.svg"
                alt="Lista de planos e preços Imoblr"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: '100%', height: 'auto' }}
              />
            </Box>
          </Center>
          <Grid
            width="100%"
            columns={{ base: 1, md: 2, lg: 3 }}
            gap={{ base: 6, lg: 0 }}
            alignItems="flex-start"
            px={{ base: 6, lg: 0 }}
          >
            {pricingOptions.map((pricingOption) => {
              return pricingOption ? <PricingCard {...(pricingOption as PricingCardProps)} /> : null
            })}
          </Grid>
        </Box>
      </Center>
    </>
  )
}

export default Pricing
