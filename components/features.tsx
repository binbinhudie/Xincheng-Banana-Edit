import { Zap, Target, Palette, Layers, Users, Sparkles } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const features = [
  {
    icon: Zap,
    title: "Natural Language Editing",
    description: "Edit images using simple text prompts. AI understands complex instructions like GPT for images",
  },
  {
    icon: Target,
    title: "Character Consistency",
    description: "Maintain perfect character details across edits. Excels at preserving faces and identities",
  },
  {
    icon: Palette,
    title: "Scene Preservation",
    description: "Seamlessly blend edits with original backgrounds. Superior scene fusion capabilities",
  },
  {
    icon: Sparkles,
    title: "One-Shot Editing",
    description: "Perfect results in a single attempt. Solve one-shot image editing challenges effortlessly",
  },
  {
    icon: Layers,
    title: "Multi-Image Context",
    description: "Process multiple images simultaneously. Advanced multi-image editing workflows supported",
  },
  {
    icon: Users,
    title: "AI Content Creation",
    description: "Create consistent AI influencers and content. Perfect for social media and marketing",
  },
]

export function Features() {
  return (
    <section id="features" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Core Features</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Why Choose Banana Edit? Revolutionary AI image editing with natural language understanding
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all hover:border-accent/50">
              <CardContent className="p-6">
                <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-accent/20 group-hover:bg-accent/30 transition-colors">
                  <feature.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
