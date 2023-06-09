import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../../components/header/Header'
import NotificationComponent from '../../../assets/svgs/Notification'
import imageConstants from '../../helper/imageConstants'

const HomeScreen = () => {
    const showBack = false;
    const imageShow = true
    return (
        <View>
            <Header
                showBack={showBack}
                imageShow={imageShow}
                userImage={imageConstants.userImage}
            />
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({})