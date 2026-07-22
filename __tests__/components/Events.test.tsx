import React from 'react'
import { render } from '@testing-library/react'
import Events from '@/components/home-page/Events'
import { siteConfig } from '@/lib/site.config'

describe('Events component', () => {
  // This site has no SociableKit events widget configured yet, so the
  // component renders nothing. When a widget URL is added to
  // siteConfig.integrations.sociableKitEventsWidgetUrl the section (heading +
  // sandboxed lazy iframe) renders again — restore the template's iframe
  // assertions at that point.
  it('renders nothing while no events widget URL is configured', () => {
    expect(siteConfig.integrations.sociableKitEventsWidgetUrl).toBe('')
    const { container } = render(<Events />)
    expect(container).toBeEmptyDOMElement()
  })
})
