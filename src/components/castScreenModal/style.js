import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants/theme';
export const styles = StyleSheet.create({
  root: {
    alignSelf: 'center',
    // borderWidth: 1,
    // borderColor: 'red',
    height: 230,
    width: 300,
    padding: 20,
    backgroundColor: COLORS.inactive_grey,
    justifyContent: 'space-between',
    // gap: 20,
  },
  headerText: {fontSize: 20, color: COLORS?.def_gray, fontWeight: '400'},
  listItem: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
    height: 50,
  },
  listItemText: {fontSize: 14, color: COLORS?.def_gray, fontWeight: '400'},
});
