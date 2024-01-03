import {View, Text} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import BottomTab from '../bottomTabs';
import {COLORS} from '../../constants/theme';
import Logo from '../../components/logo';
const Drawer = createDrawerNavigator();

const SideDrawer = () => {
  function DrawerContent() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: COLORS.primarbgdark,
          paddingHorizontal: 15,
        }}>
        <Logo />
      </View>
    );
  }

  return (
    <Drawer.Navigator
      drawerContent={() => <DrawerContent />}
      screenOptions={{headerShown: false}}>
      <Drawer.Screen name="Tabs" component={BottomTab} />
    </Drawer.Navigator>
  );
};

export default SideDrawer;
