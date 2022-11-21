import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { navigationStrings } from './NavigationStrings';
import { Explore, Profile } from '../screens';


const ExploreStack = () => {
  const ExploreStack = createNativeStackNavigator();
  return (
    <ExploreStack.Navigator screenOptions={{ headerShown: false }}>
      <ExploreStack.Screen name={navigationStrings.EXPLORE} component={Explore} />

    </ExploreStack.Navigator>
  )
}

export default ExploreStack

const styles = StyleSheet.create({})