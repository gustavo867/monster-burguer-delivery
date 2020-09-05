import React from 'react';
import { View, Text } from 'react-native';

const Page: React.FC = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#010101',
      }}
    >
      <Text style={{ fontSize: 25, lineHeight: 40, color: '#FFF' }}>Page</Text>
    </View>
  );
};

export default Page;
