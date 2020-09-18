import React from 'react'
import { ScrollView, View } from 'react-native'
import './App.styl'
import Header from './Header'
import Main from './Main'
import Footer from './Footer'

const App = () => {
  return pug`
    ScrollView.root
      View.container
        Header
        Main
        Footer
  `
}

export default App
