import React from 'react'
import { View, TouchableOpacity, Text } from 'react-native'
import './index.styl'

const Button = ({ onPress, title, primary, white }) => {
	return pug`
    TouchableOpacity(onPress=onPress)
      View.btn(styleName=[{ primary, white }])
        Text.txt(styleName=[{ primary, white }]) #{title}
  `
}

export default Button
