import {View, Text, SafeAreaView, Platform} from 'react-native';
import React, {useLayoutEffect, useState} from 'react';
import {styles} from './style';
import {COLORS} from '../../constants/theme';
import PressableIcon from '../../components/pressableIcon';
import AntIcon from 'react-native-vector-icons/AntDesign';
import {
  BellFilled,
  ScreenCast,
  SearchIcon,
  VerticalDots,
} from '../../components/svg';
import {STRINGS} from '../../constants/strings';
import {SCREEN_NAMES, SCREEN_TITLES} from '../../constants/navigation';
import CastScreenModal from '../../components/castScreenModal';
import CastScreenModalIOS from '../../components/castScreenModalIOS';

const NotificationScreen = ({navigation, route}) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

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
          <ScreenCast onPress={() => setIsModalVisible(true)} />
        </PressableIcon>
        <PressableIcon
          onPress={() => navigation.navigate(SCREEN_NAMES?.SEARCH_SCREEN)}>
          <SearchIcon />
        </PressableIcon>
        <PressableIcon>
          <VerticalDots />
        </PressableIcon>
      </View>
    );
  }

  return (
    <>
      <View style={styles.root}>
        <View style={styles.mainContainer}>
          <View style={styles.innerContainer}>
            <BellFilled />
            <Text style={styles.biggerText}>{STRINGS?.NOTIF_SCREEN_1}</Text>
            <Text style={styles.smallerText}>{STRINGS?.NOTIF_SCREEN_2}</Text>
          </View>
        </View>
        {Platform.OS === 'android' && (
          <CastScreenModal
            isModalVisible={isModalVisible}
            setIsModalVisible={setIsModalVisible}
          />
        )}
      </View>
      {isModalVisible && Platform.OS === 'ios' && (
        <CastScreenModalIOS
          isModalVisible={isModalVisible}
          setIsModalVisible={setIsModalVisible}
        />
      )}
    </>
  );
};

export default NotificationScreen;
