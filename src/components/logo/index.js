import {View, Text, Image} from 'react-native';
import {PATHS} from '../../constants/assets';
import {styles} from './style';
// import logo from '../../assets/images/logo.png';

const Logo = () => {
  return (
    <View style={styles.rootContainer}>
      <Image source={PATHS.youtube_logo} style={styles.image} />
    </View>
  );
};

export default Logo;
