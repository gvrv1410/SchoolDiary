import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import Header from '../../components/header/Header'
import imageConstants from '../../helper/imageConstants'
import { useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'
import { fetchStudentData } from '../../redux/reducer/studentReducer'

const ProfileScreen = () => {
    const showBack = true;
    const imageShow = true;
    const textShow = true;

    const navigation = useNavigation()
    const dispatch = useDispatch();
    const studentData = useSelector((state) => state.student);

    useEffect(() => {
        dispatch(fetchStudentData());
    }, [dispatch]);

    console.log({ studentData });

    const class1 = studentData.data.S_Class_code
    const rollNo1 = studentData.data.S_icard_Id


    return (
        <View>
            <Header
                showBack={showBack}
                imageShow={imageShow}
                userImage={imageConstants.userImage}
                textShow={textShow}
                firstText={studentData.data.S_name}
                lastText={"Class : " + class1 + " | " + "Roll No : " + rollNo1}
                onPress={() => navigation.goBack()}
            />
        </View>
    )
}

export default ProfileScreen

const styles = StyleSheet.create({})