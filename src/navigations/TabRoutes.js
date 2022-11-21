import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/home/Home';
import Settings from '../screens/home/Settings';
import HomeStack from './HomeStack';
import { navigationStrings } from './NavigationStrings';
import SettingStack from './SettingsStack';



const Tab = createBottomTabNavigator();

export default function TabRouter() {
  return (

      <Tab.Navigator screenOptions={{headerShown:false}}>
        <Tab.Screen name={navigationStrings.HomeStack} component={HomeStack} />
        <Tab.Screen name={navigationStrings.SETTINGSTACK} component={SettingStack} />
      </Tab.Navigator>

  );
}