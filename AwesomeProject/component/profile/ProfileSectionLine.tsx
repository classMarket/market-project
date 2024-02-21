import {StyleSheet, View} from 'react-native';

export default function ProfileSectionLine() {
  return <View style={styles.line}></View>;
}

const styles = StyleSheet.create({
  line: {
    backgroundColor: '#cccccc',
    width: '100%',
    height: 2,
  },
});
