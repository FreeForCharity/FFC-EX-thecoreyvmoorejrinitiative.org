import React from 'react'
import { render, screen } from '@testing-library/react'
import Mission from '../../../src/components/home-page/Mission'

describe('Mission', () => {
  it('renders the section heading', () => {
    render(<Mission />)
    expect(
      screen.getByRole('heading', {
        name: /Transforming grief into action/i,
      })
    ).toBeInTheDocument()
  })

  it('mounts under the #mission section landmark id', () => {
    const { container } = render(<Mission />)
    expect(container.querySelector('#mission')).not.toBeNull()
  })

  it('renders the mission statement', () => {
    render(<Mission />)
    expect(
      screen.getByText(/advocates for community safety, provides support networks/i)
    ).toBeInTheDocument()
  })

  it('does not embed any video', () => {
    const { container } = render(<Mission />)
    expect(container.querySelector('video')).toBeNull()
  })
})
