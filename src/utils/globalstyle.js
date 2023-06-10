import { Platform, StyleSheet } from 'react-native'
import colors from "./colors";
import { Height, Width } from "./responsive";

export const globalstyles = StyleSheet.create({
    container: {
        flex: 1, backgroundColor: colors.whiteColor
    },
    dropShadow: {
        shadowColor: colors.placeholderColor,
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation: 5,
    }
})