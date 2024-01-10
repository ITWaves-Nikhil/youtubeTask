import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants/theme';
export const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    // marginVertical: 10,
    borderRadius: 10,
    overflow: 'hidden',
  },
  thumbnail: {height: 250, width: '100%'},
  titleContainer: {
    position: 'absolute',
    padding: 6,
    width: '100%',
    bottom: 0,
  },
  titleText: {
    shadowColor: COLORS.black,
    shadowOpacity: 0.6,
    shadowOffset: {height: 0, width: 0},
    fontSize: 14,
    fontWeight: '600',
    color: COLORS.white,
  },
});
