import {StyleSheet, Dimensions} from 'react-native';
import {COLORS} from '../../constants/theme';

const {height: screenHeight, width: screenWidth} = Dimensions.get('window');
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
    // borderWidth: 1,
    // borderColor: 'red',
    color: COLORS.white,
    // backgroundColor: COLORS.inactive_grey,
    // paddingVertical: 6,
    // paddingHorizontal: 12,
    // borderRadius: 20,
    fontSize: 16,
    // height: '90%',
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
