'use client'

import Image from 'next/image'

import { Box, Center, Divider, Flex, HStack } from '@/styled'

import { H1, H2, H3, H4, Strong, Text } from '@/ui'

const pricingOptions = [
  {
    index: 0,
    id: 'basic',
    title: 'Básico',
    pricePerUser: 32,
    minimumUsers: 2,
    label: 'Para corretores, proprietários e pequenos negócios.',
    imagePath: '/pricing-icon-1.svg',
    features: ['Site incluso', 'Gerenciador de imóveis']
  },
  ,
  {
    index: 1,
    id: 'pro',
    title: 'Pro',
    pricePerUser: 39,
    minimumUsers: 4,
    label: 'Para imobiliárias que precisam de mais funcionalidades.',
    imagePath: '/pricing-icon-2.svg',
    features: ['Site incluso', 'Gerenciador de imóveis']
  },
  {
    index: 2,
    id: 'elite',
    title: 'Elite',
    pricePerUser: 49,
    minimumUsers: 8,
    label: 'Para as maiores imobiliárias que exigem o máximo de funcionalidade e eficiência.',
    imagePath: '/pricing-icon-3.svg',
    features: ['Site incluso', 'Gerenciador de imóveis']
  }
]

export interface PricingCardProps {
  index: number
  id: string
  title: string
  pricePerUser: number
  minimumUsers: number
  label: string
  imagePath: string
  features: string[]
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
      py="6"
      bg="white"
      borderLeft={index === 0 ? 'none' : '1px solid token(colors.border.default)'}
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
        px="4"
        bg="trusty.11"
      >
        <H2 color="white" fontSize="xl">
          <Strong fontWeight={400} color="trusty.3" mr="1">
            Plano
          </Strong>
          {title}
        </H2>
      </Flex>
      <Text fontSize="lg" fontWeight="600" ml="12" letterSpacing={0}>
        R$
        <Strong mx="1" fontSize="4xl" fontFamily="heading" fontWeight="900">
          {pricePerUser}
        </Strong>
        /usuário
      </Text>
      <Divider my="4" />
      <Text fontSize="sm" fontWeight={700} mb="2">
        Mínimo de {minimumUsers} usuários
      </Text>
      {features.map((feature) => (
        <>
          <Divider my="2" />
          <Text>{feature}</Text>
        </>
      ))}
    </Center>
  )
}

export const Pricing = () => {
  return (
    <>
      <Center bg="trusty" flexDirection="column" mt="400px" p="12">
        <Box width="100%" maxWidth="1220px">
          <Center justifyContent="space-between" width="100%">
            <H1 fontSize="5xl" color="white" maxWidth="720px">
              <Strong
                px="2"
                bg="linear-gradient(360deg, token(colors.trusty.9) 0%, token(colors.trusty.9) 30%, rgba(209,226,255,0) 30%, rgba(255,255,255,0) 100%)"
              >
                Planos flexíveis
              </Strong>
              &nbsp;que se encaixam com as suas necessidades
            </H1>
            <Image
              src="/illustration-trusty-rafiki-pricing.svg"
              alt="Lista de planos e preços Imobi"
              width={380}
              height={380}
            />
          </Center>
          <HStack
            width="100%"
            gap="0"
            borderRadius="2xl"
            overflow="hidden"
            boxShadow="0 0 60px token(colors.trusty.9), 0 0 12px 4px token(colors.trusty.10)"
          >
            {pricingOptions.map((pricingOption) => {
              return pricingOption ? <PricingCard {...(pricingOption as PricingCardProps)} /> : null
            })}
          </HStack>
        </Box>
      </Center>
    </>
  )
}

export default Pricing
