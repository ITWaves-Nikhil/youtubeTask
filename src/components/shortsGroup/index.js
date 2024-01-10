import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';
import ShortsItem from '../shortsItem';
import {FlatList} from 'react-native-gesture-handler';
import {styles} from './style';
import {PATHS} from '../../constants/assets';
import {COLORS} from '../../constants/theme';

const ShortsGroup = ({data}) => {
  return (
    <View style={styles.rootContainer}>
      <View style={styles.logoContainer}>
        <Image source={PATHS.shorts_logo} style={styles.logo} />
        <Text style={styles.listHeading}>Shorts</Text>
      </View>
      <FlatList
        data={data}
        columnWrapperStyle={{gap: 10}}
        contentContainerStyle={styles.listContainerStyle}
        numColumns={2}
        keyExtractor={item => item?.id}
        renderItem={({item}) => <ShortsItem data={item} />}
      />
    </View>
  );
};

export default ShortsGroup;
