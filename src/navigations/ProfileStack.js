import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { navigationStrings } from './NavigationStrings';
import { Profile} from '../screens';


const ProfileStack = () => {
  const ProfileStack = createNativeStackNavigator();
  return (
    <ProfileStack.Navigator screenOptions={{ headerShown: false }}>
      <ProfileStack.Screen name={navigationStrings.PROFILE} component={Profile} />

    </ProfileStack.Navigator>
  )
}

export default ProfileStack

const styles = StyleSheet.create({})