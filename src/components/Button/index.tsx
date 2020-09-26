import React from 'react';
import {
  Text,
  StyleSheet,
  Dimensions,
  GestureResponderEvent,
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const { width, height } = Dimensions.get('window');

interface Props {
  text: string;
  onPress?: ((event: GestureResponderEvent) => void) | undefined;
  shadow?: boolean;
}

const Button: React.FC<Props> = ({ text, onPress, shadow }: Props) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.button,
        {
          shadowColor: shadow ? '#000' : '#FFF',
          shadowOffset: {
            width: 0,
            height: shadow ? 8 : 0,
          },
          shadowOpacity: shadow ? 0.58 : 0,
          shadowRadius: shadow ? 14.0 : 0,
          elevation: shadow ? 20 : 0,
        },
      ]}
      activeOpacity={0.6}
    >
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    width: width * 0.85,
    backgroundColor: '#CA8832',
    height: height * 0.08,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontFamily: 'Roboto_700Bold',
    color: '#FFFFFF',
    fontSize: 14,
    lineHeight: 16,
  },
});
