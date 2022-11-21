import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { navigationStrings } from '../../navigations/NavigationStrings'

const Home = () => {
    const navigation=useNavigation()
  return (
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
    <Text> This is Home Page</Text>
      <Button title='Go to Home sub page' onPress={()=>navigation.navigate(navigationStrings.SUBHOME)}></Button>
      <Button title='settings page' onPress={()=>navigation.navigate(navigationStrings.SETTINGS)}></Button>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})