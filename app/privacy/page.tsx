import Link from "next/link"

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <Link href="/" className="text-sm text-muted-foreground hover:text-foreground mb-8 inline-block">
          ← Back to Home
        </Link>

        <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>

        <div className="prose prose-neutral dark:prose-invert max-w-none space-y-6">
          <p className="text-muted-foreground">
            Last Updated: January 6, 2026
          </p>

          <section>
            <h2 className="text-2xl font-semibold mb-4">1. Information Collection</h2>
            <p>
              We collect the following types of information:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Account Information: When you log in via Google OAuth, we collect your email address and basic profile information</li>
              <li>Usage Data: Images you upload and content you generate are used solely to provide the service and are not permanently stored</li>
              <li>Payment Information: Processed through third-party payment processor (Creem), we do not store your payment card information</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">2. Information Use</h2>
            <p>
              We use the collected information to:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Provide and improve our AI image editing service</li>
              <li>Process your payments and manage subscriptions</li>
              <li>Send service-related notifications</li>
              <li>Ensure service security and prevent abuse</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">3. Data Protection</h2>
            <p>
              We take reasonable technical and organizational measures to protect your personal information:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Use encryption technology to protect data transmission</li>
              <li>Limit employee access to personal data</li>
              <li>Regularly review security measures</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">4. Third-Party Services</h2>
            <p>
              We use the following third-party services:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Google OAuth: For authentication</li>
              <li>Supabase: For data storage and authentication</li>
              <li>Google Gemini API: For AI image generation</li>
              <li>Creem: For payment processing</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">5. Your Rights</h2>
            <p>
              You have the right to:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Access your personal data</li>
              <li>Correct inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Withdraw consent</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">6. Cookie Usage</h2>
            <p>
              We use necessary cookies to maintain your login status and provide service functionality.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">7. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us:
            </p>
            <p className="mt-2">
              Email: <a href="mailto:support@xinchengai.xyz" className="text-primary hover:underline">support@xinchengai.xyz</a>
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">8. Policy Updates</h2>
            <p>
              We may update this Privacy Policy from time to time. The updated policy will be posted on this page with an updated "Last Updated" date.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
