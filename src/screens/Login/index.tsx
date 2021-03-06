import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  Image,
  KeyboardAvoidingView,
  Animated,
  Dimensions,
  LogBox,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';

import styles from './styles';
import burguerImage from '../../assets/images/burguer.png';

import Title from '../../components/Title/Title';
import Input from '../../components/Input';
import Button from '../../components/Button';

const { width, height } = Dimensions.get('window');

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [heightValue] = useState<Animated.Value>(new Animated.Value(0));
  const [widthValue] = useState<Animated.Value>(new Animated.Value(100));
  const [visible, setVisible] = useState(false);

  const { navigate } = useNavigation();

  function handleVisible() {
    Animated.parallel([
      Animated.timing(widthValue, {
        toValue: 0,
        duration: 1000,
        useNativeDriver: false,
      }),
      Animated.timing(heightValue, {
        toValue: 0,
        duration: 1500,
        useNativeDriver: false,
      }),
    ]).start();
    setVisible(true);
  }

  function handleNavigate() {
    navigate('Navigation');
  }

  function handleNavigateToForgotPassword() {
    navigate('ForgotPassword');
  }

  function handleNavigateToRegister() {
    navigate('Register');
  }

  function Animate() {
    Animated.parallel([
      Animated.timing(widthValue, {
        toValue: width,
        duration: 10,
        useNativeDriver: false,
      }),
      Animated.timing(heightValue, {
        toValue: height / 1.9,
        duration: 1500,
        useNativeDriver: false,
      }),
    ]).start();
    setVisible(false);
  }

  useEffect(() => {
    LogBox.ignoreAllLogs();
    Animate();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Animated.View
        style={[
          styles.row,
          {
            width: widthValue,
            height: heightValue,
            overflow: 'hidden',
          },
        ]}
      >
        <Image source={burguerImage} />
        <Title />
      </Animated.View>
      <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
        <Text style={styles.welcomeText}>Welcome Back</Text>
        <TouchableOpacity
          style={{ marginRight: 20 }}
          onPress={visible ? () => Animate() : () => handleVisible()}
        >
          <Ionicons
            name={visible ? 'ios-arrow-down' : 'ios-arrow-up'}
            size={26}
            color="black"
          />
        </TouchableOpacity>
      </View>
      <Text style={styles.textBuy}>came to buy a monster burger?</Text>
      <KeyboardAvoidingView style={styles.center}>
        <Input
          label="Email"
          onFocus={() => handleVisible()}
          submitEnding={() => Animate()}
          value={email}
          onChangeText={setEmail}
          onBlur={() => Animate()}
        />
        <Input
          label="Password"
          secure
          onFocus={() => handleVisible()}
          submitEnding={() => Animate()}
          value={password}
          onChangeText={setPassword}
          onBlur={() => Animate()}
        />
      </KeyboardAvoidingView>
      <TouchableOpacity
        onPress={() => handleNavigateToForgotPassword()}
        style={styles.flexEnd}
      >
        <Text style={styles.small}>Forgot Password?</Text>
      </TouchableOpacity>
      <View style={[styles.center, styles.button]}>
        <Button onPress={() => handleNavigate()} text="Sign In" shadow={true} />
      </View>
      <TouchableOpacity
        onPress={() => handleNavigateToRegister()}
        style={[styles.center, styles.register]}
      >
        <Text style={styles.small}>
          Don't have on account? <Text style={styles.bold}>Register</Text>
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Login;
