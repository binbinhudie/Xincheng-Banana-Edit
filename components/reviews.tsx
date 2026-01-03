import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

const reviews = [
  {
    name: "Sarah Chen",
    role: "Digital Creator",
    avatar: "SC",
    content:
      "This editor completely changed my workflow. The character consistency is incredible - miles ahead of other tools!",
  },
  {
    name: "Michael Torres",
    role: "UGC Specialist",
    avatar: "MT",
    content:
      "Creating consistent AI influencers has never been easier. It maintains perfect face details across edits!",
  },
  {
    name: "Emily Rodriguez",
    role: "Professional Editor",
    avatar: "ER",
    content: "One-shot editing is basically solved with this tool. The scene blending is so natural and realistic!",
  },
  {
    name: "David Kim",
    role: "Marketing Director",
    avatar: "DK",
    content:
      "Perfect for our campaigns. The AI understands context incredibly well and delivers professional results every time.",
  },
  {
    name: "Lisa Anderson",
    role: "Content Strategist",
    avatar: "LA",
    content: "Game changer for social media content. The speed and quality are unmatched. Highly recommend!",
  },
  {
    name: "James Wilson",
    role: "Creative Director",
    avatar: "JW",
    content:
      "The natural language editing is phenomenal. I can describe exactly what I want and it delivers perfectly.",
  },
]

export function Reviews() {
  return (
    <section id="reviews" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Creators Are Saying</h2>
          <p className="text-lg text-muted-foreground">Join thousands of satisfied creators</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {reviews.map((review, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <Avatar>
                    <AvatarFallback className="bg-accent text-accent-foreground font-semibold">
                      {review.avatar}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold">{review.name}</p>
                    <p className="text-sm text-muted-foreground">{review.role}</p>
                  </div>
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground">{`"${review.content}"`}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
