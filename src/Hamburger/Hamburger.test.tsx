// Generated with util/create-component.js
import React from 'react'
import { getByTestId, render, screen } from '@testing-library/react'

import { Hamburger } from './Hamburger'
import { HamburgerProps } from './Hamburger.types'

describe('Test Component', () => {
  let props: HamburgerProps

  beforeEach(() => {
    props = {
      color: '#28282A',
      size: 'medium',
      direction: 'right',
      top: '10',
      right: '10',
      left: 'auto',
      device: 'all'
    }
  })

  render(<Hamburger {...props} />)

  it('should render Hamburger in the DOM', () => {
    expect(
      getByTestId(document.documentElement, 'hamburger')
    ).toBeInTheDocument()
  })

  it('should add open class when isOpened is true', async () => {
    const { rerender } = render(<Hamburger {...props} />)

    const hamburgerComponent = await screen.getByRole('hamburger')

    expect(hamburgerComponent).not.toHaveClass('open')

    rerender(<Hamburger isOpened={true} {...props} />)

    expect(hamburgerComponent).toHaveClass('open')
  })
})
