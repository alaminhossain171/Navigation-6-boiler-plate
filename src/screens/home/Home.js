import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { navigationStrings } from '../../navigations/NavigationStrings'

const Home = () => {
    const navigation=useNavigation()
  return (
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
    <Text style={{fontSize:50}}> HOME</Text>
      
    
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})