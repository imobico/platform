import { Box, Center, Flex, VStack } from '@/styled'

import { Card } from '@/components'
import { MapLocationIcon } from '@/icons'
import { geoapifyAutocompleteItem } from '@/types'
import { H2, Label, Text } from '@/ui'

import { AddressAutocomplete } from './AddressAutocomplete'

export type AddressCardProps = {
  onAddressChange: (address: geoapifyAutocompleteItem) => void
}

export const AddressCard = ({ onAddressChange }: AddressCardProps) => {
  return (
    <Card py={8} mb={12} boxShadow="2xl">
      <Flex width="100%">
        <Box maxWidth="280px">
          <Flex alignItems="center" mb={2}>
            <Center width="3.6rem" height="3.6rem" bg="trusty.3" borderRadius="full" mr={4}>
              <MapLocationIcon isActive />
            </Center>
            <H2 fontSize="xl">Localização do imóvel</H2>
          </Flex>
          <Box flex="1" pl="3.6rem" ml={4} mb={8}>
            <Text color="text.muted" fontSize="sm" opacity={0.8}>
              Preencha o endereço do imóvel para que possamos localizá-lo.
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
