import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants/theme';
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
    maxHeight: 80,
    padding: 10,
    flexDirection: 'row',
    gap: 15,
  },
  avatarContainer: {
    height: 40,
    width: 40,
    borderRadius: 20,
    overflow: 'hidden',
  },
  avatarImage: {height: '100%', width: '100%'},
  duration: {color: COLORS.white, fontWeight: '500', fontSize: 13},
  moreIcon: {
    width: '8%',
  },
  descContainer: {
    flex: 1,
    height: '100%',
    justifyContent: 'space-between',
  },
  titleTextContainer: {
    width: '100%',
  },
  titleText: {color: COLORS.white, fontSize: 16, fontWeight: '500'},
  videoDetailContainer: {width: '100%'},
  videoDetailText: {
    color: COLORS.active_white,
    fontSize: 13,
    fontWeight: '400',
  },
});
