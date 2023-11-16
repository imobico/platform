import { Center, Flex } from '@/styled'

import { Strong, Text } from '@/ui'

export const Highlights = () => {
  return (
    <>
      <Center pt="580px" pb="480px" bg="trusty" mt="-500px">
        <Flex width="100%" maxWidth="1220px" alignItems="center" justifyContent="center">
          <Text color="white" fontSize="4xl" maxWidth="840px" textAlign="center">
            Concentre-se no seu negócio e clientes.
            <br />
            <Strong
              px="2"
              bg="linear-gradient(360deg, token(colors.trusty.6) 0%, token(colors.trusty.6) 30%, rgba(209,226,255,0) 30%, rgba(255,255,255,0) 100%)"
            >
              Deixe o resto com a gente!
            </Strong>
          </Text>
        </Flex>
      </Center>
    </>
  )
}
