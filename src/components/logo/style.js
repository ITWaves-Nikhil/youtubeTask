import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants/theme';

export const styles = StyleSheet.create({
  rootContainer: {
    width: 100,
    height: 45,
    overflow: 'hidden',
  },
  image: {width: '100%', height: '100%', objectFit: 'scale-down'},
});
