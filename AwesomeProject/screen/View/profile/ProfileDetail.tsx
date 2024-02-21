import React, {useEffect} from 'react';
import {
  Dimensions,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import ProfileSummary from '../../../component/profile/ProfileSummary';
import PlainButton from '../../../component/ui-part/PlainButton';
import TabView from '../../../component/ui-part/TabView';
import ProfileMyProductView from '../../../component/profile/ProfileMyProductView';

function DummyView() {
  return <View></View>;
}

function ProfileDetailScreenHeader({goProfile}: {goProfile: () => void}) {
  return (
    <View style={styles.headerContainer}>
      <View style={{flex: 1}}>
        <TouchableOpacity onPress={goProfile}>
          <Icon
            name="chevron-back-outline"
            size={24}
            style={{lineHeight: 24}}
          />
        </TouchableOpacity>
      </View>
      <View>
        <Icon name="share-outline" size={24} />
      </View>
    </View>
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
    {title: '등록상품', body: <ProfileMyProductView />},
    {title: '거래내역', body: <DummyView />},
    {title: '모임활동', body: <DummyView />},
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ProfileDetailScreenHeader goProfile={goProfile} />
      <ScrollView style={{width: windowWidth}}>
        <ProfileSummary
          rightButton={
            <PlainButton
              text="프로필 편집"
              onPressHandler={() => {}}
              paddingVertical={4}
              paddingHorizontal={8}
            />
          }
        />
        <TabView tabs={tabs} />
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
    borderBottomWidth: 1,
    borderBottomColor: '#DDDDDD',
    paddingVertical: 14,
    paddingHorizontal: 21,
  },
});
