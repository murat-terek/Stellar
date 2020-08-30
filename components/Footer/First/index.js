import React from 'react'
import { View, Text } from 'react-native'
import Title from '../../Base/Title'
import Button from '../../Base/Button'
import './index.styl'

const First = () => {
  const handleClick = () => {
    console.log('Learn More')
  }

	return pug`
    View.first
      Title(value='Aliquam sed mauris' white)
      Text.txt Sed lorem ipsum dolor sit amet et nullam consequat feugiat consequat magna adipiscing tempus etiam dolore veroeros. eget dapibus mauris. Cras aliquet, nisl ut viverra sollicitudin, ligula erat egestas velit, vitae tincidunt odio.
      View.btn
        Button(title='Learn More' onPress=handleClick white )
  `
}

export default First
