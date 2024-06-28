import { StatusBar } from 'expo-status-bar';
import { Button, Image, StyleSheet, Text, TextInput, View } from 'react-native';
import styles from '../styles/global-styles';
import React from 'react';

function Home(props) {
  const [clickMessage, setClickMessage] = React.useState('');

  function onButtonPress() { setClickMessage('I got clicked!!!') }

  return (
    <View style={styles.container}>
      <Button title="Go to Messages" onPress={() => props.navigation.navigate('Messages')} />
      <Text style={styles.helloWorld}>Hello World</Text>
      <StatusBar style="auto" />
      <Button title="Click me" onPress={onButtonPress} />
      <Text>{clickMessage}</Text>
      <Image source={{ uri: 'https://www.pixelstalk.net/wp-content/uploads/2016/08/Cute-Puppies-Dog-Wallpaper.jpg' }} style={{ width: 200, height: 200 }} />
      <TextInput style={styles.textInput} />
    </View>
  )
}

export default Home
