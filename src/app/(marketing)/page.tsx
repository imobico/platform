import Image from 'next/image'

import { Box, Center, H1, Strong, Text } from '@/ui'

export default function Home() {
  return (
    <Center width="100vw" flexDirection="column">
      <Center mt="12" flexDirection="column" px="12">
        <H1 fontSize="6xl" textAlign="center" lineHeight="1.2" mb="8" maxWidth="780px">
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
          para
          <br />
          imobiliárias e corretores.
        </H1>
        <Text textAlign="center" fontSize="xl" color="slate.11" maxWidth="540px">
          Através das mais recentes tecnologias automatizamos tarefas e aumentamos a eficiência de
          imobiliárias e corretores <Strong>em até 180%</Strong>.
        </Text>
      </Center>
    </Center>
  )
}
