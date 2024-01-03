import {useEffect, useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Animated,
  Button,
} from 'react-native';
import {DrawerActions, useIsFocused} from '@react-navigation/native';
import {styles} from './style';

import Logo from '../../components/logo';
import AnimtedAppBar from './AnimtedAppBar';
import {COLORS} from '../../constants/theme';
import {BellIcon, HomeIcon, ScreenCast, SearchIcon} from '../../components/svg';
import DrawerExample from '../../navigation/customDrawer';
import VideoItem from '../../components/videoItem';

const HomeScreen = ({navigation, route}) => {
  const isFocused = useIsFocused();
  const scrollY = new Animated.Value(0);
  const diffClamp = Animated.diffClamp(scrollY, 0, 64);
  const translateY = diffClamp.interpolate({
    inputRange: [0, 64],
    outputRange: [0, -64],
  });

  const openDrawerHandler = () => {
    // setOpen(true);
    navigation.dispatch(DrawerActions.toggleDrawer());
  };

  useEffect(() => {
    navigation.setOptions({
      tabBarIcon: () => <HomeIcon active={!!isFocused} />,
    });
  }, [isFocused]);

  const Data = {
    id: '1',
    title: 'Big Buck Bunny',
    thumbnailUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Big_Buck_Bunny_thumbnail_vlc.png/1200px-Big_Buck_Bunny_thumbnail_vlc.png',
    duration: '8:18',
    uploadTime: 'May 9, 2011',
    views: '24,969,123',
    author: 'Vlc Media Player',
    videoUrl:
      'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    description:
      "Big Buck Bunny tells the story of a giant rabbit with a heart bigger than himself. When one sunny day three rodents rudely harass him, something snaps... and the rabbit ain't no bunny anymore! In the typical cartoon tradition he prepares the nasty rodents a comical revenge.\n\nLicensed under the Creative Commons Attribution license\nhttp://www.bigbuckbunny.org",
    subscriber: '25254545 Subscribers',
    isLive: true,
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.primarbgdark}}>
      <View
        style={{
          // borderWidth: 1,
          // borderColor: 'white',
          width: '100%',
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: 15,
        }}>
        <Logo />
        <View
          style={{
            flexDirection: 'row',
            gap: 15,
            height: '100%',
            alignItems: 'center',
          }}>
          <ScreenCast />
          <BellIcon />
          <SearchIcon />
        </View>
      </View>
      <View style={{flex: 1}}>
        <VideoItem data={Data} />
      </View>
      <Button title="open drawer" onPress={openDrawerHandler} />
    </SafeAreaView>
  );
};

export default HomeScreen;
