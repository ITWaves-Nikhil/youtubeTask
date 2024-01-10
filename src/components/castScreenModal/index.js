import {View, Text} from 'react-native';
import Modal from 'react-native-modal';
import React from 'react';
import {COLORS} from '../../constants/theme';

const CastScreenModal = ({isModalVisible, setIsModalVisible}) => {
  return (
    <Modal isVisible={isModalVisible}>
      <View
        style={{
          borderWidth: 1,
          borderColor: 'red',

          height: 400,
          backgroundColor: COLORS.inactive_grey,
        }}>
        <Text>Connect to a device</Text>
      </View>
    </Modal>
  );
};

export default CastScreenModal;
