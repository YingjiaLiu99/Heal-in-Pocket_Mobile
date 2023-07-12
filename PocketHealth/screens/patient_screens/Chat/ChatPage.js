import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Image } from 'react-native';

const ChatMainPage = () => {
  const conversations = [
    {
      id: 1,
    //   profilePhoto: require('./images/profile1.png'), // Replace with the actual profile photo path
      recentMessage: 'Hello, how are you?'
    },
    {
      id: 2,
    //   profilePhoto: require('./images/profile2.png'), // Replace with the actual profile photo path
      recentMessage: 'Can we meet tomorrow?'
    },
    {
      id: 3,
    //   profilePhoto: require('./images/profile3.png'), // Replace with the actual profile photo path
      recentMessage: 'See you later!'
    },
    // Add more conversation data as needed
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {conversations.map(conversation => (
        <TouchableOpacity key={conversation.id} style={styles.row}>
          {/* <Image source={conversation.profilePhoto} style={styles.profilePhoto} /> */}
          <View style={styles.messageContainer}>
            <Text style={styles.username}>User {conversation.id}</Text>
            <Text style={styles.recentMessage}>{conversation.recentMessage}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 10,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#CCCCCC',
  },
  profilePhoto: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  messageContainer: {
    flex: 1,
  },
  username: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  recentMessage: {
    fontSize: 14,
    color: '#555555',
  },
});

export default ChatMainPage;
