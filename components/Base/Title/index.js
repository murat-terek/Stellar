import React from 'react'
import { Text } from 'react-native'
import './index.styl'

const Title = ({ value, white }) => {
	return pug`
    Text.title(styleName=[{ white }]) #{value}
  `
}

export default Title
