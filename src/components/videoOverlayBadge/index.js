import {View, Text} from 'react-native';
import React from 'react';
import {styles} from './style';

const VideoOverlayBadge = ({children, position}) => {
  return <View style={[styles.rootContainer, position]}>{children}</View>;
};

export default VideoOverlayBadge;
