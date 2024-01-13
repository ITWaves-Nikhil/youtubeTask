import {View, Text} from 'react-native';
import React from 'react';
import {styles} from './style';

const VideoOverlayBadge = ({children, position, style}) => {
  return (
    <View style={[styles.rootContainer, position, style]}>{children}</View>
  );
};

export default VideoOverlayBadge;
