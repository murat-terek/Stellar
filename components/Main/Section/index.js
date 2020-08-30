import React from 'react'
import { View } from 'react-native'
import './index.styl'

const Section = ({ children, first }) => {
  return pug`
    View.section( styleName=[{ first }] ) ${children}
  `
}

export default Section
