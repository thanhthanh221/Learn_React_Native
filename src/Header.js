import React from 'react'
import { View, Text } from 'react-native'
import { StylesHeader } from '../Styles/StylesHeader'

const Header = () => {
  return (
    <View
        style={StylesHeader.view}
    >
        <Text style= {StylesHeader.text}>Học React Native</Text>

    </View>
  )
}

export default Header