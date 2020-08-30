import React from 'react'
import { View, Text } from 'react-native'
import Title from '../../Base/Title'
import ColLine from '../../Base/ColLine'
import Button from '../../Base/Button'
import Features from './Features'
import './index.styl'

const Second = () => {
  const handleClick = () => {
    console.log('Learn More')
  }

	return pug`
    View.second
      Title(value='Ipsum consequat')
      View.line
        ColLine 
      Text.txt Donec imperdiet consequat consequat. Suspendisse feugiat congue posuere. Nulla massa urna, fermentum eget quam aliquet.
      Features
      Text.description Nam elementum nisl et mi a commodo porttitor. Morbi sit amet nisl eu arcu faucibus hendrerit vel a risus. Nam a orci mi, elementum ac arcu sit amet, fermentum pellentesque et purus. Integer maximus varius lorem, sed convallis diam accumsan sed. Etiam porttitor placerat sapien, sed eleifend a enim pulvinar faucibus semper quis ut arcu. Ut non nisl a mollis est efficitur vestibulum. Integer eget purus nec nulla mattis et accumsan ut magna libero. Morbi auctor iaculis porttitor. Sed ut magna ac risus et hendrerit scelerisque. Praesent eleifend lacus in lectus aliquam porta. Cras eu ornare dui curabitur lacinia.
      View.viewBut
        Button(title='Learn More' onPress=handleClick)
  `
}

export default Second
