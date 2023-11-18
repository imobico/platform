'use client'

import { Box, Center, Flex } from '@/styled'

import { Strong, Tabs, Text } from '@/ui'

const options = [
  { id: 'aio', label: 'Tudo em um único produto' },
  { id: 'solid', label: 'Solid' },
  { id: 'svelte', label: 'Svelte', disabled: true },
  { id: 'vue', label: 'Vue' }
]

export const Highlights = () => {
  return (
    <>
      <Center pt="580px" bg="trusty" mt="-500px" flexDirection="column">
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

        <Box
          bg="slate.1"
          mb="-480px"
          borderRadius="30px"
          width="100%"
          maxWidth="1220px"
          p="16"
          mt="16"
          minHeight="800px"
        >
          <Tabs.Root defaultValue="aio" size="lg">
            <Tabs.List>
              {options.map((option) => (
                <Tabs.Trigger key={option.id} value={option.id} disabled={option.disabled} flex="1">
                  {option.label}
                </Tabs.Trigger>
              ))}
              <Tabs.Indicator />
            </Tabs.List>
            <Tabs.Content value="aio">&nbsp;</Tabs.Content>
            <Tabs.Content value="solid">&nbsp;</Tabs.Content>
            <Tabs.Content value="svelte">&nbsp;</Tabs.Content>
            <Tabs.Content value="vue">&nbsp;</Tabs.Content>
          </Tabs.Root>
        </Box>
      </Center>
    </>
  )
}

export default Highlights
