import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import NotificationScreen from '../screens/notificationScreen';
import SideDrawer from './sideDrawer';
import 'react-native-gesture-handler';

const Stack = createNativeStackNavigator();

const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="SideDrawer" component={SideDrawer} />
        {/* <Stack.Screen name="Notification" component={NotificationScreen} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
