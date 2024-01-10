import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/homeScreen';
import NotificationScreen from '../screens/notificationScreen';
import 'react-native-gesture-handler';
import {COLORS} from '../constants/theme';
import {SCREEN_NAMES} from '../constants/navigation';
import SearchScreen from '../screens/searchScreen';

const Stack = createNativeStackNavigator();

const HomeStack = ({navigation, route}) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        gestureDirection: 'horizontal',
        gestureEnabled: true,
        animation: 'slide_from_right',
        animationDuration: 100,
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
