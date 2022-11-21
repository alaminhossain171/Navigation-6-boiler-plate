import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { navigationStrings } from '../../navigations/NavigationStrings'

const SignUp = ({navigation}) => {
  return (
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
    <Text>This is signup page</Text>
        <Button title='Go to Login Page' color={'orange'} onPress={() => navigation.navigate(navigationStrings.LOGIN)} />
    </View>
  )
}

export default SignUp

const styles = StyleSheet.create({})