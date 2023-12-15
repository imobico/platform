import * as yup from 'yup'

export const schema = yup.object().shape({
  name: yup
    .string()
    .required('O campo "Nome da organização" é obrigatório')
    .min(5, 'O nome da organização deve ter no mínimo 5 caracteres'),
  legal_agreement: yup
    .bool()
    .oneOf([true], 'Você deve concordar com os termos legais para criar uma organização')
})
