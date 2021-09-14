import React from 'react';
import {TextInput} from 'react-native';
import style from './styles';

const TextField = props => (
  <TextInput
    style={style.TextField}
    placeholder={props.placeholder}
    onChangeText={props.onChangeText}
    value={props.value}
  />
);

export default TextField;
