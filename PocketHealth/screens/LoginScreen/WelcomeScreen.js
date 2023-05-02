// WelcomeScreen.js
import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';


export default function WelcomeScreen({ navigation }) {

  return (
    <View style={styles.container}>
      <Text style={styles.brand}>Pocket Health</Text>
      <Text style={styles.title}>Your health, in your pocket</Text>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
        <Text style={styles.buttonText}>Let's begin</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  brand: {
    fontSize: 50,
    fontWeight: 'bold',
    color: '#20315f',
    marginTop: 10
  },
  title: {
    fontSize: 30,    
    color: '#20315f'
  },
  button: {
    backgroundColor: '#20315f',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 20
  },
  buttonText: {
    color: '#fff',
    fontSize: 20
  }
});