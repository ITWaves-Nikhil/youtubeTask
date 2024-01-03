import {View, Text, Image} from 'react-native';
import {PATHS} from '../../constants/assets';
// import logo from '../../assets/images/logo.png';

const Logo = () => {
  return (
    <View
      style={{
        width: 100,
        height: 45,
        overflow: 'hidden',
      }}>
      <Image
        source={PATHS.youtube_logo}
        style={{width: '100%', height: '100%', objectFit: 'scale-down'}}
      />
    </View>
  );
};

export default Logo;
