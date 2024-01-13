import {StyleSheet, Dimensions} from 'react-native';
import {COLORS} from '../../constants/theme';
const {width} = Dimensions.get('screen');
export const styles = StyleSheet.create({
  imageContainer: {height: 250, width: '100%'},
  image: {
    height: '100%',
    width: '100%',
    //  borderWidth: 1, borderColor: 'red'
  },
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
    alignItems: 'flex-end',
  },
  descContainer: {
    flex: 1,
    height: '100%',
    gap: 4,
    // justifyContent: 'space-between',
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
  slider: {
    position: 'absolute',
    height: 2,
    bottom: -1,
    width: '65%',
    zIndex: 3,
  },
  sliderThumb: {
    height: 12,
    width: 12,
    borderRadius: 15,
  },
  trackStyle: {
    backgroundColor: 'transparent',
  },
});
