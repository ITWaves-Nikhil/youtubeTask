import {useEffect, useMemo, useState} from 'react';
import {
  SafeAreaView,
  View,
  Animated,
  Dimensions,
  FlatList,
  Text,
} from 'react-native';
import {styles} from './style';
import {Data} from '../../data';
import AnimtedAppBar from './AnimtedAppBar';
import {COLORS} from '../../constants/theme';
import VideoItem from '../../components/videoItem';
import CastScreenModal from '../../components/castScreenModal';
import ShortsGroup from '../../components/shortsGroup';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {
  OffsetYProvider,
  IndexProvider,
  InCenterConsumer,
} from '@n1ru4l/react-in-center-of-screen';

const {height: screenHeight, width: screenWidth} = Dimensions.get('window');

const boxHeight = screenHeight;
let barHeight = 100;

const HomeScreen = ({navigation, route}) => {
  const scrollY = new Animated.Value(0);
  const [activeTab, setActiveTab] = useState(0);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [currentPlaybackItem, setCurrentPlaybackItem] = useState(0);
  const insets = useSafeAreaInsets();

  const ScrollHeight = useMemo(() => {
    if (activeTab === 0) {
      return barHeight;
    } else {
      return barHeight / 2;
    }
  }, [activeTab]);

  const diffClamp = Animated.diffClamp(scrollY, 0, ScrollHeight + insets?.top);
  const translateY = diffClamp.interpolate({
    inputRange: [0, barHeight],
    outputRange: [0, -barHeight],
  });

  translateY.addListener(v => {
    // console.log({v});
  });

  const _renderItem = ({index, item}) => {
    switch (item?.type) {
      case 'video':
        return (
          <VideoItem
            data={item}
            index={index}
            currentPlaybackIndex={currentPlaybackItem}
          />
        );
      case 'Shorts':
        return <ShortsGroup data={item?.data} />;
      default:
        break;
    }
  };

  return (
    <>
      <SafeAreaView
        style={{
          // flex: 1,
          backgroundColor: COLORS.primarbgdark,
          paddingTop: insets?.top,
        }}>
        <AnimtedAppBar
          translateY={translateY}
          barHeight={barHeight}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          setIsModalVisible={setIsModalVisible}
          // setSearchActive={se/tSearchActive}
        />
        {/* <OffsetYProvider
          columnsPerRow={1}
          listItemHeight={screenHeight}
          centerYStart={(screenHeight / 100) * 15}
          centerYEnd={((screenHeight * 2) / 100) * 15}>
          {({setOffsetY}) => (
            <FlatList
              data={Data}
              ListHeaderComponent={() => (
                <View
                  style={{
                    height: barHeight,
                  }}></View>
              )}
              onScroll={({nativeEvent}) => {
                if (nativeEvent.contentOffset.y > 0) {
                  scrollY.setValue(nativeEvent.contentOffset.y);
                }
                setOffsetY(nativeEvent.contentOffset.y);
              }}
              scrollEventThrottle={16}
              keyExtractor={({index}) => index}
              renderItem={({index, item}) => {
                if (item?.type === 'video') {
                  return (
                    <IndexProvider index={index}>
                      {() => (
                        <View
                          style={
                            {
                              // borderWidth: 5,
                              // borderColor: 'white',
                              // height: '100%',
                              // backgroundColor: item,
                              // borderWidth: 1,
                              // borderColor: 'white',
                            }
                          }>
                          <InCenterConsumer>
                            {({isInCenter}) => {
                              if (isInCenter) {
                                // setCurrentPlayback(true);
                                return <VideoItem data={item} paused={false} />;
                              } else {
                                // setCurrentPlayback(false);
                                return <VideoItem data={item} paused={true} />;
                              }
                            }}
                          </InCenterConsumer>
                        </View>
                      )}
                    </IndexProvider>
                  );
                } else {
                  return <ShortsGroup data={item?.data} />;
                }
              }}
            />
          )}
        </OffsetYProvider> */}

        <FlatList
          ListHeaderComponent={() => <View style={{height: barHeight}}></View>}
          data={Data}
          viewabilityConfig={{
            itemVisiblePercentThreshold: 40,
          }}
          onViewableItemsChanged={
            ({changed, viewableItems}) =>
              setCurrentPlaybackItem(viewableItems[0]?.index)
            // console.log(viewableItems[0]?.index, viewableItems[0]?.item?.title)
          }
          renderItem={_renderItem}
          keyExtractor={item => item?.id + item?.duration}
          ItemSeparatorComponent={() => <View style={{height: 10}} />}
          scrollEventThrottle={16}
          onScroll={({nativeEvent}) => {
            if (nativeEvent.contentOffset.y > 0) {
              scrollY.setValue(nativeEvent.contentOffset.y);
            }
          }}
        />
      </SafeAreaView>
      {/* <CastScreenModal
        isModalVisible={isModalVisible}
        setIsModalVisible={setIsModalVisible}
      /> */}
    </>
  );
};

export default HomeScreen;
