import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles';

import ImgBackground from '../../assets/images/headerBackground.png';
import Input from '../../components/Input';
import Button from '../../components/Button';

const ForgotPassword: React.FC = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={ImgBackground} />
      <Text style={styles.forgotPasswordText}>Forgot your password</Text>
      <Text style={styles.medium}>shall we recover it?</Text>
      <View style={styles.center}>
        <Input label="Email" />
        <Input label="Password" />
        <Input label="Confirm Password" />
      </View>
      <View style={[styles.center, styles.buttonContainer]}>
        <Button text="Forget Password" />
      </View>
    </View>
  );
};

export default ForgotPassword;
