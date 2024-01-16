import {View, Text} from 'react-native';
import Modal from 'react-native-modal';
import React, {useEffect, useState} from 'react';
import {COLORS} from '../../constants/theme';
import {styles} from './style';
import {InfoIcon, LinkWithTv} from '../svg';
import {ActivityIndicator} from 'react-native-paper';
import {MODAL_TEXT} from '../../constants/strings';

const CastScreenModal = ({isModalVisible, setIsModalVisible}) => {
  const [searching, setSearching] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setSearching(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, [searching, isModalVisible]);

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
      animationOut={'fadeOut'}
      isVisible={isModalVisible}
      onBackButtonPress={closeModal}
      onBackdropPress={closeModal}>
      <View style={styles.root}>
        <Text style={styles.headerText}>{MODAL_TEXT?.androidTitle}</Text>

        {!!searching ? (
          <ListItem>
            <ActivityIndicator color={COLORS?.blue} size={22} />
            <Text style={styles.listItemText}>
              {MODAL_TEXT?.serachingDevice}
            </Text>
          </ListItem>
        ) : (
          <ListItem>
            <Text style={styles.listItemText}>{MODAL_TEXT?.noDevice}</Text>
          </ListItem>
        )}
        <ListItem>
          <LinkWithTv />
          <Text style={styles.listItemText}>{MODAL_TEXT?.linkTv}</Text>
        </ListItem>
        <ListItem>
          <View style={styles.iconContainer}>
            <InfoIcon />
          </View>
          <Text style={styles.listItemText}>{MODAL_TEXT?.learnMore}</Text>
        </ListItem>
      </View>
    </Modal>
  );
};

export default CastScreenModal;
