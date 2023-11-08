import { useMutation, useQueryClient } from '@tanstack/react-query'

import { browserClient } from '@/supabase'
import { User } from '@/types'

const handleUpdateUser = async (newUserData: User): Promise<User> => {
  console.log(newUserData)
  const { data, error } = await browserClient
    .from('users')
    .update({
      updated_at: new Date().toISOString(),
      ...newUserData
    })
    .eq('id', newUserData.id)

  if (error) {
    return Promise.reject(error)
  }

  return Promise.resolve(newUserData)
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
