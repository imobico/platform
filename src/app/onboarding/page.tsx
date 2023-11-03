'use client'

import { Session } from '@supabase/supabase-js'
import { useEffect, useState } from 'react'

import { browserClient } from '@/supabase'

export default function Account() {
  const [session, setSession] = useState<Session | null>(null)
  const [loading, setLoading] = useState(true)
  const [username, setUsername] = useState(null)
  const [website, setWebsite] = useState(null)
  const [avatar_url, setAvatarUrl] = useState(null)

  useEffect(() => {
    async function getProfile() {
      setLoading(true)
      browserClient.auth.getSession().then(async ({ data: sessionData }) => {
        if (sessionData?.session) {
          setSession(sessionData.session)
        }

        const { data, error } = await browserClient
          .from('profiles')
          .select(`username, website, avatar_url`)
          .eq('id', session?.user.id)
          .single()

        if (error) {
          console.warn(error)
        } else if (data) {
          setUsername(data.username)
          setWebsite(data.website)
          setAvatarUrl(data.avatar_url)
        }

        setLoading(false)
      })
    }

    getProfile()
  }, [])

  async function updateProfile(event, avatarUrl) {
    event.preventDefault()

    setLoading(true)
    const user = session?.user

    const updates = {
      id: user?.id,
      username,
      website,
      avatarUrl,
      updated_at: new Date()
    }

    const { error } = await browserClient.from('profiles').upsert(updates)

    if (error) {
      alert(error.message)
    } else {
      setAvatarUrl(avatarUrl)
    }
    setLoading(false)
  }

  return (
    <form onSubmit={updateProfile} className="form-widget">
      <div>
        <label htmlFor="email">Email</label>
        <input id="email" type="text" value={session?.user.email} disabled />
      </div>
      <div>
        <label htmlFor="username">Name</label>
        <input
          id="username"
          type="text"
          required
          value={username || ''}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="website">Website</label>
        <input
          id="website"
          type="url"
          value={website || ''}
          onChange={(e) => setWebsite(e.target.value)}
        />
      </div>

      <div>
        <button className="button block primary" type="submit" disabled={loading}>
          {loading ? 'Loading ...' : 'Update'}
        </button>
      </div>

      <div>
        <button className="button block" type="button" onClick={() => browserClient.auth.signOut()}>
          Sign Out
        </button>
      </div>
    </form>
  )
}
