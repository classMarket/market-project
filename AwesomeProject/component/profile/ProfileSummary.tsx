import {ReactNode} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

export default function ProfileSummary({
  detailShown = false,
  rightButton,
}: {
  detailShown?: boolean;
  rightButton: ReactNode;
}) {
  return (
    <View style={styles.container}>
      <View>
        <Image
          source={require('../../assets/Profile_active.png')}
          style={styles.profile_image}
        />
      </View>
      <View
        style={[
          styles.summaryContainer,
          {
            paddingVertical: detailShown ? 0 : 8,
          },
        ]}>
        <Text style={styles.nickname}>닉네임</Text>

        {detailShown && (
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.ratings}>평점 0.0</Text>
            <Text style={styles.productCount}>등록상품 3</Text>
            <Text style={styles.meetingCount}>모임활동 1</Text>
          </View>
        )}
      </View>
      <View style={{marginTop: 7}}>{rightButton}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 21, // TODO:화면 크기에따라 동적으로 설정할지 확인
    flexDirection: 'row',
    marginTop: 14,
    marginBottom: 21,
  },
  profile_image: {
    width: 42,
    height: 42,
    borderRadius: 21,
    borderWidth: 1,
  },
  summaryContainer: {
    flex: 1,
    marginLeft: 11,
  },
  nickname: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '700',
  },
  ratings: {
    fontSize: 12,
    lineHeight: 18,
    fontWeight: '400',
  },
  productCount: {
    fontSize: 12,
    lineHeight: 18,
    fontWeight: '400',
    marginLeft: 7,
  },
  meetingCount: {
    fontSize: 12,
    lineHeight: 18,
    fontWeight: '400',
    marginLeft: 7,
  },
});
