import React from 'react';
import { View , TextInput, TextInputProps } from 'react-native';
import { style } from './style';



export function SmallInput({...rest}: TextInputProps) {
  return (
    <TextInput 
    style={style.container} 
    keyboardType="numeric"
    {...rest}
    /* placeholder='dd/mm' */
    />
  );
}