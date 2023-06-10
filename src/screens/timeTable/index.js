import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import colors from '../../utils/colors'
import Header from '../../components/header/Header'
import { useNavigation } from '@react-navigation/native'
import AttendanceHeaderComponent from '../../../assets/svgs/AttendanceHeader'
import { Height } from '../../utils/responsive'
import TimeTableComponent from '../../../assets/svgs/TimeTableHeader'
import TimeTableHeaderComponent from '../../../assets/svgs/TimeTableHeader'
import { content } from '../../utils/content'
import { globalstyles } from '../../utils/globalstyle'

const TimetableScreen = () => {
    const navigation = useNavigation()
    const showBack = true;
    const imageShow = false;
    const textShow = false;
    return (
        <View style={globalstyles.container}>
            <Header
                showBack={showBack}
                imageShow={imageShow}
                textShow={textShow}
                firstText={content.timeTable}
                dynamicImage={<TimeTableHeaderComponent size={Height(110)} />}
                onPress={() => navigation.goBack()}
            />
        </View>
    )
}

export default TimetableScreen

const styles = StyleSheet.create({})