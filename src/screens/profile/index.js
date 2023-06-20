import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Header from '../../components/header/Header'
import imageConstants from '../../helper/imageConstants'
import { useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'
import { fetchStudentData } from '../../redux/reducer/studentReducer'
import ProfileComponent from '../../../assets/svgs/Profile'
import { Height, Width } from '../../utils/responsive'
import fonts from '../../utils/fonts'
import colors from '../../utils/colors'
import EditImageComponent from '../../../assets/svgs/EditImage'
import { globalstyles } from '../../utils/globalstyle'
import { BASE_URL } from '../../helper/apiConstants'
import { profileUpdate } from '../../redux/reducer/profileReducer'
import ImagePicker from "react-native-image-crop-picker";
import { profileFatherUpdate } from '../../redux/reducer/fatherPhotoReducer'
import { profileMotherUpdate } from '../../redux/reducer/motherPhotoReducer'
import DropShadow from 'react-native-drop-shadow'
const ProfileScreen = () => {
    const showBack = true;
    const imageShow = false;
    const textShow = true;

    const navigation = useNavigation()
    const dispatch = useDispatch();
    const studentData = useSelector((state) => state.student);
    const [studentImage, setStudentImage] = useState('');
    const [fatherImage, setFatherImage] = useState('');
    const [motherImage, setMotherImage] = useState('');

    const openPicker = () => {
        ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: true,
        }).then((image) => {
            setStudentImage(image.path);
            updateStudentData(image.path)
        }).catch((error) => {
            console.log('ImagePicker Error: ', error);
        });
    };


    const openFatherPicker = () => {
        ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: true,
        }).then((image) => {
            setFatherImage(image.path);
            updateFatherData(image.path)
        }).catch((error) => {
            console.log('ImagePicker Error: ', error);
        });
    };

    const openMotherPicker = () => {
        ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: true,
        }).then((image) => {
            setMotherImage(image.path);
            updateMotherData(image.path)
        }).catch((error) => {
            console.log('ImagePicker Error: ', error);
        });
    };




    var Student;
    if (studentData && studentData.data) {
        Student = studentData.data;
    }

    useEffect(() => {
        dispatch(fetchStudentData());
    }, [dispatch]);

    var sCode;
    if (Student) {
        sCode = Student && Student.S_Class_code;
    }

    var sId;
    if (Student) {
        sId = Student && Student.S_icard_Id;
    }



    const updateStudentData = (image) => {
        console.log({ image });
        const studentObj = {
            S_photo: image
        }
        console.log({ studentObj });
        dispatch(profileUpdate(studentObj));

    }

    const updateFatherData = (image) => {
        console.log({ F: image });
        const fatherObj = {
            S_father_photo: image
        }
        console.log({ fatherObj });
        dispatch(profileFatherUpdate(fatherObj));
    }

    const updateMotherData = (image) => {
        console.log({ M: image });
        const fatherObj = {
            S_mother_photo: image
        }
        console.log({ fatherObj });
        dispatch(profileMotherUpdate(fatherObj));
    }

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
                dynamicImage={<ProfileComponent size={Height(112)} />}
                textShow={textShow}
                firstText={Student && Student.S_name}
                lastText={"Class : " + sCode + " | " + "Roll No : " + sId}
                onPress={() => navigation.goBack()}
            />
            <View style={styles.view}>
                <View>
                    {studentImage ? (
                        <Image
                            source={{ uri: studentImage }}
                            style={styles.image}
                        />
                    ) : (
                        <Image
                            source={Student ? { uri: `${BASE_URL}student_img/${Student.S_img}` } : imageConstants.StudentImage}
                            style={styles.image}
                        />
                    )}
                    <TouchableOpacity style={styles.editBtn} onPress={openPicker}>
                        <EditImageComponent />
                    </TouchableOpacity>
                    <Text style={styles.text}>Student Photo</Text>
                </View>
                <View>
                    {fatherImage ? (
                        <Image
                            source={{ uri: fatherImage }}
                            style={styles.image}
                        />
                    ) : (
                        <Image
                            source={Student ? {
                                uri: `${BASE_URL}student_img/${Student.S_father_img}`
                            } : imageConstants.fatherImage}
                            style={styles.image}
                        />
                    )}
                    <TouchableOpacity style={styles.editBtn} onPress={openFatherPicker}>
                        <EditImageComponent />
                    </TouchableOpacity>
                    <Text style={styles.text}>Father Photo</Text>
                </View>
                <View>
                    {motherImage ? (
                        <Image
                            source={{ uri: motherImage }}
                            style={styles.image}
                        />
                    ) : (
                        <Image
                            source={Student ? {
                                uri: `${BASE_URL}student_img/${Student.S_mother_img}`
                            } : imageConstants.motherImage}
                            style={styles.image}
                        />
                    )}
                    <TouchableOpacity style={styles.editBtn} onPress={openMotherPicker}>
                        <EditImageComponent />
                    </TouchableOpacity>
                    <Text style={styles.text}>Mother Photo</Text>
                </View>
            </View>
            <DropShadow style={globalstyles.dropShadow}>
                <View style={styles.subView}>
                    <View style={styles.rowView}>
                        <Text style={styles.sText}>Standard :</Text>
                        <Text style={styles.vText}>{Student && separatedValue}</Text>
                    </View>
                    <View style={styles.rowView}>
                        <Text style={styles.sText}>Class code :</Text>
                        <Text style={styles.vText}>{Student && separatedValue1}</Text>
                    </View>
                    <View style={styles.rowView}>
                        <Text style={styles.sText}>Phone number:</Text>
                        <Text style={styles.vText}>{Student && Student.S_mobile_no}</Text>
                    </View>
                    <View style={styles.rowView}>
                        <Text style={styles.sText}>Address:</Text>
                        <Text style={styles.vText}>{Student && Student.S_address}</Text>
                    </View>
                </View>
            </DropShadow>
        </View>
    )
}
export default ProfileScreen;
const styles = StyleSheet.create({
    view: {
        flexDirection: "row", alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: Width(30), marginTop: Height(30)
    },
    image: {
        height: Height(80), width: Width(80), borderRadius: Width(5), resizeMode: 'contain'
    },
    editBtn: {
        position: 'absolute', alignSelf: 'flex-end'
    },
    text: {
        fontSize: Height(12), fontFamily: fonts.ARCHIVO_MEDIUM, color: colors.blackColor, marginTop: Height(5), textAlign: 'center'
    },
    subView: {
        height: Height(220), width: Width(350), backgroundColor: colors.whiteColor, borderRadius: Width(5), alignSelf: 'center', marginTop: Height(40), paddingHorizontal: Width(25)
    },
    rowView: {
        flexDirection: 'row', alignItems: 'center', marginTop: Height(25)
    },
    sText: {
        width: Width(140), fontSize: Height(18), fontFamily: fonts.ARCHIVO_MEDIUM, color: colors.blackColor
    },
    vText: {
        fontSize: Height(15), fontFamily: fonts.ARCHIVO_REGULAR, color: colors.blackColor
    }
})


