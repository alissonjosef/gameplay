import { theme } from '../../global/styles/theme';
import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 100,
    },
    overlay: {
        backgroundColor: theme.colors.overlay,
        flex: 1,
    },
    bar: {
        width: 39,
        height: 2,
        borderRadiu: 2,
        backgroundColor: theme.colors.secondary30,
        alignSelf: 'center',
        marginTop: 13,
        marginBottom: 103,
    }
})