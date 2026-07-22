import type { Metadata } from 'next'
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema'
import { pageMetadata } from '@/lib/page-metadata'

const PAGE_NAME = 'Donation Policy'
const CANONICAL_PATH = '/donation-policy'

// Bare page name as title (the root layout template appends the brand);
// per-page OG/Twitter handling is documented in src/lib/page-metadata.ts.
export const metadata: Metadata = pageMetadata({
  title: PAGE_NAME,
  description:
    'Donation Policy for The Corey V. Moore Jr. Initiative for Fentanyl Awareness website',
  canonical: CANONICAL_PATH,
})

export default function DonationPolicy() {
  return (
    <div className="ffc-container py-16">
      <BreadcrumbSchema name={PAGE_NAME} path={CANONICAL_PATH} />
      <div className="max-w-4xl mx-auto">
        <h1 className="font-[var(--font-faustina)] text-[48px] leading-[60px] mb-8">
          Donation Policy
        </h1>

        <div className="prose max-w-none font-[var(--font-lato)] text-[18px] leading-[28px]">
          <p>
            <strong>Effective Date:</strong> January 1, 2024
          </p>

          <h2 className="font-[var(--font-faustina)] text-[32px] leading-[40px] mt-8 mb-4">
            Tax Deductibility
          </h2>
          <p>
            The Corey V. Moore Jr. Initiative for Fentanyl Awareness Inc. is a pre-501(c)(3)
            nonprofit working toward its federal tax-exempt designation. While that application is
            in progress, donations made through this site are processed by our fiscal sponsor — a
            qualified 501(c)(3) nonprofit organization named in the &ldquo;Supported by&rdquo;
            credit in the footer — through its endowment program. Consult your tax advisor about the
            deductibility of your donation.
          </p>

          <h2 className="font-[var(--font-faustina)] text-[32px] leading-[40px] mt-8 mb-4">
            Use of Donations
          </h2>
          <p>Donations support our mission to transform grief into action by providing:</p>
          <ul>
            <li>School presentations on the dangers of fentanyl</li>
            <li>Distribution of life-saving resources in our community</li>
            <li>Support networks for families impacted by the opioid crisis</li>
            <li>Administrative costs necessary to operate our programs</li>
          </ul>

          <h2 className="font-[var(--font-faustina)] text-[32px] leading-[40px] mt-8 mb-4">
            Donation Processing
          </h2>
          <p>
            Donations are processed securely through our payment partners. You will receive a
            receipt for tax purposes via email after your donation is processed.
          </p>

          <h2 className="font-[var(--font-faustina)] text-[32px] leading-[40px] mt-8 mb-4">
            Refund Policy
          </h2>
          <p>
            We generally do not provide refunds for donations. However, if you believe an error has
            occurred, please contact us within 30 days of your donation.
          </p>

          <h2 className="font-[var(--font-faustina)] text-[32px] leading-[40px] mt-8 mb-4">
            Privacy
          </h2>
          <p>
            Donor information is kept confidential and will not be shared with third parties except
            as required by law.
          </p>

          <h2 className="font-[var(--font-faustina)] text-[32px] leading-[40px] mt-8 mb-4">
            Contact Us
          </h2>
          <p>For questions about donations or this policy, please contact us at:</p>
          <p>
            Email:{' '}
            <a href="mailto:info@thecoreyvmoorejrinitiative.org" className="text-primary underline">
              info@thecoreyvmoorejrinitiative.org
            </a>
            <br />
            Phone: (656) 233-4338
          </p>
        </div>
      </div>
    </div>
  )
}
