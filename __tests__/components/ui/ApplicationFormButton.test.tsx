import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import ApplicationFormButton from '../../../src/components/ui/ApplicationFormButton'

describe('ApplicationFormButton', () => {
  // This site has no Microsoft Form configured in
  // siteConfig.integrations.microsoftFormUrl, so without a formUrl prop the
  // component renders nothing. Per-instance formUrl props still work.
  it('renders nothing when no form URL is configured or passed', () => {
    const { container } = render(<ApplicationFormButton />)
    expect(container).toBeEmptyDOMElement()
  })

  it('renders with the default button label when a formUrl prop is provided', () => {
    render(<ApplicationFormButton formUrl="https://forms.office.com/r/customId" />)
    expect(
      screen.getByRole('button', { name: 'Apply to Become a Supported Charity' })
    ).toBeInTheDocument()
  })

  it('renders with a custom button label when text prop is provided', () => {
    render(<ApplicationFormButton formUrl="https://forms.office.com/r/customId" text="Apply now" />)
    expect(screen.getByRole('button', { name: 'Apply now' })).toBeInTheDocument()
  })

  it('does not render the modal until the button is clicked', () => {
    render(<ApplicationFormButton formUrl="https://forms.office.com/r/customId" />)
    expect(screen.queryByRole('dialog')).toBeNull()
  })

  it('opens the dialog when the button is clicked and shows the iframe with the given form URL', () => {
    render(<ApplicationFormButton formUrl="https://forms.office.com/r/customId" />)
    fireEvent.click(screen.getByRole('button', { name: 'Apply to Become a Supported Charity' }))
    const dialog = screen.getByRole('dialog')
    expect(dialog).toBeInTheDocument()
    expect(dialog).toHaveAttribute('aria-modal', 'true')

    const iframe = dialog.querySelector('iframe')
    expect(iframe).not.toBeNull()
    expect(iframe).toHaveAttribute('src', 'https://forms.office.com/r/customId')
    expect(iframe).toHaveAttribute('title', 'Charity Application Form')
  })

  it('closes the dialog when the close button is clicked', () => {
    render(<ApplicationFormButton formUrl="https://forms.office.com/r/customId" />)
    fireEvent.click(screen.getByRole('button', { name: 'Apply to Become a Supported Charity' }))
    expect(screen.getByRole('dialog')).toBeInTheDocument()

    fireEvent.click(screen.getByRole('button', { name: 'Close application form' }))
    expect(screen.queryByRole('dialog')).toBeNull()
  })
})
