import { Portal } from '@ark-ui/react'
import { debounce } from 'lodash-es'
import { useState } from 'react'

import { Box, Center, Flex, VStack } from '@/styled'

import { Card } from '@/components'
import { IconElement } from '@/icons'
import { geoapifyAutocompleteItem } from '@/types'
import { Combobox, H2, Input, Label, Text } from '@/ui'

export type AddressCardProps = {
  route: string
  label: string
  icon: IconElement
  isActive: boolean
}

const fetchAddressAutocompleteOptions = (
  partialAddress: string,
  callback: (addressOptions: geoapifyAutocompleteItem[] | []) => void
) => {
  var requestOptions = {
    method: 'GET'
  }

  fetch(
    `https://api.geoapify.com/v1/geocode/autocomplete?text=${partialAddress}&apiKey=d0d64f477f6b43d590a79036a366ecd6&lang=pt`,
    requestOptions
  )
    .then((response) => response.json())
    .then((result) => {
      callback(result.features)
    })
    .catch((error) => console.log('error', error))
}

export const AddressCard = ({ route, label, icon, isActive }: AddressCardProps) => {
  const [addressOptions, setAddressOptions] = useState<geoapifyAutocompleteItem[] | []>([])

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
            <Label width="100%" htmlFor="property-address" size="xl">
              <Text fontWeight={600} py={2}>
                Buscar endereço:
              </Text>
              <Combobox.Root
                selectOnBlur
                allowCustomValue={false}
                inputBehavior="autohighlight"
                selectionBehavior="replace"
                lazyMount
                placeholder="Exemplo: Avenida Barão de Itapetininga 2455"
                autoFocus
                items={addressOptions.map((addressOption) => ({
                  label: addressOption.properties.formatted,
                  value: addressOption.properties.formatted
                }))}
                onInputValueChange={debounce((e) => {
                  const partialAddress = e.value

                  fetchAddressAutocompleteOptions(partialAddress, (result) => {
                    setAddressOptions(result || [])
                  })
                }, 600)}
              >
                <Combobox.Control>
                  <Combobox.Input asChild>
                    <Input size="xl" />
                  </Combobox.Input>
                </Combobox.Control>
                <Portal>
                  <Combobox.Positioner>
                    {addressOptions.length > 0 && (
                      <Combobox.Content>
                        <Combobox.ItemGroup id="framework">
                          {addressOptions.map((item, index) => (
                            <Combobox.Item
                              px={6}
                              py={8}
                              key={`address-option-${index}`}
                              item={{
                                label: item.properties.formatted,
                                value: item.properties.formatted
                              }}
                            >
                              <Combobox.ItemText>{item.properties.formatted}</Combobox.ItemText>
                            </Combobox.Item>
                          ))}
                        </Combobox.ItemGroup>
                      </Combobox.Content>
                    )}
                  </Combobox.Positioner>
                </Portal>
              </Combobox.Root>
            </Label>
          </VStack>
        </Box>
      </Flex>
    </Card>
  )
}
