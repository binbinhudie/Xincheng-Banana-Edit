import { NextResponse } from "next/server"
import { createClient } from "@/lib/supabase/server"

export async function POST() {
  try {
    const supabase = await createClient()
    const { data: { user } } = await supabase.auth.getUser()

    if (!user) {
      return NextResponse.json({ error: "Not authenticated" }, { status: 401 })
    }

    // 删除现有的免费订阅
    await supabase
      .from("subscriptions")
      .delete()
      .eq("user_id", user.id)

    // 创建 Pro 订阅（只使用基本字段）
    const { data, error } = await supabase
      .from("subscriptions")
      .insert({
        user_id: user.id,
        status: "active",
        usage_count: 0,
        usage_limit: 20,
      })
      .select()
      .single()

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 })
    }

    return NextResponse.json({
      success: true,
      message: "Pro subscription activated",
      subscription: data
    })
  } catch (error) {
    console.error("Activate Pro error:", error)
    return NextResponse.json({ error: "Failed to activate Pro" }, { status: 500 })
  }
}
