import { Button, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import globalStyles from '../styles/global-styles';

const apiUrl = 'https://quick-animals-wait.loca.lt';

const styles = StyleSheet.create({
  messageContainer: {
    padding: 16,
    backgroundColor: 'antiquewhite',
    fontSize: 18,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: 'black',
  },
  input: {
    marginBottom: 16,
  }
});

export default function Messages() {
  const [messages, setMessages] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  const [comment, setComment] = useState('');

  useEffect(() => {
    fetch(`${apiUrl}/messages`)
      .then((response) => response.json())
      .then((messages) => {
        setMessages(messages);
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });
  }, []);

  function addComment() {
    fetch(`${apiUrl}/messages`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        comment: comment
      }),
    }).then((response) => response.json()) // todo: handle response.ok === false
      .then((createdMessage) => {
        setMessages([
          createdMessage,
          ...messages,
        ])
        setComment('')
      })
      .catch((error) => {
        // todo
      });
  }

  return (
    <ScrollView>
      <Text style={{ marginBottom: 16, fontWeight: '600' }}>Messages</Text>
      {errorMessage && <Text style={{ color: 'red'}}>{errorMessage}</Text>}
      <TextInput style={[globalStyles.textInput, styles.input]} value={comment} onChangeText={(text) => setComment(text)} />
      <Button title="Add Comment" onPress={addComment} />
      {messages.map((message) => (
        <View style={styles.messageContainer} key={message.id}>
          <Text>{message.comment}</Text>
        </View>
      ))}
    </ScrollView>
  );
}
