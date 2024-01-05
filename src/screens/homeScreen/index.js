import {useEffect, useState} from 'react';
import {SafeAreaView, View, Animated, FlatList} from 'react-native';
import {styles} from './style';
import {Data} from '../../data';

import AnimtedAppBar from './AnimtedAppBar';
import {COLORS} from '../../constants/theme';
import VideoItem from '../../components/videoItem';
import CastScreenModal from '../../components/castScreenModal';

const HomeScreen = ({navigation, route}) => {
  const [activeTab, setActiveTab] = useState('All');
  const [isModalVisible, setIsModalVisible] = useState(false);
  let barHeight = 100;

  useEffect(() => {
    if (activeTab !== 'All') {
      barHeight = 50;
    } else {
      barHeight = 100;
    }
  }, [activeTab]);

  const scrollY = new Animated.Value(0);
  const diffClamp = Animated.diffClamp(scrollY, 0, barHeight);
  const translateY = diffClamp.interpolate({
    inputRange: [10, barHeight],
    outputRange: [0, -barHeight / 6],
  });

  function _renderItem({item}) {
    return <VideoItem data={item} />;
  }

  return (
    <>
      <SafeAreaView style={{flex: 1, backgroundColor: COLORS.primarbgdark}}>
        {/* {AnimtedAppBar(translateY, barHeight, setIsModalVisible)} */}
        <FlatList
          ListHeaderComponent={() => (
            <AnimtedAppBar
              translateY={translateY}
              barHeight={barHeight}
              activeTab={activeTab}
              setActiveTab={setActiveTab}
              setIsModalVisible={setIsModalVisible}
            />
          )}
          data={Data}
          renderItem={_renderItem}
          keyExtractor={item => item?.id + item?.duration}
          ItemSeparatorComponent={() => <View style={{height: 10}} />}
          onScroll={({nativeEvent}) =>
            scrollY.setValue(nativeEvent.contentOffset.y)
          }
        />
      </SafeAreaView>
      <CastScreenModal
        isModalVisible={isModalVisible}
        setIsModalVisible={setIsModalVisible}
      />
    </>
  );
};

export default HomeScreen;
