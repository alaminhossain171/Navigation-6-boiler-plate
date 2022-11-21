import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeStack from './HomeStack';
import { navigationStrings } from './NavigationStrings';

import ProfileStack from './ProfileStack';
import ExploreStack from './ExploreStack';



const Tab = createBottomTabNavigator();

export default function TabRouter() {
  return (

      <Tab.Navigator screenOptions={{headerShown:false}}>
        <Tab.Screen name={navigationStrings.HOMESTACK} component={HomeStack} />
        <Tab.Screen name={navigationStrings.PROFILESTACK} component={ProfileStack} />
        <Tab.Screen name={navigationStrings.EXPLORESTACK} component={ExploreStack} />
      </Tab.Navigator>

  );
}