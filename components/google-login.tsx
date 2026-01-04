'use client'

import { createClient } from '@/lib/supabase/client'
import { Button } from '@/components/ui/button'

export function GoogleLogin() {
  const handleGoogleLogin = async () => {
    try {
      console.log('开始 Google 登录...')
      const supabase = createClient()
      console.log('Supabase 客户端已创建')

      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: `${location.origin}/auth/callback`,
        },
      })

      if (error) {
        console.error('登录错误:', error)
        alert(`登录失败: ${error.message}`)
      } else {
        console.log('登录成功，跳转中...', data)
      }
    } catch (err) {
      console.error('捕获到异常:', err)
      alert(`发生错误: ${err}`)
    }
  }

  return (
    <Button onClick={handleGoogleLogin} variant="outline">
      Sign in with Google
    </Button>
  )
}
