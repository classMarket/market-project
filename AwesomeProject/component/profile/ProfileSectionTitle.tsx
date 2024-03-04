import React, {ReactNode} from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function ProfileSectionTitle({children}: {children: ReactNode}) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {marginBottom: 24},
  title: {fontSize: 20, lineHeight: 30, fontWeight: '900'},
});
