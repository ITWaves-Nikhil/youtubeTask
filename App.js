import {View, Text, StatusBar} from 'react-native';
import React from 'react';
import Navigator from './src/navigation';
import {COLORS} from './src/constants/theme';
import 'react-native-gesture-handler';

const App = () => {
  return (
    <>
      <StatusBar
        backgroundColor={COLORS.primarbgdark}
        barStyle={'light-content'}
      />
      <Navigator />
    </>
  );
};

export default App;
