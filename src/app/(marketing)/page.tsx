import Image from 'next/image'

import { Box, Center, H1, Strong, Text } from '@/ui'

export default function Home() {
  return (
    <Center width="100vw" flexDirection="column">
      <Center mt="24" flexDirection="column">
        <H1 fontSize="5xl" textAlign="center" lineHeight="1.2" mb="8" maxWidth="640px">
          <Strong color="trusty.8">Gerencie seus imóveis</Strong> com muito mais eficiência
        </H1>
        <Text textAlign="center" fontSize="xl" color="slate.11" maxWidth="720px">
          A imobi traz a mais moderna tecnologia para aumentar em 300% a eficiência de corretores e
          imobiliárias na gestão de seus negócios
        </Text>
      </Center>
    </Center>
  )
}
