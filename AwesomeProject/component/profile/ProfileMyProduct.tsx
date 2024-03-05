import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import PlainButton from '../ui-part/PlainButton';
import Photo from '../ui-part/Photo';
import {MyProductType} from '../../type/profile';

function getProductConditionText(key: string) {
  const enumMap: Record<string, string> = {
    NEW: '신상품',
    SECOND_HAND: '중고상품',
  };

  return enumMap[key];
}

function getTradingMethodText(key: string) {
  const enumMap: Record<string, string> = {
    DIRECT: '직거래',
    DELIVERY: '택배거래',
  };

  return enumMap[key];
}

function getTradingTypeText(key: string) {
  const enumMap: Record<string, string> = {
    SHARE: '나눔',
    EXCHANGE: '교환',
    DEAL: '판매',
  };

  return enumMap[key];
}

export default function ProfileMyProduct({product}: {product: MyProductType}) {
  return (
    <View style={styles.container}>
      <View style={styles.photo}>
        <Photo />
      </View>
      <View style={styles.body}>
        <Text style={styles.productName}>{product.productName}</Text>
        <Text style={styles.location}>{product.location}</Text>
        <Text style={styles.detailInfo}>
          {getProductConditionText(product.productCondition)} ・{' '}
          {getTradingMethodText(product.tradingMethod)} ・{' '}
          {product.productCategory}
        </Text>
        {product.tradingStatus === '거래완료' && (
          <Text style={styles.tradingStatus}>
            {product.tradingStatus} ({product.completedTradingDate})
          </Text>
        )}
      </View>
      <View style={styles.button}>
        <PlainButton
          text={getTradingTypeText(product.tradingType)}
          paddingVertical={2}
          paddingHorizontal={12}
          disabled={true}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: 19,
    marginBottom: 28,
  },
  photo: {
    padding: 6,
  },
  body: {
    flex: 1,
    padding: 6,
  },
  button: {
    paddingVertical: 4,
  },
  productName: {
    lineHeight: 21,
    fontSize: 14,
    fontWeight: '700',
  },
  location: {
    lineHeight: 18,
    fontSize: 12,
    marginTop: 4,
  },
  detailInfo: {
    lineHeight: 15,
    fontSize: 10,
    fontWeight: '200',
    color: '#333',
    marginTop: 4,
  },
  tradingStatus: {
    lineHeight: 15,
    fontSize: 10,
    color: '#048AD4',
    marginTop: 4,
  },
  tradingType: {},
});
