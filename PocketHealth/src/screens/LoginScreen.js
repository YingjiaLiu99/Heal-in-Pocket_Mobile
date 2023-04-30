import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
/// The authentification goes inside handleLogin

  const handleLogin = () => {
    navigation.navigate('Login')
  //   /* handle login logic
  //   const performLogin = async () => {
  //     try{
  //     const user = await Auth.signIn(email, password);
  //      route.params.setIsSignedIn(true);
  //       route.params.setUser(user);
  //    } catch (error) {
  //        console.log('error signing in', error);
  // */ }
  };

  const handleSignUp = () => {
    navigation.navigate('SignUp');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome back!</Text>
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
      {/* <Button mode="contained" style={styles.button}> */}
      {/* <Button mode="contained" onPress={handleLogin} style={styles.button}> */}
        {/* Login
      </Button> */}
      {/* <Button onPress={() => navigation.navigate('SignUp')}>Don't have an account? Sign up</Button> */}
      {/* <Button>Don't have an account? Sign up</Button> */}

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '50%',
    height: '3%',
    marginVertical: 10,
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 5
  },
  button: {
    width: '70%',
    marginVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#20315f',
    paddingVertical: 5,
    paddingHorizontal: 5,
    borderRadius: 5
  },
  buttonText: {
    color: '#fff',
    fontSize: 20
  }
});
