import {View, Text, SafeAreaView, Platform} from 'react-native';
import React, {useLayoutEffect} from 'react';
import {styles} from './style';
import {COLORS} from '../../constants/theme';
import PressableIcon from '../../components/pressableIcon';
import AntIcon from 'react-native-vector-icons/AntDesign';
import {
  BellIcon,
  CompassIcon,
  ScreenCast,
  SearchIcon,
} from '../../components/svg';
import {STRINGS} from '../../constants/strings';
import {SCREEN_TITLES} from '../../constants/navigation';

const NotificationScreen = ({navigation, route}) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerStyle: {
        backgroundColor: COLORS.primarbgdark,
      },
      headerLeft: () => <LeftHeader />,
      headerRight: () => <RightHeader />,
    });
  }, []);

  function LeftHeader() {
    const iconName = Platform.select({ios: 'left', android: 'arrowleft'});
    return (
      <View style={styles.leftHeaderContainer}>
        <AntIcon
          name={iconName}
          color={COLORS?.white}
          size={24}
          onPress={() => navigation.goBack()}
        />
        <Text style={styles.leftHeaderTitleText}>
          {SCREEN_TITLES?.NOTIFICATION}
        </Text>
      </View>
    );
  }

  function RightHeader() {
    return (
      <View style={styles.rightHeaderContainer}>
        <PressableIcon>
          <ScreenCast onPress={() => {}} />
        </PressableIcon>
        <PressableIcon onPress={() => {}}>
          <BellIcon />
        </PressableIcon>
        <PressableIcon>
          <SearchIcon />
        </PressableIcon>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.root}>
      <View style={styles.mainContainer}>
        <View style={styles.innerContainer}>
          <BellIcon />
          <Text style={styles.biggerText}>{STRINGS?.NOTIF_SCREEN_1}</Text>
          <Text style={styles.smallerText}>{STRINGS?.NOTIF_SCREEN_2}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default NotificationScreen;
