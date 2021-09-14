import {useState} from 'react';
import {Alert} from 'react-native';

const FormsHooks = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => Alert.alert('tudo okay');

  return {email, setEmail, password, setPassword, handleLogin};
};

export default FormsHooks;
