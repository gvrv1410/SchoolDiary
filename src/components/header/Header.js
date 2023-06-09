import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

import { Height, Width } from '../../utils/responsive'
import imageConstants from '../../helper/imageConstants'
import NotificationComponent from '../../../assets/svgs/Notification'
import BackComponent from '../../../assets/svgs/Back'
import colors from '../../utils/colors'
const Header = ({ showBack, imageShow, userImage }) => {
    return (
        <View>
            <View>
                <Image source={imageConstants.headerImage} style={styles.backgroundImage} />
                <View style={{ position: 'absolute', marginTop: Height(50), paddingHorizontal: Width(20) }}>
                    {showBack && (
                        <TouchableOpacity>
                            <BackComponent />
                        </TouchableOpacity>
                    )}
                    {!showBack && (
                        <TouchableOpacity style={{
                            justifyContent: 'flex-end',
                            marginLeft: Width(330)
                        }}>
                            <NotificationComponent size={Height(20)} />
                        </TouchableOpacity>
                    )}

                    {imageShow && (
                        <View style={{ height: Height(100), width: Height(100), backgroundColor: colors.gradientPrimaryColor, borderRadius: Height(100) / 2, marginLeft: Width(250), marginTop: Height(5) }}>
                            <Image source={userImage} style={{ height: Height(95), width: Height(95), borderRadius: Height(95) / 2 }} />
                        </View>
                    )}
                    {!imageShow && (
                        <View>
                        </View>
                    )}

                </View>
            </View>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    backgroundImage: {
        height: Height(200), width: Width(390), resizeMode: 'contain'
    }
})