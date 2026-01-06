import { NextResponse } from "next/server"
import { createClient } from "@/lib/supabase/server"

export async function GET() {
  try {
    const supabase = await createClient()
    const { data: { user } } = await supabase.auth.getUser()

    if (!user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    // 获取用户的活跃订阅
    const { data: subscription } = await supabase
      .from("subscriptions")
      .select("*")
      .eq("user_id", user.id)
      .eq("status", "active")
      .order("created_at", { ascending: false })
      .limit(1)
      .single()

    // 如果没有订阅，创建免费订阅（2次使用额度）
    if (!subscription) {
      const { data: freeSubscription } = await supabase
        .from("subscriptions")
        .insert({
          user_id: user.id,
          plan_id: "free",
          status: "active",
          usage_count: 0,
          usage_limit: 2,
        })
        .select()
        .single()

      return NextResponse.json({
        remaining: 2,
        limit: 2,
        used: 0,
      })
    }

    const remaining = subscription.usage_limit - subscription.usage_count

    return NextResponse.json({
      remaining,
      limit: subscription.usage_limit,
      used: subscription.usage_count,
    })
  } catch (error) {
    console.error("Usage check error:", error)
    return NextResponse.json({ error: "Failed to check usage" }, { status: 500 })
  }
}

export async function POST() {
  try {
    const supabase = await createClient()
    const { data: { user } } = await supabase.auth.getUser()

    if (!user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    // 获取用户的活跃订阅
    const { data: subscription } = await supabase
      .from("subscriptions")
      .select("*")
      .eq("user_id", user.id)
      .eq("status", "active")
      .order("created_at", { ascending: false })
      .limit(1)
      .single()

    if (!subscription) {
      return NextResponse.json({ error: "No active subscription" }, { status: 403 })
    }

    // 检查是否还有剩余次数
    if (subscription.usage_count >= subscription.usage_limit) {
      return NextResponse.json({ error: "Usage limit reached" }, { status: 403 })
    }

    // 扣减次数
    const { error } = await supabase
      .from("subscriptions")
      .update({
        usage_count: subscription.usage_count + 1,
        updated_at: new Date().toISOString()
      })
      .eq("id", subscription.id)

    if (error) {
      throw error
    }

    const remaining = subscription.usage_limit - subscription.usage_count - 1

    return NextResponse.json({ success: true, remaining })
  } catch (error) {
    console.error("Usage decrement error:", error)
    return NextResponse.json({ error: "Failed to decrement usage" }, { status: 500 })
  }
}
