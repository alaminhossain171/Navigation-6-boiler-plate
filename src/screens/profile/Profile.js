import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { navigationStrings } from '../../navigations/NavigationStrings'

const Profile = () => {
    const navigation=useNavigation()
  return (
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
    <Text style={{fontSize:50}}> Profile</Text>
    <View>
        <Button title='Explore Product details' onPress={()=>navigation.navigate(navigationStrings.EXPLORESTACK,{
          screen:navigationStrings.PRODUCTDETAILS
        })} />
      </View>
    
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({})