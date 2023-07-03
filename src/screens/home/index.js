import { FlatList, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect } from 'react'
import Header from '../../components/header/Header'
import imageConstants from '../../helper/imageConstants'
import DropShadow from 'react-native-drop-shadow'
import { Height, Width } from '../../utils/responsive'
import colors from '../../utils/colors'
import { homeData } from '../../helper/dummyData'
import HomeBorderComponent from '../../../assets/svgs/HomeBorder'
import fonts from '../../utils/fonts'
import { useNavigation } from '@react-navigation/native'
import { globalstyles } from '../../utils/globalstyle'
import { useDispatch, useSelector } from 'react-redux';
import { fetchStudentData } from '../../redux/reducer/studentReducer'
import { BASE_URL } from '../../helper/apiConstants'
const HomeScreen = () => {

    const navigation = useNavigation()

    const token = useSelector(state => state.auth.token);


    useEffect(() => {
        if (!token) {
            navigation.navigate('Login');
        } else if (token !== null) {
            navigation.navigate('Home');
        }
    }, [token, navigation]);

    const showBack = false;
    const imageShow = true;
    const textShow = true;

    const dispatch = useDispatch();
    const studentData = useSelector((state) => state.student);

    var Student
    if (studentData && studentData) {
        Student = studentData.data;
    } else {
    }

    useEffect(() => {
        dispatch(fetchStudentData());
    }, [dispatch]);

    var sCode
    if (Student) {
        sCode = Student.S_Class_code;
    } else {
    }

    var sId
    if (Student) {
        sId = Student.S_icard_Id;
    } else {
    }



    return (
        <View style={globalstyles.container}>
            <View>
                <Header
                    showBack={showBack}
                    imageShow={imageShow}
                    userImage={Student ? { uri: `${BASE_URL}student_img/${Student.S_img}` } : imageConstants.userImage}
                    textShow={textShow}
                    firstText={Student && Student.S_name}
                    lastText={"Class : " + sCode + " | " + "Roll No : " + sId}
                    onPressNoti={() => navigation.navigate('Notification')}
                    onPressPro={() => navigation.navigate('Profile')}
                />

                <DropShadow style={styles.firstViewShadow}>
                    <View style={styles.firstView}>

                    </View>
                </DropShadow>
            </View>
            <FlatList
                data={homeData}
                numColumns={3}
                columnWrapperStyle={styles.flatListColumn}
                style={styles.flatList}
                scrollEnabled={false}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity style={styles.flatListMainBtn} onPress={() => navigation.navigate(item.navigation)}>
                            <View>
                                <HomeBorderComponent size={Height(100)} />
                                <View style={styles.view}>
                                    {item.image}
                                    <Text style={styles.text}>{item.name}</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    )
                }}
            />
        </View>
    )
}

export default HomeScreen

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
    firstView: {
        height: Height(180), width: Width(310), backgroundColor: colors.whiteColor, borderRadius: Width(15),
    },
    view: {
        alignItems: 'center', position: 'absolute', marginTop: Height(18), alignSelf: 'center'
    },
    text: {
        marginTop: Height(18), fontSize: Height(12), fontFamily: fonts.ARCHIVO_MEDIUM, color: colors.textColor, letterSpacing: 0.5, textAlign: 'center'
    },
    flatListMainBtn: {
        marginTop: Height(30), alignSelf: 'center',
    },
    flatListColumn: {
        justifyContent: 'space-between', marginHorizontal: Width(30)
    },
    flatList: {
        marginTop: Height(150)
    }
})


