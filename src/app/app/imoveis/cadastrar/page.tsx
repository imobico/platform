'use client'

import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'

import { Card, PageRowLayout } from '@/components'
import { PageHeaderLayout } from '@/components/PageHeaderLayout'
import { Box, Center, Flex, H1, H2, Input, Label, Text, Textarea, VStack } from '@/ui'

import { AddressCard } from './AddressCard'
import { schema } from './formValidation'

export default function CadastrarImovel() {
  const {
    handleSubmit,
    register,
    resetField,
    formState: { errors, isSubmitting }
  } = useForm({ resolver: yupResolver(schema) })

  return (
    <>
      <PageHeaderLayout>
        <H1 fontSize="3xl" color="trusty.1">
          Cadastrar imóvel &nbsp; 🏡
        </H1>
        <Text color="trusty.1" fontSize="lg" opacity={0.8}>
          Complete os campos a seguir para adicionar um novo imóvel.
          <br />
          Você poderá alterar e adicionar mais informações para esse imóvel depois de cadastra-lo
        </Text>
      </PageHeaderLayout>
      <PageRowLayout>
        <form>
          <AddressCard />
          <Card py={8}>
            <Flex width="100%">
              <Box maxWidth="280px">
                <Flex alignItems="center" mb={4}>
                  <Center width="2.4rem" height="2.4rem" bg="trusty" borderRadius="full" mr={4}>
                    <Text color="white" fontWeight="bold" textAlign="center" lineHeight="30px">
                      2
                    </Text>
                  </Center>
                  <H2 fontSize="xl">Informações básicas</H2>
                </Flex>
                <Box flex="1" pl="2.4rem" ml={4}>
                  <Text color="text.muted" fontSize="sm" opacity={0.8}>
                    Preencha as informações básicas do imóvel. Quanto mais completa for a descrição
                    do seu imóvel maiores serão as chances das pessoas se interessarem.
                  </Text>
                </Box>
              </Box>
              <Box pl={24} flex={1}>
                <VStack gap={8}>
                  <Label width="100%" htmlFor="property-title" size="xl">
                    <Text fontWeight={600} py={2}>
                      Nome do imóvel
                    </Text>
                    <Input
                      size="xl"
                      id="property-title"
                      placeholder="Exemplo: Chalézinho Charmoso na Vila Madalena"
                    />
                  </Label>
                  <Label width="100%" htmlFor="property-description" size="xl">
                    <Text fontWeight={600} py={2}>
                      Descrição do imóvel
                    </Text>
                    <Textarea
                      size="xl"
                      id="property-description"
                      placeholder="Exemplo: Charmoso chalé no mais badalado bairro de São Paulo. Próximo de comércio, farmácias e ótimos restaurantes..."
                      rows={6}
                    />
                  </Label>
                </VStack>
              </Box>
            </Flex>
          </Card>

          <Card py={8} my={12}>
            <Flex width="100%">
              <Box maxWidth="280px">
                <Flex alignItems="center" mb={4}>
                  <Center width="2.4rem" height="2.4rem" bg="trusty" borderRadius="full" mr={4}>
                    <Text color="white" fontWeight="bold" textAlign="center" lineHeight="30px">
                      3
                    </Text>
                  </Center>
                  <H2 fontSize="xl">Fotos e mídia</H2>
                </Flex>
                <Box flex="1" pl="2.4rem" ml={4}>
                  <Text color="text.muted" fontSize="sm" opacity={0.8}>
                    Adicione fotos, vídeos e outras mídias que captem as características deste
                    imóvel.
                  </Text>
                </Box>
              </Box>
              <Box pl={24} flex={1}>
                <VStack gap={8}>
                  <Label width="100%" htmlFor="user-password" size="xl">
                    <Text fontWeight={600} py={2}>
                      Endereço completo
                    </Text>
                    Drag and drop here
                  </Label>
                </VStack>
              </Box>
            </Flex>
          </Card>
        </form>
      </PageRowLayout>
    </>
  )
}
