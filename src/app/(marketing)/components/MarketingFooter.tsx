import Image from 'next/image'

import { Box, Center, Divider, Flex, Grid, HStack } from '@/styled'

import { H3, Strong, Text } from '@/ui'

export const MarketingFooter = () => {
  return (
    <>
      <Center bg="trusty.2" flexDirection="column">
        <Box width="100%" maxWidth="1220px" px={{ base: 8, lg: 0 }}>
          <Center justifyContent={{ base: 'center', lg: 'space-between' }} width="100%" zIndex={1}>
            <Flex flex="1" mr="12" flexDirection={{ base: 'column', lg: 'row' }}>
              <Box width="140px" mr="12" mt={{ base: 16, lg: 6 }} mb={{ base: 8, lg: 0 }}>
                <Image
                  priority
                  src="/logo-imobi-trusty.svg"
                  alt="Imobi Test"
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: '100%', height: 'auto' }}
                />
              </Box>
              <Grid flex="1" gap={{ base: 4, md: 6, lg: 12 }} columns={{ base: 1, md: 2 }}>
                <Box flex="1">
                  <H3>Atendimento</H3>
                  <Text>Nosso atendimento funciona de segunda a sábado das 9 as 18:00</Text>
                </Box>
                <Box flex="1">
                  <H3>Localização</H3>
                  <Text>
                    Rua José Fava, 185
                    <br />
                    Planalto Paulista <br /> São Paulo, SP
                  </Text>
                </Box>
              </Grid>
            </Flex>
            <Box width="240px" display={{ base: 'none', lg: 'block' }}>
              <Image
                priority
                src="/illustration-trusty-rafiki-city.svg"
                alt="Imoblr sistema para imobiliárias e corretoras"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: '100%', height: 'auto' }}
              />
            </Box>
          </Center>
        </Box>
        <Divider borderColor="trusty.3" mt={{ base: 8, lg: -8 }} />
        <Text py="8" textAlign="center" px={{ base: 8, lg: 0 }}>
          Copyright © 2023: Todos os direitos reservados a Imoblr Sistemas para Imobiliárias e
          Corretores
        </Text>
      </Center>
    </>
  )
}

export default MarketingFooter
