import { useMutation, useQueryClient } from '@tanstack/react-query'

import { browserClient } from '@/supabase'
import { Organization, OrganizationType } from '@/types'

const handleCreateOrganization = async (newOrganizationData: {
  name: string
  type: OrganizationType
}) => {
  return browserClient
    .from('organizations')
    .insert({ name: newOrganizationData.name, type: newOrganizationData.type }) as Organization
}

export const useCreateOrganization = () => {
  const queryClient = useQueryClient()

  const mutation = useMutation({
    mutationFn: handleCreateOrganization,
    onSuccess: (data: Organization) => {
      queryClient.setQueryData(['users', data.id], data)
    }
  })

  return mutation
}
