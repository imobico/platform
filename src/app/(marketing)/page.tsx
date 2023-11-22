import dynamic from 'next/dynamic'
import Image from 'next/image'
import Link from 'next/link'

import { Box, Button, Center, H1, HStack, Strong, Text } from '@/ui'

const Highlights = dynamic(() => import('./components/Highlights'), {
  loading: () => <p>Carregando...</p>
})

const Pricing = dynamic(() => import('./components/Pricing'), {
  loading: () => <p>Carregando...</p>
})

const Integrations = dynamic(() => import('./components/Integrations'), {
  loading: () => <p>Carregando...</p>
})

export default function Home() {
  return (
    <>
      <Center width="100vw" flexDirection="column">
        <Center mt="20" flexDirection="column" px="12">
          <H1 fontSize="5xl" textAlign="center" lineHeight="1.2" mb="8" maxWidth="880px">
            Tecnologia com{' '}
            <Strong
              style={{
                paddingLeft: '10px',
                paddingRight: '10px',
                background:
                  'linear-gradient(360deg, rgba(209,226,255,1) 0%, rgba(209,226,255,1) 30%, rgba(209,226,255,0) 30%, rgba(255,255,255,0) 100%)'
              }}
              color="trusty.8"
            >
              resultados
            </Strong>{' '}
            e{' '}
            <Strong
              style={{
                paddingLeft: '10px',
                paddingRight: '10px',
                background:
                  'linear-gradient(360deg, rgba(209,226,255,1) 0%, rgba(209,226,255,1) 30%, rgba(209,226,255,0) 30%, rgba(255,255,255,0) 100%)'
              }}
              color="trusty.8"
            >
              eficiência
            </Strong>{' '}
            para{' '}
            <Strong
              style={{
                paddingLeft: '10px',
                paddingRight: '10px',
                background:
                  'linear-gradient(360deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.1) 30%, rgba(209,226,255,0) 30%, rgba(255,255,255,0) 100%)'
              }}
            >
              imobiliárias
            </Strong>{' '}
            e{' '}
            <Strong
              style={{
                paddingLeft: '10px',
                paddingRight: '10px',
                background:
                  'linear-gradient(360deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.1) 30%, rgba(209,226,255,0) 30%, rgba(255,255,255,0) 100%)'
              }}
            >
              corretores
            </Strong>
            .
          </H1>
          <Text textAlign="center" fontSize="xl" color="slate.11" maxWidth="780px" mb="12">
            Crie seu site, gerencie seus imóveis, clientes/leads, marketing e muito mais através de
            um único produto e um único plano. <Strong>Menos complicação. Mais resultados.</Strong>
          </Text>

          <HStack gap="6" mb="24">
            <Box position="relative">
              <Link href="/cadastro">
                <Button borderRadius="full" size="2xl" fontWeight="500">
                  Faça um
                  <strong style={{ fontWeight: 700, marginLeft: '-6px' }}>teste grátis</strong>
                </Button>
              </Link>
              <Box position="absolute" left="-260px" bottom="-60px" width="260px">
                <Image
                  src="/no-card-required.svg"
                  alt="Imobi Test"
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: '100%', height: 'auto' }}
                />
              </Box>
            </Box>
            <Link href="/entrar">
              <Button borderRadius="full" size="2xl" variant="outline">
                Agende uma apresentação
              </Button>
            </Link>
          </HStack>

          <Box
            boxShadow="0 12px 36px 0 rgba(0,0,0,0.2)"
            borderRadius="3xl"
            overflow="hidden"
            width="800px"
            height="664px"
          >
            <Image
              src="/floating-ui-center.jpg"
              alt="Imobi Test"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: '100%', height: 'auto' }}
            />
          </Box>
          <Box
            boxShadow="-12px 12px 36px 0 rgba(0,0,0,0.2)"
            borderRadius="3xl"
            overflow="hidden"
            mb="-420px"
            position="absolute"
            width="300px"
            height="456px"
            ml="-860px"
          >
            <Image
              src="/floating-ui-left.jpg"
              alt="Imobi Test"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: '100%', height: 'auto' }}
            />
          </Box>
          <Box
            boxShadow="12px 12px 36px 0 rgba(0,0,0,0.2)"
            borderRadius="3xl"
            overflow="hidden"
            mb="-180px"
            position="absolute"
            width="240px"
            height="332px"
            mr="-920px"
          >
            <Image
              src="/floating-ui-right.jpg"
              alt="Imobi Test"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: '100%', height: 'auto' }}
            />
          </Box>
        </Center>
      </Center>
      <Highlights />
      <Integrations />
      <Pricing />
    </>
  )
}
