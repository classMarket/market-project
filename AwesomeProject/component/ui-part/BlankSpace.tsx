import {DimensionValue, View, Text} from 'react-native';

export default function BlankSpace({
  width = '100%',
  height = 24,
  color = 'white',
}: {
  width?: DimensionValue;
  height?: DimensionValue;
  color?: string;
}) {
  return (
    <View style={{display: 'flex', backgroundColor: color}}>
      <View style={[{flex: 1, width, height}]}>
        <Text> </Text>
      </View>
    </View>
  );
}
