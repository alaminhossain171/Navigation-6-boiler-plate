import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LoginPage from '../screens/auth/LoginPage'
import SignUp from '../screens/auth/SignUp'
import Home from '../screens/home/Home'
import TabRoutes from './TabRoutes'
import { navigationStrings } from './NavigationStrings'

const MainStack = (Stack) => {
  return (
    <>
     <Stack.Screen name={navigationStrings.TABSCREEN} component={TabRoutes} />

    </>
  )
}

export default MainStack

const styles = StyleSheet.create({})