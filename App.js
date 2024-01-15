import {StatusBar} from 'react-native';
import React from 'react';
import Navigator from './src/navigation';
import {COLORS} from './src/constants/theme';
import 'react-native-gesture-handler';
import {store} from './src/store/redux/store';
import {PaperProvider} from 'react-native-paper';
import {Provider} from 'react-redux';
import {PortalProvider} from '@gorhom/portal';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

const App = () => {
  return (
    // <>
    <GestureHandlerRootView style={{flex: 1}}>
      <StatusBar
        backgroundColor={COLORS.primarbgdark}
        barStyle={'light-content'}
      />
      <Provider store={store}>
        <PortalProvider>
          <PaperProvider>
            <Navigator />
          </PaperProvider>
        </PortalProvider>
      </Provider>
    </GestureHandlerRootView>
    // {/* </> */}
  );
};

export default App;
