import {View, Text, SafeAreaView} from 'react-native';
import React, {useEffect} from 'react';
import {COLORS} from '../../constants/theme';
import {useIsFocused} from '@react-navigation/native';
import {ShortsIcon} from '../../components/svg';
import {styles} from './style';

const ShortsScreen = ({navigation, route}) => {
  return (
    <SafeAreaView style={styles.root}>
      <View style={styles.main}>
        <Text style={styles.whiteText}>ShortsScreen</Text>
      </View>
    </SafeAreaView>
  );
};

export default ShortsScreen;
