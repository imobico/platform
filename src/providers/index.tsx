'use client'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

import AuthContextProvider from './AuthContextProvider'

const queryClient = new QueryClient()

export function ProvidersWrapper({ children }: { children: React.ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <AuthContextProvider>{children}</AuthContextProvider>
    </QueryClientProvider>
  )
}
