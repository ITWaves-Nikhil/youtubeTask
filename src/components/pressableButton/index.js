import {View, Text, Pressable} from 'react-native';
import React from 'react';
import {styles} from './style';

const PressableButton = ({
  onPress,
  containerStyle,
  textStyle,
  innerContainerStyle,
  children,
}) => {
  return (
    <Pressable
      onPress={onPress}
      style={({pressed}) => [containerStyle, pressed && styles.pressed]}>
      <View style={innerContainerStyle}></View>
      <Text style={textStyle}>{children}</Text>
    </Pressable>
  );
};

export default PressableButton;
