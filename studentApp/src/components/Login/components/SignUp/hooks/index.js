import React, {useEffect, useRef, useState} from 'react';
import {Animated} from 'react-native';
import SignUpView from '../components/SignUpView';

const SignUpHooks = () => {
  const animated = useRef(new Animated.Value(0)).current;
  const modalizeRef = useRef(null);
  const [handle, setHandle] = useState(false);

  const handleOpen = () => {
    if (modalizeRef.current) {
      modalizeRef.current.open();
    }
  };

  const handlePosition = position => {
    setHandle(position === 'top');
  };

  const renderContent = () => <SignUpView />;

  useEffect(() => {
    handleOpen();
  }, []);

  return {
    renderContent,
    handlePosition,
    handle,
    modalizeRef,
    animated,
  };
};

export default SignUpHooks;
