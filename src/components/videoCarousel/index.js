import {View, Text, Image, Dimensions} from 'react-native';
import React from 'react';
import {styles} from './style';
import {
  CommentIcon,
  DislikeButton,
  LikeButton,
  VerticalDots,
} from '../../components/svg/index';
import {COLORS} from '../../constants/theme';
import Carousel from 'react-native-snap-carousel';

const {width: screenWidth} = Dimensions.get('screen');

const VideoCarousel = ({data}) => {
  function _renderItem({item, index}) {
    return (
      <View style={styles.slideImageContainer}>
        <Image source={{uri: item}} style={styles.carouselImage} />
        <View style={styles.countBadge}>
          <Text style={styles.whiteText}>
            {index + 1}/{data?.previewImages?.length}
          </Text>
        </View>
      </View>
    );
  }
  return (
    <View style={styles.root}>
      <View style={styles.header}>
        <View style={styles.subHeaderTop}>
          <View style={styles.subHeaderTopLeft}>
            <Image
              source={{uri: data?.user?.image}}
              style={styles.avatarImage}
            />
            <View style={styles.userDetail}>
              <Text style={styles.userName}>{data?.user?.name}</Text>
              <Text style={styles.uploadedOn}>{data?.createdAt}</Text>
            </View>
            <VerticalDots />
          </View>
        </View>
        <View style={styles.subHeaderBottom}>
          <Text style={styles.videoTitle}>{data?.title}</Text>
          <Text style={styles.videoLink}>{data?.videoUrl}</Text>
        </View>
      </View>
      <View style={styles.carouselContainer}>
        <Carousel
          hasParallaxImages={true}
          data={data?.previewImages}
          renderItem={_renderItem}
          sliderWidth={screenWidth}
          itemWidth={screenWidth - 50}
          inactiveSlideScale={1}
        />
      </View>
      <View style={styles.engagementDetails}>
        <View style={styles.likesCount}>
          <LikeButton />
          <Text style={styles.fadedCountText}>{data?.commentCount}</Text>
          <View style={{marginHorizontal: 30}}>
            <DislikeButton />
          </View>
        </View>
        <View style={styles.commentsCount}>
          <CommentIcon />
          <Text style={styles.fadedCountText}>{data?.commentCount}</Text>
        </View>
      </View>
      <View style={styles.commentsContainer}>
        <View style={styles.commentsHeader}>
          <Text style={{color: 'white', fontSize: 16, fontWeight: '400'}}>
            Comments
          </Text>
          <Text style={{color: COLORS.white, opacity: 0.6, fontSize: 14}}>
            {data?.commentCount}
          </Text>
        </View>
        <View style={styles.comment}>
          <Image
            style={styles.commentAvatar}
            source={{uri: data?.comments[0]?.avatar}}
          />
          <Text style={styles.commentText}>{data?.comments[0]?.comment}</Text>
        </View>
      </View>
    </View>
  );
};

export default VideoCarousel;
