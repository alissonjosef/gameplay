import React from "react";

import {
    Text,
    Image,
    View,
    TouchableOpacity,
    TouchableOpacityProps,
} from 'react-native'

import DiscordImg from '../../assets/discord.png'
import { style } from "./styles";

type Props = TouchableOpacityProps & {
    title: string
}

export function ButtonIcon({ title, ...rest }: Props) {
    return (
        <TouchableOpacity
            {...rest}
            style={style.container}>
            <View style={style.iconWrapper}>
                <Image source={DiscordImg} style={style.icon} />
            </View>

            <Text style={style.title}>{title}</Text>
        </TouchableOpacity>
    )
}