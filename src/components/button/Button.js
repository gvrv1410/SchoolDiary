import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import colors from '../../utils/colors'
import { Height, Width } from '../../utils/responsive'
import fonts from '../../utils/fonts'

const Button = ({ name, onPress, btnHeight, btnWidth, justifyContent, alignItems, alignSelf, marginTop }) => {
    return (
        <TouchableOpacity style={[styles.btn, { height: btnHeight, width: btnWidth, justifyContent: justifyContent, alignItems: alignItems, alignSelf: alignSelf, marginTop: marginTop }]} onPress={onPress}>
            <LinearGradient colors={[
                colors.gradientPrimaryColor,
                colors.gradientSecondaryColor,
            ]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={[styles.btn, { height: btnHeight, width: btnWidth, justifyContent: justifyContent, alignItems: alignItems, alignSelf: alignSelf, marginTop: marginTop }]}>
                <Text style={styles.btnText}>{name}</Text>
            </LinearGradient>
        </TouchableOpacity>
    )
}

export default Button

const styles = StyleSheet.create({
    btn: {
        borderRadius: Width(2),

    },
    btnText: {
        fontSize: Height(20),
        fontFamily: fonts.ARCHIVO_MEDIUM,
        color: colors.whiteColor,
    },
})