import { Dimensions, Platform, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? Constants.statusBarHeight - 10 : 0,
    backgroundColor: '#FFFFFF',
  },
  bold18: {
    fontFamily: 'Roboto_700Bold',
    fontSize: 18,
    lineHeight: 21,
    color: '#572F10',
    marginLeft: 19,
  },
  burguerText: {
    fontFamily: 'Roboto_700Bold',
    fontSize: 14,
    lineHeight: 16,
    color: '#572F10',
    width: 90,
  },
  size: {
    fontSize: 24,
    lineHeight: 28,
    fontFamily: 'Roboto_700Bold',
    color: '#572F10',
  },
  price: {
    fontFamily: 'Roboto_700Bold',
    fontSize: 16,
    lineHeight: 18,
    color: '#E8D172',
  },
  card: {
    width: width * 0.85,
    height: height * 0.15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  line: {
    borderColor: '#DEDEDE',
    width: width * 0.9,
    height: 1,
    borderWidth: 1,
  },
});

export default styles;
