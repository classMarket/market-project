import React, {ReactNode} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default function ProfileSectionNode({
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
    <TouchableOpacity onPress={onPressHandler} style={styles.container}>
      <View>
        <Text style={{lineHeight: 21}}>{icon({iconSize})}</Text>
      </View>
      <View style={{flex: 1}}>
        <Text style={styles.label}>{label}</Text>
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

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 18,
  },
  label: {
    fontSize: 14,
    lineHeight: 21,
    marginLeft: 8,
    fontWeight: '400',
  },
});
