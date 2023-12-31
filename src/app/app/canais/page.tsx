'use client'

import Image from 'next/image'

import { PlusSquareIcon } from '@/icons'
import { Box, Button, Center, H2, Text } from '@/ui'

interface CanaisPageProps {
  searchParams: Record<string, string>
}

export default function CanaisPage(props: CanaisPageProps) {
  console.log(props)
  return (
    <Center width="100%" height="100%" flexDirection="column" p={8}>
      <Box width="100%" maxWidth="340px">
        <Image
          src="/illustrations/illustration-trusty-rafiki-realtor.svg"
          alt="A Imoblr tem diversas integrações com portais de imóveis!"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: '100%', height: 'auto' }}
        />
      </Box>
      <H2 size="lg" mb={4}>
        Nenhum canal cadastrado
      </H2>
      <Text color="text.muted" textAlign="center" fontSize="lg" mb={16}>
        Parece que ainda não temos nenhum canal cadastrado.
        <br />
        Para cadastrar um imóvel, clique no botão abaixo.
      </Text>
      <Button size="2xl">
        <PlusSquareIcon isActive activeStrokeColor="trusty.1" activeBackgroundColor="trusty.6" />
        Cadastrar um imóvel
      </Button>
    </Center>
  )
}
