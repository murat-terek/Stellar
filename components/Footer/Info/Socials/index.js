import React from 'react'
import { View, Image } from 'react-native'
import Link from '../../../Base/Link'
import './index.styl'

const socials = [
  {
    id: 1,
    uri: '/footer/twitter.png',
    href: 'https://twitter.com/'
  },
  {
    id: 2,
    uri: '/footer/facebook.png',
    href: 'https://www.facebook.com/'
  },
  {
    id: 3,
    uri: '/footer/instagram.png',
    href: 'https://www.instagram.com/'
  },
  {
    id: 4,
    uri: '/footer/github.png',
    href: 'https://github.com/'
  },
  {
    id: 5,
    uri: '/footer/dribbble.png',
    href: 'https://dribbble.com/'
  },
]

const Socials = () => {
	return pug`
    View.socials
      each social, index in socials
        Link(href=social.href key=social.id)
          Image.img(source={ uri: social.uri } styleName=[{ first: index === 0 }])
  `
}

export default Socials
