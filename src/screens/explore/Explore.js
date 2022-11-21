import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'


const Explore = () => {
    const navigation=useNavigation()
  return (
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
    <Text style={{fontSize:50}}> Explore</Text>
      
    
    </View>
  )
}

export default Explore

const styles = StyleSheet.create({})