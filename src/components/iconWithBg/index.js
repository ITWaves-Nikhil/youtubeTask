import {View, Text} from 'react-native';
import React from 'react';

const IconWithBG = ({children, containerStyle}) => {
  return <View style={containerStyle}>{children}</View>;
};

export default IconWithBG;
