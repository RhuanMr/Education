import React from 'react';
import {Modalize} from 'react-native-modalize';
import SignUpHooks from './hooks';
import style from './styles';

const HEADER_HEIGHT = 100;
const SignUp = () => {
  const {renderContent, handlePosition, handle, modalizeRef, animated} =
    SignUpHooks();
  return (
    <Modalize
      ref={modalizeRef}
      panGestureAnimatedValue={animated}
      snapPoint={HEADER_HEIGHT}
      withHandle={handle}
      modalStyle={style(handle).container}
      handlePosition="inside"
      handleStyle={style(handle).handleButton}
      alwaysOpen={120}
      onPositionChange={handlePosition}>
      {renderContent()}
    </Modalize>
  );
};

export default SignUp;
