import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useCallback } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  FlatList,
  Dimensions,
} from 'react-native';
import { Cart } from '../OrderManually';

import styles from './styles';
import back from '../../assets/icon/brownBack.png';
import Burguer from '../RegisterOrder/burguer';

interface RouteProps {
  cart: Cart[];
}

const { height } = Dimensions.get('window');

const Historic: React.FC = () => {
  const route = useRoute();
  const { navigate } = useNavigation();

  const { cart } = route.params as RouteProps;

  const navigateBack = useCallback(() => {
    navigate('OrderManually');
  }, [navigate]);

  const Item = (item: Cart) => {
    return (
      <>
        <View style={styles.card}>
          <Burguer />
          <Text style={styles.burguerText}>Monster Meat Burger</Text>
          <Text style={styles.size}>-{item.size}</Text>
          <Text style={styles.price}>R${item.price}</Text>
        </View>
        <View style={styles.line} />
      </>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={navigateBack}>
        <Image style={{ marginTop: 20, marginLeft: 20 }} source={back} />
      </TouchableOpacity>
      <View style={{ marginTop: 25 }}>
        <Text style={styles.bold18}>Historic</Text>
      </View>
      <FlatList
        data={cart as any}
        style={{
          maxHeight: height * 0.55,
        }}
        showsVerticalScrollIndicator={false}
        keyExtractor={(index: number) => index.toString()}
        renderItem={({ item }: any) => <Item {...item} />}
        contentContainerStyle={{
          alignItems: 'center',
          justifyContent: 'center',
        }}
      />
    </SafeAreaView>
  );
};

export default Historic;
