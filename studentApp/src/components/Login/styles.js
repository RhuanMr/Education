import {StyleSheet} from 'react-native';
import COLORS from '../../styles/colors';

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.PRIMARY,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 55,
  },
});

export default style;
