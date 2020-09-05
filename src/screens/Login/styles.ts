import { StyleSheet, Platform, Dimensions } from 'react-native';
import Constants from 'expo-constants';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? Constants.statusBarHeight - 10 : 0,
    backgroundColor: '#FFFFFF',
  },
  row: {
    flexDirection: 'row',
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  flexEnd: {
    alignItems: 'flex-end',
    justifyContent: 'center',
    marginTop: 18,
    marginRight: 34,
  },
  welcomeText: {
    fontFamily: 'Roboto_700Bold',
    fontSize: 18,
    lineHeight: 21,
    color: '#572F10',
    marginLeft: 33,
  },
  textBuy: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 14,
    lineHeight: 16,
    color: '#572F10',
    marginTop: 8,
    marginLeft: 33,
  },
  small: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 12,
    lineHeight: 14,
    color: '#572F10',
  },
  bold: {
    fontFamily: 'Roboto_700Bold',
    fontSize: 12,
    lineHeight: 16,
    color: '#572F10',
  },
  button: {
    marginTop: height * 0.02,
  },
  register: {
    marginTop: 16,
  },
});

export default styles;
