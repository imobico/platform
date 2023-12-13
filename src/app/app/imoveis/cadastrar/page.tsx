'use client'

import { Card, PageRowLayout } from '@/components'
import { PageHeaderLayout } from '@/components/PageHeaderLayout'
import { Box, Center, Flex, H1, H2, Input, Label, Text, Textarea, VStack } from '@/ui'

export default function Home() {
  return (
    <>
      <PageHeaderLayout>
        <H1 fontSize="3xl" color="trusty.1">
          Cadastrar imóvel &nbsp; 🏡
        </H1>
        <Text color="trusty.1" fontSize="lg" opacity={0.8}>
          Complete os campos a seguir para adicionar um novo imóvel.
        </Text>
      </PageHeaderLayout>
      <PageRowLayout>
        <Card py={8}>
          <Flex width="100%">
            <Box maxWidth="320px">
              <Flex alignItems="center" mb={4}>
                <Center width="2.8rem" height="2.8rem" bg="trusty" borderRadius="full" mr={4}>
                  <Text
                    color="white"
                    fontSize="xl"
                    fontWeight="bold"
                    textAlign="center"
                    lineHeight="30px"
                  >
                    1
                  </Text>
                </Center>
                <H2 fontSize="xl">Informações básicas</H2>
              </Flex>
              <Box flex="1" pl="2.8rem" ml={4}>
                <Text color="text.muted" fontSize="sm" opacity={0.8}>
                  Preencha as informações básicas do imóvel. Quanto mais completa for a descrição do
                  seu imóvel maiores serão as chances das pessoas se interessarem.
                </Text>
              </Box>
            </Box>
            <Box pl={24} flex={1}>
              <VStack gap={8}>
                <Label width="100%" htmlFor="user-password" size="xl">
                  <Text fontWeight={600} py={2}>
                    Nome do imóvel
                  </Text>
                  <Input
                    size="xl"
                    id="user-password"
                    placeholder="Exemplo: Chalézinho Charmoso na Vila Madalena"
                    type="password"
                  />
                </Label>
                <Label width="100%" htmlFor="user-password" size="xl">
                  <Text fontWeight={600} py={2}>
                    Descrição do imóvel
                  </Text>
                  <Textarea
                    size="xl"
                    id="user-password"
                    placeholder="Exemplo: Charmoso chalé no mais badalado bairro de São Paulo. Próximo de comércio, farmácias e ótimos restaurantes..."
                    rows="6"
                  />
                </Label>
              </VStack>
            </Box>
          </Flex>
        </Card>
      </PageRowLayout>
    </>
  )
}
