import React from 'react'
import { View, Image, Text } from 'react-native'
import Title from '../../Base/Title'
import ColLine from '../../Base/ColLine'
import Button from '../../Base/Button'
import './index.styl'

const Intro = () => {
  const handleClick = () => {
    console.log('Learn More')
  }

	return pug`
    View.intro
      View.border
        Image.img(source={uri: '/main/tel.jpg'})
      Title(value='Ipsum sed adipiscing')
      View.line
        ColLine
      Text.txt Sed lorem ipsum dolor sit amet nullam consequat feugiat consequat magna adipiscing magna etiam amet veroeros. Lorem ipsum dolor tempus sit cursus. Tempus nisl et nullam lorem ipsum dolor sit amet aliquam.
      View.viewBut
        Button(title='Learn More' onPress=handleClick)
  `
}

export default Intro
