import { Portal } from '@ark-ui/react'
import { debounce } from 'lodash-es'
import { useState } from 'react'

import { geoapifyAutocompleteItem } from '@/types'
import { Combobox, Input } from '@/ui'

export type AddressAutocompleteProps = {
  onAddressChange: (address: geoapifyAutocompleteItem) => void
}

const fetchAddressAutocompleteOptions = (
  partialAddress: string,
  callback: (addressOptions: geoapifyAutocompleteItem[] | []) => void
) => {
  const requestOptions = {
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

export const AddressAutocomplete = ({ onAddressChange }: AddressAutocompleteProps) => {
  const [addressOptions, setAddressOptions] = useState<geoapifyAutocompleteItem[] | []>([])

  return (
    <Combobox.Root
      id="xpto"
      selectOnBlur
      allowCustomValue={false}
      inputBehavior="autohighlight"
      selectionBehavior="replace"
      lazyMount
      placeholder="Exemplo: Avenida Barão de Itapetininga 2455"
      autoFocus
      items={addressOptions.map((addressOption, index) => ({
        label: addressOption.properties.formatted,
        value: index
      }))}
      onInputValueChange={debounce((e) => {
        const partialAddress = e.value

        if (!!partialAddress && partialAddress.length > 5) {
          fetchAddressAutocompleteOptions(partialAddress, (result) => {
            setAddressOptions(result || [])
          })
        }
      }, 600)}
      onValueChange={(e) => {
        const addressOptionIndex = parseInt(e.value[0])
        const selectedAddress = addressOptions[addressOptionIndex]

        console.log(selectedAddress)

        onAddressChange(selectedAddress)
      }}
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
                {addressOptions.map((addressOption, index) => (
                  <Combobox.Item
                    px={6}
                    py={8}
                    key={`address-option-${index}`}
                    item={{
                      label: addressOption.properties.formatted,
                      value: index
                    }}
                  >
                    <Combobox.ItemText>{addressOption.properties.formatted}</Combobox.ItemText>
                  </Combobox.Item>
                ))}
              </Combobox.ItemGroup>
            </Combobox.Content>
          )}
        </Combobox.Positioner>
      </Portal>
    </Combobox.Root>
  )
}
