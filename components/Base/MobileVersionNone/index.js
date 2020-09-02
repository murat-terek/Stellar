import React from 'react'
import { View } from 'react-native'
import './index.styl'

const MobileVersionNone = ({ children }) => {
  return pug`
    View.mobileVersionNone #{children}
  `
}

export default MobileVersionNone
