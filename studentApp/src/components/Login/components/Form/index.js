import React from 'react';
import {View} from 'react-native';
import ActionButton from '../../../utils/ActionButton';
import TextField from '../../../utils/TextField';
import FormsHooks from './Hooks';

const Form = () => {
  const {email, setEmail, password, setPassword, handleLogin} = FormsHooks();
  return (
    <View>
      <View>
        <TextField
          value={email}
          placeholder="Email"
          onChangeText={element => setEmail(element)}
        />
        <TextField
          value={password}
          placeholder="Password"
          onChangeText={element => setPassword(element)}
        />
      </View>
      <ActionButton onPress={handleLogin} Text="SignIn" />
    </View>
  );
};

export default Form;
