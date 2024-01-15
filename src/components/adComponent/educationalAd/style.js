import {StyleSheet} from 'react-native';
import {COLORS} from '../../../constants/theme';
export const styles = StyleSheet.create({
  root: {height: 250, width: '100%'},
  image: {
    height: '100%',
    width: '100%',
    objectFit: 'cover',
  },
  banner: {
    position: 'absolute',
    width: '100%',
    padding: 6,
    height: '40',
    bottom: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: COLORS?.blue,
  },
  whiteText: {color: COLORS?.white, fontWeight: '700'},
});
