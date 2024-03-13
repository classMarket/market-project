import React, {
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useReducer,
} from 'react';
import {
  Dimensions,
  FlatList,
  SafeAreaView,
  ScrollView,
  StyleSheet,
} from 'react-native';
import {useFocusEffect} from '@react-navigation/native';
import {
  MyProfileStateType,
  MyProfileType,
  MyProductType,
} from '../../type/profile';
import {
  ProfileEmailRegisterRequired,
  ProfileHeader,
  ProfileMyPoint,
  ProfileSection,
  ProfileSectionLine,
  ProfileSectionNode,
  ProfileSummary,
} from '../../component/profile';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {PlainButton} from '../../component/ui-part';
import {getMyProfile, getMyProducts} from '../../api/profile';

const profileActivities = [
  {
    label: '관심목록',
    icon: ({iconSize}: {iconSize: number}) => (
      <Icon name="heart-outline" size={iconSize} />
    ),
    onPressHandler: () => {
      console.log('관심목록');
    },
  },
  {
    label: '구매내역',
    icon: ({iconSize}: {iconSize: number}) => (
      <Icon name="cart-outline" size={iconSize} />
    ),
    onPressHandler: () => {
      console.log('구매내역');
    },
  },
  {
    label: '등록내역',
    icon: ({iconSize}: {iconSize: number}) => (
      <Icon name="view-list-outline" size={iconSize} />
    ),
    onPressHandler: () => {
      console.log('등록내역');
    },
  },
  {
    label: '나의 모임',
    icon: ({iconSize}: {iconSize: number}) => (
      <Icon name="account-multiple-outline" size={iconSize} />
    ),
    onPressHandler: () => {
      console.log('나의 모임');
    },
  },
];

const windowWidth = Dimensions.get('window').width;

const goProfileDetail = (navigation: any) => {
  navigation.navigate('프로필상세');
};

export default function Profile({navigation, _route}: any) {
  const {state, dispatch} = useContext(ProfileContext);

  useFocusEffect(
    useCallback(() => {
      console.log('프로필 페이지 포커스');

      const fetchMyProfile = async () => {
        const myProfile = await getMyProfile();

        dispatch({type: 'SET_MY_PROFILE', newProfile: myProfile});
      };

      const fetchMyProducts = async () => {
        const myProducts = await getMyProducts();

        dispatch({type: 'SET_MY_PRODUCTS', newProducts: myProducts});
      };

      fetchMyProfile();
      fetchMyProducts();
    }, [dispatch]),
  );

  return (
    <SafeAreaView style={styles.container}>
      <ProfileHeader />
      <ScrollView style={{width: windowWidth}}>
        <ProfileSummary
          detailShown={true}
          rightButton={
            <PlainButton
              text="프로필 보기"
              onPressHandler={() => goProfileDetail(navigation)}
              paddingVertical={4}
              paddingHorizontal={8}
            />
          }
        />

        <ProfileMyPoint />

        {!state.profile.registeredEmailStatus && (
          <ProfileEmailRegisterRequired />
        )}

        <ProfileSection title={'활동'}>
          <ProfileSectionLine />
          <FlatList
            data={profileActivities}
            renderItem={({item}) => <ProfileSectionNode {...item} />}
            ItemSeparatorComponent={ProfileSectionLine}
            scrollEnabled={false}
            keyExtractor={item => item.label}
          />
        </ProfileSection>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
});
