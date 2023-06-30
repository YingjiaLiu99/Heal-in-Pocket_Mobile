import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import InputBoxWithLabel from './components/InputBoxWithLabel';
import styles from './styles';

export default function LoginScreen({ navigation }) {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

// The backend authentification should put inside handleLogin

  const handleLogin = () => {
    if (!phoneNumber || !password) {
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
    <KeyboardAwareScrollView contentContainerStyle={styles.container}>
    
      <View style={{alignItems:'center',marginTop: 75,marginBottom:90}}>
        <Text style={styles.titleText}>Pocket Health</Text>
      </View>
      
      {errorMessage ? <Text style={styles.error}>{errorMessage}</Text> : null}      
      
      <InputBoxWithLabel
        label="Phone Number"
        value={phoneNumber}
        onChangeText={(text) => setPhoneNumber(text)}
        placeholder="Please Enter Your Phone Number"
        keyboardType='phone-pad'
      />
      <InputBoxWithLabel
        label="Password"
        value={password}
        onChangeText={(text) => setPassword(text)}              
        placeholder="Please Enter Password"
        secureTextEntry
      />

      <TouchableOpacity onPress={() => {/* handle forgotten password here */ }}>
        <Text style={styles.forgotPassword}>Forgot password?</Text>
      </TouchableOpacity>

      <View style={{width:'100%',alignItems:'center',marginTop:30,marginBottom:40}}>
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Log in</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={handleSignUp}>
          <Text style={styles.buttonText}>Don't have an account?</Text>
          <Text style={styles.buttonText}> Sign up</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity onPress={() => {/* handle doctor sign in here */ }}>
        <Text style={styles.doctorSignin}>Provider Login?</Text>
      </TouchableOpacity>
      
    </KeyboardAwareScrollView>
  );
}