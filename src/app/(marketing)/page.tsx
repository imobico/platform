import Image from 'next/image'

import { Box, Center, H1, Strong, Text } from '@/ui'

export default function Home() {
  return (
    <Center width="100vw" flexDirection="column">
      <Center mt="24" flexDirection="column">
        <H1 fontSize="6xl" textAlign="center" lineHeight="1.2" mb="8" maxWidth="720px">
          Tecnologia com <Strong color="trusty.8">resultados</Strong> e{' '}
          <Strong color="trusty.8">eficiência</Strong> para imobiliárias e corretores.
        </H1>
        <Text textAlign="center" fontSize="2xl" color="slate.11" maxWidth="540px">
          Através das mais recentes tecnologias automatizamos tarefas e aumentamos a eficiência de
          imobiliárias e corretores <Strong>em até 180%</Strong>.
        </Text>
      </Center>
    </Center>
  )
}
