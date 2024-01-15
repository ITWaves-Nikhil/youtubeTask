import {View, Text, Image, Pressable} from 'react-native';
import React, {useMemo, useRef, useState} from 'react';
import {styles} from './style';
import VideoOverlayBadge from '../../videoOverlayBadge';
import Video from 'react-native-video';
import PressableButton from '../../pressableButton';
import {AudioIcon, MuteIcon, Redirect, VerticalDots} from '../../svg';

const ShoppingAd = ({data, index, currentPlaybackIndex}) => {
  const [isMute, setIsMute] = useState(true);
  const [bgVisible, setBgVisible] = useState(true);
  const videoRef = useRef();

  const isCurrentlyPlaying = useMemo(() => {
    return index === currentPlaybackIndex;
  }, [currentPlaybackIndex]);

  return (
    <View>
      <View style={styles.imageContainer}>
        {!isCurrentlyPlaying ? (
          <Image
            source={{uri: data?.thumbnail}}
            style={styles.image}
            resizeMode="contain"
          />
        ) : (
          <Video
            ref={videoRef}
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
        <VideoOverlayBadge
          position={{right: 10, bottom: 10}}
          style={{
            backgroundColor: 'black',
          }}>
          <Redirect />
        </VideoOverlayBadge>
      </View>

      <View style={styles.detailsContainer}>
        <View style={styles.avatarContainer}>
          <Image
            source={{uri: data?.logo}}
            style={styles.avatarImage}
            resizeMode="cover"
          />
        </View>
        <View style={styles.descContainer}>
          <View style={styles.titleTextContainer}>
            <Text style={styles.titleText}>{data?.title}</Text>
          </View>
          <View style={styles.videoDetailContainer}>
            <Text style={styles.videoDetailText}>{data?.desc}</Text>
            <Text style={styles.videoDetailText}>{`${
              data?.isSponsored && 'Sponsored'
            } • ${data?.appRating}`}</Text>
          </View>
        </View>
        <View style={styles.moreIcon}>
          <VerticalDots size={18} />
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <PressableButton
          containerStyle={styles.leftButton}
          textStyle={styles.blueText}>
          Later
        </PressableButton>
        <PressableButton
          containerStyle={styles.rightButton}
          textStyle={styles.blackText}>
          Shop Now
        </PressableButton>
      </View>
    </View>
  );
};

export default ShoppingAd;
