import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants/theme';
export const styles = StyleSheet.create({
  root: {
    backgroundColor: 'blue',
    flexDirection: 'row',
    height: 40,
  },
  innerLeft: {
    borderWidth: 1,
    borderColor: 'white',
    height: '100%',
    width: 40,
    justifyContent: 'center',
  },
  innerMiddle: {
    padding: 6,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'white',
    flex: 1,
  },
  innerRight: {
    borderWidth: 1,
    borderColor: 'white',
    height: '100%',
    width: 40,
    justifyContent: 'center',
  },
  image: {height: '100%', width: 50},
});
