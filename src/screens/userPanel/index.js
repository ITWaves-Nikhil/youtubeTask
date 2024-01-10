import {View, Text, SafeAreaView} from 'react-native';
import React, {useEffect} from 'react';
import {useIsFocused} from '@react-navigation/native';
// import {styles} from './style';
import {COLORS} from '../../constants/theme';
import {styles} from './style';

const UserPanel = ({navigation, route}) => {
  const isFocused = useIsFocused();

  function TabIcon() {
    return (
      <View
        style={[
          styles.userHeader,
          !!isFocused && {borderWidth: 1, borderColor: COLORS.active_white},
        ]}>
        <Text style={{color: COLORS.active_white}}>A</Text>
      </View>
    );
  }

  useEffect(() => {
    navigation.setOptions({
      tabBarIcon: () => <TabIcon />,
    });
  }, [isFocused]);

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.primarbgdark}}>
      <View style={{flex: 1, backgroundColor: COLORS.primarbgdark}}>
        <Text style={{color: 'white'}}>UserPanel</Text>
      </View>
    </SafeAreaView>
  );
};

export default UserPanel;
