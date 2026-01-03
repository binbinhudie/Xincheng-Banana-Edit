"use client"

import type React from "react"

import { useState, useCallback } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Upload, Sparkles, Loader2, Type, ImageIcon, X } from "lucide-react"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function Editor() {
  const [mode, setMode] = useState<"text" | "image">("text")
  const [images, setImages] = useState<string[]>([])
  const [prompt, setPrompt] = useState("")
  const [isProcessing, setIsProcessing] = useState(false)
  const [generatedImages, setGeneratedImages] = useState<string[]>([])
  const [error, setError] = useState("")

  const handleImageUpload = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const files = e.target.files
      if (!files) return

      const fileArray = Array.from(files).slice(0, 9 - images.length)

      fileArray.forEach((file) => {
        const reader = new FileReader()
        reader.onload = (e) => {
          setImages((prev) => [...prev, e.target?.result as string])
        }
        reader.readAsDataURL(file)
      })
    },
    [images.length],
  )

  const removeImage = (index: number) => {
    setImages((prev) => prev.filter((_, i) => i !== index))
  }

  const handleGenerate = async () => {
    if (mode === "text" && !prompt) return
    if (mode === "image" && (images.length === 0 || !prompt)) return

    setIsProcessing(true)
    setError("")
    setGeneratedImages([])

    try {
      const response = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          prompt,
          images: mode === "image" ? images : [],
        }),
      })

      const data = await response.json()

      console.log("API Response:", data)
      console.log("Generated images:", data.images)

      if (!response.ok) {
        throw new Error(data.error || "Failed to generate image")
      }

      if (!data.images || data.images.length === 0) {
        throw new Error("No images generated")
      }

      setGeneratedImages(data.images)
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to generate image")
    } finally {
      setIsProcessing(false)
    }
  }

  return (
    <section id="editor" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Try The AI Editor</h2>
            <p className="text-lg text-muted-foreground">Experience the power of AI-driven image editing</p>
          </div>

          <Tabs value={mode} onValueChange={(v) => setMode(v as "text" | "image")} className="mb-6">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2">
              <TabsTrigger value="text" className="gap-2">
                <Type className="h-4 w-4" />
                Text to Image
              </TabsTrigger>
              <TabsTrigger value="image" className="gap-2">
                <ImageIcon className="h-4 w-4" />
                Image to Image
              </TabsTrigger>
            </TabsList>
          </Tabs>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Upload Section */}
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                {mode === "text" ? <Type className="h-5 w-5" /> : <Upload className="h-5 w-5" />}
                {mode === "text" ? "Enter Prompt" : "Upload Images"}
              </h3>

              <div className="space-y-4">
                {mode === "image" && (
                  <div>
                    <div className="border-2 border-dashed border-border rounded-lg p-6 text-center hover:border-accent transition-colors">
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageUpload}
                        className="hidden"
                        id="image-upload"
                        multiple
                      />
                      <label htmlFor="image-upload" className="cursor-pointer block">
                        <div className="flex flex-col items-center gap-2">
                          <div className="text-5xl">🍌</div>
                          <p className="text-sm font-medium">Click to upload images</p>
                          <p className="text-xs text-muted-foreground">Up to 9 images, Max 10MB each</p>
                        </div>
                      </label>
                    </div>

                    {images.length > 0 && (
                      <div className="grid grid-cols-3 gap-2 mt-4">
                        {images.map((img, idx) => (
                          <div key={idx} className="relative group">
                            <img
                              src={img || "/placeholder.svg"}
                              alt={`Upload ${idx + 1}`}
                              className="w-full h-24 object-cover rounded-lg border border-border"
                            />
                            <button
                              onClick={() => removeImage(idx)}
                              className="absolute -top-2 -right-2 bg-destructive text-destructive-foreground rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                              aria-label="Remove image"
                            >
                              <X className="h-3 w-3" />
                            </button>
                          </div>
                        ))}
                      </div>
                    )}

                    {images.length > 0 && (
                      <p className="text-xs text-muted-foreground text-center mt-2">
                        {images.length} / 9 images uploaded
                      </p>
                    )}
                  </div>
                )}

                <div>
                  <label className="text-sm font-medium mb-2 block">Prompt</label>
                  <Textarea
                    placeholder={
                      mode === "text"
                        ? "Describe the image you want to create... (e.g., 'a banana on a beach at sunset')"
                        : "Describe how you want to edit the images... (e.g., 'change background to a beach sunset')"
                    }
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    className="min-h-24"
                  />
                </div>

                <Button
                  onClick={handleGenerate}
                  disabled={
                    (mode === "text" && !prompt) ||
                    (mode === "image" && (images.length === 0 || !prompt)) ||
                    isProcessing
                  }
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 gap-2"
                >
                  {isProcessing ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Processing...
                    </>
                  ) : (
                    <>
                      <Sparkles className="h-4 w-4" />
                      Generate
                    </>
                  )}
                </Button>
              </div>
            </Card>

            {/* Output Section */}
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <Sparkles className="h-5 w-5" />
                Output Gallery
              </h3>

              <div className="border border-border rounded-lg p-8 min-h-[400px] flex items-center justify-center bg-muted/30">
                {isProcessing ? (
                  <div className="text-center">
                    <Loader2 className="h-12 w-12 animate-spin mx-auto mb-4 text-accent" />
                    <p className="text-sm text-muted-foreground">Creating magic...</p>
                  </div>
                ) : error ? (
                  <div className="text-center">
                    <div className="text-6xl mb-4">⚠️</div>
                    <p className="text-sm text-destructive">{error}</p>
                  </div>
                ) : generatedImages.length > 0 ? (
                  <div className="w-full grid gap-4">
                    {generatedImages.map((img, idx) => (
                      <img
                        key={idx}
                        src={img || "/placeholder.svg"}
                        alt={`Generated ${idx + 1}`}
                        className="w-full rounded-lg"
                      />
                    ))}
                  </div>
                ) : (mode === "image" ? images.length > 0 : true) && prompt ? (
                  <div className="text-center">
                    <div className="text-6xl mb-4">🍌</div>
                    <p className="text-sm text-muted-foreground">Click Generate to see results</p>
                  </div>
                ) : (
                  <div className="text-center">
                    <div className="text-6xl mb-4">✨</div>
                    <p className="text-sm text-muted-foreground">
                      {mode === "text"
                        ? "Your generated image will appear here"
                        : "Upload images and add a prompt to get started"}
                    </p>
                  </div>
                )}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
