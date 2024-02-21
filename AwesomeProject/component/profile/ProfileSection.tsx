import React, {ReactNode} from 'react';
import {StyleSheet, View} from 'react-native';
import ProfileSectionTitle from './ProfileSectionTitle';
import BlankSpace from '../ui-part/BlankSpace';

export default function ProfileSection({
  children,
  title,
}: {
  children: ReactNode;
  title: string;
}) {
  return (
    <View style={styles.container}>
      <View>
        <BlankSpace height={42} />
        <View>
          <ProfileSectionTitle>{title}</ProfileSectionTitle>
        </View>
        {children}
        <BlankSpace height={42} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 21, // TODO:화면 크기에따라 동적으로 설정할지 확인
  },
});
