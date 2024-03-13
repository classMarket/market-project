import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default function ProfileHeader() {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.labelContainer}>
        <Text style={styles.label}>내 프로필</Text>
      </View>
      <View>
        <Icon name="cog-outline" size={24} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
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
