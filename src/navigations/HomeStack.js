import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { navigationStrings } from './NavigationStrings';
import { Home } from '../screens';


const HomeStack = () => {
  const HomeStack = createNativeStackNavigator();
  return (
    <HomeStack.Navigator screenOptions={{ headerShown: false }}>
      <HomeStack.Screen name={navigationStrings.HOME} component={Home} />

    </HomeStack.Navigator>
  )
}

export default HomeStack

const styles = StyleSheet.create({})