import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { globalstyles } from '../../utils/globalstyle'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { Height, Width } from '../../utils/responsive'
import fonts from '../../utils/fonts'
import colors from '../../utils/colors'
import { BASE_URL } from '../../helper/apiConstants'
const EventImageList = () => {
    const navigation = useNavigation()
    const route = useRoute()
    console.log({ route });
    return (
        <View style={globalstyles.container}>
            <View style={styles.headerView}>
                <Ionicons name='ios-chevron-back-outline' size={Height(30)} color={colors.textColor} onPress={() => navigation.goBack()} />
                <Text style={styles.headerText}>Event Images</Text>
            </View>
            <Text style={styles.text}>{route.params?.data.Event_title}</Text>
            <FlatList
                data={route.params?.data.Event_Photos}
                numColumns={3}
                columnWrapperStyle={styles.flatlistColumn}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('EventImageView', { data: item })}>
                            <Image
                                source={{ uri: `${BASE_URL}event_photos/${item}` }}
                                style={styles.img}
                            />
                        </TouchableOpacity>
                    )
                }}
            />
        </View>
    )
}

export default EventImageList

const styles = StyleSheet.create({
    headerView: {
        flexDirection: 'row', alignItems: 'center', marginTop: Height(50), marginLeft: Width(20)
    },
    headerText: {
        fontSize: Height(25), fontFamily: fonts.ARCHIVO_SEMIBOLD, marginLeft: Width(20), color: colors.textColor
    },
    text: {
        fontSize: Height(18), fontFamily: fonts.ARCHIVO_MEDIUM, paddingHorizontal: Width(20), marginTop: Height(20)
    },
    flatlistColumn: {
        justifyContent: 'space-between', marginHorizontal: Width(20)
    },
    btn: {
        marginTop: Height(20)
    },
    img: {
        height: Height(110), width: Width(110), borderRadius: Width(2)
    }
})