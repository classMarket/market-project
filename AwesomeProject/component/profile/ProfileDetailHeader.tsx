import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

type Props = {
  goProfile: () => void;
};

export default function ProfileDetailHeader({goProfile}: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.flex}>
        <TouchableOpacity onPress={goProfile}>
          <Icon name="chevron-back-outline" size={24} />
        </TouchableOpacity>
      </View>
      <View>
        <Icon name="share-outline" size={24} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#DDDDDD',
    paddingVertical: 14,
    paddingHorizontal: 21,
  },
  flex: {
    flex: 1,
  },
});
