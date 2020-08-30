import React from 'react'
import { View } from 'react-native'
import Feature from '../Feature'

const features = [
  {
    id: 1,
    uri: '/main/settings.png',
    title: 'Ipsum consequat',
    text: 'Sed lorem amet ipsum dolor et amet nullam consequat a feugiat consequat tempus veroeros sed consequat.'
  },
  {
    id: 2,
    uri: '/main/team.png',
    title: 'Amed sed feugiat',
    text: 'Sed lorem amet ipsum dolor et amet nullam consequat a feugiat consequat tempus veroeros sed consequat.'
  },
  {
    id: 3,
    uri: '/main/teamwork.png',
    title: 'Dolor nullam',
    text: 'Sed lorem amet ipsum dolor et amet nullam consequat a feugiat consequat tempus veroeros sed consequat.'
  },
]

const Features = () => {
	return pug`
    View.features
      each feature in features
        Feature(
          uri=feature.uri
          title=feature.title
          text=feature.text
          key=feature.id
        )
  `
}

export default Features
