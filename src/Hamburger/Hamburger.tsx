import React, { createRef, FC, useEffect } from 'react'
import styled from 'styled-components'
import { HamburgerProps } from './Hamburger.types'

const handleTopbarSize = (size: string) => {
  switch (size) {
    case 'small':
      return '20px'
    case 'large':
      return '40px'
    default:
      return '30px'
  }
}

const handleMidbarSize = (size: string) => {
  switch (size) {
    case 'small':
      return '15px'
    case 'large':
      return '30px'
    default:
      return '20px'
  }
}

const handleBottombarSize = (size: string) => {
  switch (size) {
    case 'small':
      return '10px'
    case 'large':
      return '20px'
    default:
      return '10px'
  }
}

const HamburgerButton = styled.div`
  position: absolute;
  display: ${(props) => (props.theme.device !== 'all' ? 'none' : 'flex')};
  top: ${(props) =>
    ['px', 'em', 'rem'].some((v) => props.theme.top.includes(v))
      ? props.theme.top
      : props.theme.top + 'px'};

  right: ${(props) =>
    props.theme.direction === 'right'
      ? props.theme.right !== 'auto'
        ? ['px', 'em', 'rem'].some((v) => props.theme.right.includes(v))
          ? props.theme.right
          : props.theme.right !== '0'
          ? props.theme.right + 'px'
          : 0
        : 'auto'
      : 'auto'};

  left: ${(props) =>
    props.theme.direction === 'left'
      ? props.theme.left !== 'auto'
        ? ['px', 'em', 'rem'].some((v) => props.theme.left.includes(v))
          ? props.theme.left
          : props.theme.left !== '0'
          ? props.theme.left + 'px'
          : 0
        : 'auto'
      : 'auto'};

  padding: 20px;
  max-width: 60px;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  z-index: 9;
  transition: transform 0.5s ease-in-out;

  & > .hamburger__button {
    width: ${(props) => handleMidbarSize(props.theme.size)};
    height: 4px;
    background: ${(props) => props.theme.color};
    border-radius: 5px;
    transition: transform 0.2s ease-in-out, background 0.2s ease-in-out;

    &::before,
    &::after {
      content: '';
      position: absolute;
      width: ${(props) => handleTopbarSize(props.theme.size)};
      height: 4px;
      background: ${(props) => props.theme.color};
      border-radius: 5px;
      transition: transform 0.2s ease-in-out, width 0.2s ease-in-out;
    }

    &::before {
      transform: translateY(-10px);
    }

    &::after {
      width: ${(props) => handleBottombarSize(props.theme.size)};
      transform: translateY(10px);
    }
  }

  &.open .hamburger__button {
    transform: translateX(-50px);
    background: transparent;
    box-shadow: none;

    &::before {
      transform: rotate(45deg) translate(35px, -35px);
    }

    &::after {
      width: ${(props) => handleTopbarSize(props.theme.size)};
      transform: rotate(-45deg) translate(35px, 35px);
    }
  }

  @media screen and (max-width: ${(props) =>
      props.theme.device === 'mobile' && '420px'}) {
    display: flex;
  }

  @media screen and (max-width: ${(props) =>
      props.theme.device === 'tablet' && '1024px'}) {
    display: flex;
  }
`

export const Hamburger: FC<HamburgerProps> = ({
  handleClick,
  isOpened,
  color = '#28282A',
  direction = 'left',
  size = 'medium',
  top = '10px',
  right = 'auto',
  left = 'auto',
  device = 'all'
}): JSX.Element => {
  const buttonRef = createRef<HTMLDivElement>()

  useEffect(() => {
    if (isOpened) {
      buttonRef.current?.classList.add('open')
    } else {
      buttonRef.current?.classList.remove('open')
    }
  }, [isOpened])

  return (
    <HamburgerButton
      data-testid='hamburger'
      role='hamburger'
      className='hamburger'
      onClick={handleClick}
      ref={buttonRef}
      theme={{ device, color, size, direction, top, right, left }}
    >
      <div className='hamburger__button'></div>
    </HamburgerButton>
  )
}
