import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants/theme';
export const styles = StyleSheet.create({
  root: {
    alignSelf: 'center',
    borderWidth: 1,
    borderColor: 'red',
    height: 230,
    width: 300,
    padding: 20,
    backgroundColor: COLORS.inactive_grey,
    justifyContent: 'space-between',
    // gap: 20,
  },
  headerText: {
    fontSize: 16,
    fontWeight: '600',
    color: COLORS.def_gray,
    marginBottom: 10,
  },
  container: {
    borderWidth: 1,
    borderColor: 'blue',
    flex: 1,
    padding: 24,
    backgroundColor: 'grey',
  },
  contentContainer: {
    flex: 1,
    padding: 10,
    justifyContent: 'space-between',
    // alignItems: 'center',
  },
  listItemContainer: {
    height: 30,

    // borderWidth: 1,
    // borderColor: 'white',
    gap: 15,
    flexDirection: 'row',
    alignItems: 'center',
    // paddingVertical: 10,
  },
  iconContainer: {width: 25},
  listItemText: {fontSize: 15, color: COLORS.def_gray, fontWeight: '400'},
});
