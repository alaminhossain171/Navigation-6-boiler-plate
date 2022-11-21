import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { navigationStrings } from './NavigationStrings'
import { Login, Signup } from '../screens'

export default function(Stack) {
  return (
    <>
     <Stack.Screen name={navigationStrings.LOGIN} component={Login} />
     <Stack.Screen name={navigationStrings.SIGNUP} component={Signup} />
    </>
  )
}
