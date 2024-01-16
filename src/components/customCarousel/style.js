import {StyleSheet, Dimensions} from 'react-native';
import {COLORS} from '../../constants/theme';
export const styles = StyleSheet.create({
  flatListContainer: {paddingHorizontal: 10},
  carouselItem: {
    width: Dimensions.get('window').width - 62,
    marginHorizontal: 8,
    borderRadius: 10,
    overflow: 'hidden',
  },
  carouselImage: {
    height: 400,
    width: '100%',
    borderRadius: 10,
    objectFit: 'cover',
  },
  slideImageContainer: {
    borderRadius: 15,
    overflow: 'hidden',
    marginHorizontal: 10,
  },
  countBadge: {
    position: 'absolute',
    right: 10,
    top: 10,
    backgroundColor: COLORS?.black,
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 15,
  },
  whiteText: {color: COLORS.white},
});
