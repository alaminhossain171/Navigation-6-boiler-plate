import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { navigationStrings } from '../../navigations/NavigationStrings'


const LoginPage = ({ navigation }) => {

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 50 }}>LOGIN</Text>
      <Button title='<<<Signup>>>' color={'coral'} onPress={() => navigation.navigate(navigationStrings.SIGNUP)} />
    </View>
  )
}

export default LoginPage

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
    ,
    alignItems: 'center'
  }
})