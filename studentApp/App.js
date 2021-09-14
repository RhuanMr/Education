import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Routes from './src/routes';
import COLORS from './src/styles/colors';

const App = () => (
  <NavigationContainer>
    <SafeAreaView style={{flex: 1}}>
      <StatusBar backgroundColor={COLORS.PRIMARY} barStyle="dark-content" />
      <Routes />
    </SafeAreaView>
  </NavigationContainer>
);

export default App;
