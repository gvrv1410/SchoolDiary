import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import colors from '../../utils/colors'
import { useNavigation } from '@react-navigation/native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { Height, Width } from '../../utils/responsive'
import fonts from '../../utils/fonts'
import { useDispatch, useSelector } from 'react-redux'
import { fetchComplainData } from '../../redux/reducer/fetchComplainReducer'
import DropShadow from 'react-native-drop-shadow'
import { globalstyles } from '../../utils/globalstyle'
import EditComponent from '../../../assets/svgs/Edit'
import DeleteComponent from '../../../assets/svgs/Delete'
import { deleteComplain } from '../../redux/reducer/deleteComplainReducer'
import CustomAlert from '../../components/modal/CustomAlert'
const ComplainHistory = () => {
    const navigation = useNavigation()
    const dispatch = useDispatch();
    const [showDonationSuccessPopup, setShowDonationSuccessPopup] = useState(
        false,
    );
    const fetchCompain = useSelector((state) => state.fetchComplain);
    useEffect(() => {
        dispatch(fetchComplainData());
    }, [dispatch]);

    const deleteComplainData = useSelector(state => state.deleteComplain);
    const onPressDeleteComplain = (item) => {
        const deleteComplainWithId = {
            id: item._id
        };
        dispatch(deleteComplain(deleteComplainWithId));
        if (deleteComplainData.data.success === true) {
            setShowDonationSuccessPopup(true)
        }
    }

    return (
        <View style={{ flex: 1, backgroundColor: colors.whiteColor }}>
            <View style={styles.headerView}>
                <Ionicons name='ios-chevron-back-outline' size={Height(30)} color={colors.textColor} onPress={() => navigation.goBack()} />
                <Text style={styles.headerText}>Complain History</Text>
            </View>
            {
                fetchCompain.data && fetchCompain.data.length === 0 ?
                    <View>
                        <Text>No Data Found</Text>
                    </View> :
                    <FlatList
                        data={fetchCompain.data}
                        renderItem={({ item }) => {
                            return (
                                <View>
                                    <View style={styles.rowView}>
                                        <TouchableOpacity onPress={() => onPressDeleteComplain(item)}>
                                            <DeleteComponent />
                                        </TouchableOpacity>
                                        <TouchableOpacity style={styles.editBtn} onPress={() => navigation.navigate('EditComplain', { data: item })}>
                                            <EditComponent />
                                        </TouchableOpacity>
                                    </View>
                                    <DropShadow style={globalstyles.dropShadow}>
                                        <View style={styles.view}>
                                            <Text style={styles.text}>{item.Complain_title}</Text>
                                            <Text style={[styles.text, styles.subText]}>{item.Complain_descriptio}</Text>
                                        </View>
                                    </DropShadow>
                                </View>
                            )
                        }}
                    />}
            <CustomAlert
                displayMode={'success'}
                displayMsg={'Complain Delete Successfully'}
                visibility={showDonationSuccessPopup}
                dismissAlert={setShowDonationSuccessPopup}
            />
        </View>
    )
}

export default ComplainHistory

const styles = StyleSheet.create({
    headerView: {
        flexDirection: 'row', alignItems: 'center', marginTop: Height(50), marginLeft: Width(20)
    },
    headerText: {
        fontSize: Height(25), fontFamily: fonts.ARCHIVO_SEMIBOLD, marginLeft: Width(20), color: colors.textColor
    },
    rowView: {
        flexDirection: 'row', justifyContent: 'flex-end', marginHorizontal: Width(20), marginTop: Height(30), alignItems: 'center'
    },
    view: {
        height: Height(120), width: Width(350), backgroundColor: colors.whiteColor, alignSelf: 'center', borderRadius: Width(5), marginTop: Height(10), padding: Width(10)
    },
    editBtn: {
        marginLeft: Width(15)
    },
    text: {
        fontSize: Height(15),
        fontFamily: fonts.ARCHIVO_MEDIUM,
        color: colors.blackColor,
        letterSpacing: 0.5
    },
    subText: {
        fontSize: Height(13), fontFamily: fonts.ARCHIVO_REGULAR, marginTop: Height(5)
    }

})