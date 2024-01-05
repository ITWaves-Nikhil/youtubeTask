import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/homeScreen';
import NotificationScreen from '../screens/notificationScreen';
import 'react-native-gesture-handler';
import {COLORS} from '../constants/theme';

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
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="Notification" component={NotificationScreen} />
    </Stack.Navigator>
  );
};

export default HomeStack;
