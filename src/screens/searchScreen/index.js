import {View, TextInput, FlatList, Platform, Pressable} from 'react-native';
import {useEffect, useMemo, useRef, useState} from 'react';
import {addSearchItem} from '../../store/redux/searchSlice';
import AntIcon from 'react-native-vector-icons/AntDesign';
import {styles} from './style';
import CastScreenModalIOS from '../../components/castScreenModalIOS';
import PressableIcon from '../../components/pressableIcon';
import CastScreenModal from '../../components/castScreenModal';

import {
  CloseIcon,
  MicroPhone,
  ScreenCast,
  VerticalDots,
} from '../../components/svg';
import RecentSearchItem from '../../components/recentSearchItem';
import {useDispatch, useSelector} from 'react-redux';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {COLORS} from '../../constants/theme';
import IconWithBG from '../../components/iconWithBg';
import {PLACEHOLDERS} from '../../constants/enums';

const SearchScreen = ({navigation}) => {
  const [searchText, setSeachText] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const insets = useSafeAreaInsets();
  const searchInputRef = useRef();
  const dispatch = useDispatch();
  const searchItems = useSelector(state => state.searchList.searchItems);

  const filteredSearchItems = useMemo(() => {
    if (searchText === '') {
      return searchItems;
    } else {
      const filtered = searchItems.filter(
        item => item?.title.slice(0, searchText?.length) === searchText,
      );
      return filtered;
    }
  }, [searchText]);

  useEffect(() => {
    if (searchText === '') {
      setIsSearching(false);
    }
  }, [searchText]);

  function handleSearchInput(value) {
    setSeachText(value);
  }

  function handleSearch() {
    setIsSearching(true);
    dispatch(addSearchItem({title: searchText, id: searchText + +new Date()}));
  }

  return (
    <>
      <View style={[styles.innerContainer, {paddingTop: insets?.top}]}>
        <View style={styles.searchHeader}>
          <View style={styles.searchHeaderLeft}>
            <AntIcon
              name={Platform.select({ios: 'left', android: 'arrowleft'})}
              size={24}
              color={COLORS.white}
              onPress={() => navigation.goBack()}
            />
          </View>
          <View style={styles.searchInputContainer}>
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
            {searchText !== '' && (
              <Pressable
                onPress={() => setSeachText('')}
                hitSlop={{top: 10, left: 10, right: 10, bottom: 10}}>
                <CloseIcon />
              </Pressable>
            )}
          </View>

          <View style={styles.searchHeaderRight}>
            <IconWithBG containerStyle={styles.micContainer}>
              <MicroPhone />
            </IconWithBG>
            {isSearching && (
              <>
                <PressableIcon onPress={() => setIsModalVisible(true)}>
                  <ScreenCast />
                </PressableIcon>
                <PressableIcon>
                  <VerticalDots />
                </PressableIcon>
              </>
            )}
          </View>
        </View>
        <FlatList
          style={{paddingVertical: 10}}
          data={filteredSearchItems}
          renderItem={({item}) => <RecentSearchItem data={item} />}
        />
      </View>
      {Platform.OS === 'android' ? (
        <CastScreenModal
          isModalVisible={isModalVisible}
          setIsModalVisible={setIsModalVisible}
        />
      ) : (
        isModalVisible && (
          <CastScreenModalIOS setIsModalVisible={setIsModalVisible} />
        )
      )}
    </>
  );
};

export default SearchScreen;
