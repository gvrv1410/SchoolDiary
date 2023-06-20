import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import Header from '../../components/header/Header'
import MaterialsComponent from '../../../assets/svgs/Materials'
import { Height, Width } from '../../utils/responsive'
import { useNavigation, useRoute } from '@react-navigation/native'
import { globalstyles } from '../../utils/globalstyle'
import { useDispatch, useSelector } from 'react-redux'
import { fetchMaterialData } from '../../redux/reducer/materialReducer'
import WebView from 'react-native-webview'
import { BASE_URL } from '../../helper/apiConstants'

const MaterialsDetails = () => {
    const navigation = useNavigation()
    const showBack = true;
    const imageShow = false;
    const textShow = true;
    const route = useRoute()
    console.log({ route });
    const dispatch = useDispatch();

    const mData = useSelector((state) => state.materialData)
    console.log({ mData });

    const materialDataFetch = () => {
        const materialObj = {
            Subject_code: route.params?.data.Subject_Code
        }
        dispatch(fetchMaterialData(materialObj));
    }
    useEffect(() => {
        materialDataFetch()
    }, [dispatch]);

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
            <FlatList
                data={mData.data}
                renderItem={({ item }) => {
                    console.log(`${BASE_URL}materials/${item.Material_files}`);
                    return (
                        <View>
                            <Text>{item.Material_title}</Text>
                            <View>
                                <WebView
                                    source={{ uri: `${BASE_URL}materials/${item.Material_files}` }}
                                    style={{ flex: 1, width: Width(20), height: Height(20) }}
                                />
                            </View>
                        </View>
                    )
                }}
            />
        </View>
    )
}

export default MaterialsDetails

const styles = StyleSheet.create({})