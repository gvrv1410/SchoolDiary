import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../../components/header/Header'
import ResultHeaderComponent from '../../../assets/svgs/ResultHeader'
import { Height } from '../../utils/responsive'
import { useNavigation } from '@react-navigation/native'
import HolidayHeaderComponent from '../../../assets/svgs/HolidayHeader'
import FeesHeaderComponent from '../../../assets/svgs/FeesHeader'
import { content } from '../../utils/content'

const FeesScreen = () => {
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
                firstText={content.fees}
                dynamicImage={<FeesHeaderComponent size={Height(110)} />}
                onPress={() => navigation.goBack()}
            />
        </View>
    )
}

export default FeesScreen

const styles = StyleSheet.create({})