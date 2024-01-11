import {View, Text, SafeAreaView, Button} from 'react-native';
import React, {useEffect, useState} from 'react';
import {COLORS} from '../../constants/theme';

import {styles} from './style';
import CastScreenModalIOS from '../../components/castScreenModalIOS';

const ShortsScreen = ({navigation, route}) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  return (
    <SafeAreaView style={styles.root}>
      <View style={styles.main}>
        <Button
          title="open modal"
          onPress={() => setIsModalVisible(state => !state)}
        />

        <Text style={styles.whiteText}>ShortsScreen</Text>
        {isModalVisible && (
          <CastScreenModalIOS setIsModalVisible={setIsModalVisible} />
        )}
      </View>
    </SafeAreaView>
  );
};

export default ShortsScreen;
