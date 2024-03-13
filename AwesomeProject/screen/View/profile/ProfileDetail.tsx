import React, {useContext} from 'react';
import {Dimensions, SafeAreaView, ScrollView, StyleSheet} from 'react-native';
import {ProfileContext} from '../Profile';
import {
  ProfileMyProductList,
  ProfileDetailHeader,
  ProfileSummary,
} from '../../../component/profile';
import {PlainButton, TabView} from '../../../component/ui-part';
import {MyProductType} from '../../../type/profile';

const tabsByProducts = (products: MyProductType[]) => [
  {
    title: '등록상품',
    body: (
      <ProfileMyProductList
        products={products.filter(
          product => product.tradingStatus !== '거래완료',
        )}
      />
    ),
  },
  {
    title: '거래내역',
    body: (
      <ProfileMyProductList
        products={products.filter(
          product => product.tradingStatus === '거래완료',
        )}
      />
    ),
  },
];

const goProfile = (navigation: any) => {
  navigation.navigate('프로필');
};

const windowWidth = Dimensions.get('window').width;

export default function ProfileDetail({navigation, _route}: any) {
  const {state} = useContext(ProfileContext);

  return (
    <SafeAreaView style={styles.container}>
      <ProfileDetailHeader goProfile={() => goProfile(navigation)} />
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
        <TabView tabs={tabsByProducts(state.products)} />
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
