import { StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  image: {
    width: width,
    height: height / 2,
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    marginTop: 30,
  },
  forgotPasswordText: {
    fontFamily: 'Roboto_700Bold',
    fontSize: 18,
    lineHeight: 21,
    color: '#572F10',
    marginLeft: 33,
  },
  medium: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 14,
    lineHeight: 16,
    color: '#572F10',
    marginTop: 8,
    marginLeft: 33,
  },
  red: {
    fontFamily: 'Roboto_700Bold',
    fontSize: 14,
    color: 'red',
    marginTop: 10,
    textAlign: 'center',
  },
});

export default styles;
