import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  Image,
  Animated,
  Dimensions,
  Platform,
} from 'react-native';
import styles from './styles';
import Constants from 'expo-constants';

import ImgBackground from '../../assets/images/headerBackground.png';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

const { width, height } = Dimensions.get('window');

const ForgotPassword: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [heightValue] = useState<Animated.Value>(new Animated.Value(0));
  const [isVisible, setIsVisible] = useState(false);
  const [isSelected, setIsSelected] = useState(false);

  const { navigate } = useNavigation();

  function handlePassword() {
    password !== confirmPassword
      ? setIsVisible((prevState) => !prevState)
      : setIsVisible(false);
  }

  function handleVisible() {
    Animated.parallel([
      Animated.timing(heightValue, {
        toValue: 0,
        duration: 1500,
        useNativeDriver: false,
      }),
    ]).start();
    setIsSelected((prevState) => !prevState);
    password === confirmPassword && setIsVisible(false);
  }

  function Animate() {
    Animated.parallel([
      Animated.timing(heightValue, {
        toValue: height / 2.2,
        duration: 1500,
        useNativeDriver: false,
      }),
    ]).start();
  }

  function handleNavigate() {
    password === confirmPassword ? navigate('Navigation') : handlePassword();
  }

  useEffect(() => {
    Animate();
  }, []);

  return (
    <View style={styles.container}>
      <Animated.View
        style={{
          width: width,
          height: heightValue,
          overflow: 'hidden',
        }}
      >
        <Image style={styles.image} source={ImgBackground} />
      </Animated.View>
      <SafeAreaView
        style={{
          paddingTop: isSelected
            ? Platform.OS === 'android'
              ? Constants.statusBarHeight - 10
              : 0
            : 0,
        }}
      >
        <Text style={styles.forgotPasswordText}>Forgot your password</Text>
        <Text style={styles.medium}>shall we recover it?</Text>
        <View style={styles.center}>
          <Input
            label="Email"
            onFocus={() => handleVisible()}
            submitEnding={() => Animate()}
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
          <Input
            label="Password"
            secure
            onFocus={() => handleVisible()}
            submitEnding={() => Animate()}
            value={password}
            onChangeText={(text) => setPassword(text)}
          />
          <Input
            label="Confirm Password"
            secure
            onFocus={() => handleVisible()}
            submitEnding={() => Animate()}
            value={confirmPassword}
            onChangeText={(text) => setConfirmPassword(text)}
          />
        </View>
        {isVisible && <Text style={styles.red}>Password is not the same</Text>}
        <View style={[styles.center, styles.buttonContainer]}>
          <Button onPress={() => handleNavigate()} text="Forget Password" />
        </View>
      </SafeAreaView>
    </View>
  );
};

export default ForgotPassword;
