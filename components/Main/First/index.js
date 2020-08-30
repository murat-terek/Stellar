import React from 'react'
import { View } from 'react-native'
import Title from '../../Base/Title'
import ColLine from '../../Base/ColLine'
import Button from '../../Base/Button'
import Features from './Features'
import './index.styl'

const First = () => {
  const handleClick = () => {
    console.log('Learn More')
  }

	return pug`
    View.first
      Title(value='Magna veroeros')
      View.line
        ColLine
      Features
      View.viewBut
        Button(title='Learn More' onPress=handleClick)
  `
}

export default First
