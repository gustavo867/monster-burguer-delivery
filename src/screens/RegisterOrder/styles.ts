import { StyleSheet, Platform } from 'react-native';
import Constants from 'expo-constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? Constants.statusBarHeight - 5 : 0,
    backgroundColor: '#FFFFFF',
  },
  rowAndBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 28,
  },
  bold: {
    fontFamily: 'Roboto_700Bold',
    fontSize: 14,
    lineHeight: 30,
    color: '#572F10',
    marginLeft: 15,
  },
  bold18: {
    fontFamily: 'Roboto_700Bold',
    fontSize: 18,
    lineHeight: 30,
    color: '#572F10',
    marginLeft: 19,
  },
});

export default styles;
