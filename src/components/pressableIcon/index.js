import {Pressable} from 'react-native';
import React from 'react';
import {styles} from './style';
import {COLORS} from '../../constants/theme';

const PressableIcon = ({children, onPress}) => {
  return (
    <Pressable
      style={({pressed}) => [styles.root, pressed && styles.pressed]}
      onPress={onPress}
      android_ripple={{color: COLORS.inactive_grey, radius: 20}}>
      {children}
    </Pressable>
  );
};

export default PressableIcon;
