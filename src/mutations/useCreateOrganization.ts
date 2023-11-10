import { useMutation, useQueryClient } from '@tanstack/react-query'

import { browserClient } from '@/supabase'
import { Organization, OrganizationType } from '@/types'

const handleCreateOrganization = async (newOrganizationData: {
  name: string
  type: OrganizationType
}): Promise<Organization> => {
  console.log('weird')
  const { data, error: err } = await browserClient
    .from('organizations')
    .insert({ name: newOrganizationData.name, type: newOrganizationData.type })

  return data || newOrganizationData
}

export const useCreateOrganization = () => {
  const queryClient = useQueryClient()

  console.log('instantiate hook')

  const mutation = useMutation({
    mutationFn: handleCreateOrganization,
    onSuccess: (data: Organization) => {
      queryClient.setQueryData(['users', data.id], data)
    }
  })

  return mutation
}
