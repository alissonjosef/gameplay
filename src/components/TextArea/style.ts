import { theme } from '../../global/styles/theme';
import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
    container: {
        width: '100%',
        height: 95,
        backgroundColor: theme.colors.secondary40,
        color: theme.colors.heading,
        borderRadius: 8,
        fontFamily: theme.fonts.text400,
        fontSize: 13,
        marginRight: 4,
        textAlign: 'center'
    }
})