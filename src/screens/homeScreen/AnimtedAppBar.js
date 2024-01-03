import {Animated, View, Text} from 'react-native';
const AnimtedAppBar = (translateY, navigation) => {
  return (
    <Animated.View
      style={{
        flexDirection: 'column',
        justifyContent: 'space-around',
        // backgroundColor: 'rgba(52, 52, 52, 0)',
        backgroundColor: 'red',
        width: '100%',
        //for animation
        height: 64,
        transform: [{translateY: translateY}],
        position: 'absolute',
        top: 0,
        right: 0,
        left: 0,
        elevation: 4,
        zIndex: 1,
      }}>
      <View style={{backgroundColor: 'blue', width: '100%', height: '50%'}}>
        <Text style={{color: 'red'}}>Title</Text>
      </View>
      <View style={{backgroundColor: 'pink', width: '100%', height: '50%'}}>
        <Text style={{color: 'red'}}>Stick on top</Text>
      </View>
    </Animated.View>
  );
};

export default AnimtedAppBar;
