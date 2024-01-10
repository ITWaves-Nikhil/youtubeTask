import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants/theme';

export const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    // borderWidth: 1,
    // borderColor: 'red',
    marginVertical: 10,
    padding: 8,
    gap: 15,
  },
  listContainerStyle: {gap: 10},
  logoContainer: {flexDirection: 'row', gap: 8, alignItems: 'center'},
  logo: {height: 40, width: 40, objectFit: 'contain'},
  listHeading: {fontSize: 20, color: COLORS.white, fontWeight: '800'},
});
