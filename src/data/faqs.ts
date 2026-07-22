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
    answer: `Donations made through this site are currently processed via the Free For Charity endowment program while our own tax-exempt status is pending. For questions about a donation or its tax treatment, please consult your accountant or tax advisor and the Free For Charity Donation Policy linked in the footer of this site.`,
  },
]
