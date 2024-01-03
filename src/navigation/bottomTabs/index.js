import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../../screens/homeScreen';
import ShortsScreen from '../../screens/shortsScreen';
import CreateScreen from '../../screens/createScreen';
import SubscriptionScreen from '../../screens/subscriptionScreen';
import UserPanel from '../../screens/userPanel';
import {COLORS} from '../../constants/theme';
import {Text, View} from 'react-native';
import AntIcon from 'react-native-vector-icons/AntDesign';
import {HomeIcon, ShortsIcon, SubsIcon} from '../../components/svg';

const Tab = createBottomTabNavigator();

const BottomTab = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {backgroundColor: COLORS.primarbgdark, height: 55},
        tabBarItemStyle: {
          marginVertical: 6,
        },
        tabBarActiveTintColor: COLORS.active_white,
        tabBarInactiveTintColor: COLORS.active_white,
      }}>
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{tabBarLabel: 'Home', tabBarIcon: () => <HomeIcon />}}
      />
      <Tab.Screen
        name="ShortsScreen"
        component={ShortsScreen}
        options={{tabBarLabel: 'Shorts', tabBarIcon: () => <ShortsIcon />}}
      />
      <Tab.Screen
        name="CreateScreen"
        component={CreateScreen}
        options={{
          tabBarLabel: '',
          tabBarIcon: () => (
            <AntIcon name="pluscircleo" size={24} color={'white'} />
          ),
        }}
      />
      <Tab.Screen
        name="SubscriptionScreen"
        component={SubscriptionScreen}
        options={{
          tabBarLabel: 'Subscription',
          tabBarIcon: () => <SubsIcon />,
        }}
      />
      <Tab.Screen
        name="UserPanel"
        component={UserPanel}
        options={{
          tabBarLabel: 'You',
          tabBarIcon: () => (
            <View
              style={{
                height: 24,
                width: 24,
                backgroundColor: 'green',
                borderRadius: 20,
                justifyContent: 'center',
                alignItems: 'center',
                overflow: 'hidden',
              }}>
              <Text style={{color: COLORS.active_white}}>A</Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTab;
