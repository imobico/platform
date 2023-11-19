'use client'

import Image from 'next/image'

import { Box, Center, Flex } from '@/styled'

import { H1, Strong, Text } from '@/ui'

const options = [
  { id: 'aio', label: 'Tudo em um único produto' },
  { id: 'automatize', label: 'Automatize seu trabalho' },
  { id: 'onde', label: 'Onde você estiver' }
]

export const Highlights = () => {
  return (
    <>
      <Center pt="580px" bg="slate.3" mt="-500px" flexDirection="column">
        <Flex width="100%" maxWidth="1220px" alignItems="center" justifyContent="center">
          <Text fontSize="4xl" maxWidth="840px" textAlign="center">
            Concentre-se no seu negócio e clientes.
            <br />
            <Strong
              px="2"
              bg="linear-gradient(360deg, token(colors.trusty.4) 0%, token(colors.trusty.4) 30%, rgba(209,226,255,0) 30%, rgba(255,255,255,0) 100%)"
            >
              Deixe o resto com a gente!
            </Strong>
          </Text>
        </Flex>

        <Box
          bg="white"
          mb="-480px"
          borderRadius="30px"
          width="100%"
          maxWidth="1220px"
          p="16"
          mt="16"
          minHeight="800px"
        >
          <Center>
            <Box width="40%" p="4%">
              <Image
                priority
                src="/bro-aio.svg"
                alt="Imobi Test"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: '100%', height: 'auto' }}
              />
            </Box>
            <Box flex="1">sdgfspdls</Box>
          </Center>
        </Box>
      </Center>
    </>
  )
}

export default Highlights
