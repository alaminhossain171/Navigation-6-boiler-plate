import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthStack from './AuthStack';
import MainStack from './MainStack';
const Stack = createNativeStackNavigator();
const ParentRoute = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                {!true ? AuthStack(Stack) : MainStack(Stack)}
                {/* {AuthStack(Stack)} */}
                {/* {MainStack(Stack)} */}


            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default ParentRoute

const styles = StyleSheet.create({})