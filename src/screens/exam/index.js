import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import Header from '../../components/header/Header'
import NotificationHeaderComponent from '../../../assets/svgs/NotificationHeader'
import { useNavigation } from '@react-navigation/native'
import { Height, Width } from '../../utils/responsive'
import ExamHeaderComponent from '../../../assets/svgs/ExamHeader'
import { content } from '../../utils/content'
import { useDispatch, useSelector } from 'react-redux'
import { fetchExamTimeTable } from '../../redux/reducer/examReducer'
import fonts from '../../utils/fonts'
import colors from '../../utils/colors'
import DropShadow from 'react-native-drop-shadow'
import { globalstyles } from '../../utils/globalstyle'

const ExamScreen = () => {
    const navigation = useNavigation()
    const showBack = true;
    const imageShow = false;
    const textShow = true;

    const dispatch = useDispatch();
    const ExamtimeTable = useSelector((state) => state.examTimeTable);
    useEffect(() => {
        dispatch(fetchExamTimeTable());
    }, [dispatch]);

    return (
        <View style={globalstyles.container}>
            <Header
                showBack={showBack}
                imageShow={imageShow}
                textShow={textShow}
                firstText={content.exam}
                dynamicImage={<ExamHeaderComponent size={Height(110)} />}
                onPress={() => navigation.goBack()}
            />
            <DropShadow style={{
                shadowColor: 'rgba(0, 165, 235, 0.15)',
                shadowOffset: {
                    width: 0,
                    height: 0,
                },
                shadowOpacity: Platform.OS === 'ios' ? 1 : 0.2,
                shadowRadius: 5,
                elevation: 5,
                position: 'absolute',
                alignSelf: 'center',
                marginTop: Height(170)
            }}>
                <View style={{ height: Height(55), width: Width(200), backgroundColor: colors.whiteColor, justifyContent: 'center', alignItems: 'center', borderRadius: Width(5) }}>
                    <Text style={{ fontSize: Height(20), fontFamily: fonts.ARCHIVO_SEMIBOLD, color: colors.textColor }}>{ExamtimeTable.data && ExamtimeTable.data[0].Exam_Type}</Text>
                </View>
            </DropShadow>

            <FlatList
                data={ExamtimeTable.data && ExamtimeTable.data[0].Exam_TimeTable}
                style={styles.flatList}
                renderItem={({ item }) => {
                    return (
                        <DropShadow style={globalstyles.dropShadow}>
                            <View style={styles.view}>
                                <View style={styles.lineView} />
                                <View style={styles.subView}>
                                    <Text style={styles.subjectCode}>{item.Subject_code}</Text>
                                    <Text style={styles.text}>{item.StartTime} to {item.EndTime}</Text>
                                    <Text style={styles.text}>Total Marks : {item.Marks}</Text>
                                </View>
                                <Text style={styles.dateText}>{item.Date}</Text>
                            </View>
                        </DropShadow>
                    )
                }}
            />
        </View>
    )
}

export default ExamScreen

const styles = StyleSheet.create({
    flatList: {
        marginVertical: Height(30)
    },
    view: {
        height: Height(80), width: Width(350), backgroundColor: colors.whiteColor, flexDirection: 'row', alignSelf: 'center', alignItems: 'center', borderRadius: Width(5), marginTop: Height(30)
    },
    lineView: {
        width: Width(5), backgroundColor: colors.textColor, height: Height(80), borderTopLeftRadius: Width(5), borderBottomLeftRadius: Width(5)
    },
    subView: {
        marginLeft: Width(10), width: Width(200),
    },
    subjectCode: {
        fontSize: Height(15), fontFamily: fonts.ARCHIVO_SEMIBOLD, color: colors.textColor
    },
    text: {
        fontSize: Height(12), fontFamily: fonts.ARCHIVO_REGULAR, color: colors.blackColor, marginTop: Height(5)
    },
    dateText: {
        marginLeft: Width(60), fontSize: Height(12), fontFamily: fonts.ARCHIVO_REGULAR, color: colors.blackColor, marginTop: Height(5)
    }
})