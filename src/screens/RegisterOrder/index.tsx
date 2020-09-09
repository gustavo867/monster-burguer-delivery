import React from 'react';
import { View, Text, Image, SafeAreaView } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

import styles from './styles';

import back from '../../assets/icon/brownBack.png';
import { TouchableOpacity } from 'react-native-gesture-handler';

const RegisterOrder: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Image style={{ marginTop: 20, marginLeft: 20 }} source={back} />
      <View style={styles.rowAndBetween}>
        <Text style={styles.bold18}>My Order</Text>
        <TouchableOpacity style={{ marginRight: 20 }}>
          <FontAwesome5 name="trash" size={24} color="#572F10" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default RegisterOrder;
