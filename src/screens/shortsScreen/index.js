import {View, Text, SafeAreaView} from 'react-native';
import {COLORS} from '../../constants/theme';
import {styles} from './style';

const ShortsScreen = ({navigation, route}) => {
  return (
    <>
      <SafeAreaView style={{flex: 1, backgroundColor: COLORS.primarbgdark}}>
        <View style={{flex: 1, backgroundColor: COLORS.primarbgdark}}>
          <Text style={{color: 'white'}}>SubscriptionScreen</Text>
        </View>
      </SafeAreaView>
    </>
  );
};

export default ShortsScreen;
