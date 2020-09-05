import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// import { Container } from './styles';

const Loading: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Loading ...</Text>
    </View>
  );
};

export default Loading;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    letterSpacing: 0.5,
  },
});
