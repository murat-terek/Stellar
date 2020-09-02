import React from 'react'
import { View, TouchableOpacity, Text } from 'react-native'
import './index.styl'

const Link = ({ onPress, active, children }) => {
	return pug`
    TouchableOpacity(onPress=onPress)
      View.link(styleName=[{ active }])
        Text.txt #{children}
  `
}

export default Link
