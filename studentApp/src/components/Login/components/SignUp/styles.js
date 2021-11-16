import {StyleSheet} from 'react-native';
import COLORS from '../../../../styles/colors';

const style = handle =>
  StyleSheet.create({
    handleButton: {
      top: 20,
      width: 40,
      height: handle ? 6 : 0,
      backgroundColor: '#bcc0c1',
    },
    container: {
      backgroundColor: COLORS.SECONDARY,
      borderTopLeftRadius: 25,
      borderTopRightRadius: 25,
    },
  });

export default style;
