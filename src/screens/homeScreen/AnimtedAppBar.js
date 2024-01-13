import {Animated, View} from 'react-native';
import Logo from '../../components/logo';
import {DrawerActions, useNavigation} from '@react-navigation/native';
import {CATEGORIES} from '../../constants/enums';
import {
  BellIcon,
  CompassIcon,
  ScreenCast,
  SearchIcon,
} from '../../components/svg';
import {COLORS} from '../../constants/theme';
import {styles} from './AppBarStyles';
import PressableIcon from '../../components/pressableIcon';
import {FlatList} from 'react-native-gesture-handler';
import TopBarBadge from '../../components/topBarBadge';
import {useRef, useState} from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {SCREEN_NAMES} from '../../constants/navigation';

const AnimtedAppBar = ({
  translateY,
  barHeight,
  activeTab,
  setActiveTab,
  setIsModalVisible,
}) => {
  const insets = useSafeAreaInsets();
  // console.log({insets});
  const navigation = useNavigation();
  const [scrollPosition, setScrollPosition] = useState(0);

  const listRef = useRef();

  // useEffect(() => {
  //   listRef.current.scrollToIndex({index: activeTab});
  //   // console.log(scrollPosition);
  // }, [activeTab]);

  const openDrawerHandler = () => {
    navigation.dispatch(DrawerActions.toggleDrawer());
  };

  const animatedStyles = {
    //for animation
    height: barHeight,
    transform: [{translateY: translateY}],
    position: 'absolute',
    // top: insets?.top,
    elevation: 4,
    zIndex: 1,
  };

  return (
    <Animated.View
      style={[styles.defaultAppBar, {marginTop: insets?.top}, animatedStyles]}>
      <View style={styles.topBar}>
        <Logo />
        <View style={styles.topBarIconsContainer}>
          <PressableIcon>
            <ScreenCast onPress={() => setIsModalVisible(true)} />
          </PressableIcon>
          <PressableIcon
            onPress={() =>
              navigation.navigate(SCREEN_NAMES?.NOTIFICATION_SCREEN)
            }>
            <BellIcon />
          </PressableIcon>
          <PressableIcon
            onPress={() => navigation.navigate(SCREEN_NAMES?.SEARCH_SCREEN)}>
            <SearchIcon />
          </PressableIcon>
        </View>
      </View>
      <View style={styles.bottomBar}>
        <FlatList
          ref={listRef}
          showsHorizontalScrollIndicator={false}
          // initialScrollIndex={activeTab}
          // onScrollToIndexFailed={({index, averageItemLength}) => {
          //   const wait = new Promise(resolve => setTimeout(resolve, 500));
          //   wait.then(() => {
          //     listRef.current?.scrollToIndex({
          //       index: index,
          //       animated: true,
          //       // offset: averageItemLength * index - 1,
          //     });
          //   });
          // }}
          ListHeaderComponent={() => (
            <TopBarBadge>
              <PressableIcon onPress={openDrawerHandler}>
                <CompassIcon />
              </PressableIcon>
            </TopBarBadge>
          )}
          data={CATEGORIES}
          horizontal={true}
          // onScroll={({nativeEvent}) => console.log(nativeEvent.contentOffset.x)}
          renderItem={({item, index}) => (
            <TopBarBadge
              data={item}
              index={index}
              activeTab={activeTab}
              setActiveTab={setActiveTab}
              setScrollPosition={setScrollPosition}
            />
          )}
        />
      </View>
    </Animated.View>
  );
};

export default AnimtedAppBar;
