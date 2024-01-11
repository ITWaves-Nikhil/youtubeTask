import React, {useCallback, useMemo, ActivityIndicator, useRef} from 'react';
import {View, Text} from 'react-native';
import BottomSheet from '@gorhom/bottom-sheet';
import {styles} from './style';
import {COLORS} from '../../constants/theme';
import {InfoIcon} from '../svg';

const CastScreenModalIOS = ({setIsModalVisible}) => {
  // ref
  const bottomSheetRef = useRef();

  // variables
  const snapPoints = useMemo(() => ['25%', '30%'], []);

  // callbacks
  const handleSheetChanges = useCallback(index => {
    // console.log(index);
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
        detached={true}
        bottomInset={30}
        handleIndicatorStyle={{backgroundColor: COLORS.def_gray}}
        backgroundStyle={{
          backgroundColor: COLORS.inactive_grey,
          borderRadius: 8,
        }}
        containerStyle={{margin: 8, borderWidth: 1, borderColor: 'red'}}
        onChange={handleSheetChanges}>
        <View style={styles.contentContainer}>
          <Text style={styles.headerText}>Select a device</Text>
          <View style={styles.listItemContainer}>
            <View style={styles.iconContainer}>
              <InfoIcon />
            </View>
            <Text style={styles.listItemText}>
              AirPlay and Bluetooth Devices
            </Text>
          </View>
          <View style={styles.listItemContainer}>
            <View style={styles.iconContainer}>
              <InfoIcon />
            </View>
            <Text style={styles.listItemText}>Link with TV code</Text>
          </View>
          <View style={styles.listItemContainer}>
            <View style={styles.iconContainer}>
              <InfoIcon />
            </View>
            <Text style={styles.listItemText}>Learn More</Text>
          </View>
        </View>
      </BottomSheet>
    </View>
  );
};

export default CastScreenModalIOS;
