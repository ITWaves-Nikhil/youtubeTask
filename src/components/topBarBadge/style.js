import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants/theme';
export const styles = StyleSheet.create({
  rootContainer: {
    maxHeight: '80%',
  },
  innerContainer: {
    height: '100%',
    width: 'auto%',
    justifyContent: 'center',
    alignItems: 'center',
    width: 'auto',
    marginHorizontal: 6,
    backgroundColor: COLORS.inactive_grey,
    borderRadius: 8,
  },
  whiteText: {
    color: COLORS.white,
    fontWeight: '400',
  },
  blackText: {
    color: COLORS.black,
    fontWeight: '400',
  },
});
