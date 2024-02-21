import React, {useEffect} from 'react';
import {
  Dimensions,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import ProfileMyPoint from '../../component/profile/ProfileMyPoint';
import ProfileSummary from '../../component/profile/ProfileSummary';
import ProfileSection from '../../component/profile/ProfileSection';
import ProfileSectionLine from '../../component/profile/ProfileSectionLine';
import ProfileSectionNode from '../../component/profile/ProfileSectionNode';
import BlankSpace from '../../component/ui-part/BlankSpace';
import PlainButton from '../../component/ui-part/PlainButton';

function ProfileHeader() {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.labelContainer}>
        <Text style={styles.label}>내 프로필</Text>
      </View>
      <View>
        <Icon name="settings-outline" size={24} />
      </View>
    </View>
  );
}

export default function Profile({navigation, _route}: any) {
  const dummyData = {
    profile: {
      ratings: 10,
      products_count: 10,
      meetings_count: 10,
      profile_image_url: '',
      point: 10,
      email_authentication_status: false,
    },
    settings: {
      notification: {
        chat: false,
        meeting: false,
        notice: false,
      },
    },
  };

  console.log(dummyData);

  const windowWidth = Dimensions.get('window').width;

  useEffect(() => {
    console.log('프로필 Page Call');
  }, []);

  const goProfileDetail = () => {
    navigation.navigate('프로필상세');
  };

  return (
    <SafeAreaView style={styles.container}>
      <ProfileHeader />
      <ScrollView style={{width: windowWidth}}>
        <ProfileSummary
          detailShown={true}
          rightButton={
            <PlainButton
              text="프로필 보기"
              onPressHandler={goProfileDetail}
              paddingVertical={4}
              paddingHorizontal={8}
            />
          }
        />
        <ProfileMyPoint point={dummyData.profile.point} />
        <ProfileSection title={'활동'}>
          <ProfileSectionLine />
          <ProfileSectionNode
            icon={({iconSize}) => <Icon name="heart-outline" size={iconSize} />}
            label="관심목록"
            onPressHandler={() => {
              console.log('관심목록');
            }}
          />
          <ProfileSectionLine />
          <ProfileSectionNode
            icon={({iconSize}) => <Icon name="cart-outline" size={iconSize} />}
            label="구매내역"
            onPressHandler={() => {
              console.log('구매내역');
            }}
          />
          <ProfileSectionLine />
          <ProfileSectionNode
            icon={({iconSize}) => <Icon name="list-outline" size={iconSize} />}
            label="등록내역"
            onPressHandler={() => {
              console.log('등록내역');
            }}
          />
          <ProfileSectionLine />
          <ProfileSectionNode
            icon={({iconSize}) => (
              <Icon name="people-outline" size={iconSize} />
            )}
            label="나의 모임"
            onPressHandler={() => {
              console.log('나의 모임');
            }}
          />
        </ProfileSection>
        <BlankSpace height={6} color="#D9D9D9" />
        <ProfileSection title={'앱알림'}>
          <ProfileSectionLine />
          <ProfileSectionNode
            icon={({iconSize}) => (
              <Icon name="chatbubbles-outline" size={iconSize} />
            )}
            label="채팅 알림"
            onPressHandler={() => {
              console.log('채팅 알림');
            }}
          />
          <ProfileSectionLine />
          <ProfileSectionNode
            icon={({iconSize}) => (
              <Icon name="pricetags-outline" size={iconSize} />
            )}
            label="카테고리 알림"
            onPressHandler={() => {
              console.log('카테고리 알림');
            }}
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
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 17,
    paddingHorizontal: 21,
  },
  labelContainer: {
    flex: 1,
    alignItems: 'center',
  },
  label: {
    fontSize: 16,
    fontWeight: '700',
  },
});
