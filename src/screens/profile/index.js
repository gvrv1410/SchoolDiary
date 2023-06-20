import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import Header from '../../components/header/Header'
import imageConstants from '../../helper/imageConstants'
import { useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'
import { fetchStudentData } from '../../redux/reducer/studentReducer'
import ProfileComponent from '../../../assets/svgs/Profile'
import { Height } from '../../utils/responsive'

const ProfileScreen = () => {
    const showBack = true;
    const imageShow = false;
    const textShow = true;

    const navigation = useNavigation()
    const dispatch = useDispatch();
    const studentData = useSelector((state) => state.student);


    useEffect(() => {
        dispatch(fetchStudentData());
    }, [dispatch]);



    var Student
    if (studentData && studentData.data) {
        Student = studentData.data.data;
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
        <View>
            <Header
                showBack={showBack}
                imageShow={imageShow}
                dynamicImage={<ProfileComponent size={Height(112)} />}
                textShow={textShow}
                firstText={Student && Student.S_name}
                lastText={"Class : " + sCode + " | " + "Roll No : " + sId}
                onPress={() => navigation.goBack()}
            />
        </View>
    )
}

export default ProfileScreen

const styles = StyleSheet.create({})