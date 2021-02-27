import React, { useState } from 'react'
import { Story, Meta } from '@storybook/react'
import { Hamburger } from '../index'
import { HamburgerProps } from '../index'

export default {
  title: 'Playground/React Components',
  component: Hamburger,
  argTypes: {
    color: { control: 'color' },
    size: {
      control: {
        type: 'select',
        options: ['small', 'medium', 'large']
      }
    },
    direction: {
      control: {
        type: 'select',
        options: ['right', 'left']
      }
    },
    device: {
      control: {
        type: 'select',
        options: ['all', 'mobile', 'tablet']
      }
    }
  }
} as Meta

const Template: Story<HamburgerProps> = (args) => {
  const [state, setState] = useState(false)

  const handleClick = () => {
    setState(!state)
  }

  return <Hamburger handleClick={handleClick} isOpened={state} {...args} />
}

export const HamburgerMenu = Template.bind({})
HamburgerMenu.args = {
  color: '#28282A',
  size: 'medium',
  direction: 'right',
  top: '10',
  right: '10',
  left: 'auto',
  device: 'all'
}
