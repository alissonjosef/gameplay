import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { View, Text } from "react-native";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";
import { SvgProps } from "react-native-svg";
import { theme } from "../../global/styles/theme";
import { style } from "./styles";

type Props = RectButtonProps & {
    title: string;
    icon: React.FC<SvgProps>
    checked?: boolean
}
export function Category({
    title,
    icon: Icon,
    checked = false,
    ...rest
}: Props) {

    const { secondary50, secondary70 } = theme.colors
    
    return (
        <RectButton {...rest}>
            <LinearGradient
                style={style.container}
                colors={[secondary50, secondary70]}
            >
                <View style={[style.container, {opacity: checked ? 1 : 0.4}]}>
                    <View style={
                        checked ? style.checked : style.check
                        }/>
                        <Icon 
                        width={48} 
                        height={48}
                        />

                    <Text style={style.title}>
                        {title}
                    </Text>
                </View>
            </LinearGradient>
        </RectButton>
    )
}