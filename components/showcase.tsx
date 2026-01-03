import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const showcaseItems = [
  {
    title: "Ultra-Fast Mountain Generation",
    time: "0.8 seconds",
    image: "/mountain-sunset-vista.png",
  },
  {
    title: "Instant Garden Creation",
    time: "1.2 seconds",
    image: "/beautiful-garden-with-flowers.jpg",
  },
  {
    title: "Real-time Beach Synthesis",
    time: "0.9 seconds",
    image: "/tropical-beach-paradise.png",
  },
  {
    title: "Rapid Aurora Generation",
    time: "1.1 seconds",
    image: "/images/northern-lights.png",
  },
]

export function Showcase() {
  return (
    <section id="showcase" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Lightning-Fast AI Creations</h2>
          <p className="text-lg text-muted-foreground">See what Banana Edit generates in milliseconds</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {showcaseItems.map((item, index) => (
            <Card key={index} className="overflow-hidden group hover:shadow-xl transition-all">
              <div className="relative overflow-hidden">
                <img
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  className="w-full h-64 object-cover transition-transform group-hover:scale-105"
                />
                <Badge className="absolute top-4 left-4 bg-accent text-accent-foreground">
                  <span className="text-lg mr-1">⚡</span>
                  {item.time}
                </Badge>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold">{item.title}</h3>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">Experience the power yourself</p>
          <div className="text-4xl">🍌</div>
        </div>
      </div>
    </section>
  )
}
