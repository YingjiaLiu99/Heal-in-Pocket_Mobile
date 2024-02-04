import React, { useRef, useState, useContext } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import axios from 'axios';

import { UserContext } from '../../../context/userContext';
import baseURL from '../../../common/baseURL';
import InputBoxWithLabel from '../../provider_screens/LoginScreen/components/InputBoxWithLabel';
import styles from './styles';

export default function ProviderLoginScreen({ navigation }) {
  const { userId, setUserId } = useContext(UserContext);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const pwdRef = useRef();

// The backend authentification should put inside handleLogin

  const handleLogin = async() => {
    if (!phoneNumber || !password) {
      setErrorMessage('Please fill in all fields');
    }
    else{
      
      try {
        const signinBody = {
          phone_number: phoneNumber,
          password: password
        }
        const response = await axios.post(`${baseURL}doctor/login-phone`, signinBody);
        if (response.status >= 200 && response.status < 300){
          setUserId(response.data.doctor.id);
          // store the token in secure space
          // this will prevent user go back to previous stack
          navigation.reset({
            index: 0,
            routes: [{ name:'Provider Main Tab', 
              state:{ 
                routes:[ {name:'My Home', state:{routes:[ {name:'Home'} ]}} ] 
              } 
            }],
          });

        }
        
      } catch (error) {
        if (error.response) {
          // The request was successfully sent to the server and the server returned an error response. 
          console.log('Backend Error:', error.response.data.message);
        } else if (error.request) {
          // The request was sent, but no response was received from the server. This can be due to network issues, server downtime, etc.
          console.log('Network Error:', error.message);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log('Error:', error.message);
        }
      }

    }
  };

  const handleSignUp = () => {
    navigation.navigate('Provider Sign Up');
  };
  const handleForgetPassword = () => {
    navigation.navigate('Provider Enter Phone Num to Reset Password');
  }

  return (
    <KeyboardAwareScrollView contentContainerStyle={styles.container}>
    
      <View style={{marginTop: 35,marginBottom:40}}>
        <Text style={styles.titleText}>Provider Login</Text>
      </View>
      
      {errorMessage ? <Text style={styles.error}>{errorMessage}</Text> : null}      
      
      <InputBoxWithLabel
        label="Phone Number*"
        value={phoneNumber}
        onChangeText={(text) => setPhoneNumber(text)}
        placeholder="Please Enter Your Phone Number"
        keyboardType='phone-pad'
        autoFocus
        returnKeyType='next'
        onSubmitEditing={() => pwdRef.current.focus()}
      />
      <InputBoxWithLabel
        ref={pwdRef}
        label="Password*"
        value={password}
        onChangeText={(text) => setPassword(text)}              
        placeholder="Please Enter Password"
        secureTextEntry
        returnKeyType='done'
      />

      <TouchableOpacity onPress={handleForgetPassword}>
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
      
    </KeyboardAwareScrollView>
  );
}