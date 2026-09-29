import React from 'react'
import Hero from '@/components/home-page/Hero'
import Mission from '@/components/home-page/Mission'
import SupportFreeForCharity from '@/components/home-page/SupportFreeForCharity'
import VolunteerwithUs from '@/components/home-page/Volunteer-with-Us'
import TheFreeForCharityTeam from '@/components/home-page/TheFreeForCharityTeam'
import FrequentlyAskedQuestions from '@/components/home-page/FrequentlyAskedQuestions'
import Events from '@/components/home-page/Events'

// The template's Results-2023, Testimonials, Endowment-Features and
// Our-Programs sections describe the supporting organization itself (its 2023 results,
// testimonials about FFC, FFC's endowment and FFC's own programs), so they are
// not rendered on this charity's site until it supplies its own content.
const index = () => {
  return (
    <div>
      <Hero />
      <Mission />
      <VolunteerwithUs />
      <Events />
      <SupportFreeForCharity />
      <FrequentlyAskedQuestions />
      <TheFreeForCharityTeam />
    </div>
  )
}

export default index
