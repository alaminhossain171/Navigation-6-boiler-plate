import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from '../screens/home/Home';
import HomePage2 from '../screens/home/SubHome';
import { navigationStrings } from './NavigationStrings';
import SubHome from '../screens/home/SubHome';

const HomeStack = () => {
    const HomeStack=createNativeStackNavigator();
  return (
    <HomeStack.Navigator screenOptions={{headerShown:false}}>
      <HomeStack.Screen name={navigationStrings.HOME} component={Home} />
      <HomeStack.Screen name={navigationStrings.SUBHOME} component={SubHome} />
    </HomeStack.Navigator>
  )
}

export default HomeStack

const styles = StyleSheet.create({})