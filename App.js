import {StatusBar} from 'react-native';
import React from 'react';
import Navigator from './src/navigation';
import {COLORS} from './src/constants/theme';
import 'react-native-gesture-handler';
import {store} from './src/store/redux/store';
import {PaperProvider} from 'react-native-paper';
import {Provider} from 'react-redux';
const App = () => {
  return (
    <>
      <StatusBar
        backgroundColor={COLORS.primarbgdark}
        barStyle={'light-content'}
      />
      <Provider store={store}>
        <PaperProvider>
          <Navigator />
        </PaperProvider>
      </Provider>
    </>
  );
};

export default App;
