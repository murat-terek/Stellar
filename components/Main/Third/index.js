import React from 'react'
import { View, Text } from 'react-native'
import Title from '../../Base/Title'
import ColLine from '../../Base/ColLine'
import Button from '../../Base/Button'
import './index.styl'

const Third = () => {
  const handleClickGetStarted = () => {
    console.log('Get Started')
  }

  const handleClickLearnMore = () => {
    console.log('Learn More')
  }

	return pug`
    View.third
      Title(value='Congue imperdiet')
      View.line
        ColLine 
      Text.txt Donec imperdiet consequat consequat. Suspendisse feugiat congue posuere. Nulla massa urna, fermentum eget quam aliquet.
      View.btns
        View.btn
          Button(title='Get Started' onPress=handleClickGetStarted primary )
        View.btn
          Button(title='Learn More' onPress=handleClickLearnMore)
  `
}

export default Third
