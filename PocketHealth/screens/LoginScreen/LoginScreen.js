import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';
import styles from './styles';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

// The backend authentification should put inside handleLogin

  const handleLogin = () => {
    if (!email || !password) {
      setErrorMessage('Please fill in all fields');
    }
    else{
      // Backend code goes here
      console.log('log in successful');
      navigation.navigate('Main Page', { screen: 'Home' });
    }
  };

  const handleSignUp = () => {
    navigation.navigate('Sign Up');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome back!</Text>

      {errorMessage ? <Text style={styles.error}>{errorMessage}</Text> : null}
      
      <TextInput
        label="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
        style={styles.input}
        placeholder="Please Enter Email"
      />
      <TextInput
        label="Password"
        value={password}
        onChangeText={(text) => setPassword(text)}
        secureTextEntry
        style={styles.input}
        placeholder="Please Enter Password"
      />

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Log in</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handleSignUp}>
        <Text style={styles.buttonText}>Don't have an account?</Text>
        <Text style={styles.buttonText}> Sign up</Text>
      </TouchableOpacity>   
    </View>
  );
}