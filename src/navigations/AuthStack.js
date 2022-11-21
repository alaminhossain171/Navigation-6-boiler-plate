import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LoginPage from '../screens/auth/LoginPage'
import SignUp from '../screens/auth/SignUp'
import { navigationStrings } from './NavigationStrings'

const AuthStack = (Stack) => {
  return (
    <>
     <Stack.Screen name={navigationStrings.LOGIN} component={LoginPage} />
     <Stack.Screen name={navigationStrings.SIGNUP} component={SignUp} />
    </>
  )
}

export default AuthStack

const styles = StyleSheet.create({})