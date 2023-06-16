import { Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

import { Height, Width } from '../../utils/responsive'
import imageConstants from '../../helper/imageConstants'
import NotificationComponent from '../../../assets/svgs/Notification'
import BackComponent from '../../../assets/svgs/Back'
import colors from '../../utils/colors'
import fonts from '../../utils/fonts'
import HistoryComponent from '../../../assets/svgs/History'
const Header = ({ showBack, imageShow, userImage, dynamicImage, textShow, firstText, lastText, onPress, showHistory, onPressNoti, onPressHis, onPressPro }) => {
    return (
        <View>
            <View>
                <Image source={imageConstants.headerImage} style={styles.backgroundImage} />
                <View style={styles.view}>
                    <View style={styles.rowView}>

                        {showBack && (
                            <TouchableOpacity onPress={onPress}>
                                <BackComponent />
                            </TouchableOpacity>
                        )}
                        {!showBack && (
                            <TouchableOpacity style={styles.notiBtn} onPress={onPressNoti}>
                                <NotificationComponent size={Height(20)} />
                            </TouchableOpacity>
                        )}

                        {showHistory && (
                            <TouchableOpacity onPress={onPressHis} >
                                <HistoryComponent size={Height(20)} />
                            </TouchableOpacity>
                        )}
                    </View>

                    <View style={styles.rowView}>
                        <View>
                            {textShow && (
                                <View>
                                    <Text style={styles.firstText}>{firstText}</Text>
                                    <Text style={styles.secondText}>{lastText}</Text>
                                </View>
                            )}

                            {!textShow && (
                                <View>
                                    <Text style={styles.firstText}>{firstText}</Text>
                                </View>
                            )}
                        </View>
                        <View>
                            {imageShow && (
                                <TouchableOpacity style={styles.userImgView} onPress={onPressPro}>
                                    <Image source={userImage} style={styles.userImage} />
                                </TouchableOpacity>
                            )}
                            {!imageShow && (
                                <View>
                                    {dynamicImage}
                                </View>
                            )}
                        </View>

                    </View>

                </View>
            </View>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    backgroundImage: {
        height: Height(200), width: '100%', borderBottomLeftRadius: Width(15), borderBottomRightRadius: Width(15)
    },
    view: {
        position: 'absolute', marginTop: Platform.OS === 'android' ? Height(30) : Height(50), paddingHorizontal: Width(20)
    },
    notiBtn: {
        justifyContent: 'flex-end',
        marginLeft: Width(330)
    },
    userImgView: {
        height: Height(100), width: Height(100), backgroundColor: colors.gradientPrimaryColor, borderRadius: Height(100) / 2, marginTop: Height(5)
    },
    userImage: {
        height: Height(95), width: Height(95), borderRadius: Height(95) / 2
    },
    firstText: {
        fontSize: Height(20), fontFamily: fonts.ARCHIVO_SEMIBOLD, color: colors.whiteColor
    },
    secondText: {
        fontSize: Height(15), fontFamily: fonts.ARCHIVO_REGULAR, marginTop: Height(5), color: colors.whiteColor
    },
    rowView: {
        flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: Width(350)
    }
})