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
  circleRed: {
    width: 25,
    height: 25,
    borderRadius: 12,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -8,
    marginLeft: 10,
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
  sizeContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  sizeText: {
    fontSize: 14,
    lineHeight: 18,
    color: '#572F10',
  },
  rectangle: {
    backgroundColor: '#F9E8C1',
    width: 37,
    height: 37,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    margin: 10,
  },
  category: {
    color: '#CA8832',
    fontSize: 14,
    fontWeight: '700',
  },
  topBread: {
    width: width * 0.7,
    height: height * 0.08,
    marginTop: 10,
  },
  bread: {
    width: width * 0.7,
    height: height * 0.08,
    marginTop: 0,
  },
  burguer: {
    width: width * 0.5,
    height: height * 0.05,
  },
  breadContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 0.98,
    marginTop: 20,
  },
  hamburguerContainer: {
    flex: 1,
    alignItems: 'center',
  },
  leftTopBread: {
    width: width * 0.5,
    height: height * 0.07,
    position: 'absolute',
    top: -350,
    left: -80,
    zIndex: 2,
  },
  leftDownBread: {
    width: width * 0.5,
    height: height * 0.07,
    position: 'absolute',
    top: -320,
    left: -80,
  },
  rightTopBread: {
    width: width * 0.5,
    height: height * 0.07,
    position: 'absolute',
    top: -350,
    right: -80,
    zIndex: 2,
  },
  rightDownBread: {
    width: width * 0.5,
    height: height * 0.07,
    position: 'absolute',
    top: -320,
    right: -80,
  },
  price: {
    fontSize: 36,
    color: '#CA8832',
    fontFamily: 'Roboto_700Bold',
    textAlign: 'center',
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  priceRight: {
    fontSize: 18,
    color: '#CA8832',
    lineHeight: 21,
    paddingLeft: 5,
    fontFamily: 'Roboto_700Bold',
  },
  ingredients: {
    borderColor: '#CA8832',
    borderWidth: 1,
    borderRadius: 8,
    width: 50,
    height: 71,
    margin: 15,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  ingrendientName: {
    fontSize: 12,
    lineHeight: 15,
  },
});

export default styles;
