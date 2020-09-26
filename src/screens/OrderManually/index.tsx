import React, { useCallback, useEffect, useState } from 'react';
import { View, Text, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {
  useFocusEffect,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import { FontAwesome, Feather } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';

import styles from './styles';

import firstBread from '../../assets/images/image4.png';
import secondBread from '../../assets/images/image3.png';
import burguer from '../../assets/images/image5.png';

import lettuce from '../../assets/images/image6.png';
import cheese from '../../assets/images/image7.png';
import tomato from '../../assets/images/image8.png';
import egg from '../../assets/images/image9.png';
import onion from '../../assets/images/image10.png';

import eggImage from '../../assets/images/egg.png';
import cheeseImage from '../../assets/images/cheese.png';
import lettuceImage from '../../assets/images/lettuce.png';
import onionImage from '../../assets/images/onion.png';
import tomatoImage from '../../assets/images/tomato.png';
import Button from '../../components/Button';

export interface Cart {
  price: string;
  size: string;
}

const OrderManually: React.FC = () => {
  const { navigate } = useNavigation();
  const [selectedCategory, setSelectedCategory] = useState<string>('M');
  const [ingredients, setIngredients] = useState<string[]>([]);
  const [cart, setCart] = useState<Cart[]>([]);

  const changeCategory = useCallback(
    (category: string) => {
      if (category === selectedCategory) {
        setSelectedCategory('');
      } else {
        setSelectedCategory(category);
      }
    },
    [selectedCategory]
  );

  const navigateToCart = useCallback(
    (cart: Cart[]) => {
      navigate('RegisterOrder', { cart });
    },
    [navigate]
  );

  const addToCart = useCallback(
    (size: string) => {
      const price = handlePrice(size);

      setCart([...cart, { price: price, size: size }]);
    },
    [cart]
  );

  const categories = ['P', 'M', 'G'];
  const foodCategory = ['lettuce', 'cheese', 'tomato', 'egg', 'onion'];

  const handleImageFood = (food: string) => {
    if (food === 'lettuce') return lettuce;
    if (food === 'cheese') return cheese;
    if (food === 'tomato') return tomato;
    if (food === 'egg') return egg;
    if (food === 'onion') return onion;
    return lettuce;
  };

  const handlePrice = (category: string) => {
    if (category === 'P') return '6.99';
    if (category === 'M') return '8.99';
    if (category === 'G') return '10.99';
    return '8.99';
  };

  const handleIngredientsImage = (ingredient: string) => {
    if (ingredient === 'egg') return eggImage;
    if (ingredient === 'cheese') return cheeseImage;
    if (ingredient === 'lettuce') return lettuceImage;
    if (ingredient === 'onion') return onionImage;
    if (ingredient === 'tomato') return tomatoImage;
    return burguer;
  };

  const handleIngredients = useCallback(
    (ingredient: string) => {
      if (ingredients.includes(ingredient)) {
        return null;
      }

      setIngredients([...ingredients, ingredient]);
    },
    [ingredients]
  );

  const handleDeleteIngredients = useCallback(() => {
    setIngredients([]);
  }, [ingredients]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={[styles.row, styles.between, { alignItems: 'center' }]}>
        <Text style={styles.text}>Order Manually</Text>
        <TouchableOpacity
          onPress={() => navigateToCart(cart)}
          style={{ marginRight: 20 }}
        >
          <FontAwesome name="shopping-cart" size={24} color="#572F10" />
          <View style={styles.circleRed}>
            <Text style={{ color: '#FFFFFF' }}>{cart.length}</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <TouchableOpacity style={styles.button}>
          <Text style={[styles.smallText, { color: '#FFF' }]}>Beef</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={handleDeleteIngredients}
          style={{ paddingRight: 25, marginTop: 22 }}
        >
          <Feather name="x" size={30} color="red" />
        </TouchableOpacity>
      </View>

      <View style={styles.sizeContainer}>
        <Text style={styles.sizeText}>Size</Text>
        <View style={styles.row}>
          {categories.map((category: string, index) => {
            return (
              <TouchableOpacity
                onPress={() => changeCategory(category)}
                key={index}
                style={[
                  styles.rectangle,
                  {
                    borderColor:
                      selectedCategory === category ? '#572F10' : '#FFF',
                    borderWidth: 2,
                  },
                ]}
              >
                <Text style={styles.category}>{category}</Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
      <View style={styles.hamburguerContainer}>
        <View style={styles.breadContainer}>
          <Image
            resizeMode="contain"
            source={firstBread}
            style={styles.topBread}
          />
          <View style={{ flexDirection: 'column-reverse' }}>
            {ingredients.map((item: string, index) => {
              if (ingredients.length === 0) {
                return null;
              }

              return (
                <Image
                  key={index}
                  resizeMode="contain"
                  source={handleIngredientsImage(item)}
                  style={styles.burguer}
                />
              );
            })}
          </View>

          <Image resizeMode="contain" source={burguer} style={styles.burguer} />
          <Image
            resizeMode="contain"
            source={secondBread}
            style={styles.bread}
          />
        </View>

        <View style={styles.priceContainer}>
          <Text style={styles.price}>{handlePrice(selectedCategory)}</Text>
          <Text style={styles.priceRight}>R$</Text>
        </View>

        <View style={{ marginBottom: 0 }}>
          <Text style={[styles.smallText, { marginLeft: 15, fontSize: 13 }]}>
            Ingredients
          </Text>
          <View style={styles.row}>
            {foodCategory.map((item: string, index) => {
              return (
                <TouchableOpacity
                  onPress={() => handleIngredients(item)}
                  key={index}
                  style={[
                    styles.ingredients,
                    {
                      borderColor: ingredients.includes(item)
                        ? '#04D361'
                        : '#CA8832',
                    },
                  ]}
                >
                  <Image
                    source={handleImageFood(item)}
                    resizeMode="contain"
                    style={{ width: 35, height: 35, marginTop: 10 }}
                  />
                  <Text style={styles.ingrendientName}>{item}</Text>
                </TouchableOpacity>
              );
            })}
          </View>
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Button
              onPress={() => addToCart(selectedCategory)}
              text="Adicionar ao carrinho"
              shadow={false}
            />
          </View>
        </View>
      </View>

      <View>
        <Image
          resizeMode="contain"
          source={firstBread}
          style={styles.leftTopBread}
        />
        <Image
          resizeMode="contain"
          source={secondBread}
          style={styles.leftDownBread}
        />
        <Image
          resizeMode="contain"
          source={firstBread}
          style={styles.rightTopBread}
        />
        <Image
          resizeMode="contain"
          source={secondBread}
          style={styles.rightDownBread}
        />
      </View>
    </SafeAreaView>
  );
};

export default OrderManually;
