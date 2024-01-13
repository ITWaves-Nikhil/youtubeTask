import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/homeScreen';
import NotificationScreen from '../screens/notificationScreen';
import 'react-native-gesture-handler';
import {COLORS} from '../constants/theme';
import {SCREEN_NAMES} from '../constants/navigation';
import SearchScreen from '../screens/searchScreen';
import {Platform} from 'react-native';

const Stack = createNativeStackNavigator();

const HomeStack = ({navigation, route}) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        gestureDirection: 'horizontal',
        gestureEnabled: true,
        animation: Platform.OS === 'android' ? 'default' : 'ios',
        headerTintColor: COLORS.active_white,
        headerTitle: '',
      }}>
      <Stack.Screen name={SCREEN_NAMES?.HOME_SCREEN} component={HomeScreen} />
      <Stack.Screen
        name={SCREEN_NAMES?.NOTIFICATION_SCREEN}
        component={NotificationScreen}
      />
      <Stack.Screen
        name={SCREEN_NAMES?.SEARCH_SCREEN}
        component={SearchScreen}
        options={{animation: 'none'}}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;
