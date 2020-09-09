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
}

const Button: React.FC<Props> = ({ text, onPress }: Props) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={styles.button}
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
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.58,
    shadowRadius: 14.0,
    elevation: 20,
  },
  text: {
    fontFamily: 'Roboto_700Bold',
    color: '#FFFFFF',
    fontSize: 14,
    lineHeight: 16,
  },
});
