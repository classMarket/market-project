import {
  TouchableOpacity,
  Text,
  StyleSheet,
  DimensionValue,
  TouchableOpacityProps,
} from 'react-native';

export default function PlainButton({
  text,
  onPressHandler,
  paddingVertical = 0,
  paddingHorizontal = 0,
  fullWidth = false,
  style = {},
}: {
  text: string;
  onPressHandler: () => void;
  paddingVertical?: DimensionValue;
  paddingHorizontal?: DimensionValue;
  fullWidth?: boolean;
  style?: TouchableOpacityProps['style'];
}) {
  return (
    <TouchableOpacity
      style={[
        styles.container,
        style,
        {paddingVertical, paddingHorizontal},
        fullWidth ? {flex: 1, width: '100%'} : {},
      ]}
      onPress={onPressHandler}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#E5E5E5',
    borderRadius: 4,
    alignItems: 'center',
  },
  text: {
    fontSize: 12,
    lineHeight: 18,
  },
});
