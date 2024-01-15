import {View, Text, Image} from 'react-native';
import React from 'react';
import {Redirect} from '../../svg';
import {styles} from './style';

const EducationalAd = ({data}) => {
  return (
    <View style={styles.root}>
      <Image style={styles.image} source={{uri: data?.thumbnail}} />
      <View style={styles.banner}>
        <Text style={styles.whiteText}>Learn More</Text>
        <Redirect />
      </View>
    </View>
  );
};

export default EducationalAd;
