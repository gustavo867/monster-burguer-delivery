import React, { useState } from 'react';
import { View, Text, Image, KeyboardAvoidingView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import styles from './styles';

import Title from '../../components/Title/Title';

import burguerImage from '../../assets/images/burguer.png';
import Input from '../../components/Input';
import { useNavigation } from '@react-navigation/native';
import Button from '../../components/Button';

const Login: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { navigate } = useNavigation();

  function handleVisible() {
    setIsVisible((prevState) => !prevState);
  }

  function handleNavigate() {
    navigate('Navigation', { email, password });
  }

  return (
    <SafeAreaView style={styles.container}>
      {isVisible && (
        <View style={styles.row}>
          <Image source={burguerImage} />
          <Title />
        </View>
      )}
      <Text style={styles.welcomeText}>Welcome Back</Text>
      <Text style={styles.textBuy}>came to buy a monster burger?</Text>
      <KeyboardAvoidingView style={styles.center}>
        <Input
          label="Email"
          onFocus={() => handleVisible()}
          submitEnding={() => handleVisible()}
          value={email}
          onChangeText={setEmail}
        />
        <Input
          label="Password"
          secure
          onFocus={() => handleVisible()}
          submitEnding={() => handleVisible()}
          value={password}
          onChangeText={setPassword}
        />
      </KeyboardAvoidingView>
      <View style={styles.flexEnd}>
        <Text style={styles.small}>Forgot Password?</Text>
      </View>
      <View style={[styles.center, styles.button]}>
        <Button onPress={() => handleNavigate()} text="Sign In" />
      </View>
      <View style={[styles.center, styles.register]}>
        <Text style={styles.small}>
          Don't have on account? <Text style={styles.bold}>Register</Text>
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default Login;
