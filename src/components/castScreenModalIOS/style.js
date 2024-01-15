import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants/theme';
export const styles = StyleSheet.create({
  headerText: {
    fontSize: 16,
    fontWeight: '600',
    color: COLORS.def_gray,
  },
  container: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  contentContainer: {
    flex: 1,
    // paddingVertical: 20,
    padding: 10,
    gap: 20,
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
  itemsContainer: {
    flex: 1,
    justifyContent: 'space-between',
    paddingTop: 30,
    gap: 10,
  },
  iconContainer: {width: 25},
  listItemText: {fontSize: 15, color: COLORS.def_gray, fontWeight: '400'},
});
