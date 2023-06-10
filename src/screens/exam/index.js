import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../../components/header/Header'
import NotificationHeaderComponent from '../../../assets/svgs/NotificationHeader'
import { useNavigation } from '@react-navigation/native'
import { Height } from '../../utils/responsive'
import ExamHeaderComponent from '../../../assets/svgs/ExamHeader'
import { content } from '../../utils/content'

const ExamScreen = () => {
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
                firstText={content.exam}
                dynamicImage={<ExamHeaderComponent size={Height(110)} />}
                onPress={() => navigation.goBack()}
            />
        </View>
    )
}

export default ExamScreen

const styles = StyleSheet.create({})