import { StyleSheet, Platform } from 'react-native';
import Constants from 'expo-constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? Constants.statusBarHeight - 10 : 0,
    backgroundColor: '#FFFFFF',
  },
  row: {
    flexDirection: 'row',
  },
  between: {
    justifyContent: 'space-between',
  },
  text: {
    fontFamily: 'Roboto_700Bold',
    fontSize: 18,
    lineHeight: 21,
    color: '#572F10',
    marginLeft: 15,
  },
  button: {
    width: 75,
    height: 28,
    borderRadius: 18,
    backgroundColor: '#E8D172',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 19,
    marginTop: 22,
  },
  smallText: {
    fontFamily: 'Roboto_700Bold',
    fontSize: 12,
    lineHeight: 14,
    color: '#572F10',
  },
});

export default styles;
