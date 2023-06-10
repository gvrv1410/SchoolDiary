import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import colors from '../../utils/colors'
import Header from '../../components/header/Header'
import MaterialsComponent from '../../../assets/svgs/Materials'
import { Height } from '../../utils/responsive'
import { useNavigation, useRoute } from '@react-navigation/native'
import { globalstyles } from '../../utils/globalstyle'

const MaterialsDetails = () => {
    const navigation = useNavigation()
    const showBack = true;
    const imageShow = false;
    const textShow = true;
    const route = useRoute()
    console.log({ route });
    return (
        <View style={globalstyles.container}>
            <Header
                showBack={showBack}
                imageShow={imageShow}
                textShow={textShow}
                firstText={route.params?.data.name}
                dynamicImage={<MaterialsComponent size={Height(120)} />}
                onPress={() => navigation.goBack()}
            />
        </View>
    )
}

export default MaterialsDetails

const styles = StyleSheet.create({})