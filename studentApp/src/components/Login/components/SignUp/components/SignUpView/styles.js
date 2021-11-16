import {StyleSheet} from 'react-native';
import COLORS from '../../../../../../styles/colors';

const style = StyleSheet.create({
  content__cover: {
    zIndex: 100,

    marginTop: -100, // not the best // not the best
    alignSelf: 'center',

    width: 200,
    height: 200,

    shadowColor: '#000',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.35,
    shadowRadius: 18,
  },

  content__title: {
    color: COLORS.WHITE,
    marginTop: '75%',
    alignSelf: 'center',
    fontSize: 22,
  },
});

export default style;
