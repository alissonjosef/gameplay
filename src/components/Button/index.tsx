import React from "react";
import { RectButton, RectButtonProps } from 'react-native-gesture-handler'
import {
    Text,

} from 'react-native'

import { style } from "./styles";

type Props = RectButtonProps & {
    title: string
}

export function Button({ title, ...rest }: Props) {
    return (
        <RectButton
            {...rest}
            style={style.container}>

            <Text style={style.title}>{title}</Text>
        </RectButton>
    )
}