import {View, Text, ActivityIndicator} from 'react-native';
import Modal from 'react-native-modal';
import React, {useEffect, useState} from 'react';
import {COLORS} from '../../constants/theme';
import {styles} from './style';
import {InfoIcon} from '../svg';

const CastScreenModal = ({isModalVisible, setIsModalVisible}) => {
  const [searching, setSearching] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setSearching(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, [searching]);

  function ListItem({children}) {
    return <View style={styles.listItem}>{children}</View>;
  }

  function closeModal() {
    setSearching(true);
    setIsModalVisible(false);
  }

  return (
    <Modal
      animationIn={'fadeIn'}
      isVisible={isModalVisible}
      onBackButtonPress={closeModal}
      onBackdropPress={closeModal}>
      <View style={styles.root}>
        <Text style={styles.headerText}>Connect to a device</Text>

        {!!searching ? (
          <ListItem>
            <ActivityIndicator color={COLORS?.blue} size={24} />
            <Text style={styles.listItemText}>Searching for device</Text>
          </ListItem>
        ) : (
          <ListItem>
            <Text style={styles.listItemText}>No device found</Text>
          </ListItem>
        )}
        <ListItem>
          <ActivityIndicator color={COLORS?.blue} size={24} />
          <Text style={styles.listItemText}>Link with TV code</Text>
        </ListItem>
        <ListItem>
          <View style={{height: '100%', width: 25}}>
            <InfoIcon />
          </View>
          <Text style={styles.listItemText}>Learn More</Text>
        </ListItem>
      </View>
    </Modal>
  );
};

export default CastScreenModal;
