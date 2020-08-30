import React from 'react'
import { View, Text } from 'react-native'
import Link from '../../../Base/Link'
import './index.styl'
 
const Row = ({ title, children }) => {
  return pug`
    View.row
      Text.title #{title}
      Text.text #{children}
  `
}

const ConnectInfo = () => {
	return pug`
    View.connectInfo
      Row(title='Address') 1234 Somewhere Road • Nashville, TN 00000 • USA
      Row(title='Phone') (000) 000-0000 x 0000
      Row(title='Email') 
        Link(href='mailto:information@untitled.tld')
          Text.link information@untitled.tld
  `
}

export default ConnectInfo
