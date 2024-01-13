import {View, Text, Image} from 'react-native';
import React from 'react';
import {styles} from './style';
import {History, TopLeftArrow} from '../svg';
import {COLORS} from '../../constants/theme';
const RecentSearchItem = ({data}) => {
  return (
    <View style={styles.root}>
      <View style={styles.innerLeft}>
        <History />
      </View>
      <View style={styles.innerMiddle}>
        <Text style={styles.titleText}>{data?.title || 'abc'}</Text>
        {data?.image && (
          <Image style={styles.image} source={{uri: data?.thumbnail}} />
        )}
      </View>
      <View style={styles.innerRight}>
        <TopLeftArrow />
      </View>
    </View>
  );
};

export default RecentSearchItem;
