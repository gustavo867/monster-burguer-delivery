import React from 'react';
import { View, Text } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';

import styles from './styles';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

const OrderManually: React.FC = () => {
  const { navigate } = useNavigation();

  function handleNavigate() {
    navigate('Register');
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={[styles.row, styles.between]}>
        <Text style={styles.text}>Order Manually</Text>
        <TouchableOpacity
          onPress={() => handleNavigate()}
          style={{ marginRight: 20 }}
        >
          <FontAwesome name="shopping-cart" size={24} color="#572F10" />
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={[styles.smallText, { color: '#FFF' }]}>Beef</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default OrderManually;
