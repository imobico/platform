'use client'

import { Session } from '@supabase/supabase-js'
import { createContext, useEffect, useState } from 'react'

import { browserClient } from '@/supabase'

interface AuthContextProps {
  session?: Session
  isSessionLoading: boolean
}

export const AuthContext = createContext<AuthContextProps>({
  session: undefined,
  isSessionLoading: true
})

export const AuthContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [session, setSession] = useState<Session | undefined>(undefined)
  const [isSessionLoading, setIsSessionLoading] = useState(true)

  useEffect(() => {
    async function getData() {
      const { data } = await browserClient.auth.getSession()

      if (data.session) {
        setSession(data.session)
        setIsSessionLoading(false)
      } else {
        setSession(undefined)
        setIsSessionLoading(false)
      }
    }

    getData()
  }, [])

  return (
    <AuthContext.Provider value={{ session, isSessionLoading }}>{children}</AuthContext.Provider>
  )
}

export default AuthContextProvider
