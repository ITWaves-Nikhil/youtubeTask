import React, {useCallback, useMemo, useRef} from 'react';
import {ActivityIndicator} from 'react-native-paper';
import {View, Text, Pressable, Dimensions, LayoutAnimation} from 'react-native';
import BottomSheet from '@gorhom/bottom-sheet';
import {styles} from './style';
import {COLORS} from '../../constants/theme';
import {AirPlay, InfoIcon, LinkWithTv} from '../svg';
import {MODAL_TEXT} from '../../constants/strings';
const {height: screenHeight, width: screenWidth} = Dimensions.get('screen');
const CastScreenModalIOS = ({setIsModalVisible}) => {
  // ref
  const bottomSheetRef = useRef();

  // variables
  const snapPoints = useMemo(() => ['25%', '30%'], []);

  // callbacks
  const handleSheetChanges = useCallback(index => {
    if (index < 0) {
      setIsModalVisible(false);
    }
  }, []);

  // renders
  return (
    <View style={styles.container}>
      <BottomSheet
        ref={bottomSheetRef}
        snapPoints={snapPoints}
        overDragResistanceFactor={0}
        enablePanDownToClose={true}
        backdropComponent={() => {
          return (
            <Pressable
              hitSlop={{left: 30, right: 20}}
              style={{
                height: screenHeight,
                width: screenWidth,
              }}
              onPress={() => {
                LayoutAnimation.easeInEaseOut();
                setIsModalVisible(false);
              }}
            />
          );
        }}
        detached={true}
        bottomInset={30}
        handleIndicatorStyle={{backgroundColor: COLORS.def_gray}}
        backgroundStyle={{
          backgroundColor: COLORS.inactive_grey,
          borderRadius: 8,
        }}
        containerStyle={{margin: 8}}
        onChange={handleSheetChanges}>
        <View style={styles.contentContainer}>
          <View style={styles.headerContainer}>
            <Text style={styles.headerText}>{MODAL_TEXT?.iosTitle}</Text>
            <ActivityIndicator color={COLORS.def_gray} size={16} />
          </View>
          <View style={styles.listItemContainer}>
            <View style={styles.iconContainer}>
              <AirPlay />
            </View>
            <Text style={styles.listItemText}>{MODAL_TEXT?.airPlay}</Text>
          </View>
          <View style={styles.listItemContainer}>
            <View style={styles.iconContainer}>
              <LinkWithTv />
            </View>
            <Text style={styles.listItemText}>{MODAL_TEXT?.linkTv}</Text>
          </View>
          <View style={styles.listItemContainer}>
            <View style={styles.iconContainer}>
              <InfoIcon />
            </View>
            <Text style={styles.listItemText}>{MODAL_TEXT?.learnMore}</Text>
          </View>
        </View>
      </BottomSheet>
    </View>
  );
};

export default CastScreenModalIOS;
