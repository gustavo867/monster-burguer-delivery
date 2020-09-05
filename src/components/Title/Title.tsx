import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Title: React.FC = () => {
  return (
    <View>
      <Text style={styles.h1}>B</Text>
      <Text style={styles.h1}>U</Text>
      <Text style={styles.h1}>R</Text>
      <Text style={styles.h1}>G</Text>
      <Text style={styles.h1}>U</Text>
      <Text style={styles.h1}>E</Text>
      <Text style={styles.h1}>R</Text>
    </View>
  );
};

export default Title;

const styles = StyleSheet.create({
  h1: {
    color: '#CA8832',
    fontSize: 42,
    lineHeight: 56,
    fontFamily: 'Viga_400Regular',
  },
});
