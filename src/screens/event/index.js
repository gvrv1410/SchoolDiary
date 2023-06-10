import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../../components/header/Header'
import ResultHeaderComponent from '../../../assets/svgs/ResultHeader'
import { Height } from '../../utils/responsive'
import { useNavigation } from '@react-navigation/native'
import EventHeaderComponent from '../../../assets/svgs/EventHeader'
import { content } from '../../utils/content'

const EventScreen = () => {
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
                firstText={content.events}
                dynamicImage={<EventHeaderComponent size={Height(112)} />}
                onPress={() => navigation.goBack()}
            />
        </View>
    )
}

export default EventScreen

const styles = StyleSheet.create({})