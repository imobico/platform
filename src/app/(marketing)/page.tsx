import Image from 'next/image'
import Link from 'next/link'

import { Box, Button, Center, H1, HStack, Strong, Text } from '@/ui'

import { Highlights } from './components/Highlights'

export default function Home() {
  return (
    <>
      <Center width="100vw" flexDirection="column">
        <Center mt="12" flexDirection="column" px="12">
          <H1 fontSize="5xl" textAlign="center" lineHeight="1.2" mb="4" maxWidth="880px">
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
          <Text
            textAlign="center"
            fontSize="10px 10px 10px 10px red"
            color="slate.11"
            maxWidth="780px"
            mb="8"
          >
            Através das mais recentes tecnologias automatizamos tarefas e aumentamos a eficiência de
            imobiliárias e corretores <Strong>em até 180%</Strong>.
          </Text>

          <HStack gap="6">
            <Link href="/cadastro">
              <Button borderRadius="full" size="2xl" fontWeight="500">
                Faça um<strong style={{ fontWeight: 700, marginLeft: '-6px' }}>Teste grátis</strong>
              </Button>
            </Link>
            <Link href="/entrar">
              <Button borderRadius="full" size="2xl" fontWeight="700" variant="outline">
                Agende uma apresentação
              </Button>
            </Link>
          </HStack>

          <Box
            boxShadow="0 10px 24px 0 rgba(0,0,0,0.3)"
            borderRadius="3xl"
            overflow="hidden"
            mt="24"
            width="800px"
          >
            <Image
              src="/floating-ui-center.png"
              alt="Imobi Test"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: '100%', height: 'auto' }}
            />
          </Box>
          <Box
            boxShadow="-10px 10px 24px 0 rgba(0,0,0,0.3)"
            borderRadius="3xl"
            overflow="hidden"
            mb="-420px"
            position="absolute"
            width="300px"
            ml="-860px"
          >
            <Image
              src="/floating-ui-left.png"
              alt="Imobi Test"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: '100%', height: 'auto' }}
            />
          </Box>
          <Box
            boxShadow="10px 10px 24px 0 rgba(0,0,0,0.3)"
            borderRadius="3xl"
            overflow="hidden"
            mb="-180px"
            position="absolute"
            width="240px"
            mr="-920px"
          >
            <Image
              src="/floating-ui-right.png"
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
    </>
  )
}
