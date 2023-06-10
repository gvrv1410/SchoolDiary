import { Platform, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Header from '../../components/header/Header'
import ResultHeaderComponent from '../../../assets/svgs/ResultHeader'
import { Height, Width } from '../../utils/responsive'
import { useNavigation } from '@react-navigation/native'
import HolidayHeaderComponent from '../../../assets/svgs/HolidayHeader'
import fonts from '../../utils/fonts'
import colors from '../../utils/colors'
import { Calendar } from 'react-native-calendars'
import DropShadow from 'react-native-drop-shadow'
import { content } from '../../utils/content'
import { globalstyles } from '../../utils/globalstyle'

const HolidayScreen = () => {
    const navigation = useNavigation()
    const showBack = true;
    const imageShow = false;
    const textShow = true;





    const [markedDates, setMarkedDates] = useState({});
    const attendanceData = [
        { date: '2023-05-01', status: 'holiday', holidayName: 'Ram Navami' },
        { date: '2023-05-05', status: 'holiday', holidayName: 'Hanuman Jayanti' },
        { date: '2023-05-10', status: 'holiday', holidayName: 'Parshuram Jayanti' },
    ];

    useEffect(() => {

        const markDate = (date, color) => {
            const markedDate = {};
            markedDate[date] = { customStyles: { container: { backgroundColor: color } } };
            setMarkedDates((prevMarkedDates) => ({ ...prevMarkedDates, ...markedDate }));
        };



        attendanceData.forEach((data) => {
            const { date, status } = data;
            markDate(date, status !== 'holiday' ? 'transparent' : '#E8B510');

        });
    }, []);


    return (
        <View style={globalstyles.container}>
            <Header
                showBack={showBack}
                imageShow={imageShow}
                textShow={textShow}
                firstText={content.holiday}
                dynamicImage={<HolidayHeaderComponent size={Height(110)} />}
                onPress={() => navigation.goBack()}
            />
            <View style={styles.view}>

                <View style={styles.borderView} ></View>
                <Calendar markingType={'custom'} markedDates={markedDates} style={styles.calendarView}
                    theme={{
                        dayTextColor: colors.blackColor,
                        arrowColor: colors.textColor,
                        monthTextColor: colors.textColor,
                        textDayFontFamily: fonts.ARCHIVO_REGULAR,
                        textMonthFontFamily: fonts.ARCHIVO_SEMIBOLD,
                        textDayHeaderFontFamily: fonts.ARCHIVO_MEDIUM,
                        textMonthFontWeight: 'bold',
                        textDayHeaderFontWeight: '300',
                        textDayFontSize: Height(15),
                        textMonthFontSize: Height(25),
                        textDayHeaderFontSize: Height(15),
                        textDayStyle: {
                            color: colors.blackColor
                        },
                        textDayFontWeight: '300',
                        weekVerticalMargin: Width(10),
                        arrowStyle: {
                            alignSelf: 'center',
                        },
                        'stylesheet.calendar.header': {
                            week: {
                                marginTop: 5,
                                flexDirection: 'row',
                                justifyContent: 'space-between'
                            }
                        },
                    }}
                />
            </View>
            <ScrollView style={{ marginTop: Height(420) }}>
                {attendanceData.map((item, i) => {
                    return (
                        <DropShadow style={[globalstyles.dropShadow, {
                            alignSelf: 'center',
                            marginTop: Height(20)
                        }]}>
                            <View key={i} style={{ height: Height(50), width: Width(350), backgroundColor: colors.whiteColor, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: Width(20) }}>
                                <Text style={styles.text}>{item.holidayName}</Text>
                                <Text style={styles.subText}>{item.date}</Text>
                            </View>
                        </DropShadow>
                    )
                })}
            </ScrollView>
        </View>
    )
}

export default HolidayScreen

const styles = StyleSheet.create({
    headerView: {
        position: 'absolute', marginTop: Platform.OS === 'ios' ? Height(50) : Height(30), marginLeft: Width(20), width: '100%'
    },
    headerFrontView: {
        flexDirection: 'row', justifyContent: 'space-between',
    },
    headerTextView: {
        marginTop: Height(40)
    },
    headerText: {
        fontSize: Height(25), fontFamily: fonts.ARCHIVO_SEMIBOLD, color: colors.whiteColor
    },
    headerSubText: {
        fontSize: Height(15), fontFamily: fonts.ARCHIVO_MEDIUM, color: colors.whiteColor, marginTop: Height(5)
    },
    imageView: {
        marginRight: Width(50),
        marginTop: Height(30)
    },
    bottomSubView: {
        height: Height(50), backgroundColor: 'white', justifyContent: 'center', alignItems: 'center', borderRadius: Width(5)
    },
    bottomText: {
        fontSize: Height(15), fontFamily: fonts.ARCHIVO_MEDIUM, color: colors.blackColor
    },
    roundView: {
        width: Width(30), height: Width(30), borderRadius: Width(30) / 2, backgroundColor: 'green', justifyContent: 'center', alignItems: 'center', alignSelf: 'center', position: 'absolute', marginTop: Height(40)
    },
    roundText: {
        fontSize: Height(15), fontFamily: fonts.ARCHIVO_MEDIUM, color: colors.whiteColor
    },
    view: {
        marginTop: Height(50)
    },
    borderView: {
        height: Height(400),
        width: Width(350),
        borderWidth: Height(1),
        position: 'absolute',
        alignSelf: 'center',
        borderRadius: Width(10),
        borderColor: 'grey'
    },
    calendarView: {
        height: Height(420),
        width: Width(330),
        marginTop: Height(15),
        alignSelf: 'center',
        position: 'absolute',
        marginTop: Width(-30)
    },
    bottomView: {
        marginTop: Height(370), flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginHorizontal: Width(50)
    },
    text: {
        fontSize: Height(15),
        fontFamily: fonts.ARCHIVO_MEDIUM,
        color: colors.blackColor
    },
    subText: {
        fontSize: Height(10),
        fontFamily: fonts.ARCHIVO_REGULAR,
        color: colors.blackColor
    },
    dropDownShadow: {
        position: 'absolute',
        marginTop: Height(190),
        alignSelf: 'center',
        width: Width(200),
        shadowColor: colors.shadowColor,
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: Platform.OS === 'ios' ? 1 : 0.2,
        shadowRadius: 5,
        elevation: 5,
        borderRadius: Width(5),
    },

})
