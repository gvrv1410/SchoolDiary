import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import colors from '../../utils/colors'
import Header from '../../components/header/Header'
import MaterialsComponent from '../../../assets/svgs/Materials'
import { Height } from '../../utils/responsive'
import { useNavigation, useRoute } from '@react-navigation/native'
import { globalstyles } from '../../utils/globalstyle'
import { useDispatch, useSelector } from 'react-redux'
import { fetchMaterialData } from '../../redux/reducer/materialReducer'

const MaterialsDetails = () => {
    const navigation = useNavigation()
    const showBack = true;
    const imageShow = false;
    const textShow = true;
    const route = useRoute()
    console.log({ route });
    const dispatch = useDispatch();
    const materialData = useSelector((state) => state.materialData);

    useEffect(() => {
        dispatch(fetchMaterialData());
    }, [dispatch]);

    console.log({ sub: materialData });
    return (
        <View style={globalstyles.container}>
            <Header
                showBack={showBack}
                imageShow={imageShow}
                textShow={textShow}
                firstText={route.params?.data.Subject_Name}
                dynamicImage={<MaterialsComponent size={Height(120)} />}
                onPress={() => navigation.goBack()}
            />
        </View>
    )
}

export default MaterialsDetails

const styles = StyleSheet.create({})