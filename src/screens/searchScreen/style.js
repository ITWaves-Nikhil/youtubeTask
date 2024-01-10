import {StyleSheet, Dimensions} from 'react-native';
import {COLORS} from '../../constants/theme';

const {height: screenHeight, width: screenWidth} = Dimensions.get('window');
export const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: COLORS.primarbgdark,
  },
  innerContainer: {flex: 1},
  searchHeader: {
    height: 40,
    borderColor: 'red',
    borderWidth: 1,
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
  },
  searchInput: {
    flex: 1,

    backgroundColor: COLORS.inactive_grey,
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 20,
    fontSize: 16,
    height: '90%',
  },
  searchHeaderLeft: {padding: 6},
  searchHeaderRight: {padding: 6, flexDirection: 'row', gap: 10},
});
