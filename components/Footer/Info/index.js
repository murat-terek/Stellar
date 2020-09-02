import React from 'react'
import { View } from 'react-native'
import Title from '../../Base/Title'
import ConnectInfo from './ConnectInfo'
import Socials from './Socials'
import './index.styl'

const Info = () => {
	return pug`
    View.info
      Title(value='Etiam feugiat' white small)
      ConnectInfo
      Socials
  `
}

export default Info
