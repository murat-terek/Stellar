import React from 'react'
import { View, Image, Text } from 'react-native'
import './index.styl'

const Feature = ({ uri, count, title, color }) => {
	return pug`
    View.feature(style={ backgroundColor: color })
      Image.img(source={uri: uri})
      Text.count #{count.toLocaleString()}
      Text.title #{title}
  `
}

export default Feature
