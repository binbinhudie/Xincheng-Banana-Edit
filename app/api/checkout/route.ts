import { NextResponse } from "next/server"
import { createClient } from "@/lib/supabase/server"

export async function POST(request: Request) {
  try {
    const { productId } = await request.json()

    if (!productId) {
      return NextResponse.json({ error: "Product ID is required" }, { status: 400 })
    }

    // 获取当前用户
    const supabase = await createClient()
    const { data: { user } } = await supabase.auth.getUser()

    if (!user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    // 开发模式：可选择模拟支付或使用真实 API
    const isDev = process.env.NODE_ENV === "development"
    const useRealPayment = process.env.USE_REAL_PAYMENT === "true"

    if (isDev && !useRealPayment) {
      console.log("Development mode: Simulating payment for product:", productId)
      return NextResponse.json({
        checkoutUrl: `${process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000"}/pricing/success`,
        sessionId: "dev_session_" + Date.now(),
      })
    }

    // 生产模式：调用 Creem API
    const creemApiKey = process.env.CREEM_API_KEY
    const creemApiUrl = process.env.CREEM_API_URL || "https://api.creem.io"

    if (!creemApiKey) {
      return NextResponse.json({ error: "Payment system not configured" }, { status: 500 })
    }

    const checkoutResponse = await fetch(`${creemApiUrl}/v1/checkouts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": creemApiKey,
      },
      body: JSON.stringify({
        product_id: productId,
        customer: {
          email: user.email,
        },
        success_url: `${process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000"}/pricing/success`,
        metadata: {
          userId: user.id,
          email: user.email,
        },
      }),
    })

    const checkoutData = await checkoutResponse.json()

    if (!checkoutResponse.ok) {
      console.error("Creem API error:", checkoutData)
      return NextResponse.json(
        { error: checkoutData.message || "Failed to create checkout session" },
        { status: checkoutResponse.status }
      )
    }

    return NextResponse.json({
      checkoutUrl: checkoutData.checkout_url,
      sessionId: checkoutData.id,
    })
  } catch (error) {
    console.error("Checkout error:", error)
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    )
  }
}
