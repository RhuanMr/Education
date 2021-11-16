import React from 'react';
import {Image, View} from 'react-native';
import Form from './components/Form';
import SignUp from './components/SignUp';
import style from './styles';

const Login = () => (
  <View style={style.container}>
    <Image style={style.logo} source={require('../../assets/Logo.png')} />
    <Form />
    <SignUp />
  </View>
);

export default Login;
