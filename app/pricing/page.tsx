import { Header } from "@/components/header"
import { PricingSection } from "@/components/pricing-section"

export default function PricingPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <PricingSection />
      </main>
    </>
  )
}
