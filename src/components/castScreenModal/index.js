import {View, Text} from 'react-native';
import Modal from 'react-native-modal';
import React from 'react';

const CastScreenModal = ({isModalVisible, setIsModalVisible}) => {
  return (
    <Modal isVisible={isModalVisible}>
      <View style={{borderWidth: 1, borderColor: 'red', height: 400}}>
        <Text>I am the modal content!</Text>
      </View>
    </Modal>
  );
};

export default CastScreenModal;
