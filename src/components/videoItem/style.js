import {StyleSheet} from 'react-native';
export const styles = StyleSheet.create({
  imageContainer: {height: 250, width: '100%'},
  image: {height: '100%', width: '100%'},
  detailsContainer: {
    borderWidth: 1,
    borderColor: 'green',
  },
  pressed: {
    opacity: 0.7,
  },
  detailsContainer: {
    borderWidth: 1,
    borderColor: 'blue',
    height: 80,
    padding: 10,
    flexDirection: 'row',
    gap: 20,
  },
  avatarContainer: {
    borderWidth: 1,
    borderColor: 'red',
    height: 40,
    width: 40,
    borderRadius: 20,
    overflow: 'hidden',
  },
  avatarImage: {height: '100%', width: '100%'},
  moreIcon: {},
});
