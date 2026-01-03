import { NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const { prompt, images } = await request.json()

    const apiKey = process.env.GEMINI_API_KEY
    if (!apiKey) {
      return NextResponse.json({ error: "API key not configured" }, { status: 500 })
    }

    const parts: any[] = [{ text: prompt }]

    if (images && images.length > 0) {
      images.forEach((img: string) => {
        const base64Data = img.split(",")[1]
        parts.push({
          inline_data: {
            mime_type: "image/jpeg",
            data: base64Data,
          },
        })
      })
    }

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-3-pro-image-preview:generateContent?key=${apiKey}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [{ parts }],
          tools: [{ google_search: {} }],
          generationConfig: {
            responseModalities: ["TEXT", "IMAGE"],
            imageConfig: {
              aspectRatio: "3:4",
              imageSize: "2K",
            },
          },
        }),
        signal: AbortSignal.timeout(120000),
      }
    )

    const data = await response.json()

    console.log("Gemini API Response:", JSON.stringify(data, null, 2))

    if (!response.ok) {
      console.error("API Error:", data.error)
      return NextResponse.json({ error: data.error?.message || "API request failed" }, { status: response.status })
    }

    const generatedImages: string[] = []
    data.candidates?.[0]?.content?.parts?.forEach((part: any) => {
      if (part.inlineData) {
        generatedImages.push(`data:${part.inlineData.mimeType};base64,${part.inlineData.data}`)
      }
    })

    console.log("Generated images count:", generatedImages.length)

    return NextResponse.json({ images: generatedImages })
  } catch (error) {
    console.error("Generation error:", error)
    const errorMessage = error instanceof Error ? error.message : "Failed to generate image"
    return NextResponse.json({ error: errorMessage }, { status: 500 })
  }
}
