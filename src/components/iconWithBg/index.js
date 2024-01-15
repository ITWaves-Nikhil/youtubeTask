import {View} from 'react-native';

const IconWithBG = ({children, containerStyle}) => {
  return <View style={containerStyle}>{children}</View>;
};

export default IconWithBG;
