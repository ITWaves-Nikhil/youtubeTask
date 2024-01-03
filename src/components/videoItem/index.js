import {View, Text, Image, Pressable} from 'react-native';
import React from 'react';
import {styles} from './style';

const VideoItem = ({data}) => {
  // console.log(data);
  // description;
  return (
    <Pressable style={({pressed}) => pressed && styles.pressed}>
      <View style={styles.imageContainer}>
        <Image
          source={{uri: data?.thumbnailUrl}}
          style={styles.image}
          resizeMode="cover"
        />
      </View>
      <View style={styles.detailsContainer}>
        <View style={styles.avatarContainer}>
          <Image
            source={{uri: data?.thumbnailUrl}}
            style={styles.avatarImage}
            resizeMode="cover"
          />
        </View>
        <View style={{flex: 1}}></View>
        <View style={styles.moreIcon}></View>
      </View>
    </Pressable>
  );
};

export default VideoItem;
