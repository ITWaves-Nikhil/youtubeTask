import {View, Text, SafeAreaView} from 'react-native';
import React, {useEffect} from 'react';
import {COLORS} from '../../constants/theme';
import {useIsFocused} from '@react-navigation/native';
import {ShortsIcon} from '../../components/svg';
import {styles} from './style';

const ShortsScreen = ({navigation, route}) => {
  const isFocused = useIsFocused();

  useEffect(() => {
    navigation.setOptions({
      tabBarIcon: () => <ShortsIcon active={!!isFocused} />,
    });
  }, [isFocused]);

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.primarbgdark}}>
      <View style={{flex: 1, backgroundColor: COLORS.primarbgdark}}>
        <Text style={{color: 'white'}}>ShortsScreen</Text>
      </View>
    </SafeAreaView>
  );
};

export default ShortsScreen;
