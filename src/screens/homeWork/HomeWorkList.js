import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import colors from '../../utils/colors'
import Header from '../../components/header/Header'
import HomeWorkHeaderComponent from '../../../assets/svgs/HomeWorkHeader'
import { Height, Width } from '../../utils/responsive'
import SubjectList from '../../components/subject/SubjectList'
import { subject } from '../../helper/dummyData'
import DropShadow from 'react-native-drop-shadow'
import fonts from '../../utils/fonts'
import { globalstyles } from '../../utils/globalstyle'
import { useDispatch, useSelector } from 'react-redux'
import { fetchSubjectData } from '../../redux/reducer/subjectReducer'
import AsyncStorage from '@react-native-async-storage/async-storage'

const HomeWorkList = () => {
    const navigation = useNavigation()
    const route = useRoute()
    const showBack = true;
    const imageShow = false;
    const textShow = true;

    const date = route.params?.date.day;
    const month = route.params?.data;

    const year = route.params?.year;

    const formatDate = () => {

        const monthIndex = new Date(Date.parse(month + " 1, " + year)).getMonth() + 1;
        const monthString = monthIndex.toString().padStart(2, "0");

        const fullMonth = new Date(Date.parse(month + " 1, " + year)).toLocaleString("en-US", { month: "long" });

        const formattedDate = `${date.toString().padStart(2, "0")} ${fullMonth} - ${year}`;

        return formattedDate;
    };

    const formattedDate = formatDate();
    const dispatch = useDispatch();
    const subjectData = useSelector((state) => state.subject);

    useEffect(() => {
        dispatch(fetchSubjectData());
    }, [dispatch]);




    return (
        <View style={globalstyles.container}>
            <Header
                showBack={showBack}
                imageShow={imageShow}
                textShow={textShow}
                firstText={formattedDate}
                lastText={route.params?.date.dayOfWeek}
                dynamicImage={<HomeWorkHeaderComponent size={Height(120)} />}
                onPress={() => navigation.goBack()}
            />
            <FlatList
                data={subjectData.data}
                renderItem={({ item }) => {
                    return (
                        <DropShadow style={globalstyles.dropShadow}>
                            <TouchableOpacity style={styles.flatListView} onPress={() => { navigation.navigate('HomeWorkDetail', { data: item, date: formattedDate }) }}>
                                <Text style={styles.text}>{item.Subject_Name}</Text>
                            </TouchableOpacity>
                        </DropShadow>
                    )
                }}
            />
        </View>
    )
}

export default HomeWorkList

const styles = StyleSheet.create({
    flatListView: {
        height: Height(50),
        width: Width(350),
        backgroundColor: colors.whiteColor,
        alignSelf: 'center',
        marginTop: Height(30),
        justifyContent: 'center',
        paddingHorizontal: Width(20)
    }, text: {
        fontSize: Height(15),
        fontFamily: fonts.ARCHIVO_MEDIUM,
        color: colors.blackColor
    }
})