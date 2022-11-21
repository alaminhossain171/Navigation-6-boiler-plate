import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from '../screens/home/Home';
import HomePage2 from '../screens/home/SubHome';
import { navigationStrings } from './NavigationStrings';
import SubHome from '../screens/home/SubHome';
import Settings from '../screens/home/Settings';
import SettingSubPage from '../screens/home/SettingSubPage';

const SettingStack = () => {
    const SettingStack=createNativeStackNavigator();
  return (
    <SettingStack.Navigator screenOptions={{headerShown:false}}>
      <SettingStack.Screen name={navigationStrings.SETTINGS} component={Settings} />
      <SettingStack.Screen name={navigationStrings.SUBSETTING} component={SettingSubPage} />
    </SettingStack.Navigator>
  )
}

export default SettingStack

const styles = StyleSheet.create({})