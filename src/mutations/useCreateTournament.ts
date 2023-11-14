import { useMutation, useQueryClient } from '@tanstack/react-query'

import { browserClient } from '@/supabase'
import { Tournament } from '@/types'

const handleCreateTournament = async (newTournamentData: { name: string }) => {
  const organizationId = window.localStorage.getItem('currentOrganizationId')
  return browserClient
    .from('tournaments')
    .insert({ name: newTournamentData.name, organization: organizationId }) as Tournament
}

export const useCreateTournament = () => {
  const queryClient = useQueryClient()

  const mutation = useMutation({
    mutationFn: handleCreateTournament,
    onSuccess: (data: Tournament) => {
      queryClient.setQueryData(['users', data.id], data)
    }
  })

  return mutation
}
