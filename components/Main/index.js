import React from 'react'
import { View } from 'react-native'
import MobileVersionNone from '../Base/MobileVersionNone'
import Section from './Section'
import Menu from './Menu'
import Intro from './Intro'
import First from './First'
import Second from './Second'
import Third from './Third'
import './index.styl'

const Main = () => {
	return pug`
    View.main
      MobileVersionNone
        Section( noDevider grey relaxed )
          Menu
      Section( noDevider )
        Intro
      Section
        First
      Section
        Second
      Section
        Third
  `
}

export default Main
