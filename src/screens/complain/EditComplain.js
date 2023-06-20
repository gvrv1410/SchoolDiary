import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { globalstyles } from '../../utils/globalstyle'
import { Height, Width } from '../../utils/responsive'
import colors from '../../utils/colors'
import Ionicons from 'react-native-vector-icons/Ionicons'
import fonts from '../../utils/fonts'
import Textinput from '../../components/textInput/Textinput'
import Button from '../../components/button/Button'
import { editComplain } from '../../redux/reducer/EditComplainReducer'
import { useDispatch, useSelector } from 'react-redux'
import CustomAlert from '../../components/modal/CustomAlert'
const EditComplain = () => {
    const route = useRoute()
    const [showDonationSuccessPopup, setShowDonationSuccessPopup] = useState(
        false,
    );
    const [complainTitle, setComplainTitle] = useState('')
    const [complainDescription, setCompalinDescription] = useState('')
    const [complainTitleError, setCompalinTitleError] = useState('')
    const [complainDescriptionError, setCompalinDescriptionError] = useState('')
    const navigation = useNavigation()
    const dispatch = useDispatch()
    useEffect(() => {
        setComplainTitle(route.params?.data.Complain_title)
        setCompalinDescription(route.params?.data.Complain_descriptio)
    }, [])

    const editComplain1 = useSelector((state) => state.editComplain)
    const onPressEdit = () => {
        if (complainTitle.length === 0) {
            setCompalinTitleError("Title is required")
        } else if (complainTitle.length < 6) {
            setCompalinTitleError("Title should be atlest 6 char")
        }

        if (complainDescription.length === 0) {
            setCompalinDescriptionError("Description is required")
        } else if (complainDescription.length < 10) {
            setCompalinDescriptionError("Decription should be atlest 10 char")
        }
        const editComplainData = {
            id: route.params?.data._id,
            Complain_title: complainTitle,
            Complain_descriptio: complainDescription
        }
        dispatch(editComplain(editComplainData));
        if (editComplain1.data && editComplain1.data.success === true) {
            setShowDonationSuccessPopup(true)
        }
    }


    return (
        <View style={globalstyles.container}>
            <View style={styles.headerView}>
                <Ionicons name='ios-chevron-back-outline' size={Height(30)} color={colors.textColor} onPress={() => navigation.goBack()} />
                <Text style={styles.headerText}>Edit Complain</Text>
            </View>
            <Text style={{ fontSize: Height(15), fontFamily: fonts.ARCHIVO_MEDIUM, color: colors.blackColor, marginTop: Height(30), marginHorizontal: Width(20) }}>Complain Title</Text>
            <Textinput
                placeholder='Complain Title'
                height={Height(50)}
                value={complainTitle}
                onChangeText={(val) => setComplainTitle(val)}
            />
            {complainTitleError.length > 0 && (
                <Text style={styles.errorText}>{complainTitleError}</Text>
            )}
            <Text style={{ fontSize: Height(15), fontFamily: fonts.ARCHIVO_MEDIUM, color: colors.blackColor, marginTop: Height(30), marginHorizontal: Width(20) }}>Complain Description</Text>
            <Textinput
                placeholder='Complain Description'
                height={Height(100)}
                multiline={true}
                value={complainDescription}
                onChangeText={(val) => setCompalinDescription(val)}
            />
            {complainDescriptionError.length > 0 && (
                <Text style={styles.errorText}>{complainDescriptionError}</Text>
            )}
            <View style={styles.btnView}>
                <TouchableOpacity style={styles.btn}>
                    <Text style={styles.btnText}>CANCEL</Text>
                </TouchableOpacity>
                <Button
                    btnHeight={Height(50)}
                    btnWidth={Width(150)}
                    name={'SEND'}
                    justifyContent='center'
                    alignItems='center'
                    onPress={onPressEdit}
                />
            </View>
            <CustomAlert
                displayMode={'success'}
                displayMsg={'Complain Edit Successfully'}
                visibility={showDonationSuccessPopup}
                dismissAlert={setShowDonationSuccessPopup}
            />
        </View>
    )
}

export default EditComplain

const styles = StyleSheet.create({
    headerView: {
        flexDirection: 'row', alignItems: 'center', marginTop: Height(50), marginLeft: Width(20)
    },
    headerText: {
        fontSize: Height(25), fontFamily: fonts.ARCHIVO_SEMIBOLD, marginLeft: Width(20), color: colors.textColor
    },
    rowView: {
        flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: Width(350)
    },
    btnView: {
        flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginHorizontal: Width(20), marginTop: Height(250)
    },
    btn: {
        height: Height(50), width: Width(150), backgroundColor: colors.whiteColor, justifyContent: 'center', alignItems: 'center'
    },
    btnText: {
        fontSize: Height(20),
        fontFamily: fonts.ARCHIVO_MEDIUM,
        color: colors.blackColor,
    }, errorText: {
        color: 'red',
        marginLeft: Width(20),
        fontSize: Height(11),
        fontFamily: fonts.ARCHIVO_MEDIUM,
        marginTop: Height(5),
        letterSpacing: 0.8
    },
})