import React from 'react';
import { View, Text, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import styles from './styles';

import profile from '../../assets/images/profile.jpg';
import Input from '../../components/Input';

const Profile: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.profileContainer}>
        <Text style={styles.text}>Profile </Text>
        <Image style={styles.image} source={profile} />
      </View>
      <View style={styles.inputContainer}>
        <Input label="Name" />
        <Input label="Email" />
        <Input label="Address" />
      </View>
    </SafeAreaView>
  );
};

export default Profile;
