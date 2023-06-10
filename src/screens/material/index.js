import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect } from 'react'
import Header from '../../components/header/Header'
import HomeWorkHeaderComponent from '../../../assets/svgs/HomeWorkHeader'
import { useNavigation } from '@react-navigation/native'
import { Height, Width } from '../../utils/responsive'
import MaterialsComponent from '../../../assets/svgs/Materials'
import { subject } from '../../helper/dummyData'
import colors from '../../utils/colors'
import fonts from '../../utils/fonts'
import DropShadow from 'react-native-drop-shadow'
import { content } from '../../utils/content'
import { globalstyles } from '../../utils/globalstyle'
import { useDispatch, useSelector } from 'react-redux'
import { fetchSubjectData } from '../../redux/reducer/subjectReducer'

const MaterialScreen = () => {
    const navigation = useNavigation()
    const showBack = true;
    const imageShow = false;
    const textShow = true;


    const dispatch = useDispatch();
    const subjectData = useSelector((state) => state.subject);

    useEffect(() => {
        dispatch(fetchSubjectData());
    }, [dispatch]);

    console.log({ sub: subjectData.data });


    return (
        <View style={globalstyles.container}>
            <Header
                showBack={showBack}
                imageShow={imageShow}
                textShow={textShow}
                firstText={content.materials}
                dynamicImage={<MaterialsComponent size={Height(120)} />}
                onPress={() => navigation.goBack()}
            />
            <FlatList
                data={subjectData.data}
                renderItem={({ item }) => {
                    return (
                        <DropShadow style={globalstyles.dropShadow}>
                            <TouchableOpacity style={styles.flatListView} onPress={() => navigation.navigate('MaterialDetail', { data: item })}>
                                <Text style={styles.text}>{item.Subject_Name}</Text>
                            </TouchableOpacity>
                        </DropShadow>
                    )
                }}
            />
        </View>
    )
}

export default MaterialScreen

const styles = StyleSheet.create({
    flatListView: {
        height: Height(50),
        width: Width(350),
        backgroundColor: colors.whiteColor,
        alignSelf: 'center',
        marginTop: Height(30),
        justifyContent: 'center',
        paddingHorizontal: Width(20)
    }, text: {
        fontSize: Height(15),
        fontFamily: fonts.ARCHIVO_MEDIUM,
        color: colors.blackColor
    }
})