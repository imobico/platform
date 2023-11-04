import { useMutation, useQueryClient } from '@tanstack/react-query'

import { browserClient } from '@/supabase'
import { User } from '@/types'

const handleUpdateUser = async (newUserData: User): Promise<User> => {
  const { data, error } = await browserClient
    .from('users')
    .upsert({
      id: newUserData.id,
      updated_at: new Date().toISOString(),
      ...newUserData
    })
    .single()

  if (error) {
    return Promise.reject(error)
  }

  return data || newUserData
}

export const useUpdateUser = () => {
  const queryClient = useQueryClient()

  const mutation = useMutation({
    mutationFn: handleUpdateUser,
    onSuccess: (data: User) => {
      queryClient.setQueryData(['users', data.id], data)
    }
  })

  return mutation
}
