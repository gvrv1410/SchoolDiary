import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect } from 'react'
import Header from '../../components/header/Header'
import HomeWorkHeaderComponent from '../../../assets/svgs/HomeWorkHeader'
import { Height, Width } from '../../utils/responsive'
import { useNavigation } from '@react-navigation/native'
import { content } from '../../utils/content'
import { useDispatch, useSelector } from 'react-redux'
import { fetchTeacherData } from '../../redux/reducer/fetchTeacherReducer'
import { BASE_URL } from '../../helper/apiConstants'
import colors from '../../utils/colors'
import ForwardComponent from '../../../assets/svgs/Forward'
import fonts from '../../utils/fonts'

const ComplainboxScreen = () => {
    const navigation = useNavigation()

    const showBack = true;
    const imageShow = false;
    const textShow = true;
    const showHistory = true


    const dispatch = useDispatch();
    const teacherData = useSelector((state) => state.teacher);

    useEffect(() => {
        dispatch(fetchTeacherData());
    }, [dispatch]);

    console.log({ tDATA: teacherData.data });



    return (
        <View>
            <Header
                showBack={showBack}
                imageShow={imageShow}
                textShow={textShow}
                firstText={content.complain}
                showHistory={showHistory}
                dynamicImage={<HomeWorkHeaderComponent size={Height(120)} />}
                onPress={() => navigation.goBack()}
                onPressHis={() => navigation.navigate('ComplainHistory')}
            />
            <FlatList
                data={teacherData.data}
                renderItem={({ item }) => {
                    console.log({ item });
                    console.log({ Img: item.T_img });
                    return (
                        <View style={styles.flatView}>
                            <View style={styles.rowView}>
                                <View style={styles.imgView}>
                                    <Image
                                        source={{ uri: `${BASE_URL}teacher_img/${item.T_img}` }}
                                        style={styles.img}
                                    />
                                </View>
                                <Text style={styles.text}>{item.T_name}</Text>
                            </View>
                            <TouchableOpacity onPress={() => navigation.navigate('AddComplain', { data: item })}>
                                <ForwardComponent size={Height(15)} />
                            </TouchableOpacity>
                        </View>
                    )
                }}
            />
        </View>
    )
}

export default ComplainboxScreen

const styles = StyleSheet.create({
    flatView: {
        flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: Width(20), marginTop: Height(30)
    },
    rowView: {
        flexDirection: 'row', alignItems: 'center'
    },
    imgView: {
        height: Height(50), width: Height(50), borderRadius: Height(50) / 2, backgroundColor: colors.textColor
    }, img: {
        height: Height(45), width: Height(45), borderRadius: Height(45) / 2,
    },
    text: {
        fontSize: Height(16), fontFamily: fonts.ARCHIVO_SEMIBOLD, color: colors.textColor, marginLeft: Width(20)
    }
})