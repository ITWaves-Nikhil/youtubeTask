import {View, Text, SafeAreaView, TextInput} from 'react-native';
import React, {useEffect, useRef} from 'react';
import {COLORS} from '../../constants/theme';
import AntIcon from 'react-native-vector-icons/AntDesign';
import {styles} from './style';
import PressableIcon from '../../components/pressableIcon';
import {ScreenCast} from '../../components/svg';

const SearchScreen = ({navigation}) => {
  const searchInputRef = useRef();

  return (
    <SafeAreaView style={styles.rootContainer}>
      <View style={styles.innerContainer}>
        <View style={styles.searchHeader}>
          <View style={styles.searchHeaderLeft}>
            <AntIcon
              name="left"
              size={24}
              color={'white'}
              onPress={() => navigation.goBack()}
            />
          </View>

          <TextInput
            ref={searchInputRef}
            placeholder="Search Youtube"
            placeholderTextColor={'#ccc'}
            style={styles.searchInput}
            // autoFocus={true}
          />
          <View style={styles.searchHeaderRight}>
            <AntIcon
              name="microphone"
              size={24}
              color={COLORS.white}
              onPress={() => navigation.goBack()}
            />
            <PressableIcon>
              <ScreenCast />
            </PressableIcon>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SearchScreen;
