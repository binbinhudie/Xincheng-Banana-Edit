import Link from "next/link"

export default function RefundPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <Link href="/" className="text-sm text-muted-foreground hover:text-foreground mb-8 inline-block">
          ← Back to Home
        </Link>

        <h1 className="text-4xl font-bold mb-8">Refund Policy</h1>

        <div className="prose prose-neutral dark:prose-invert max-w-none space-y-6">
          <p className="text-muted-foreground">
            Last Updated: January 6, 2026
          </p>

          <section>
            <h2 className="text-2xl font-semibold mb-4">1. Overview</h2>
            <p>
              At Xincheng Banana Edit, we strive to provide the best AI image editing experience.
              This Refund Policy outlines the conditions under which refunds may be issued for our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">2. Refund Eligibility</h2>
            <p>
              You may be eligible for a refund under the following conditions:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Technical issues that prevent you from using the service</li>
              <li>Service not functioning as described</li>
              <li>Unused usage credits (for Pro plan)</li>
              <li>Request made within 7 days of purchase</li>
            </ul>
            <p className="mt-4">
              <strong>Note:</strong> Refunds are not available for:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Usage credits that have already been consumed</li>
              <li>Requests made after 7 days of purchase</li>
              <li>Dissatisfaction with AI-generated results (as AI output can vary)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">3. Refund Process</h2>
            <p>
              To request a refund, please follow these steps:
            </p>
            <ol className="list-decimal pl-6 space-y-2">
              <li>Contact our support team at <a href="mailto:support@xinchengai.xyz" className="text-primary hover:underline">support@xinchengai.xyz</a></li>
              <li>Include your order/transaction ID in the email</li>
              <li>Provide a brief explanation of why you're requesting a refund</li>
              <li>Our team will review your request and respond within 3 business days</li>
            </ol>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">4. Response Time</h2>
            <p>
              We are committed to responding to all refund requests within <strong>3 business days</strong>.
              If we do not respond within this timeframe, please send a follow-up email.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">5. Refund Processing</h2>
            <p>
              Once your refund request is approved:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Refunds will be processed within 5-10 business days</li>
              <li>The refund will be issued to the original payment method</li>
              <li>You will receive a confirmation email once the refund is processed</li>
              <li>Depending on your payment provider, it may take additional time for the refund to appear in your account</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">6. Partial Refunds</h2>
            <p>
              For Pro plan users who have used some but not all of their usage credits,
              we may offer a partial refund based on the unused portion of your purchase.
            </p>
            <p className="mt-2">
              <strong>Calculation:</strong> Partial refund = (Unused credits / Total credits) × Purchase price
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">7. Free Plan</h2>
            <p>
              As the Free plan does not involve any payment, refunds are not applicable.
              However, if you experience technical issues, please contact our support team for assistance.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">8. Disputes</h2>
            <p>
              If you have any disputes regarding refunds, please contact us first before initiating a chargeback with your payment provider.
              We are committed to resolving all issues fairly and promptly.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">9. Contact Us</h2>
            <p>
              If you have any questions about our Refund Policy, please contact us:
            </p>
            <p className="mt-2">
              Email: <a href="mailto:support@xinchengai.xyz" className="text-primary hover:underline">support@xinchengai.xyz</a>
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">10. Policy Updates</h2>
            <p>
              We may update this Refund Policy from time to time. The updated policy will be posted on this page with an updated "Last Updated" date.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
