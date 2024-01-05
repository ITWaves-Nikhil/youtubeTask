import {Pressable} from 'react-native';
import React from 'react';
import {styles} from './style';

const PressableIcon = ({children, onPress}) => {
  return (
    <Pressable
      style={({pressed}) => [
        {
          // backgroundColor: 'red',
          borderRadius: 40,
          padding: 6,
          overflow: 'hidden',
        },
        pressed && styles.pressed,
      ]}
      onPress={onPress}
      android_ripple={{color: 'white', radius: 20}}>
      {children}
    </Pressable>
  );
};

export default PressableIcon;
