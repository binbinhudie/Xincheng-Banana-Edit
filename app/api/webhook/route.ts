import { NextResponse } from "next/server"
import { headers } from "next/headers"
import { createClient } from "@/lib/supabase/server"

export async function POST(request: Request) {
  try {
    const body = await request.text()
    const headersList = await headers()
    const signature = headersList.get("x-creem-signature")

    // 验证 webhook 签名
    const signingSecret = process.env.CREEM_SIGNING_SECRET
    if (!signingSecret) {
      console.error("Missing CREEM_SIGNING_SECRET")
      return NextResponse.json({ error: "Webhook not configured" }, { status: 500 })
    }

    // TODO: 实现签名验证逻辑
    // 参考 Creem 文档实现 HMAC 签名验证

    const event = JSON.parse(body)
    console.log("Webhook event received:", event.type)

    const supabase = await createClient()

    // 处理不同的事件类型
    switch (event.type) {
      case "checkout.completed":
        // 支付完成，激活用户订阅
        console.log("Checkout completed:", JSON.stringify(event.data, null, 2))
        const userId = event.data.metadata?.userId
        console.log("User ID from metadata:", userId)

        if (!userId) {
          console.error("No userId in metadata:", event.data.metadata)
          return NextResponse.json({ error: "Missing userId in metadata" }, { status: 400 })
        }

        const { data: subscription, error: insertError } = await supabase
          .from("subscriptions")
          .insert({
            user_id: userId,
            plan_id: "pro",
            status: "active",
            usage_count: 0,
            usage_limit: 20,
          })
          .select()
          .single()

        if (insertError) {
          console.error("Failed to create subscription:", insertError)
          return NextResponse.json({ error: "Failed to create subscription" }, { status: 500 })
        }

        console.log("Subscription created successfully:", subscription)
        break

      case "subscription.created":
        // 订阅创建
        console.log("Subscription created:", event.data)
        break

      case "subscription.updated":
        // 订阅更新
        console.log("Subscription updated:", event.data)
        break

      case "subscription.cancelled":
        // 订阅取消
        console.log("Subscription cancelled:", event.data)
        const cancelUserId = event.data.metadata?.userId
        if (cancelUserId) {
          await supabase
            .from("subscriptions")
            .update({ status: "cancelled", updated_at: new Date().toISOString() })
            .eq("user_id", cancelUserId)
            .eq("status", "active")
        }
        break

      default:
        console.log("Unhandled event type:", event.type)
    }

    return NextResponse.json({ received: true })
  } catch (error) {
    console.error("Webhook error:", error)
    return NextResponse.json({ error: "Webhook processing failed" }, { status: 500 })
  }
}
