import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { navigationStrings } from '../../navigations/NavigationStrings'

const SubHome = ({navigation}) => {
  return (
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
    <Text>This is sub home page</Text>
      <Button title='go to main home page'onPress={()=>navigation.navigate(navigationStrings.HOME)}></Button>
    </View>
  )
}

export default SubHome

const styles = StyleSheet.create({})