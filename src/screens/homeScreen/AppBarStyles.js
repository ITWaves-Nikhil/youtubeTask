import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants/theme';
export const styles = StyleSheet.create({
  defaultAppBar: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    backgroundColor: COLORS.primarbgdark,
    width: '100%',
    // borderWidth: 1,
    // borderColor: 'white',
  },
  listFooterComponent: {
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 10,
  },
  listFooterItem: {
    fontSize: 15,
    color: COLORS.blue,
    padding: 4,
    fontWeight: '500',
    marginBottom: 5,
  },
  topBar: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    height: 60,
  },

  topBarIconsContainer: {
    flexDirection: 'row',
    gap: 10,
    height: '100%',
    alignItems: 'center',
  },
  bottomBar: {
    height: 40,
  },
});
