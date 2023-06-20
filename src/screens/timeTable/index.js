import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Header from '../../components/header/Header'
import { useNavigation } from '@react-navigation/native'
import { Height, Width } from '../../utils/responsive'
import TimeTableHeaderComponent from '../../../assets/svgs/TimeTableHeader'
import { content } from '../../utils/content'
import { globalstyles } from '../../utils/globalstyle'
import { useDispatch, useSelector } from 'react-redux'
import { fetchTimeTable } from '../../redux/reducer/timeTableReducer'
import colors from '../../utils/colors'
import fonts from '../../utils/fonts'
import TLineComponent from '../../../assets/svgs/TLine'
import HLineComponent from '../../../assets/svgs/HLine'

const TimetableScreen = () => {
    const navigation = useNavigation()
    const showBack = true;
    const imageShow = false;
    const textShow = false;
    const dispatch = useDispatch();
    const timeTable = useSelector((state) => state.timetable);
    const [monday, setMonday] = useState([])
    const [tuesday, setTuesday] = useState([])
    const [wednesday, setWednesday] = useState([])
    const [thursday, setThursday] = useState([])
    const [friday, setFriday] = useState([])
    const [saturday, setSaturday] = useState([])
    const [selected, setSelected] = useState('')
    const [index, setIndex] = useState(1)
    useEffect(() => {
        if (timeTable.data && timeTable.data.Daily_TimeTable[0]) {
            setMonday(Object.values(timeTable.data.Daily_TimeTable[0].Monday));
            setTuesday(Object.values(timeTable.data.Daily_TimeTable[0].Tuesday));
            setWednesday(Object.values(timeTable.data.Daily_TimeTable[0].Wednesday));
            setThursday(Object.values(timeTable.data.Daily_TimeTable[0].Thursday));
            setFriday(Object.values(timeTable.data.Daily_TimeTable[0].Friday));
            setSaturday(Object.values(timeTable.data.Daily_TimeTable[0].Saturday));
        }
    }, []);
    useEffect(() => {
        dispatch(fetchTimeTable());
    }, [dispatch]);

    const renderItem = ({ item }) => {
        return (
            <View style={styles.mainView}>
                <View style={styles.subView}>
                    <View style={styles.timeView}>
                        <Text style={[{ fontSize: Height(15) }, styles.subText]}>{item.Time_From}</Text>
                        <View style={{ marginVertical: Height(5) }}>
                            <TLineComponent width={Width(1)} height={Height(20)} />
                        </View>
                        <Text style={[{ fontSize: Height(15) }, styles.subText]}>{item.TIme_TO}</Text>
                    </View>
                    <View style={{ marginLeft: Width(45) }}>
                        <Text style={[{ fontSize: Height(18) }, styles.subText]}>{item.Subject_Code}</Text>
                        <Text style={[{ fontSize: Height(12), marginTop: Height(10) }, styles.subText]}>{item.T_icard_Id}</Text>
                    </View>
                </View>
                <View style={{ marginVertical: Height(15) }}>
                    <HLineComponent width={Width(350)} height={Height(15)} />
                </View>
            </View>
        )
    }

    switch (selected) {
        case 'Tue':
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
                    <View style={{ height: Height(70), backgroundColor: colors.textColor, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: Width(20), marginTop: Height(20) }}>
                        <TouchableOpacity onPress={() => { setIndex(1), setSelected('') }}>
                            <Text style={[{ color: index === 1 ? colors.blackColor : colors.whiteColor }, styles.text]}>Mon</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => setIndex(2)}>
                            <Text style={[{ color: index === 2 ? colors.blackColor : colors.whiteColor }, styles.text]}>Tue</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { setIndex(3), setSelected('Wed') }}>
                            <Text style={[{ color: index === 3 ? colors.blackColor : colors.whiteColor }, styles.text]}>Wed</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { setIndex(4), setSelected('Thu') }}>
                            <Text style={[{ color: index === 4 ? colors.blackColor : colors.whiteColor }, styles.text]}>Thu</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { setIndex(5), setSelected('Fri') }}>
                            <Text style={[{ color: index === 5 ? colors.blackColor : colors.whiteColor }, styles.text]}>Fri</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { setIndex(6), setSelected('Sat') }}>
                            <Text style={[{ color: index === 6 ? colors.blackColor : colors.whiteColor }, styles.text]}>Sat</Text>
                        </TouchableOpacity>
                    </View>
                    <FlatList
                        data={tuesday}
                        style={styles.flatList}
                        renderItem={renderItem}
                    />

                </View>
            )
        case 'Wed':
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
                    <View style={{ height: Height(70), backgroundColor: colors.textColor, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: Width(20), marginTop: Height(20) }}>
                        <TouchableOpacity onPress={() => { setIndex(1), setSelected('') }}>
                            <Text style={[{ color: index === 1 ? colors.blackColor : colors.whiteColor }, styles.text]}>Mon</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { setIndex(2), setSelected('Tue') }}>
                            <Text style={[{ color: index === 2 ? colors.blackColor : colors.whiteColor }, styles.text]}>Tue</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => setIndex(3)}>
                            <Text style={[{ color: index === 3 ? colors.blackColor : colors.whiteColor }, styles.text]}>Wed</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { setIndex(4), setSelected('Thu') }}>
                            <Text style={[{ color: index === 4 ? colors.blackColor : colors.whiteColor }, styles.text]}>Thu</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { setIndex(5), setSelected('Fri') }}>
                            <Text style={[{ color: index === 5 ? colors.blackColor : colors.whiteColor }, styles.text]}>Fri</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { setIndex(6), setSelected('Sat') }}>
                            <Text style={[{ color: index === 6 ? colors.blackColor : colors.whiteColor }, styles.text]}>Sat</Text>
                        </TouchableOpacity>
                    </View>
                    <FlatList
                        data={wednesday}
                        style={styles.flatList}
                        renderItem={renderItem}
                    />

                </View>
            )

        case 'Thu':
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
                    <View style={{ height: Height(70), backgroundColor: colors.textColor, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: Width(20), marginTop: Height(20) }}>
                        <TouchableOpacity onPress={() => { setIndex(1), setSelected('') }}>
                            <Text style={[{ color: index === 1 ? colors.blackColor : colors.whiteColor }, styles.text]}>Mon</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { setIndex(2), setSelected('Tue') }}>
                            <Text style={[{ color: index === 2 ? colors.blackColor : colors.whiteColor }, styles.text]}>Tue</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { setIndex(3), setSelected('Wed') }}>
                            <Text style={[{ color: index === 3 ? colors.blackColor : colors.whiteColor }, styles.text]}>Wed</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { setIndex(4) }}>
                            <Text style={[{ color: index === 4 ? colors.blackColor : colors.whiteColor }, styles.text]}>Thu</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { setIndex(5), setSelected('Fri') }}>
                            <Text style={[{ color: index === 5 ? colors.blackColor : colors.whiteColor }, styles.text]}>Fri</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { setIndex(6), setSelected('Sat') }}>
                            <Text style={[{ color: index === 6 ? colors.blackColor : colors.whiteColor }, styles.text]}>Sat</Text>
                        </TouchableOpacity>
                    </View>
                    <FlatList
                        data={thursday}
                        style={styles.flatList}
                        renderItem={renderItem}
                    />

                </View>
            )
        case 'Fri':
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
                    <View style={{ height: Height(70), backgroundColor: colors.textColor, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: Width(20), marginTop: Height(20) }}>
                        <TouchableOpacity onPress={() => { setIndex(1), setSelected('') }}>
                            <Text style={[{ color: index === 1 ? colors.blackColor : colors.whiteColor }, styles.text]}>Mon</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { setIndex(2), setSelected('Tue') }}>
                            <Text style={[{ color: index === 2 ? colors.blackColor : colors.whiteColor }, styles.text]}>Tue</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { setIndex(3), setSelected('Wed') }}>
                            <Text style={[{ color: index === 3 ? colors.blackColor : colors.whiteColor }, styles.text]}>Wed</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { setIndex(4), setSelected('Thu') }}>
                            <Text style={[{ color: index === 4 ? colors.blackColor : colors.whiteColor }, styles.text]}>Thu</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => setIndex(5)}>
                            <Text style={[{ color: index === 5 ? colors.blackColor : colors.whiteColor }, styles.text]}>Fri</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { setIndex(6), setSelected('Sat') }}>
                            <Text style={[{ color: index === 6 ? colors.blackColor : colors.whiteColor }, styles.text]}>Sat</Text>
                        </TouchableOpacity>
                    </View>
                    <FlatList
                        data={friday}
                        style={styles.flatList}
                        renderItem={renderItem}
                    />

                </View>
            )
        case 'Sat':
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
                    <View style={{ height: Height(70), backgroundColor: colors.textColor, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: Width(20), marginTop: Height(20) }}>
                        <TouchableOpacity onPress={() => { setIndex(1), setSelected('') }}>
                            <Text style={[{ color: index === 1 ? colors.blackColor : colors.whiteColor }, styles.text]}>Mon</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { setIndex(2), setSelected('Tue') }}>
                            <Text style={[{ color: index === 2 ? colors.blackColor : colors.whiteColor }, styles.text]}>Tue</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { setIndex(3), setSelected('Wed') }}>
                            <Text style={[{ color: index === 3 ? colors.blackColor : colors.whiteColor }, styles.text]}>Wed</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { setIndex(4), setSelected('Thu') }}>
                            <Text style={[{ color: index === 4 ? colors.blackColor : colors.whiteColor }, styles.text]}>Thu</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { setIndex(5), setSelected('Fri') }}>
                            <Text style={[{ color: index === 5 ? colors.blackColor : colors.whiteColor }, styles.text]}>Fri</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => setIndex(6)}>
                            <Text style={[{ color: index === 6 ? colors.blackColor : colors.whiteColor }, styles.text]}>Sat</Text>
                        </TouchableOpacity>
                    </View>
                    <FlatList
                        data={saturday}
                        style={styles.flatList}
                        renderItem={renderItem}
                    />

                </View>
            )
        default: {
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
                    <View style={{ height: Height(70), backgroundColor: colors.textColor, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: Width(20), marginTop: Height(20) }}>
                        <TouchableOpacity onPress={() => setIndex(1)}>
                            <Text style={[{ color: index === 1 ? colors.blackColor : colors.whiteColor }, styles.text]}>Mon</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { setIndex(2), setSelected('Tue') }}>
                            <Text style={[{ color: index === 2 ? colors.blackColor : colors.whiteColor }, styles.text]}>Tue</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { setIndex(3), setSelected('Wed') }}>
                            <Text style={[{ color: index === 3 ? colors.blackColor : colors.whiteColor }, styles.text]}>Wed</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { setIndex(4), setSelected('Thu') }}>
                            <Text style={[{ color: index === 4 ? colors.blackColor : colors.whiteColor }, styles.text]}>Thu</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { setIndex(5), setSelected('Fri') }}>
                            <Text style={[{ color: index === 5 ? colors.blackColor : colors.whiteColor }, styles.text]}>Fri</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { setIndex(6), setSelected('Sat') }}>
                            <Text style={[{ color: index === 6 ? colors.blackColor : colors.whiteColor }, styles.text]}>Sat</Text>
                        </TouchableOpacity>
                    </View>
                    <FlatList
                        data={monday}
                        style={styles.flatList}
                        renderItem={renderItem}
                    />

                </View>
            )
        }
    }


}

export default TimetableScreen

const styles = StyleSheet.create({
    text: {
        fontSize: Height(18), fontFamily: fonts.ARCHIVO_MEDIUM,
    },
    flatList: {
        marginVertical: Height(30)
    }, mainView: {
        marginLeft: Width(20)
    }, subView: {
        flexDirection: 'row', alignItems: 'center'
    }, timeView: {
        alignItems: 'center'
    }, subText: {
        fontFamily: fonts.ARCHIVO_MEDIUM, color: colors.blackColor
    }
})