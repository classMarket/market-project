import React, {useEffect, ReactNode} from 'react';
import {
  DimensionValue,
  Dimensions,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

function ProfileScreenHeader() {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 17,
        marginHorizontal: 21,
      }}>
      <View style={{flex: 1, alignItems: 'center'}}>
        <Text style={{fontSize: 16, fontWeight: '700'}}>내 프로필</Text>
      </View>
      <View>
        <Icon name="settings-outline" size={24} />
      </View>
    </View>
  );
}

function ProfileSummary() {
  return (
    <View
      style={{
        marginHorizontal: 21, // TODO:화면 크기에따라 동적으로 설정할지 확인
      }}>
      <View style={{flexDirection: 'row', marginTop: 14, marginBottom: 21}}>
        <View>
          <Image
            source={require('../../assets/Profile_active.png')}
            style={{width: 42, height: 42, borderRadius: 21, borderWidth: 1}}
          />
        </View>
        <View style={{flex: 1, marginLeft: 11}}>
          <Text style={{fontSize: 16, lineHeight: 24, fontWeight: '700'}}>
            닉네임
          </Text>
          <View style={{flexDirection: 'row'}}>
            <Text style={{fontSize: 12, lineHeight: 18, fontWeight: '400'}}>
              평점 0.0
            </Text>
            <Text
              style={{
                fontSize: 12,
                lineHeight: 18,
                fontWeight: '400',
                marginLeft: 7,
              }}>
              등록상품 3
            </Text>
            <Text
              style={{
                fontSize: 12,
                lineHeight: 18,
                fontWeight: '400',
                marginLeft: 7,
              }}>
              모임활동 1
            </Text>
          </View>
        </View>
        <View style={{marginTop: 7}}>
          <View
            style={{
              backgroundColor: '#E5E5E5',
              borderRadius: 4,
              paddingVertical: 4,
              paddingHorizontal: 8,
            }}>
            <Text style={{fontSize: 12, lineHeight: 18}}>프로필 보기</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

function ProfileMyPoint() {
  const windowWidth = Dimensions.get('window').width;

  return (
    <View
      style={{
        marginHorizontal: 21, // TODO:화면 크기에따라 동적으로 설정할지 확인
      }}>
      <View
        style={{
          borderWidth: 1,
          borderRadius: 8,
          borderColor: '#D8D8D8',
          paddingHorizontal: 17,
          paddingVertical: 19,
        }}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View style={{flexDirection: 'row', marginBottom: 15}}>
            <Text style={{fontSize: 16, lineHeight: 19, fontWeight: '900'}}>
              내 포인트
            </Text>
            <Icon
              name="chevron-forward-outline"
              size={17}
              style={{lineHeight: 19}}
            />
          </View>
          <View>
            <Text style={{fontSize: 20, fontWeight: '700'}}>2,024 P</Text>
          </View>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View>
            <View
              style={{
                backgroundColor: '#E5E5E5',
                borderRadius: 4,
                paddingVertical: 7,
                width: windowWidth / 2 - 42,
                alignItems: 'center',
              }}>
              <Text style={{fontSize: 12, lineHeight: 18, flex: 1}}>사용</Text>
            </View>
          </View>
          <View>
            <View
              style={{
                backgroundColor: '#E5E5E5',
                borderRadius: 4,
                paddingVertical: 7,
                width: windowWidth / 2 - 42,
                alignItems: 'center',
              }}>
              <Text style={{fontSize: 12, lineHeight: 18}}>출금</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

function ProfileSection({
  children,
  title,
}: {
  children: ReactNode;
  title: string;
}) {
  return (
    <View
      style={{
        marginHorizontal: 21, // TODO:화면 크기에따라 동적으로 설정할지 확인
      }}>
      <View>
        <BlankSpace height={42} />
        <View>
          <ProfileSectionTitle>{title}</ProfileSectionTitle>
        </View>
        {children}
        <BlankSpace height={42} />
      </View>
    </View>
  );
}

function ProfileSectionTitle({children}: {children: ReactNode}) {
  return (
    <View style={{marginBottom: 24}}>
      <Text style={{fontSize: 20, lineHeight: 30, fontWeight: '900'}}>
        {children}
      </Text>
    </View>
  );
}

function ProfileSectionNode({
  icon,
  label,
  onPressHandler,
}: {
  icon: ({iconSize}: {iconSize: number}) => ReactNode;
  label: string;
  onPressHandler: () => void;
}) {
  const iconSize = 16;
  return (
    <TouchableOpacity
      onPress={onPressHandler}
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 18,
      }}>
      <View>
        <Text style={{lineHeight: 21}}>{icon({iconSize})}</Text>
      </View>
      <View style={{flex: 1}}>
        <Text
          style={{
            fontSize: 14,
            lineHeight: 21,
            marginLeft: 8,
            fontWeight: '400',
          }}>
          {label}
        </Text>
      </View>
      <View>
        <Icon
          name="chevron-forward-outline"
          size={17}
          style={{lineHeight: 19}}
        />
      </View>
    </TouchableOpacity>
  );
}

function ProfileSectionLine() {
  return (
    <View style={{backgroundColor: '#cccccc', width: '100%', height: 2}}></View>
  );
}
function BlankSpace({
  width = '100%',
  height = 24,
  color = 'white',
}: {
  width?: DimensionValue;
  height?: DimensionValue;
  color?: string;
}) {
  return (
    <View style={{display: 'flex', backgroundColor: color}}>
      <View style={[{flex: 1, width, height}]}>
        <Text> </Text>
      </View>
    </View>
  );
}

export default function Profile({_navigation, _route}: any) {
  const windowWidth = Dimensions.get('window').width;

  useEffect(() => {
    console.log('프로필 Page Call');
  }, []);

  return (
    <SafeAreaView style={styles.SafeAreaView}>
      <ProfileScreenHeader />
      <ScrollView style={[styles.scrollView, {width: windowWidth}]}>
        <ProfileSummary />
        <ProfileMyPoint />
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
  SafeAreaView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  scrollView: {},
  text: {
    color: 'black',
  },
});
