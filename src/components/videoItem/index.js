import {View, Text, Image, Pressable} from 'react-native';
import React from 'react';
import {styles} from './style';
import {formatTime, formatViewsCount} from '../../util/helpers';
import {COLORS} from '../../constants/theme';
import VideoOverlayBadge from '../videoOverlayBadge';

const VideoItem = ({data}) => {
  return (
    <Pressable style={({pressed}) => pressed && styles.pressed}>
      <View style={styles.imageContainer}>
        <Image
          source={{uri: data?.thumbnail}}
          style={styles.image}
          x
          resizeMode="cover"
        />
        <VideoOverlayBadge position={{right: 10, bottom: 10}}>
          <Text style={styles.duration}>{formatTime(data?.duration)}</Text>
        </VideoOverlayBadge>
      </View>

      <View style={styles.detailsContainer}>
        <View style={styles.avatarContainer}>
          <Image
            source={{uri: data?.user?.image}}
            style={styles.avatarImage}
            resizeMode="cover"
          />
        </View>
        <View style={styles.descContainer}>
          <View style={styles.titleTextContainer}>
            <Text style={styles.titleText}>{data?.title}</Text>
          </View>
          <View style={styles.videoDetailContainer}>
            <Text style={styles.videoDetailText}>{`${
              data?.user?.name
            } • ${formatViewsCount(data?.views)} • ${data?.createdAt}`}</Text>
          </View>
        </View>
        <View style={styles.moreIcon}></View>
      </View>
    </Pressable>
  );
};

export default VideoItem;
