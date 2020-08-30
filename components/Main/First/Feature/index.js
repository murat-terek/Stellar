import React from 'react'
import { View, Image, Text } from 'react-native'
import './index.styl'

const Feature = ({ uri, title, text }) => {
	return pug`
    View.feature
      View.img-wrap
        View.img-border
          Image.img(source={uri: uri})
      Text.title #{title}
      Text.txt #{text}
  `
}

export default Feature
