import { useMutation, useQueryClient } from '@tanstack/react-query'

import { browserClient } from '@/supabase'
import { Organization, OrganizationType } from '@/types'

const handleCreateOrganization = async (newOrganizationData: {
  name: string
  type: OrganizationType
}): Promise<Organization[]> => {
  const { data, error } = await browserClient
    .from('organizations')
    .insert({ name: newOrganizationData.name, type: newOrganizationData.type })
    .select('*')

  if (error) {
    console.error('handleCreateOrganization Error', error)
  }

  return data as Organization[]
}

export const useCreateOrganization = () => {
  const queryClient = useQueryClient()

  const mutation = useMutation({
    mutationFn: handleCreateOrganization,
    onSuccess: (data: Organization[]) => {
      const newOrganization = data[0]

      queryClient.setQueryData(['organizations', newOrganization.id], newOrganization)
    }
  })

  return mutation
}
