import { StyleSheet, Text, View, TextInput } from 'react-native'
import React, { useState } from 'react'
import DropShadow from "react-native-drop-shadow";
import { Height, Width } from '../../utils/responsive';
import colors from '../../utils/colors';
const Textinput = ({ onChangeText, value, placeholder, height, multiline }) => {
    return (
        <View>
            <DropShadow
                style={{
                    shadowColor: colors.placeholderColor,
                    shadowOffset: {
                        width: 0,
                        height: 0,
                    },
                    shadowOpacity: 0.2,
                    shadowRadius: 5,
                    elevation: 5,
                }}>
                <TextInput
                    style={[styles.input, { height: height }]}
                    onChangeText={onChangeText}
                    value={value}
                    placeholder={placeholder}
                    multiline={multiline}
                />
            </DropShadow>
        </View>
    )
}

export default Textinput

const styles = StyleSheet.create({
    input: {
        backgroundColor: colors.whiteColor,
        width: Width(350),
        alignSelf: 'center',
        marginTop: Height(10),
        paddingHorizontal: Width(20)
    }
})