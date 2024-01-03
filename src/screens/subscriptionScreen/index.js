import React, {useEffect} from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import {COLORS} from '../../constants/theme';
import {useIsFocused} from '@react-navigation/native';
import {SubsIcon, SubsIconFilled} from '../../components/svg';
// import {styles} from './style';

const SubscriptionScreen = ({navigation, route}) => {
  const isFocused = useIsFocused();

  useEffect(() => {
    navigation.setOptions({
      tabBarIcon: () => (isFocused ? <SubsIconFilled /> : <SubsIcon />),
    });
  }, [isFocused]);

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.primarbgdark}}>
      <View style={{flex: 1, backgroundColor: COLORS.primarbgdark}}>
        <Text style={{color: 'white'}}>SubscriptionScreen</Text>
      </View>
    </SafeAreaView>
  );
};

export default SubscriptionScreen;
