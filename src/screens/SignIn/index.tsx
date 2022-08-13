import React, { useState } from "react";

import {
    View,
    Text,
    Image,
    StatusBar
} from 'react-native'
import IllustratonImg from '../../assets/illustration.png'
import { ButtonIcon } from "../../components/ButtonIcon";
import { styles } from "./styles";

export function SignIn() {

    return (
        <View style={styles.container}>
            <StatusBar
                barStyle='light-content'
                backgroundColor='transparent'
                translucent
            />
            <Image source={IllustratonImg} style={styles.image} resizeMode={'stretch'} />

            <View style={styles.content}>
                <Text style={styles.title}>
                    Conecte-se {'\n'}
                    e organize suas {'\n'}
                    jogatinas
                </Text>

                <Text style={styles.subtitle}>
                    Crie grupos para jogar seus games{'\n'}
                    favoritos com seus amigos
                </Text>
                <ButtonIcon activeOpacity={0.7} title={'Entrar com Discord'}/>
            </View>
        </View>
    )
}