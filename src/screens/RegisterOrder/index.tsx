import React, { useCallback, useEffect, useState } from 'react';
import {
  useFocusEffect,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import {
  View,
  Text,
  Image,
  SafeAreaView,
  Dimensions,
  LogBox,
} from 'react-native';
import { FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import { Cart } from '../OrderManually';
import Burguer from './burguer';

import styles from './styles';
import back from '../../assets/icon/brownBack.png';
import Button from '../../components/Button';

const { height } = Dimensions.get('window');

interface RouteProps {
  cart: Cart[];
}

const RegisterOrder: React.FC = () => {
  const route = useRoute();
  const { goBack, navigate } = useNavigation();
  const [prices, setPrices] = useState<any>();

  const { cart } = route.params as RouteProps;

  const navigateBack = useCallback(() => {
    goBack();
  }, [goBack]);

  const handleNavigateToHistoric = useCallback(
    (cart: any) => {
      navigate('Historic', { cart });
    },
    [navigate]
  );

  useEffect(() => {
    LogBox.ignoreAllLogs();
  }, []);

  const handleTime = (length: number) => {
    if (length <= 1) return '15 - 25';
    if (length <= 3) return '20 - 35';
    if (length <= 5) return '35 - 45';
    return '15 - 25';
  };

  const handleDeliveryPrice = (length: number) => {
    if (length <= 1) return '5.99';
    if (length <= 3) return '8.99';
    if (length <= 5) return '10.99';
    return '5.99';
  };

  const Item = (item: Cart) => {
    const prices = parseFloat(item.price) * cart.length;

    setPrices(prices);
    return (
      <View style={styles.card}>
        <Burguer />
        <Text style={styles.burguerText}>Monster Meat Burger</Text>
        <Text style={styles.size}>{item.size}</Text>
        <Text style={styles.price}>R${item.price}</Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={navigateBack}>
        <Image style={{ marginTop: 20, marginLeft: 20 }} source={back} />
      </TouchableOpacity>
      <View style={styles.rowAndBetween}>
        <Text style={styles.bold18}>My Order</Text>
        <TouchableOpacity style={{ marginRight: 20 }}>
          <FontAwesome5 name="trash" size={24} color="#572F10" />
        </TouchableOpacity>
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
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <View style={styles.lowCard}>
          <TouchableOpacity style={styles.car}>
            <MaterialCommunityIcons name="car" size={24} color="#CA8832" />
          </TouchableOpacity>
          <Text style={styles.bold}>Delivery</Text>
          <Text style={styles.price}>{handleDeliveryPrice(cart.length)}</Text>
        </View>
        <View style={styles.totalContainer}>
          <Text style={styles.bold28}>Total:</Text>
          <Text style={styles.priceBig}>R${prices}</Text>
        </View>
        <View style={styles.line} />
        <View style={styles.totalContainer}>
          <Text style={styles.bold}>Estimated time delivery</Text>
          <Text style={styles.time}>{handleTime(cart.length)}</Text>
        </View>

        <Button
          text="Finish"
          shadow={true}
          onPress={() => handleNavigateToHistoric(cart)}
        />
      </View>
    </SafeAreaView>
  );
};

export default RegisterOrder;
