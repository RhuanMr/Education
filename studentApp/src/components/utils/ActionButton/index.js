import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import style from './styles';

const ActionButton = props => (
  <TouchableOpacity style={style.actionButton} onPress={() => props.onPress}>
    <Text style={style.title}>{props.Text}</Text>
  </TouchableOpacity>
);

export default ActionButton;
