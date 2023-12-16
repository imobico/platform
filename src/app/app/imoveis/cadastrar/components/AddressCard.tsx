import { Box, Center, Flex, VStack } from '@/styled'

import { Card } from '@/components'
import { geoapifyAutocompleteItem } from '@/types'
import { H2, Label, Text } from '@/ui'

import { AddressAutocomplete } from './AddressAutocomplete'

export type AddressCardProps = {
  onAddressChange: (address: geoapifyAutocompleteItem) => void
}

export const AddressCard = ({ onAddressChange }: AddressCardProps) => {
  return (
    <Card py={8} mb={12}>
      <Flex width="100%">
        <Box maxWidth="280px">
          <Flex alignItems="center" mb={4}>
            <Center width="2.4rem" height="2.4rem" bg="trusty" borderRadius="full" mr={4}>
              <Text color="white" fontWeight="bold" textAlign="center" lineHeight="30px">
                1
              </Text>
            </Center>
            <H2 fontSize="xl">Localização do imóvel</H2>
          </Flex>
          <Box flex="1" pl="2.4rem" ml={4}>
            <Text color="text.muted" fontSize="sm" opacity={0.8}>
              Preencha as informações básicas do imóvel. Quanto mais completa for a descrição do seu
              imóvel maiores serão as chances das pessoas se interessarem.
            </Text>
          </Box>
        </Box>
        <Box pl={24} flex={1}>
          <VStack gap={8}>
            <Label width="100%" size="xl">
              <Text fontWeight={600} mb={2}>
                Buscar endereço:
              </Text>
              <AddressAutocomplete onAddressChange={onAddressChange} />
            </Label>
          </VStack>
        </Box>
      </Flex>
    </Card>
  )
}
