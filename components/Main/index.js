import React from 'react'
import { View } from 'react-native'
import './index.styl'
import Section from './Section'
import Intro from './Intro'
import First from './First'
import Second from './Second'
import Third from './Third'

const Main = () => {
	return pug`
    View.main
      Section( first=true )
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
