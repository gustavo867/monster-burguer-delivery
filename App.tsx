import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { AppLoading } from 'expo';
import {
  Roboto_400Regular,
  Roboto_300Light,
  Roboto_500Medium,
  Roboto_700Bold,
  useFonts,
} from '@expo-google-fonts/roboto';
import { Viga_400Regular } from '@expo-google-fonts/viga';

import Routes from './src/routes/routes';

export default function App() {
  let [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_300Light,
    Roboto_500Medium,
    Roboto_700Bold,
    Viga_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <>
      <StatusBar style="auto" />
      <Routes />
    </>
  );
}
