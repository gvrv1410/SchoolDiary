import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../../components/header/Header'
import { Height } from '../../utils/responsive'
import TimeTableHeaderComponent from '../../../assets/svgs/TimeTableHeader'
import NotificationHeaderComponent from '../../../assets/svgs/NotificationHeader'
import { useNavigation } from '@react-navigation/native'
import { content } from '../../utils/content'

const NotificationScreen = () => {
    const navigation = useNavigation()
    const showBack = true;
    const imageShow = false;
    const textShow = true;
    return (
        <View>
            <Header
                showBack={showBack}
                imageShow={imageShow}
                textShow={textShow}
                firstText={content.notifications}
                dynamicImage={<NotificationHeaderComponent size={Height(110)} />}
                onPress={() => navigation.goBack()}
            />
        </View>
    )
}

export default NotificationScreen

const styles = StyleSheet.create({})