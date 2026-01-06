import Link from "next/link"

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <Link href="/" className="text-sm text-muted-foreground hover:text-foreground mb-8 inline-block">
          ← Back to Home
        </Link>

        <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>

        <div className="prose prose-neutral dark:prose-invert max-w-none space-y-6">
          <p className="text-muted-foreground">
            Last Updated: January 6, 2026
          </p>

          <section>
            <h2 className="text-2xl font-semibold mb-4">1. Service Description</h2>
            <p>
              Banana Edit provides AI-powered image editing services, allowing users to generate and edit images through text prompts. By using this service, you agree to comply with these terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">2. Account Registration</h2>
            <p>
              Using this service requires creating an account via Google OAuth. You must:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Provide accurate account information</li>
              <li>Protect your account security</li>
              <li>Be responsible for all activities under your account</li>
              <li>Be at least 18 years old or use with guardian consent</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">3. Usage Restrictions</h2>
            <p>
              You agree not to:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Upload illegal, harmful, threatening, abusive, harassing, defamatory, vulgar, obscene, or otherwise objectionable content</li>
              <li>Infringe on others' intellectual property or privacy rights</li>
              <li>Use the service for any illegal activities</li>
              <li>Attempt unauthorized access to systems or networks</li>
              <li>Abuse or excessively use service resources</li>
              <li>Generate misleading or false information</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">4. Paid Services</h2>
            <p>
              We offer both free and paid services:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Free users: 2 usage credits per month</li>
              <li>Pro users: One-time payment of $4.5 for 20 usage credits</li>
              <li>All payments are processed through Creem</li>
              <li>Usage credits take effect immediately after payment</li>
              <li>Usage credits are non-refundable</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">5. Intellectual Property</h2>
            <p>
              Regarding content ownership:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>You retain ownership of uploaded content</li>
              <li>You grant us a license to use uploaded content to provide the service</li>
              <li>Generated images belong to you</li>
              <li>All technology and design of this service belong to Banana Edit</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">6. Disclaimer</h2>
            <p>
              This service is provided "as is" without any express or implied warranties:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>We do not guarantee the service will be uninterrupted or error-free</li>
              <li>AI-generated content may not fully meet expectations</li>
              <li>We are not responsible for the accuracy of generated content</li>
              <li>We are not liable for any losses caused by using the service</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">7. Service Changes and Termination</h2>
            <p>
              We reserve the right to:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Modify or terminate the service at any time</li>
              <li>Change pricing and features</li>
              <li>Suspend or terminate accounts that violate terms</li>
              <li>Update these Terms of Service</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">8. Data and Privacy</h2>
            <p>
              Your data usage is governed by our <Link href="/privacy" className="text-primary hover:underline">Privacy Policy</Link>. Uploaded images are used solely to provide the service and are not permanently stored.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">9. Dispute Resolution</h2>
            <p>
              If you have any disputes or complaints about the service, please contact us via email first to seek resolution.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">10. Contact Us</h2>
            <p>
              If you have any questions about these Terms of Service, please contact us:
            </p>
            <p className="mt-2">
              Email: <a href="mailto:support@xinchengai.xyz" className="text-primary hover:underline">support@xinchengai.xyz</a>
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">11. Acceptance of Terms</h2>
            <p>
              By using this service, you indicate that you have read, understood, and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use this service.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
