import React from 'react';
import { View , TextInput, TextInputProps } from 'react-native';
import { style } from './style';



export function TextArea({...rest}: TextInputProps) {
  return (
    <TextInput 
    style={style.container} 
    {...rest}
    /* placeholder='dd/mm' */
    />
  );
}