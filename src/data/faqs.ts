export type Faq = { question: string; answer: string }

// Import CMS-managed FAQs
import faq1 from './faqs/what-is-the-organization-aiming-to-accomplish.json'
import faq2 from './faqs/are-you-really-a-charity.json'

export const faqs: Faq[] = [
  faq1,
  faq2,
  {
    question: 'How can I request a school presentation or resources?',
    answer: `We welcome requests from schools, community groups, and families. Reach out through the contact information in the footer of this site and we will follow up to schedule a presentation or connect you with life-saving resources.`,
  },
  {
    question: 'How do donations work?',
    answer: `Our online donation page is still being set up. Until it is available, please reach out through the contact information in the footer of this site. We have not yet received IRS recognition as a 501(c)(3) organization, so donations may not be tax-deductible; please consult your accountant or tax advisor.`,
  },
]
