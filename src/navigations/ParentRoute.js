import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer';
import AuthStack from './AuthStack';
import MainStack from './MainStack';
import { navigationStrings } from './NavigationStrings';
import TabRouter from './TabRoutes';
const Drawer = createDrawerNavigator();
const ParentRoute = () => {
    return (
        <NavigationContainer>
            <Drawer.Navigator >
            <Drawer.Screen name={navigationStrings.TABROUTES} component={TabRouter} />


            </Drawer.Navigator>
        </NavigationContainer>
    )
}

export default ParentRoute

const styles = StyleSheet.create({})