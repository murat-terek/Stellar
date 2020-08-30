import React from 'react'
import { View } from 'react-native'
import Feature from '../Feature'
import './index.styl'

const features = [
  {
    id: 1,
    uri: '/main/icon1.png',
    count: 5120,
    title: 'Etiam',
    color: '#efa8b0'
  },
  {
    id: 2,
    uri: '/main/icon2.png',
    count: 8192,
    title: 'Magna',
    color: '#c79cc8'
  },
  {
    id: 3,
    uri: '/main/icon3.png',
    count: 2048,
    title: 'Tempus',
    color: '#a89cc8'
  },
  {
    id: 4,
    uri: '/main/icon4.png',
    count: 4096,
    title: 'Aliquam',
    color: '#9bb2e1'
  },
  {
    id: 5,
    uri: '/main/icon5.png',
    count: 1024,
    title: 'Nullam',
    color: '#8cc9f0'
  },
]

const Features = () => {
	return pug`
    View.features
      each feature in features
        Feature(
          uri=feature.uri
          count=feature.count
          title=feature.title
          color=feature.color
          key=feature.id
        )
  `
}

export default Features
