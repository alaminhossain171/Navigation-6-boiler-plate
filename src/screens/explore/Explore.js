import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { navigationStrings } from '../../navigations/NavigationStrings'


const Explore = () => {
    const navigation=useNavigation()
  return (
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
    <Text style={{fontSize:50}}> Explore</Text>
      <View>
        <Button title='Product details' onPress={()=>navigation.navigate(navigationStrings.PRODUCTDETAILS)} />
      </View>
    
    </View>
  )
}

export default Explore

const styles = StyleSheet.create({})