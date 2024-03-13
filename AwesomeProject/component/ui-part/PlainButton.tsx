import {
  TouchableOpacity,
  Text,
  StyleSheet,
  DimensionValue,
  TouchableOpacityProps,
} from 'react-native';

export default function PlainButton({
  text,
  onPressHandler = () => {},
  paddingVertical = 0,
  paddingHorizontal = 0,
  fullWidth = false,
  style = {},
  disabled = false,
}: {
  text: string;
  onPressHandler?: () => void;
  paddingVertical?: DimensionValue;
  paddingHorizontal?: DimensionValue;
  fullWidth?: boolean;
  style?: TouchableOpacityProps['style'];
  disabled?: boolean;
}) {
  return (
    <TouchableOpacity
      style={[
        styles.container,
        style,
        {paddingVertical, paddingHorizontal},
        fullWidth ? styles.fullWidth : {},
      ]}
      onPress={onPressHandler}
      disabled={disabled}>
      <Text style={[styles.text, disabled ? styles.disabled : {}]}>{text}</Text>
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
  fullWidth: {
    flex: 1,
    width: '100%',
  },
  disabled: {
    color: 'grey',
  },
});
