import {StyleSheet, Dimensions} from 'react-native';
import {COLORS} from '../../../constants/theme';
const {width} = Dimensions.get('screen');
export const styles = StyleSheet.create({
  imageContainer: {
    height: 250,
    width: '100%',
  },
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
    padding: 4,
    width: 40,
    borderRadius: 15,
    backgroundColor: COLORS.white,
    overflow: 'hidden',
  },
  avatarImage: {height: '100%', width: '100%', objectFit: 'scale-down'},
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
    left: -18,
    width: '100%',
    zIndex: 4,
  },
  sliderThumb: {
    height: 12,
    width: 12,
    borderRadius: 15,
  },
  trackStyle: {
    backgroundColor: 'transparent',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingVertical: 10,
  },
  leftButton: {
    borderWidth: 1,
    borderColor: COLORS.def_gray,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 8,
    width: '45%',
    borderRadius: 20,
  },
  rightButton: {
    backgroundColor: COLORS.blue,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 8,
    width: '45%',
    borderRadius: 20,
  },
  blueText: {
    color: COLORS.blue,
    fontSize: 16,
    fontWeight: '500',
  },
  blackText: {
    color: COLORS.black,
    fontSize: 16,
    fontWeight: '500',
  },
});
