# Hamburger Menu Button for React

This is a ready-to-go UI component built for React applications.

## Installation

Requires **React 16 or later**

`npm i --save @aiherrera/react-hamburger`

`# or`

`yarn add @aiherrera/react-hamburger`

## Demo

You can check all the configurations in this [playground](https://coderlab.aiherrera.com)

## Usage

`{ Hamburger }`

```
// ES5 syntax
const Hamburger = require('@aiherrera/react-hamburger')

// ES6 syntax
import Hamburger from '@aiherrera/react-hamburger'

```

### Full example

```
import React from 'react'

import Hamburger from '@aiherrera/react-hamburger'

const App = () => {

  const [state, setState] = useState(false)

  const handleClick = () => {
    setState(!state)
  }

  return (
    <>
      <Hamburger
        handleClick={handleClick}
        isOpened={state}
      />
    </>
  )
}
```

## Props

All these props are passed as defaults and can be overriden any time.

| Name      | Type   | Unit      | Description                                      | Default  |
| --------- | ------ | --------- | ------------------------------------------------ | -------- |
| color     | string | N/A       | Color of the <br> hamburger bars                 | #28282A  |
| size      | string | N/A       | Size of the hamburger                            | 'medium' |
| direction | string | N/A       | Where is located                                 | 'right'  |
| device    | string | N/A       | In which devices is displayed <br> the component | 'all'    |
| top       | string | px/em/rem | Distance from the top                            | '10px'   |
| left      | string | px/em/rem | Distance from the left                           | 'auto'   |
| right     | string | px/em/rem | Distance from the right                          | 'auto'   |
