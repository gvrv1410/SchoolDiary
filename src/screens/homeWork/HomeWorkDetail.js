import { FlatList, Platform, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import colors from '../../utils/colors'
import Header from '../../components/header/Header'
import HomeWorkHeaderComponent from '../../../assets/svgs/HomeWorkHeader'
import { useNavigation, useRoute } from '@react-navigation/native'
import { Height, Width } from '../../utils/responsive'
import DropShadow from 'react-native-drop-shadow'
import fonts from '../../utils/fonts'
import { homeWorkData } from '../../helper/dummyData'
import { globalstyles } from '../../utils/globalstyle'

const HomeWorkDetail = () => {
    const navigation = useNavigation()
    const route = useRoute()
    const showBack = true;
    const imageShow = false;
    const textShow = false;
    return (
        <View style={globalstyles.container}>
            <View>
                <Header
                    showBack={showBack}
                    imageShow={imageShow}
                    textShow={textShow}
                    firstText={route.params?.data.name}
                    dynamicImage={<HomeWorkHeaderComponent size={Height(120)} />}
                    onPress={() => navigation.goBack()}
                />
                <DropShadow style={styles.firstViewShadow}>
                    <View style={styles.headerBtn}>
                        <Text style={styles.dropdownItemText}>Home Work List</Text>
                    </View>
                </DropShadow>
            </View>


            <FlatList
                data={homeWorkData}
                style={{ marginTop: Height(60) }}
                renderItem={({ item }) => {
                    return (
                        <DropShadow style={globalstyles.dropShadow}>
                            <View style={styles.view}>
                                <Text style={styles.text}>{item.title}</Text>
                                <Text style={styles.subText}>{item.description}</Text>
                                <Text style={styles.dateText}>Due Date :{item.dueDate}</Text>
                            </View>
                        </DropShadow>
                    )
                }}
            />

        </View>
    )
}

export default HomeWorkDetail

const styles = StyleSheet.create({
    firstViewShadow: {
        position: 'absolute',
        marginTop: Height(180),
        alignSelf: 'center',
        shadowColor: colors.shadowColor,
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: Platform.OS === 'ios' ? 1 : 0.2,
        shadowRadius: 5,
        elevation: 5,
    },
    headerBtn: {
        height: Height(55),
        width: Width(200),
        backgroundColor: colors.whiteColor,
        borderRadius: Width(5),
        justifyContent: 'center',
        alignItems: 'center'
    }, dropdownItemText: {
        fontSize: Height(20),
        fontFamily: fonts.ARCHIVO_MEDIUM,
        color: colors.textColor
    }, view: {
        width: Width(350),
        height: Height(180),
        backgroundColor: colors.whiteColor,
        alignSelf: 'center',
        marginTop: Height(30),
        padding: Width(15),
        borderRadius: Width(5)
    }, text: {
        fontSize: Height(18),
        fontFamily: fonts.ARCHIVO_MEDIUM,
        color: colors.textColor
    }, subText: {
        fontSize: Height(12),
        color: colors.blackColor,
        fontFamily: fonts.ARCHIVO_REGULAR,
        letterSpacing: 0.8,
        marginTop: Height(3)
    }, dateText: {
        fontSize: Height(10),
        color: colors.blackColor,
        fontFamily: fonts.ARCHIVO_REGULAR,
        letterSpacing: 0.8,
        marginTop: Height(50),
        alignSelf: 'flex-end',

    }
})