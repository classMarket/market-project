import React, {useContext} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import PlainButton from '../ui-part/PlainButton';
import {ProfileContext} from '../../screen/View/Profile';

export default function ProfileMyPoint() {
  const {state} = useContext(ProfileContext);

  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <View style={styles.myPoint}>
          <Text style={styles.myPointLabel}>내 포인트</Text>
          <Icon name="chevron-right" size={17} style={styles.icon} />
        </View>
        <View>
          <Text style={styles.point}>{`${state.profile.point} P`}</Text>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <PlainButton
          text="사용"
          onPressHandler={() => {}}
          fullWidth={true}
          paddingVertical={7}
          style={styles.button}
        />
        <PlainButton
          text="출금"
          onPressHandler={() => {}}
          fullWidth={true}
          paddingVertical={7}
          style={styles.button}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 21, // TODO:화면 크기에따라 동적으로 설정할지 확인
    marginVertical: 15,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#D8D8D8',
    paddingHorizontal: 15,
    paddingVertical: 19,
  },
  top: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  myPoint: {
    flexDirection: 'row',
    marginBottom: 15,
  },
  myPointLabel: {
    fontSize: 16,
    lineHeight: 19,
    fontWeight: '900',
  },
  icon: {
    lineHeight: 19,
  },
  point: {
    fontSize: 20,
    fontWeight: '700',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {flex: 1, marginHorizontal: 2},
});
