import { StyleSheet, Platform, Dimensions } from 'react-native';
import Constants from 'expo-constants';

const { width, height } = Dimensions.get('window');

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
  car: {
    width: 72,
    height: 41,
    backgroundColor: '#F9E8C1',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
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
    lineHeight: 21,
    color: '#572F10',
    marginLeft: 19,
  },
  bold28: {
    fontFamily: 'Roboto_700Bold',
    fontSize: 28,
    lineHeight: 32,
    color: '#572F10',
    marginLeft: 19,
  },
  priceBig: {
    fontFamily: 'Roboto_700Bold',
    fontSize: 36,
    lineHeight: 42,
    color: '#CA8832',
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
  time: {
    fontFamily: 'Roboto_700Bold',
    fontSize: 18,
    lineHeight: 21,
    color: '#CA8832',
  },
  lowCard: {
    width: width,
    height: height * 0.1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  card: {
    width: width * 0.85,
    height: height * 0.15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  totalContainer: {
    width: width * 0.85,
    height: height * 0.1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  line: {
    borderColor: '#DEDEDE',
    borderWidth: 2,
    height: 1,
    width: width * 0.9,
    borderRadius: 1,
  },
});

export default styles;
