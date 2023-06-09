import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import LoginScreen from '../screens/login'
import HomeScreen from '../screens/home'
import TabNavigation from './TabNavigation'

const Stack = createNativeStackNavigator()
const StackNavigation = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name='Login' component={LoginScreen} />
            <Stack.Screen name='Tab' component={TabNavigation} />
        </Stack.Navigator>
    )
}

export default StackNavigation

const styles = StyleSheet.create({})