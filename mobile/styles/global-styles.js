import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    paddingTop: Constants.statusBarHeight,
  },
  helloWorld: {
    color: 'red',
    fontSize: 24,
  },
  textInput: { height: 40, borderColor: 'gray', borderWidth: 1, width: '100%' },
});

export default styles;
