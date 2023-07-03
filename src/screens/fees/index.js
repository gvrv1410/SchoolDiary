import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import Header from '../../components/header/Header'
import { Height, Width } from '../../utils/responsive'
import { useNavigation } from '@react-navigation/native'
import FeesHeaderComponent from '../../../assets/svgs/FeesHeader'
import { content } from '../../utils/content'
import { useDispatch, useSelector } from 'react-redux'
import { fetchStudentData } from '../../redux/reducer/studentReducer'
import fonts from '../../utils/fonts'
import colors from '../../utils/colors'
import { globalstyles } from '../../utils/globalstyle'
import DropShadow from 'react-native-drop-shadow'
import Button from '../../components/button/Button'

const FeesScreen = () => {
    const navigation = useNavigation()
    const showBack = true;
    const imageShow = false;
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

    const classCode = Student.S_Class_code;
    let separatedValue;

    if (classCode.length === 3) {
        separatedValue = classCode.substring(0, 2); // "01"
    } else if (classCode.length === 2) {
        separatedValue = classCode.substring(1, 2); // "A"
    } else {
        // Handle the case when the class code doesn't match the expected length
        separatedValue = ""; // Set a default value or handle the error accordingly
    }

    const separatedValue1 = classCode.includes("A") ? "A" : "";

    console.log(separatedValue1);
    console.log(separatedValue);
    return (
        <View style={globalstyles.container}>
            <Header
                showBack={showBack}
                imageShow={imageShow}
                textShow={textShow}
                firstText={content.fees}
                dynamicImage={<FeesHeaderComponent size={Height(110)} />}
                onPress={() => navigation.goBack()}
            />
            <View style={styles.view}>
                <Text style={styles.text}>Name: <Text style={styles.subText}>{Student.S_name}</Text></Text>
                <Text style={styles.text}>Std : <Text style={styles.subText}>{separatedValue}</Text></Text>
                <Text style={styles.text}>Class : <Text style={styles.subText}>{separatedValue1}</Text></Text>
            </View>
            <View style={styles.feesView}>
                <Text style={styles.feesText}>Annual</Text>
                <Text style={[styles.feesText, { fontSize: Height(15) }]}>30,000/-</Text>
            </View>
            <DropShadow style={globalstyles.dropShadow}>
                <View style={[styles.feesView, { backgroundColor: colors.whiteColor }]}>
                    <Text style={[styles.feesText, { color: colors.blackColor }]}>Annual</Text>
                    <Text style={[styles.feesText, { fontSize: Height(15), color: colors.blackColor }]}>10,000/-</Text>
                </View>
            </DropShadow>
            <View>

                <DropShadow style={globalstyles.dropShadow}>
                    <View style={styles.bottomView}>
                        <View style={styles.bottomRowView}>
                            <Text style={styles.bottomText}>Annual :</Text>
                            <Text style={styles.bottomSubText}>30,000/-</Text>
                        </View>
                        <View style={styles.bottomRowView}>
                            <Text style={styles.bottomText}>Total Fee :</Text>
                            <Text style={styles.bottomSubText}>30,000/-</Text>
                        </View>
                        <View style={styles.bottomRowView}>
                            <Text style={styles.bottomText}>Paid Fees :</Text>
                            <Text style={styles.bottomSubText}>60,000/-</Text>
                        </View>
                    </View>
                </DropShadow>
                <View style={styles.bottomMainView}>
                    <Button
                        btnHeight={Height(45)}
                        btnWidth={Width(300)}
                        alignItems='center'
                        name='PAY NOW'
                        justifyContent='center'
                        alignSelf='center'
                        onPress={() => navigation.navigate('Payment')}
                    />
                </View>
            </View>
        </View>
    )
}

export default FeesScreen

const styles = StyleSheet.create({
    text: {
        fontSize: Height(18),
        fontFamily: fonts.ARCHIVO_SEMIBOLD,
        marginTop: Height(20)
    },
    subText: {
        fontFamily: fonts.ARCHIVO_REGULAR
    },
    view: {
        marginTop: Height(30), marginHorizontal: Width(20)
    },
    feesView: {
        height: Height(50),
        width: Width(350),
        backgroundColor: colors.textColor,
        alignSelf: 'center',
        borderRadius: Width(5),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: Width(15),
        marginTop: Height(30)
    },
    feesText: {
        fontSize: Height(18),
        fontFamily: fonts.ARCHIVO_MEDIUM,
        color: colors.whiteColor
    }, bottomView: {
        height: Height(175),
        width: Width(350),
        backgroundColor: colors.whiteColor,
        alignSelf: 'center',
        borderRadius: Width(5),
        marginTop: Height(30),
        paddingHorizontal: Width(30),
    },
    bottomRowView: {
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: Height(20)
    },
    bottomText: {
        fontSize: Height(16), fontFamily: fonts.ARCHIVO_SEMIBOLD, color: colors.textColor
    },
    bottomSubText: {
        fontSize: Height(15), fontFamily: fonts.ARCHIVO_REGULAR, color: colors.textColor
    },
    bottomMainView: {
        position: 'absolute', alignSelf: 'center', marginTop: Height(185)
    }
})