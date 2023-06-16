import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import LoginScreen from '../screens/login'
import HomeScreen from '../screens/home'
import TabNavigation from './TabNavigation'
import AttendanceScreen from '../screens/attendance'
import ComplainboxScreen from '../screens/complain'
import ExamScreen from '../screens/exam'
import ResultScreen from '../screens/result'
import HolidayScreen from '../screens/holiday'
import EventScreen from '../screens/event'
import FeesScreen from '../screens/fees'
import MaterialScreen from '../screens/material'
import TimetableScreen from '../screens/timeTable'
import HomeWorkList from '../screens/homeWork/HomeWorkList'
import HomeWorkDetail from '../screens/homeWork/HomeWorkDetail'
import NotificationComponent from '../../assets/svgs/Notification'
import NotificationScreen from '../screens/notice'
import ComplainHistory from '../screens/complain/ComplainHistory'
import ProfileScreen from '../screens/profile'
import MaterialsDetails from '../screens/material/MaterialsDetails'
import { Provider } from 'react-redux';
import { store } from '../redux/store/configureStore'
import AddComplain from '../screens/complain/AddComplain'
import NoticeDetails from '../screens/notice/NoticeDetails'
const Stack = createNativeStackNavigator()
const StackNavigation = () => {
    return (
        <Provider store={store}>

            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name='Tab' component={TabNavigation} />
                <Stack.Screen name='Login' component={LoginScreen} />
                <Stack.Screen name='Attendance' component={AttendanceScreen} />
                <Stack.Screen name='Timetables' component={TimetableScreen} />
                <Stack.Screen name='Complainbox' component={ComplainboxScreen} />
                <Stack.Screen name='Exam' component={ExamScreen} />
                <Stack.Screen name='Result' component={ResultScreen} />
                <Stack.Screen name='Holiday' component={HolidayScreen} />
                <Stack.Screen name='Event' component={EventScreen} />
                <Stack.Screen name='Fees' component={FeesScreen} />
                <Stack.Screen name='Material' component={MaterialScreen} />
                <Stack.Screen name='HomeWorkList' component={HomeWorkList} />
                <Stack.Screen name='HomeWorkDetail' component={HomeWorkDetail} />
                <Stack.Screen name='Notification' component={NotificationScreen} />
                <Stack.Screen name='ComplainHistory' component={ComplainHistory} />
                <Stack.Screen name='Profile' component={ProfileScreen} />
                <Stack.Screen name='MaterialDetail' component={MaterialsDetails} />
                <Stack.Screen name='AddComplain' component={AddComplain} />
                <Stack.Screen name='NoticeDetails' component={NoticeDetails} />
            </Stack.Navigator>
        </Provider>
    )
}

export default StackNavigation

const styles = StyleSheet.create({})