import React from 'react'
import { render, screen } from '@testing-library/react'
import SupportFreeForCharity from '@/components/home-page/SupportFreeForCharity'

// Locks in the perceived-performance + accessibility behavior of the Zeffy
// donation iframe embed: it lazy-loads and sits over a decorative,
// reduced-motion-safe loading skeleton.
//
// The Events widget's skeleton is intentionally not covered here: this site
// has no SociableKit events widget configured, so <Events /> renders null
// (see __tests__/components/Events.test.tsx). Restore the Events skeleton
// assertion once a widget URL is added to siteConfig.
describe('iframe embeds', () => {
  describe('Zeffy donation form', () => {
    it('lazy-loads the donation iframe', () => {
      render(<SupportFreeForCharity />)
      expect(screen.getByTitle('Donation form powered by Zeffy').getAttribute('loading')).toBe(
        'lazy'
      )
    })

    it('renders a decorative, reduced-motion-safe loading skeleton', () => {
      const { container } = render(<SupportFreeForCharity />)
      const skeleton = container.querySelector('[aria-hidden="true"].animate-pulse')
      expect(skeleton).not.toBeNull()
      expect(skeleton?.className).toContain('pointer-events-none')
      expect(skeleton?.className).toContain('motion-reduce:animate-none')
    })
  })
})
