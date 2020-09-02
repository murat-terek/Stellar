import React from 'react'
import { View } from 'react-native'
import './index.styl'

const Section = ({ children, noDevider, grey, relaxed }) => {
  return pug`
    View.section( styleName=[{ noDevider, grey, relaxed }] ) ${children}
  `
}

export default Section
