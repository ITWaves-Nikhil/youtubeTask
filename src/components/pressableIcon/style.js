import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants/theme';
export const styles = StyleSheet.create({
  root: {
    borderRadius: 40,
    padding: 6,
    overflow: 'hidden',
  },
  pressed: {
    // opacity: 0.7,
    backgroundColor: COLORS.inactive_grey,
  },
});
