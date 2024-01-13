import {View, Text, Image, Pressable, Dimensions} from 'react-native';
import React, {useMemo, useRef, useState} from 'react';
import Slider from 'react-native-slider';
import {styles} from './style';
import {formatTime, formatViewsCount} from '../../util/helpers';
import {COLORS} from '../../constants/theme';
import VideoOverlayBadge from '../videoOverlayBadge';
import Video, {VideoRef} from 'react-native-video';
import PressableIcon from '../pressableIcon';
import {AudioIcon, MuteIcon, VerticalDots} from '../svg';

const VideoItem = ({data, index, currentPlaybackIndex}) => {
  const [isMute, setIsMute] = useState(true);
  const [bgVisible, setBgVisible] = useState(true);
  const [progressTime, setProgressTime] = useState(0);
  const isCurrentlyPlaying = useMemo(() => {
    return index === currentPlaybackIndex;
  }, [currentPlaybackIndex]);

  const mapNumRange = (num, inMin, inMax, outMin, outMax) =>
    ((num - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;

  return (
    <Pressable style={({pressed}) => pressed && styles.pressed}>
      <View style={styles.imageContainer}>
        {!isCurrentlyPlaying ? (
          <Image
            source={{uri: data?.thumbnail}}
            style={styles.image}
            resizeMode="contain"
          />
        ) : (
          <Video
            repeat={false}
            muted={isMute}
            paused={!isCurrentlyPlaying}
            source={{uri: data?.videoUrl}}
            style={styles.image}
            poster={data?.thumbnail}
            resizeMode="cover"
            onProgress={p => {
              if (p?.currentTime > 15) {
                setBgVisible(false);
              }
              isCurrentlyPlaying && setProgressTime(parseInt(p?.currentTime));
            }}
          />
        )}

        {isCurrentlyPlaying && (
          <VideoOverlayBadge
            position={{right: 10, top: 20}}
            style={{
              backgroundColor: bgVisible ? 'black' : 'transparent',
            }}>
            <Pressable onPress={() => setIsMute(state => !state)}>
              <View style={styles.duration}>
                {isMute ? <MuteIcon /> : <AudioIcon />}
              </View>
            </Pressable>
          </VideoOverlayBadge>
        )}
        <VideoOverlayBadge position={{right: 10, bottom: 20}}>
          <Text style={styles.duration}>
            {formatTime(isCurrentlyPlaying ? progressTime : data?.duration)}
          </Text>
        </VideoOverlayBadge>
        {isCurrentlyPlaying && (
          <Slider
            minimumValue={0}
            maximumValue={1}
            value={mapNumRange(progressTime, 0, data?.duration, 0, 1)}
            thumbTintColor={COLORS.accent_red}
            style={styles.slider}
            minimumTrackTintColor={COLORS.accent_red}
            trackStyle={styles.trackStyle}
            thumbStyle={styles.sliderThumb}
          />
        )}
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
        <View style={styles.moreIcon}>
          <VerticalDots size={18} />
        </View>
      </View>
    </Pressable>
  );
};

export default VideoItem;
