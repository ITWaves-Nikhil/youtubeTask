import {View, Image, Text} from 'react-native';
import {styles} from './style';

const ShortsItem = ({data}) => {
  return (
    <View style={styles.rootContainer}>
      <Image
        source={{uri: data?.thumbnail}}
        style={styles.thumbnail}
        resizeMode="cover"
      />
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>{data?.title}</Text>
      </View>
    </View>
  );
};

export default ShortsItem;
