import React, {useRef} from 'react';
import {Animated, Text, View} from 'react-native';
import SignUpForm from '../Form';
import style from './styles';

const SignUpView = () => {
  const animated = useRef(new Animated.Value(0)).current;

  return (
    <>
      <Animated.View
        style={[
          style.content__cover,
          {
            shadowOpacity:
              animated &&
              animated.interpolate({
                inputRange: [0, 1],
                outputRange: [0.2, 0.35],
              }),
            transform: [
              {
                translateX:
                  animated &&
                  animated.interpolate({
                    inputRange: [0, 0.25, 1],
                    outputRange: [0, 100, 140],
                    extrapolate: 'clamp',
                  }),
              },
              {
                translateY:
                  animated &&
                  animated.interpolate({
                    inputRange: [0, 0.25, 1],
                    outputRange: [0, 100, 165],
                    extrapolate: 'clamp',
                  }),
              },
            ],
          },
        ]}>
          <Text style={style.content__title}>Sign-Up</Text>
        </Animated.View>
       <SignUpForm />
    </>
  );
};

export default SignUpView;
