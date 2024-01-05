import {View, Text, SafeAreaView} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import BottomTab from '../bottomTabs';
import {COLORS} from '../../constants/theme';
import Logo from '../../components/logo';
const Drawer = createDrawerNavigator();

const SideDrawer = () => {
  function DrawerContent() {
    return (
      <SafeAreaView style={{flex: 1, backgroundColor: COLORS.primarbgdark}}>
        <View
          style={{
            flex: 1,
            backgroundColor: COLORS.primarbgdark,
            paddingHorizontal: 15,
          }}>
          <Logo />
        </View>
      </SafeAreaView>
    );
  }

  return (
    <Drawer.Navigator
      drawerContent={() => <DrawerContent />}
      screenOptions={{
        headerShown: false,
        drawerType: 'front',
        swipeEnabled: false,
      }}>
      <Drawer.Screen name="Tabs" component={BottomTab} />
    </Drawer.Navigator>
  );
};

export default SideDrawer;
