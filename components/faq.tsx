import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "What is Banana Edit?",
    answer:
      "It's a revolutionary AI image editing tool that transforms photos using natural language prompts. Currently one of the most powerful image editing models available, with exceptional consistency for character editing and scene preservation.",
  },
  {
    question: "How does it work?",
    answer:
      'Simply upload an image and describe your desired edits in natural language. The AI understands complex instructions like "place the creature in a snowy mountain" or "change the background to a sunset beach". It processes your text prompt and generates perfectly edited images.',
  },
  {
    question: "What makes it different from other tools?",
    answer:
      "Banana Edit excels in character consistency, scene blending, and one-shot editing. It preserves facial features and seamlessly integrates edits with backgrounds. It also supports multi-image context, making it ideal for creating consistent AI content.",
  },
  {
    question: "Can I use it for commercial projects?",
    answer:
      "Yes! It's perfect for creating AI content, social media campaigns, and marketing materials. Many users leverage it for creating consistent AI influencers and product photography. The high-quality outputs are suitable for professional use.",
  },
  {
    question: "What types of edits can it handle?",
    answer:
      "The editor handles complex edits including face completion, background changes, object placement, style transfers, and character modifications. It excels at understanding contextual instructions while maintaining photorealistic quality.",
  },
  {
    question: "How fast is the processing?",
    answer:
      "Banana Edit delivers results in under 2 seconds for most edits. Our optimized AI engine ensures lightning-fast processing without compromising on quality.",
  },
]

export function FAQ() {
  return (
    <section id="faq" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-muted-foreground">Everything you need to know</p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border rounded-lg px-6 data-[state=open]:shadow-md transition-shadow"
              >
                <AccordionTrigger className="text-left font-semibold hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="text-center mt-12">
            <div className="text-5xl mb-4">🍌</div>
            <p className="text-muted-foreground">Ready to transform your images?</p>
          </div>
        </div>
      </div>
    </section>
  )
}
