import {View, Text, SafeAreaView} from 'react-native';
import React, {useEffect} from 'react';
import {useIsFocused} from '@react-navigation/native';
// import {styles} from './style';
import {COLORS} from '../../constants/theme';

const UserPanel = ({navigation, route}) => {
  const isFocused = useIsFocused();

  function TabIcon(style) {
    return (
      <View
        style={[
          {
            height: 24,
            width: 24,
            backgroundColor: 'green',
            borderRadius: 20,
            justifyContent: 'center',
            alignItems: 'center',
            overflow: 'hidden',
          },
          style,
        ]}>
        <Text style={{color: COLORS.active_white}}>A</Text>
      </View>
    );
  }

  useEffect(() => {
    navigation.setOptions({
      tabBarIcon: () => (
        <TabIcon
          style={
            isFocused ? {borderWidth: 1, borderColor: COLORS.active_white} : {}
          }
        />
      ),
    });
  }, []);

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.primarbgdark}}>
      <View style={{flex: 1, backgroundColor: COLORS.primarbgdark}}>
        <Text style={{color: 'white'}}>UserPanel</Text>
      </View>
    </SafeAreaView>
  );
};

export default UserPanel;
