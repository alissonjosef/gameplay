import { theme } from './../../global/styles/theme';
import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
    container: {
        flex: 1,
    },
    label:{
        fontSize: 18,
        fontFamily: theme.fonts.title700,
        color: theme.colors.heading,
    },
    form: {
        paddingHorizontal: 24,
        marginTop: 32,
    },
    select:{
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        height: 68,
        borderColor: theme.colors.secondary50,
        borderWidth: 1,
        borderRadius: 8,
        paddingRight: 25,
        overflow: 'hidden',
    },
    image: {
        width: 64,
        height: 68,
        border: 1,
        backgroundColor: theme.colors.secondary50,
        borderRadius: 8,
    },
    selectBody: {
        flex: 1,
        alignItems: 'center',

    },
    field: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        marginTop: 30
    },
    column: {
        flexDirection:'row',
        alignItems:'center'
    },
    divider:{
        margin: 4,
        fontSize: 18,
        fontFamily: theme.fonts.text500,
        color: theme.colors.heading,
    },
    caracteresLimit: {
        fontFamily: theme.fonts.text400,
        fontSize: 13,
        color: theme.colors.highlight,
    },
    footer: {
        marginVertical: 20,
        marginBottom: 56,
    }
})