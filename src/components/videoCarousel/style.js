import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants/theme';
export const styles = StyleSheet.create({
  root: {
    padding: 10,
    gap: 10,
  },
  header: {padding: 6, gap: 20},
  subHeaderTop: {},
  avatarImage: {height: 45, width: 45, borderRadius: 20},
  subHeaderTopLeft: {
    flexDirection: 'row',
    gap: 20,
    justifyContent: 'space-between',
  },
  userDetail: {
    flex: 1,
    justifyContent: 'space-between',
  },
  uploadedOn: {color: COLORS.white},
  userName: {color: COLORS.white},
  subHeaderBottom: {
    maxWidth: '90%',
    gap: 10,
    height: 50,
    overflow: 'hidden',
  },
  videoTitle: {color: COLORS.white, fontSize: 16},
  videoLink: {color: COLORS?.blue, fontSize: 16},
  carouselContainer: {},
  engagementDetails: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 8,
    gap: 10,
  },
  likesCount: {flexDirection: 'row', gap: 10, alignItems: 'center'},
  commentsCount: {flexDirection: 'row', gap: 10},
  commentsContainer: {
    padding: 15,
    borderRadius: 15,
    gap: 10,
    backgroundColor: COLORS?.inactive_grey,
  },
  commentsHeader: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    gap: 8,
  },
  comment: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  commentAvatar: {height: 25, width: 25, borderRadius: 20},
  commentText: {
    color: COLORS.white,
  },
  fadedCountText: {color: COLORS?.white, fontSize: 16, opacity: 0.8},
  carouselImage: {
    height: 400,
    width: '100%',
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
