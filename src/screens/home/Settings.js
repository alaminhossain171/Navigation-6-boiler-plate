import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { navigationStrings } from '../../navigations/NavigationStrings'

const Settings = ({navigation}) => {
  return (
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
      <Text style={{color:'red'}}>Settings</Text>
      <Button title='go to sub home' onPress={()=>navigation.navigate(navigationStrings.SUBHOME)} />
    </View>
  )
}

export default Settings

const styles = StyleSheet.create({})