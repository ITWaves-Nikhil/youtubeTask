import {View, Text, Image, Pressable, Dimensions} from 'react-native';
import React, {useMemo, useRef, useState} from 'react';
import {styles} from './style';
import {formatTime, formatViewsCount} from '../../util/helpers';
import {COLORS} from '../../constants/theme';
import VideoOverlayBadge from '../videoOverlayBadge';
import Video, {VideoRef} from 'react-native-video';
import PressableIcon from '../pressableIcon';
import ProgressBar from 'react-native-progress/Bar';

const VideoItem = ({data, index, currentPlaybackIndex}) => {
  const [isMute, setIsMute] = useState(true);
  const [progressTime, setProgressTime] = useState(0);
  // console.log('videoitem', index, 'currentPlaybackItem', currentPlaybackIndex);
  const isCurrentlyPlaying = useMemo(() => {
    return index === currentPlaybackIndex;
  }, [currentPlaybackIndex]);

  // console.log();
  const videoRef = useRef();

  const mapNumRange = (num, inMin, inMax, outMin, outMax) =>
    ((num - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;

  return (
    <Pressable style={({pressed}) => pressed && styles.pressed}>
      <View style={styles.imageContainer}>
        {/* <Image
          source={{uri: data?.thumbnail}}
          style={styles.image}
          resizeMode="cover"
        /> */}
        <Video
          muted={isMute}
          paused={!isCurrentlyPlaying}
          source={{uri: data?.videoUrl}}
          style={styles.image}
          poster={data?.thumbnail}
          onProgress={p =>
            isCurrentlyPlaying && setProgressTime(parseInt(p?.currentTime))
          }
        />
        {isCurrentlyPlaying && (
          <VideoOverlayBadge position={{right: 10, top: 20}}>
            <PressableIcon onPress={() => setIsMute(state => !state)}>
              <Text style={styles.duration}>
                {isMute ? 'muted' : 'not muted'}
              </Text>
            </PressableIcon>
          </VideoOverlayBadge>
        )}
        <VideoOverlayBadge position={{right: 10, bottom: 20}}>
          <Text style={styles.duration}>
            {formatTime(isCurrentlyPlaying ? progressTime : data?.duration)}
          </Text>
        </VideoOverlayBadge>
        {isCurrentlyPlaying && (
          <View style={{position: 'absolute', bottom: -2}}>
            <ProgressBar
              progress={mapNumRange(progressTime, 0, data?.duration, 0, 1)}
              width={Dimensions.get('window').width}
              borderWidth={0}
              color={COLORS.accent_red}
              borderRadius={0}
              height={2}
            />
          </View>
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
        <View style={styles.moreIcon}></View>
      </View>
    </Pressable>
  );
};

export default VideoItem;
