import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import TabRoutes from './TabRoutes'
import { navigationStrings } from './NavigationStrings'

export default function(Stack){
  return (
    <>
     <Stack.Screen name={navigationStrings.TABROUTES} component={TabRoutes} />

    </>
  )
}


