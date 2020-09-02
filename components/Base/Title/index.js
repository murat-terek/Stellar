import React from 'react'
import { Text } from 'react-native'
import './index.styl'

const Title = ({ value, white, small }) => {
	return pug`
    Text.title(styleName=[{ white, small }]) #{value}
  `
}

export default Title
