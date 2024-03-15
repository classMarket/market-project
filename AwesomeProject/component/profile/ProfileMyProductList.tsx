import React from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import ProfileSectionLine from './ProfileSectionLine';
import ProfileMyProduct from './ProfileMyProduct';
import {MyProductType} from '../../type/profile';

export default function ProfileMyProductList({
  products,
}: {
  products: MyProductType[];
}) {
  const productsDealCount = products.filter(
    product => product.tradingType === 'DEAL',
  ).length;
  const productsExchangeCount = products.filter(
    product => product.tradingType === 'EXCHANGE',
  ).length;
  const productsShareCount = products.filter(
    product => product.tradingType === 'SHARE',
  ).length;

  return (
    <View style={styles.container}>
      <Text style={styles.summary}>
        판매 {productsDealCount} 교환 {productsExchangeCount} 나눔{' '}
        {productsShareCount}
      </Text>
      <FlatList
        data={products}
        renderItem={({item}) => <ProfileMyProduct product={item} />}
        ItemSeparatorComponent={ProfileSectionLine}
        scrollEnabled={false}
        keyExtractor={item => item.productName.toString()} // TODO: 서버가 id를 반환해야함
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {marginHorizontal: 21, marginVertical: 24},
  summary: {
    color: '#7F7F7F',
  },
});
