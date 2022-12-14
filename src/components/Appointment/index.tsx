import React from "react";
import { View, Text } from "react-native";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";
import { categories } from "../../utils/categories";
import { GuildIcon } from "../GuildIcon";
import PlayerSvg from '../../assets/player.svg'
import CalendarSvg from '../../assets/calendar.svg'
import { style } from "./styles";
import { theme } from "../../global/styles/theme";

export type GuildProps = {
    id: string
    name: string
    icon: null
    owner: boolean
}

export type AppointmentProps = {
    id: string
    guild: GuildProps
    category: string
    date: string
    description: string
}

type Props = RectButtonProps & {
    data: AppointmentProps
}

export function Appointment({ data, ...rest }: Props) {

    const [category] = categories.filter(item => item.id === data.category)
    const { owner } = data.guild
    const { primary, on } = theme.colors
    return (
        <RectButton
            {...rest}
        >
            <View style={style.container}>
                <GuildIcon />
                <View style={style.content}>
                    <View style={style.header}>
                        <Text style={style.title}>
                            {data.guild.name}
                        </Text>

                        <Text style={style.category}>
                            {category.title}
                        </Text>
                    </View>

                    <View style={style.footer}>
                        <View style={style.dateInfo}>
                            <CalendarSvg />

                            <Text style={style.date}>
                                {data.date}
                            </Text>
                        </View>
                        <View style={style.playersInfo}>
                            <PlayerSvg fill={owner ? primary : on} />
                            <Text style={[
                                style.player, { color: owner ? primary : on }
                            ]}>
                                {owner ? "Anfitri??o" : "Visitante"}
                            </Text>
                        </View>
                    </View>
                </View>
            </View>
        </RectButton>
    )
}