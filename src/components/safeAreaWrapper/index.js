import {View, Text, SafeAreaView} from 'react-native';
import React from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {COLORS} from '../../constants/theme';

const SafeAreaWrapper = ({children}) => {
  const insets = useSafeAreaInsets();
  // console.log('insets', insets);
  return (
    <View
      style={{
        marginTop: insets?.top,
        paddingBottom: insets?.bottom,
        // borderWidth: 1,
        // borderColor: 'white',
        backgroundColor: COLORS.primarbgdark,
      }}>
      {children}
    </View>
  );
};

export default SafeAreaWrapper;
