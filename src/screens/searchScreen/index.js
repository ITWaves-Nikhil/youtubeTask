import {View, TextInput, FlatList} from 'react-native';
import {useRef, useState} from 'react';
import {addSearchItem} from '../../store/redux/searchSlice';
import {COLORS} from '../../constants/theme';
import AntIcon from 'react-native-vector-icons/AntDesign';
import {styles} from './style';
import PressableIcon from '../../components/pressableIcon';
import {ScreenCast} from '../../components/svg';
import RecentSearchItem from '../../components/recentSearchItem';
import {useDispatch, useSelector} from 'react-redux';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {PLACEHOLDERS} from '../../constants/enums';

const SearchScreen = ({navigation}) => {
  const [searchText, setSeachText] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const insets = useSafeAreaInsets();
  const searchInputRef = useRef();
  const dispatch = useDispatch();
  const searchItems = useSelector(state => state.searchList.searchItems);

  function handleSearchInput(value) {
    setSeachText(value);
  }

  function handleSearch() {
    setIsSearching(true);
    dispatch(addSearchItem(searchText));
  }

  return (
    <View style={[styles.innerContainer, {paddingTop: insets?.top}]}>
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
          value={searchText}
          ref={searchInputRef}
          placeholder={PLACEHOLDERS?.SEARCH_INPUT}
          placeholderTextColor={COLORS?.def_gray}
          style={styles.searchInput}
          autoFocus={true}
          onSubmitEditing={handleSearch}
          onChangeText={handleSearchInput}
        />
        <View style={styles.searchHeaderRight}>
          {searchText === '' && (
            <AntIcon
              name="microphone"
              size={24}
              color={COLORS.white}
              onPress={() => navigation.goBack()}
            />
          )}
          {isSearching && (
            <PressableIcon>
              <ScreenCast />
            </PressableIcon>
          )}
        </View>
      </View>
      <FlatList
        style={{paddingVertical: 10}}
        data={searchItems}
        renderItem={({item}) => <RecentSearchItem data={item} />}
      />
    </View>
  );
};

export default SearchScreen;
