import {View, Text, Image} from 'react-native';
import React from 'react';
import {styles} from './style';
const RecentSearchItem = ({data}) => {
  return (
    <View style={styles.root}>
      <View style={styles.innerLeft}>
        <Text>abc</Text>
      </View>
      <View style={styles.innerMiddle}>
        <Text>abc</Text>
        {/* {data?.image && ( */}
        <Image
          style={styles.image}
          source={{uri: 'https://wiki.dave.eu/images/4/47/Placeholder.png'}}
        />
        {/* )} */}
      </View>
      <View style={styles.innerRight}>
        <Text>abc</Text>
      </View>
    </View>
  );
};

export default RecentSearchItem;
