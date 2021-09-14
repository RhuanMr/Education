import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import SignIn from '../pages/LoginFlow/SignIn';

const AuthStack = createStackNavigator();

const AuthRoutes = () => (
  <AuthStack.Navigator>
    <AuthStack.Screen
      name="Login"
      component={SignIn}
      options={{headerShown: false}}
    />
  </AuthStack.Navigator>
);

export default AuthRoutes;
