import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"
import Link from "next/link"

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-background to-secondary/30 py-20 md:py-32">
      {/* Banana decorations */}
      <div
        className="absolute left-10 top-20 text-6xl opacity-20 animate-bounce"
        style={{ animationDelay: "0s", animationDuration: "3s" }}
      >
        🍌
      </div>
      <div
        className="absolute right-20 top-40 text-5xl opacity-20 animate-bounce"
        style={{ animationDelay: "1s", animationDuration: "4s" }}
      >
        🍌
      </div>
      <div
        className="absolute left-1/4 bottom-20 text-4xl opacity-10 animate-bounce"
        style={{ animationDelay: "2s", animationDuration: "5s" }}
      >
        🍌
      </div>

      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-accent/20 px-4 py-2 text-sm font-medium">
            <Sparkles className="h-4 w-4" />
            <span>AI-Powered Image Editor</span>
          </div>

          <h1 className="mb-6 text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-balance">
            Transform Images with Simple Text Prompts
          </h1>

          <p className="mb-8 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-balance leading-relaxed">
            {
              "Experience next-generation AI image editing. Change backgrounds, modify objects, and enhance photos using natural language commands."
            }
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/#editor">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2 group">
                Start Editing
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>

          <div className="mt-12 flex items-center justify-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <span className="text-2xl">⚡</span>
              <span>Lightning Fast</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">🎨</span>
              <span>Natural Language</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">✨</span>
              <span>One-Shot Editing</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
