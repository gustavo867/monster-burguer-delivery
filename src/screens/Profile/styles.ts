import { StyleSheet, Platform } from 'react-native';
import Constants from 'expo-constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? Constants.statusBarHeight - 10 : 0,
    backgroundColor: '#FFFFFF',
  },
  image: {
    borderRadius: 44 / 2,
    height: 44,
    width: 44,
    marginRight: 20,
  },
  profileContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 24,
  },
  text: {
    fontFamily: 'Roboto_700Bold',
    fontSize: 18,
    lineHeight: 30,
    color: '#572F10',
    marginLeft: 15,
  },
  inputContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default styles;
