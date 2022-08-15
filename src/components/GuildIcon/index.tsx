import React from "react";
import { Image } from "react-native";
import { style } from "./styles";

export function GuildIcon(){
    const uri = 'https://tm.ibxk.com.br/2022/05/26/26232122827007.jpg'
    return(
        <Image 
        source={{uri}}
        style={style.image}
        resizeMode="cover"
        />
    )
}