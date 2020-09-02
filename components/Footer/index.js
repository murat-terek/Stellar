import React from 'react'
import { View, Text } from 'react-native'
import './index.styl'
import First from './First'
import Info from './Info'
import Link from '../Base/Link'

const Footer = () => {
	return pug`
    View.footer
      View.container
        View.column
          First
        View.column
          Info
      Text.txt © Untitled. Design: 
        Link(href='https://www.google.com/')
          Text.link HTML5 UP
        | . Demo Images: 
        Link(href='https://www.google.com/')
          Text.link Unsplash
        | .
  `
}

export default Footer
