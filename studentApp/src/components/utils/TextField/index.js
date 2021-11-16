import React from 'react';
import {TextInput, View} from 'react-native';
import COLORS from '../../../styles/colors';
import style from './styles';

const TextField = props => (
  <View style={style.container}>
    <TextInput
      style={style.TextField}
      placeholderTextColor={COLORS.BLUE}
      placeholder={props.placeholder}
      onChangeText={props.onChangeText}
      value={props.value}
    />
  </View>
);

export default TextField;
