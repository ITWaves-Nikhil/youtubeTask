import {View, Text, ActivityIndicator} from 'react-native';
import Modal from 'react-native-modal';
import React, {useEffect, useState} from 'react';
import {COLORS} from '../../constants/theme';
import {styles} from './style';

const CastScreenModal = ({isModalVisible, setIsModalVisible}) => {
  const [searching, setSearching] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setSearching(false);
    }, 5000);
    return clearTimeout(timer);
  }, []);

  function ListItem({children}) {
    return <View style={styles.listItem}>{children}</View>;
  }

  return (
    <Modal
      animationIn={'fadeIn'}
      isVisible={isModalVisible}
      onBackButtonPress={() => setIsModalVisible(false)}
      onBackdropPress={() => setIsModalVisible(false)}>
      <View style={styles.root}>
        <Text style={styles.headerText}>Connect to a device</Text>

        {!!searching ? (
          <ListItem>
            <ActivityIndicator color={COLORS?.blue} size={24} />
            <Text
              style={{
                fontSize: 14,
                color: COLORS?.def_gray,
                fontWeight: '400',
              }}>
              Searching for device
            </Text>
          </ListItem>
        ) : (
          <ListItem>
            <Text
              style={{
                fontSize: 14,
                color: COLORS?.def_gray,
                fontWeight: '400',
              }}>
              No device found
            </Text>
          </ListItem>
        )}
        <ListItem>
          <ActivityIndicator color={COLORS?.blue} size={24} />
          <Text
            style={{fontSize: 14, color: COLORS?.def_gray, fontWeight: '400'}}>
            Link with TV code
          </Text>
        </ListItem>
        <ListItem>
          <ActivityIndicator color={COLORS?.blue} size={24} />
          <Text
            style={{fontSize: 14, color: COLORS?.def_gray, fontWeight: '400'}}>
            Learn More
          </Text>
        </ListItem>
      </View>
    </Modal>
  );
};

export default CastScreenModal;
