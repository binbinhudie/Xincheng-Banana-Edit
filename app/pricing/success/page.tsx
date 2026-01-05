import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { CheckCircle } from "lucide-react"

export default function PaymentSuccessPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-b from-background to-secondary/20 p-4">
      <Card className="max-w-md w-full p-8 text-center">
        <div className="mb-6">
          <CheckCircle className="h-16 w-16 text-green-500 mx-auto" />
        </div>

        <h1 className="text-3xl font-bold mb-4">Payment Successful!</h1>

        <p className="text-muted-foreground mb-8">
          Thank you for your purchase. Your subscription has been activated and you can now enjoy all the premium features.
        </p>

        <div className="space-y-3">
          <Button asChild className="w-full cursor-pointer">
            <Link href="/#editor">Start Editing</Link>
          </Button>

          <Button asChild variant="outline" className="w-full cursor-pointer">
            <Link href="/pricing">View Plans</Link>
          </Button>
        </div>
      </Card>
    </main>
  )
}
