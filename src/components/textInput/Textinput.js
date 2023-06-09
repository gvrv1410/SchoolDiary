import { StyleSheet, Text, View, TextInput } from 'react-native'
import React, { useState } from 'react'
import DropShadow from "react-native-drop-shadow";
import { Height } from '../../utils/responsive';
import colors from '../../utils/colors';
const Textinput = (props) => {
    const [text, setText] = useState('');
    const handleChangeText = (inputText) => {
        setText(inputText);
    };
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
                    style={styles.input}
                    onChangeText={handleChangeText}
                    value={text}
                    placeholder={props.placeholder}
                />
            </DropShadow>
        </View>
    )
}

export default Textinput

const styles = StyleSheet.create({
    input: {
        height: Height(50),
        backgroundColor: colors.whiteColor
    }
})