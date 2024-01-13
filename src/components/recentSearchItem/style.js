import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants/theme';
export const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    height: 45,
    gap: 10,
    paddingHorizontal: 8,
    marginVertical: 4,
  },
  innerLeft: {
    height: '100%',
    width: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerMiddle: {
    padding: 6,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 1,
  },
  innerRight: {
    height: '100%',
    width: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {height: '100%', width: 50},
  titleText: {color: COLORS.white, fontWeight: '600', fontSize: 16},
});
