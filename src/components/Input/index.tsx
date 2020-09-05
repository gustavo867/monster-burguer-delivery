import React from 'react';
import { View, TextInput, Dimensions, StyleSheet, Text } from 'react-native';

const { width, height } = Dimensions.get('window');

interface Props {
  label: string;
  defaultValue?: string;
  onChangeText?: any;
  secure?: boolean;
  onFocus?: any;
  submitEnding?: any;
  value?: any;
}

const Input: React.FC<Props> = ({
  label,
  defaultValue,
  onChangeText,
  secure,
  onFocus,
  submitEnding,
  value,
}: Props) => {
  return (
    <View style={styles.marginTop}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.input}
        autoCorrect={false}
        autoCompleteType="off"
        autoCapitalize="none"
        defaultValue={defaultValue}
        secureTextEntry={secure ? true : false}
        onFocus={onFocus}
        onSubmitEditing={submitEnding}
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  input: {
    width: width * 0.85,
    borderRadius: 12,
    borderColor: '#624D0E',
    borderWidth: 2,
    height: height * 0.07,
  },
  label: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 14,
    lineHeight: 16,
    color: '#572F10',
    marginLeft: 10,
  },
  marginTop: {
    marginTop: 15,
  },
});
