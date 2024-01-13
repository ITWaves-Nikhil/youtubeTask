import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants/theme';
export const styles = StyleSheet.create({
  root: {
    alignSelf: 'center',
    height: 230,
    width: 300,
    padding: 20,
    backgroundColor: COLORS.inactive_grey,
    justifyContent: 'space-between',
  },
  headerText: {
    fontSize: 16,
    fontWeight: '600',
    color: COLORS.def_gray,
    // marginBottom: 10,
  },
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: 'grey',
    position: 'absolute',
  },
  contentContainer: {
    flex: 1,
    padding: 10,
    justifyContent: 'space-between',
  },
  listItemContainer: {
    height: 30,
    gap: 15,
    paddingHorizontal: 4,
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  iconContainer: {width: 25},
  listItemText: {fontSize: 15, color: COLORS.def_gray, fontWeight: '400'},
});
