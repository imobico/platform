import * as yup from 'yup'

export const schema = yup.object().shape({
  property_name: yup
    .string()
    .required('O campo "Nome do imóvel" é obrigatório')
    .min(5, 'O nome do imóvel deve ter no mínimo 4 caracteres'),
  property_description: yup.string(),
  property_address_street: yup
    .string()
    .required(
      'O campo "Bairro" é obrigatório. Selecione um endereço válido no campo "Busca de endereço".'
    ),
  property_address_housenumber: yup
    .string()
    .required(
      'O campo "Número" é obrigatório. Selecione um endereço válido no campo "Busca de endereço".'
    )
})
