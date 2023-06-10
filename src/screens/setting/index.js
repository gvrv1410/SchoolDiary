import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Header from '../../components/header/Header'
import colors from '../../utils/colors'
import imageConstants from '../../helper/imageConstants'
import { useNavigation } from '@react-navigation/native'
import { settingData } from '../../helper/dummyData'
import DropShadow from 'react-native-drop-shadow'
import SettingViewComponent from '../../../assets/svgs/SettingView'
import { Height, Width } from '../../utils/responsive'
import fonts from '../../utils/fonts'
import ForwardComponent from '../../../assets/svgs/Forward'
import { globalstyles } from '../../utils/globalstyle'
import Button from '../../components/button/Button'
import { content } from '../../utils/content'

const MenuScreen = () => {
    const navigation = useNavigation()
    const showBack = false;
    const imageShow = true;
    const textShow = true;
    return (
        <View style={globalstyles.container}>
            <Header
                showBack={showBack}
                imageShow={imageShow}
                userImage={imageConstants.userImage}
                textShow={textShow}
                firstText={'Hello'}
                lastText={'Hi'}
                onPressPro={() => navigation.navigate('Profile')}
            />
            <View>
                <FlatList
                    data={settingData}
                    renderItem={({ item }) => {
                        return (
                            <DropShadow style={globalstyles.dropShadow}>
                                <View style={{ height: Height(50), width: Width(350), backgroundColor: colors.whiteColor, alignSelf: 'center', marginTop: Height(20), flexDirection: 'row', alignItems: 'center', borderRadius: Width(5) }}>
                                    <View style={{ justifyContent: 'center' }}>
                                        <SettingViewComponent size={Width(50)} />
                                        <View style={{ position: 'absolute', paddingLeft: Width(10) }}>
                                            {item.image}
                                        </View>
                                    </View>
                                    <Text style={{ fontSize: Height(15), fontFamily: fonts.ARCHIVO_MEDIUM, color: colors.blackColor, width: Width(200), }}>{item.name}</Text>
                                    <TouchableOpacity style={{ marginLeft: Width(70) }}>
                                        <ForwardComponent size={Height(15)} />
                                    </TouchableOpacity>
                                </View>
                            </DropShadow>
                        )
                    }}
                />
            </View>

            <Button
                name={content.logout}
                btnHeight={Height(45)}
                btnWidth={Width(300)}
            />
        </View>
    )
}

export default MenuScreen

const styles = StyleSheet.create({

})