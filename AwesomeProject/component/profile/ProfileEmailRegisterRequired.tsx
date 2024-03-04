import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {BlankSpace} from '../ui-part';

export default function ProfileEmailRegisterRequired() {
  return (
    <View style={styles.emailStatusContainer}>
      <View style={styles.row}>
        <Icon name="alert-outline" size={24} color="red" />
        <Text style={styles.emailStatusTitle}>이메일 인증하기</Text>
        <Icon name="chevron-right" size={12} color="red" />
      </View>
      <BlankSpace height={7} />
      <View style={styles.row}>
        <Icon
          name="information"
          size={12}
          style={styles.icon}
          color="#9C9C9C"
        />
        <Text style={styles.emailStatusDescription}>
          이메일 인증 후에 등록 및 거래가 가능합니다
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
  emailStatusContainer: {
    marginHorizontal: 21,
    marginBottom: 21,
    paddingHorizontal: 17,
    paddingVertical: 10,
    borderColor: 'red',
    borderRadius: 8,
    borderWidth: 1,
  },
  emailStatusTitle: {
    flex: 1,
    fontSize: 14,
    lineHeight: 21,
    color: 'red',
    marginLeft: 8,
  },
  emailStatusDescription: {
    flex: 1,
    color: '#9C9C9C',
    fontSize: 12,
    lineHeight: 21,
    marginLeft: 7,
  },
  icon: {
    lineHeight: 21,
  },
});
