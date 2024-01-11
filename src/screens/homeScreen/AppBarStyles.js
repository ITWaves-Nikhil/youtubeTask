import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants/theme';
export const styles = StyleSheet.create({
  defaultAppBar: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    backgroundColor: COLORS.primarbgdark,
    width: '100%',
    borderWidth: 1,
    borderColor: 'white',
  },

  topBar: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    height: '50%',
  },

  topBarIconsContainer: {
    flexDirection: 'row',
    gap: 10,
    height: '100%',
    alignItems: 'center',
  },
  bottomBar: {
    height: '40%',
  },
});
