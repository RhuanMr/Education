import {StyleSheet} from 'react-native';
import COLORS from '../../../styles/colors';

const style = StyleSheet.create({
  actionButton: {
    width: 225,
    height: 45,
    backgroundColor: COLORS.RED,
    borderRadius: 45,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 18,
    color: COLORS.WHITE,
  },
});

export default style;
