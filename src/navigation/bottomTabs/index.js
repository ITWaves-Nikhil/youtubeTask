import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ShortsScreen from '../../screens/shortsScreen';
import CreateScreen from '../../screens/createScreen';
import SubscriptionScreen from '../../screens/subscriptionScreen';
import UserPanel from '../../screens/userPanel';
import {COLORS} from '../../constants/theme';
import {Text, View} from 'react-native';
import AntIcon from 'react-native-vector-icons/AntDesign';
import {HomeIcon, ShortsIcon, SubsIcon} from '../../components/svg';
import HomeStack from '../HomeStack';
import {TAB_SCREEN_NAMES, TAB_BAR_LABELS} from '../../constants/navigation';
import {styles} from './style';

const Tab = createBottomTabNavigator();

const BottomTab = ({navigation, route}) => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {backgroundColor: COLORS.primarbgdark},
        tabBarItemStyle: {
          marginVertical: 6,
        },
        tabBarActiveTintColor: COLORS.active_white,
        tabBarInactiveTintColor: COLORS.active_white,
      }}>
      <Tab.Screen
        name={TAB_SCREEN_NAMES?.HOMESTACK}
        component={HomeStack}
        options={props => {
          return {
            tabBarLabel: TAB_BAR_LABELS?.HOME,
            tabBarIcon: () => (
              <HomeIcon active={props?.navigation.isFocused?.()} />
            ),
          };
        }}
      />
      <Tab.Screen
        name={TAB_SCREEN_NAMES?.SHORTS_TAB}
        component={ShortsScreen}
        options={props => {
          return {
            tabBarLabel: TAB_BAR_LABELS?.SHORTS,
            tabBarIcon: () => (
              <ShortsIcon active={props?.navigation.isFocused?.()} />
            ),
          };
        }}
      />
      <Tab.Screen
        name={TAB_SCREEN_NAMES?.CREATE_TAB}
        component={CreateScreen}
        listeners={{
          tabPress: e => {
            e.preventDefault();
          },
        }}
        options={{
          tabBarShowLabel: false,

          tabBarLabel: '',
          tabBarIcon: () => (
            <AntIcon
              name="pluscircleo"
              size={32}
              color={COLORS.white}
              style={styles.createIcon}
            />
          ),
        }}
      />
      <Tab.Screen
        name={TAB_SCREEN_NAMES?.SUBSCRIPTION_TAB}
        component={SubscriptionScreen}
        options={{
          tabBarLabel: TAB_BAR_LABELS?.SUBS,
          tabBarIcon: () => <SubsIcon />,
        }}
      />
      <Tab.Screen
        name={TAB_SCREEN_NAMES?.USER_TAB}
        component={UserPanel}
        options={{
          tabBarLabel: TAB_BAR_LABELS?.USER,
          tabBarIcon: () => (
            <View style={styles.userTab}>
              <Text style={{color: COLORS.active_white}}>A</Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTab;
