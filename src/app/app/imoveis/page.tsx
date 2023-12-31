'use client'

import Image from 'next/image'
import Link from 'next/link'

import { PageRowLayout } from '@/components'
import { PlusSquareIcon } from '@/icons'
import { Box, Button, Center, H2, Text } from '@/ui'

interface ImoveisPageProps {
  searchParams: Record<string, string>
}

export default function ImoveisPage(props: ImoveisPageProps) {
  console.log(props)

  return (
    <PageRowLayout height="100vh">
      <Center width="100%" height="100%" flexDirection="column" p={8}>
        <Box width="100%" maxWidth="320px">
          <Image
            src="/illustrations/illustration-trusty-rafiki-realtor.svg"
            alt="A Imoblr tem diversas integrações com portais de imóveis!"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: '100%', height: 'auto' }}
          />
        </Box>
        <H2 fontSize="2xl" mb={4}>
          Nenhum imóvel cadastrado
        </H2>
        <Text color="text.muted" textAlign="center" mb={16}>
          Parece que ainda não temos nenhum imóvel cadastrado.
          <br />
          Para cadastrar um imóvel, clique no botão abaixo.
        </Text>
        <Link href="/app/imoveis/cadastrar">
          <Button size="xl">
            <PlusSquareIcon
              isActive
              activeStrokeColor="trusty.1"
              activeBackgroundColor="trusty.6"
              size="6"
            />
            Cadastrar um imóvel
          </Button>
        </Link>
      </Center>
    </PageRowLayout>
  )
}
