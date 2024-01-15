import React, {useCallback, useMemo, useRef} from 'react';
import {ActivityIndicator} from 'react-native-paper';
import {View, Text, Pressable, Dimensions} from 'react-native';
import BottomSheet, {BottomSheetModalProvider} from '@gorhom/bottom-sheet';
import {Portal, PortalHost} from '@gorhom/portal';
import {styles} from './style';
import {COLORS} from '../../constants/theme';
import {AirPlay, InfoIcon, LinkWithTv} from '../svg';
import {MODAL_TEXT} from '../../constants/strings';
const {height: screenHeight, width: screenWidth} = Dimensions.get('screen');
const CastScreenModalIOS = ({setIsModalVisible}) => {
  const bottomSheetRef = useRef();

  const snapPoints = useMemo(() => ['30%', '30%'], []);
  const handleSheetChanges = useCallback(index => {
    if (index < 0) {
      setIsModalVisible(false);
    }
  }, []);

  return (
    <>
      <Portal>
        <BottomSheetModalProvider>
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
              containerStyle={{margin: 6}}
              onChange={handleSheetChanges}>
              <View style={styles.contentContainer}>
                <View style={styles.headerContainer}>
                  <Text style={styles.headerText}>{MODAL_TEXT?.iosTitle}</Text>
                  <ActivityIndicator color={COLORS.def_gray} size={16} />
                </View>
                <View style={styles.itemsContainer}>
                  <View style={styles.listItemContainer}>
                    <View style={styles.iconContainer}>
                      <AirPlay />
                    </View>
                    <Text style={styles.listItemText}>
                      {MODAL_TEXT?.airPlay}
                    </Text>
                  </View>
                  <View style={styles.listItemContainer}>
                    <View style={styles.iconContainer}>
                      <LinkWithTv />
                    </View>
                    <Text style={styles.listItemText}>
                      {MODAL_TEXT?.linkTv}
                    </Text>
                  </View>
                  <View style={styles.listItemContainer}>
                    <View style={styles.iconContainer}>
                      <InfoIcon />
                    </View>
                    <Text style={styles.listItemText}>
                      {MODAL_TEXT?.learnMore}
                    </Text>
                  </View>
                </View>
              </View>
            </BottomSheet>
          </View>
        </BottomSheetModalProvider>
      </Portal>
      <PortalHost name="custom_host" />
    </>
  );
};

export default CastScreenModalIOS;
