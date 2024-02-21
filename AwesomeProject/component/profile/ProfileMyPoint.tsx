import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import PlainButton from '../ui-part/PlainButton';

export default function ProfileMyPoint({point}: {point: number}) {
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <View style={styles.myPoint}>
          <Text style={styles.myPointLabel}>내 포인트</Text>
          <Icon name="chevron-forward-outline" size={17} style={styles.icon} />
        </View>
        <View>
          <Text style={styles.point}>{`${point} P`}</Text>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <View style={{flex: 1, marginHorizontal: 2}}>
          <PlainButton
            text="사용"
            onPressHandler={() => {}}
            fullWidth={true}
            paddingVertical={7}
          />
        </View>
        <View style={{flex: 1, marginHorizontal: 2}}>
          <PlainButton
            text="출금"
            onPressHandler={() => {}}
            fullWidth={true}
            paddingVertical={7}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 21, // TODO:화면 크기에따라 동적으로 설정할지 확인
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
  button: {
    backgroundColor: '#E5E5E5',
    borderRadius: 4,
    paddingVertical: 7,
    alignItems: 'center',
  },
  buttonLabel: {
    fontSize: 12,
    lineHeight: 18,
  },
});
