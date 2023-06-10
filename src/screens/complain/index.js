import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../../components/header/Header'
import HomeWorkHeaderComponent from '../../../assets/svgs/HomeWorkHeader'
import { Height } from '../../utils/responsive'
import { useNavigation } from '@react-navigation/native'
import { content } from '../../utils/content'

const ComplainboxScreen = () => {
    const navigation = useNavigation()

    const showBack = true;
    const imageShow = false;
    const textShow = true;
    const showHistory = true
    return (
        <View>
            <Header
                showBack={showBack}
                imageShow={imageShow}
                textShow={textShow}
                firstText={content.complain}
                showHistory={showHistory}
                dynamicImage={<HomeWorkHeaderComponent size={Height(120)} />}
                onPress={() => navigation.goBack()}
                onPressHis={() => navigation.navigate('ComplainHistory')}
            />
        </View>
    )
}

export default ComplainboxScreen

const styles = StyleSheet.create({})