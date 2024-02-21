import {View, Text, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Photo from '../ui-part/Photo';
import ProfileSectionLine from './ProfileSectionLine';

export default function ProfileMyProductView() {
  return (
    <View style={{marginHorizontal: 21, marginVertical: 10}}>
      <View style={{marginVertical: 16}}>
        <View style={{flexDirection: 'row', marginBottom: 16}}>
          <Text style={{fontSize: 16, lineHeight: 19, fontWeight: '700'}}>
            판매 10
          </Text>
          <Icon
            name="chevron-forward-outline"
            size={17}
            style={{lineHeight: 19}}
          />
        </View>
        <ScrollView horizontal={true}>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(_item => (
            <Photo />
          ))}
        </ScrollView>
      </View>
      <ProfileSectionLine />
      <View style={{marginVertical: 16}}>
        <View style={{flexDirection: 'row', marginBottom: 15}}>
          <Text style={{fontSize: 16, lineHeight: 19, fontWeight: '700'}}>
            교환 1
          </Text>
          <Icon
            name="chevron-forward-outline"
            size={17}
            style={{lineHeight: 19}}
          />
        </View>
        <ScrollView horizontal={true}>
          {[1].map(_item => (
            <Photo />
          ))}
        </ScrollView>
      </View>
      <ProfileSectionLine />
      <View style={{marginVertical: 16}}>
        <View style={{flexDirection: 'row', marginBottom: 15}}>
          <Text style={{fontSize: 16, lineHeight: 19, fontWeight: '700'}}>
            나눔 0
          </Text>
          <Icon
            name="chevron-forward-outline"
            size={17}
            style={{lineHeight: 19}}
          />
        </View>
        <View style={{alignItems: 'center', marginVertical: 30}}>
          <Text>나눔 중인 물건이 없습니다.</Text>
        </View>
      </View>
    </View>
  );
}
