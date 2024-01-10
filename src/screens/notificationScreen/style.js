import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants/theme';

export const styles = StyleSheet.create({
  root: {flex: 1, backgroundColor: COLORS.primarbgdark},
  mainContainer: {
    flex: 1,
    backgroundColor: COLORS.primarbgdark,
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerContainer: {
    width: '100%',
    height: '50%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    gap: 10,
  },
  biggerText: {
    textAlign: 'center',
    color: COLORS.white,
    fontSize: 24,
  },
  smallerText: {
    textAlign: 'center',
    color: COLORS.white,
    fontSize: 16,
  },
  leftHeaderContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
    height: 50,
    width: 'auto',
    paddingVertical: 10,
  },
  leftHeaderTitleText: {
    color: COLORS.white,
    fontSize: 20,
    fontWeight: '400',
  },
  rightHeaderContainer: {
    flexDirection: 'row',
    gap: 10,
    height: '100%',
    alignItems: 'center',
  },
});
