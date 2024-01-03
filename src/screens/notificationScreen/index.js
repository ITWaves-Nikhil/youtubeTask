import {View, Text} from 'react-native';
import React from 'react';
import {styles} from './style';

const NotificationScreen = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.primarbgdark}}>
      <View style={{flex: 1, backgroundColor: COLORS.primarbgdark}}>
        <Text>NotificationScreen</Text>
      </View>
    </SafeAreaView>
  );
};

export default NotificationScreen;
