import React, {ReactNode, useEffect, useState} from 'react';
import {
  Dimensions,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {ProfileSectionLine, ProfileSummary} from '../Profile';

function ProfileDetailScreenHeader({goProfile}: {goProfile: () => void}) {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 17,
        paddingHorizontal: 21,
        borderBottomWidth: 1,
        borderBottomColor: '#DDDDDD',
      }}>
      <View style={{flex: 1}}>
        <TouchableOpacity onPress={goProfile}>
          <Icon
            name="chevron-back-outline"
            size={24}
            style={{lineHeight: 19}}
          />
        </TouchableOpacity>
      </View>
      <View>
        <Icon name="share-outline" size={24} />
      </View>
    </View>
  );
}

interface TabType {
  title: string;
  body: ReactNode;
}

function TabView({tabs}: {tabs: TabType[]}) {
  const [currentTab, setCurrentTab] = useState(tabs[0].title);

  const activatedStyle = {
    borderBottomWidth: 2,
    borderColor: 'black',
  };

  const inActivatedStyle = {
    borderBottomWidth: 1,
    borderColor: '#9E9E9E',
  };

  return (
    <View>
      <View style={{flexDirection: 'row'}}>
        {tabs.map(({title}) => (
          <View
            style={[
              {
                flex: 1,
                alignItems: 'center',
                height: 40,
              },
              title === currentTab ? activatedStyle : inActivatedStyle,
            ]}>
            <TouchableOpacity onPress={() => setCurrentTab(title)}>
              <Text
                style={{
                  fontSize: 16,
                  lineHeight: 24,
                  marginVertical: 8,
                  fontWeight: '600',
                }}>
                {title}
              </Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>
      <View>{tabs.find(tab => tab.title === currentTab)?.body}</View>
    </View>
  );
}

function TabViewChild1Node() {
  return (
    <View
      style={{
        borderWidth: 1,
        borderRadius: 14,
        width: 80,
        height: 80,
        margin: 6,
      }}></View>
  );
}

function TabViewChild1() {
  return (
    <View style={{marginHorizontal: 21, marginVertical: 10}}>
      <View style={{marginVertical: 16}}>
        <View style={{flexDirection: 'row', marginBottom: 16}}>
          <Text style={{fontSize: 16, lineHeight: 19, fontWeight: '700'}}>
            판매 10
          </Text>
          <Icon
            name="chevron-forward-outline"
            size={17}
            style={{lineHeight: 19}}
          />
        </View>
        <ScrollView horizontal={true}>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(_item => (
            <TabViewChild1Node />
          ))}
        </ScrollView>
      </View>
      <ProfileSectionLine />
      <View style={{marginVertical: 16}}>
        <View style={{flexDirection: 'row', marginBottom: 15}}>
          <Text style={{fontSize: 16, lineHeight: 19, fontWeight: '700'}}>
            교환 1
          </Text>
          <Icon
            name="chevron-forward-outline"
            size={17}
            style={{lineHeight: 19}}
          />
        </View>
        <ScrollView horizontal={true}>
          {[1].map(_item => (
            <TabViewChild1Node />
          ))}
        </ScrollView>
      </View>
      <ProfileSectionLine />
      <View style={{marginVertical: 16}}>
        <View style={{flexDirection: 'row', marginBottom: 15}}>
          <Text style={{fontSize: 16, lineHeight: 19, fontWeight: '700'}}>
            나눔 0
          </Text>
          <Icon
            name="chevron-forward-outline"
            size={17}
            style={{lineHeight: 19}}
          />
        </View>
        <View style={{alignItems: 'center', marginVertical: 30}}>
          <Text>나눔 중인 물건이 없습니다.</Text>
        </View>
      </View>
    </View>
  );
}

function TabViewChild2() {
  return <View></View>;
}

function TabViewChild3() {
  return <View></View>;
}

function EditProfileButton({onPressHandler}: {onPressHandler: () => void}) {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: '#E5E5E5',
        borderRadius: 4,
        paddingVertical: 4,
        paddingHorizontal: 8,
      }}
      onPress={onPressHandler}>
      <Text style={{fontSize: 12, lineHeight: 18}}>프로필 편집</Text>
    </TouchableOpacity>
  );
}

export default function ProfileDetail({navigation, _route}: any) {
  const windowWidth = Dimensions.get('window').width;

  useEffect(() => {
    console.log('프로필 디테일 Page Call');
  }, []);

  const goProfile = () => {
    navigation.navigate('프로필');
  };

  const tabs = [
    {title: '등록상품', body: <TabViewChild1 />},
    {title: '거래내역', body: <TabViewChild2 />},
    {title: '모임활동', body: <TabViewChild3 />},
  ];

  return (
    <SafeAreaView style={styles.SafeAreaView}>
      <ProfileDetailScreenHeader goProfile={goProfile} />
      <ScrollView style={{width: windowWidth}}>
        <ProfileSummary
          rightButton={<EditProfileButton onPressHandler={() => {}} />}
        />
        <TabView tabs={tabs} />
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
});
