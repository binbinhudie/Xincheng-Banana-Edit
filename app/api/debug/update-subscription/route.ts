import { NextResponse } from "next/server"
import { createClient } from "@/lib/supabase/server"

export async function POST() {
  try {
    const supabase = await createClient()
    const { data: { user } } = await supabase.auth.getUser()

    if (!user) {
      return NextResponse.json({ error: "Not authenticated" }, { status: 401 })
    }

    // 更新现有的 Pro 订阅，添加 product_id
    const { data, error } = await supabase
      .from("subscriptions")
      .update({
        product_id: "prod_6rxU77gsSWKfE2ItGZHazK",
      })
      .eq("user_id", user.id)
      .eq("plan_id", "pro")
      .select()

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 })
    }

    return NextResponse.json({
      success: true,
      message: "Subscription updated with product_id",
      updated: data
    })
  } catch (error) {
    console.error("Update subscription error:", error)
    return NextResponse.json({ error: "Failed to update subscription" }, { status: 500 })
  }
}
