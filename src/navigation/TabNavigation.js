import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/home';
import HomeWorkScreen from '../screens/homeWork';
import MenuScreen from '../screens/setting';
import HomeComponent from '../../assets/svgs/Home';
import HomeActiveComponent from '../../assets/svgs/HomeActive';
import HomeWorkComponent from '../../assets/svgs/HomeWork';
import HomeWorkActiveComponent from '../../assets/svgs/HomeWorkActive';
import MenuComponent from '../../assets/svgs/Menu';
import MenuActiveComponent from '../../assets/svgs/MenuActive';
import { Height } from '../utils/responsive';

const Tab = createBottomTabNavigator();
const TabNavigation = () => {
    return (
        <Tab.Navigator screenOptions={{ headerShown: false }}>
            <Tab.Screen name='Home' component={HomeScreen}
                options={() => ({
                    tabBarIcon: ({ focused }) => {
                        return (
                            !focused ? <HomeComponent size={Height(20)} /> : <HomeActiveComponent size={Height(20)} />
                        )
                    }
                })}
            />
            <Tab.Screen name='HomeWork' component={HomeWorkScreen}
                options={() => ({
                    tabBarIcon: ({ focused }) => {
                        return (
                            !focused ? <HomeWorkComponent size={Height(20)} /> : <HomeWorkActiveComponent size={Height(20)} />
                        )
                    }
                })}
            />
            <Tab.Screen name='Menu' component={MenuScreen}
                options={() => ({
                    tabBarIcon: ({ focused }) => {
                        return (
                            !focused ? <MenuComponent size={Height(20)} /> : <MenuActiveComponent size={Height(20)} />
                        )
                    }
                })}
            />
        </Tab.Navigator>
    )
}

export default TabNavigation

const styles = StyleSheet.create({})