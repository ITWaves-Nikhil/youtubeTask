import {StyleSheet, Dimensions} from 'react-native';
import {COLORS} from '../../constants/theme';

export const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: COLORS.primarbgdark,
  },
  innerContainer: {flex: 1, backgroundColor: COLORS.primarbgdark},
  searchHeader: {
    height: 40,
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
  },
  searchInputContainer: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: COLORS.inactive_grey,
    paddingHorizontal: 12,
    borderRadius: 20,
    height: '100%',
  },
  searchInput: {
    flex: 1,
    color: COLORS.white,
    fontSize: 16,
  },
  searchHeaderLeft: {padding: 6},
  searchHeaderRight: {padding: 6, flexDirection: 'row', gap: 10},
  micContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 32,
    height: 32,
    alignSelf: 'center',
    borderRadius: 20,
    padding: 4,
    backgroundColor: COLORS.inactive_grey,
  },
});
