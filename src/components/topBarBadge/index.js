import {View, Text, Pressable} from 'react-native';
import React from 'react';
import {COLORS} from '../../constants/theme';
import {styles} from './style';

const TobBarBadge = ({
  data,
  activeTab,
  setActiveTab,
  children,
  setScrollPosition,
}) => {
  const currentTabActive = activeTab === data && !children;
  const SidePadding = !!children ? 4 : 8;

  const TabPressHandler = ({nativeEvent}) => {
    console.log(nativeEvent);
    // setScrollPosition(nativeEvent?.pageX);
    setActiveTab(data);
  };

  return (
    <Pressable onPress={TabPressHandler} style={styles.rootContainer}>
      <View
        style={[
          styles.innerContainer,
          {paddingHorizontal: SidePadding},
          currentTabActive && {backgroundColor: COLORS.active_white},
        ]}>
        {!!children && children}
        {data && (
          <Text style={currentTabActive ? styles.blackText : styles.whiteText}>
            {data}
          </Text>
        )}
      </View>
    </Pressable>
  );
};

export default TobBarBadge;
