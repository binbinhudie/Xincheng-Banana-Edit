'use client'

import { useEffect, useState } from 'react'
import { createClient } from '@/lib/supabase/client'
import { Button } from '@/components/ui/button'
import type { User } from '@supabase/supabase-js'

export function AuthButton() {
  const [user, setUser] = useState<User | null>(null)
  const [isPro, setIsPro] = useState(false)

  useEffect(() => {
    const supabase = createClient()

    supabase.auth.getUser().then(({ data: { user } }) => {
      setUser(user)
      if (user) {
        fetch('/api/usage').then(r => r.json()).then(data => {
          setIsPro(data.limit === 20)
        })
      }
    })

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null)
      if (session?.user) {
        fetch('/api/usage').then(r => r.json()).then(data => {
          setIsPro(data.limit === 20)
        })
      } else {
        setIsPro(false)
      }
    })

    return () => subscription.unsubscribe()
  }, [])

  const handleSignIn = async () => {
    const supabase = createClient()
    await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: `${location.origin}/auth/callback`,
      },
    })
  }

  const handleSignOut = async () => {
    const supabase = createClient()
    await supabase.auth.signOut()
  }

  if (user) {
    const displayName = user.user_metadata?.full_name || user.user_metadata?.name || user.email?.split('@')[0] || '用户'
    return (
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-2">
          <span className="text-sm">{displayName}</span>
          {isPro && (
            <span className="px-2 py-0.5 text-xs font-semibold bg-gradient-to-r from-yellow-400 to-orange-500 text-white rounded-full">
              Pro
            </span>
          )}
        </div>
        <Button onClick={handleSignOut} variant="outline" size="sm">
          Sign Out
        </Button>
      </div>
    )
  }

  return (
    <Button onClick={handleSignIn} variant="outline">
      Sign in with Google
    </Button>
  )
}
