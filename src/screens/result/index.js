import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../../components/header/Header'
import { useNavigation } from '@react-navigation/native'
import ResultHeaderComponent from '../../../assets/svgs/ResultHeader'
import { Height } from '../../utils/responsive'
import { content } from '../../utils/content'

const ResultScreen = () => {
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
                firstText={content.result}
                dynamicImage={<ResultHeaderComponent size={Height(112)} />}
                onPress={() => navigation.goBack()}
            />
        </View>
    )
}

export default ResultScreen

const styles = StyleSheet.create({})