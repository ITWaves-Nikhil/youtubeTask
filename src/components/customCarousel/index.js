import {View, Text, Image, Dimensions, FlatList} from 'react-native';
import {styles} from './style';

const {width: screenWidth} = Dimensions.get('screen');

const CustomCarousel = ({data}) => {
  function _renderItem({item, index}) {
    return (
      <View style={styles.carouselItem}>
        <Image source={{uri: item}} style={styles.carouselImage} />
        <View style={styles.countBadge}>
          <Text style={styles.whiteText}>
            {index + 1}/{data?.length}
          </Text>
        </View>
      </View>
    );
  }
  return (
    <FlatList
      data={data}
      keyExtractor={(item, index) => index.toString()}
      renderItem={_renderItem}
      contentContainerStyle={styles.flatListContainer}
      horizontal
      bounces={false}
      bouncesZoom={false}
      alwaysBounceHorizontal={false}
      showsHorizontalScrollIndicator={false}
      pagingEnabled={true}
      snapToAlignment="start"
      snapToInterval={screenWidth - 50}
      decelerationRate={'fast'}
      overScrollMode="never"
    />
  );
};

export default CustomCarousel;
