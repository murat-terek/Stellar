import React from 'react'
import { View, Image, Text } from 'react-native'
import Link from '../Base/Link'
import './index.styl'

const Header = () => {
	return pug`
    View.header
      View.logo
        Image.img(source={uri: '/header/rocket.png'})
      Text.title Stellar
      Text.txt Just another free, fully responsive site template built by 
        Link(href='https://www.google.com/')
          Text.link @ajlkn 
        | for 
        Link(href='https://www.google.com/')
          Text.link HTML5 UP
        | .
  `
}

export default Header
