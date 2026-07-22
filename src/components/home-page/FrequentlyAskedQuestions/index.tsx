import React from 'react'
import FrequentlyAskedQuestions from '@/components/ui/Frequently-Asked-Questions'

const index = () => {
  return (
    <div id="faq" className="py-[50px]">
      <div className="w-[90%] mx-auto lg:px-[20px]">
        <h2 className="font-[400] text-[40px] lg:text-[48px]  tracking-[0] text-center mx-auto mb-[50px] faustina-font">
          Frequently Asked Questions
        </h2>
        <div>
          <FrequentlyAskedQuestions title="What is The Corey V. Moore Jr. Initiative for Fentanyl Awareness?">
            <p className="mb-[30px]">
              The Corey V. Moore Jr. Initiative for Fentanyl Awareness Inc. transforms grief into
              action. Founded in memory of Corey V. Moore Jr., we advocate for community safety,
              provide support networks for families impacted by the opioid crisis, and protect youth
              through education.
            </p>
            <p>
              Our work centers on school presentations that teach young people about the dangers of
              fentanyl, and on distributing life-saving resources in our community.
            </p>
          </FrequentlyAskedQuestions>
          <FrequentlyAskedQuestions title="How can I request a school presentation or resources?">
            <p>
              We welcome requests from schools, community groups, and families. Reach out through
              the contact information in the footer of this site and we will follow up to schedule a
              presentation or connect you with life-saving resources.
            </p>
          </FrequentlyAskedQuestions>
          <FrequentlyAskedQuestions title="Are you a registered 501(c)(3) charity?">
            <p>
              We are a pre-501(c)(3) nonprofit working toward our federal tax-exempt designation.
              While that application is in progress, our online presence is supported by Free For
              Charity, a registered 501(c)(3) charity for charities that provides our website,
              domain, and technology services at no cost.
            </p>
          </FrequentlyAskedQuestions>
          <FrequentlyAskedQuestions title="How do donations work?">
            <p>
              Donations made through this site are currently processed through our fiscal
              sponsor&apos;s endowment program while our own tax-exempt status is pending. For
              questions about a donation or its tax treatment, please consult your accountant or tax
              advisor. Our fiscal sponsor is named in the &ldquo;Supported by&rdquo; credit in the
              footer.
            </p>
          </FrequentlyAskedQuestions>
        </div>
      </div>
    </div>
  )
}

export default index
