import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Header from '../../components/header/Header'
import { Height, Width } from '../../utils/responsive'
import { useNavigation } from '@react-navigation/native'
import EventHeaderComponent from '../../../assets/svgs/EventHeader'
import { content } from '../../utils/content'
import colors from '../../utils/colors'
import { globalstyles } from '../../utils/globalstyle'
import DropShadow from 'react-native-drop-shadow'
import fonts from '../../utils/fonts'
import { useDispatch, useSelector } from 'react-redux'
import { fetchEvent } from '../../redux/reducer/eventReducer'

const EventScreen = () => {
    const navigation = useNavigation()
    const showBack = true;
    const imageShow = false;
    const textShow = true;
    const [select, setSelect] = useState('')
    const [activeIndex, setActiveIndex] = useState(1)

    const dispatch = useDispatch()
    const event = useSelector((state) => state.event);
    useEffect(() => {
        dispatch(fetchEvent());
    }, [dispatch]);

    switch (select) {
        case 'Videos':
            return (
                <View style={globalstyles.container}>
                    <Header
                        showBack={showBack}
                        imageShow={imageShow}
                        textShow={textShow}
                        firstText={content.events}
                        dynamicImage={<EventHeaderComponent size={Height(112)} />}
                        onPress={() => navigation.goBack()}
                    />
                    <View style={styles.headerRowView}>
                        <DropShadow style={styles.shadow}>
                            <TouchableOpacity style={[{ backgroundColor: activeIndex === 1 ? colors.whiteColor : colors.placeholderColor }, styles.headerBtn]} onPress={() => { setActiveIndex(1), setSelect('') }}>
                                <Text style={[{ color: activeIndex === 1 ? colors.textColor : colors.whiteColor }, styles.headerBtnText]}>Images</Text>
                            </TouchableOpacity>
                        </DropShadow>
                        <DropShadow style={styles.shadow}>
                            <TouchableOpacity style={[{ backgroundColor: activeIndex === 2 ? colors.whiteColor : colors.placeholderColor }, styles.headerBtn]} onPress={() => setActiveIndex(2)}>
                                <Text style={[{ color: activeIndex === 2 ? colors.textColor : colors.whiteColor }, styles.headerBtnText]}>Videos</Text>
                            </TouchableOpacity>
                        </DropShadow>
                    </View>
                    <Text style={{ marginTop: Height(50) }}>Videos</Text>
                </View>
            )
        default: {
            return (
                <View style={globalstyles.container}>
                    <Header
                        showBack={showBack}
                        imageShow={imageShow}
                        textShow={textShow}
                        firstText={content.events}
                        dynamicImage={<EventHeaderComponent size={Height(112)} />}
                        onPress={() => navigation.goBack()}
                    />
                    <View style={styles.headerRowView}>
                        <DropShadow style={styles.shadow}>
                            <TouchableOpacity style={[{ backgroundColor: activeIndex === 1 ? colors.whiteColor : colors.placeholderColor }, styles.headerBtn]} onPress={() => setActiveIndex(1)}>
                                <Text style={[{ color: activeIndex === 1 ? colors.textColor : colors.whiteColor }, styles.headerBtnText]}>Images</Text>
                            </TouchableOpacity>
                        </DropShadow>
                        <DropShadow style={styles.shadow}>
                            <TouchableOpacity style={[{ backgroundColor: activeIndex === 2 ? colors.whiteColor : colors.placeholderColor }, styles.headerBtn]} onPress={() => { setActiveIndex(2), setSelect('Videos') }}>
                                <Text style={[{ color: activeIndex === 2 ? colors.textColor : colors.whiteColor }, styles.headerBtnText]}>Videos</Text>
                            </TouchableOpacity>
                        </DropShadow>
                    </View>
                    <FlatList
                        data={event.data}
                        style={styles.flatList}
                        renderItem={({ item }) => {
                            const date = new Date(item.Date);
                            var formattedDate = date.toISOString().slice(0, 10);
                            return (
                                <DropShadow style={globalstyles.dropShadow}>
                                    <TouchableOpacity style={styles.flatListView} onPress={() => navigation.navigate('EventImageList', { data: item })}>
                                        <Text style={styles.flatListText}>{item.Event_title}</Text>
                                        <Text style={styles.flatListSubText}>{formattedDate}</Text>
                                    </TouchableOpacity>
                                </DropShadow>
                            )
                        }}
                    />
                </View>
            )
        }
    }
}

export default EventScreen

const styles = StyleSheet.create({
    shadow: {
        shadowColor: 'rgba(0, 165, 235, 0.15)',
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: Platform.OS === 'ios' ? 1 : 0.2,
        shadowRadius: 5,
        elevation: 5,
    },
    headerRowView: {
        flexDirection: 'row', position: 'absolute', marginTop: Height(180), justifyContent: 'space-between', width: '100%', paddingHorizontal: Width(30),
    },
    headerBtn: {
        width: Width(150), height: Height(50), alignItems: 'center', justifyContent: 'center', borderRadius: Width(5)
    },
    headerBtnText: {
        fontSize: Height(20), fontFamily: fonts.ARCHIVO_MEDIUM,
    },
    flatList: {
        marginTop: Height(30)
    },
    flatListView: {
        height: Height(50), width: Width(350), backgroundColor: colors.whiteColor, flexDirection: 'row', alignItems: 'center', alignSelf: 'center', justifyContent: 'space-between', paddingHorizontal: Width(12), marginTop: Height(30)
    },
    flatListText: {
        fontSize: Height(15), fontFamily: fonts.ARCHIVO_MEDIUM, color: colors.blackColor, letterSpacing: 0.2
    },
    flatListSubText: {
        fontSize: Height(10), fontFamily: fonts.ARCHIVO_REGULAR, color: colors.placeholderColor
    }
})