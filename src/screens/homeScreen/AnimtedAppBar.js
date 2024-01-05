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
import {useEffect, useRef, useState} from 'react';

const AnimtedAppBar = ({
  translateY,
  barHeight,
  setIsModalVisible,
  activeTab,
  setActiveTab,
}) => {
  const navigation = useNavigation();
  const [scrollPosition, setScrollPosition] = useState(0);

  const listRef = useRef();
  useEffect(() => {
    console.log(scrollPosition);
  }, [scrollPosition]);

  const openDrawerHandler = () => {
    navigation.dispatch(DrawerActions.toggleDrawer());
  };

  const animatedStyles = {
    //for animation
    height: barHeight,
    transform: [{translateY: translateY}],
    // position: 'absolute',
    top: 0,
    elevation: 4,
    zIndex: 1,
  };

  return (
    <Animated.View style={[styles.defaultAppBar, animatedStyles]}>
      <View style={styles.topBar}>
        <Logo />
        <View style={styles.topBarIconsContainer}>
          <PressableIcon>
            <ScreenCast onPress={() => setIsModalVisible(true)} />
          </PressableIcon>
          <PressableIcon onPress={() => navigation.navigate('Notification')}>
            <BellIcon />
          </PressableIcon>
          <PressableIcon>
            <SearchIcon />
          </PressableIcon>
        </View>
      </View>
      <View style={styles.bottomBar}>
        <FlatList
          ref={listRef}
          ListHeaderComponent={() => (
            <TopBarBadge>
              <PressableIcon onPress={openDrawerHandler}>
                <CompassIcon />
              </PressableIcon>
            </TopBarBadge>
          )}
          data={CATEGORIES}
          horizontal={true}
          renderItem={({item}) => (
            <TopBarBadge
              data={item}
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
