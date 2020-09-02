import React from 'react'
import { View } from 'react-native'
import Link from './Link'
import './index.styl'

const Menu = () => {
  return pug`
    View.menu
      Link(active) Introduction
      Link First Section
      Link Second Section
      Link Get Started
  `
}

export default Menu
