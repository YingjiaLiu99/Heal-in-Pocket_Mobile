
import React, { useRef, useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import InputBoxWithLabel from './components/InputBoxWithLabel';
import styles from './styles.js';


export default function SignUpScreen({navigation}) {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const pwdRef1 = useRef();
  const pwdRef2 = useRef();
// The Backend code goes here
  const handleSignUp = () => {   
    if (!phoneNumber || !password || !confirmPassword) {
      setErrorMessage('Please fill in all fields');
    } else if (password !== confirmPassword) {
      setErrorMessage('Passwords do not match');
    } else {
      // Call API to create user account      
      console.log('Step to Phone Verification');
      navigation.navigate("Patient Phone Verification", { phoneNumber: phoneNumber, fromForgotPassword: false });
    }
  };

  return (
    <KeyboardAwareScrollView contentContainerStyle={styles.container}>

      <View style={{alignItems:'center',marginTop: 75,marginBottom:90}}>
        <Text style={styles.titleText}>Create Account</Text>
      </View>
      
      {errorMessage ? <Text style={styles.error}>{errorMessage}</Text> : null}

      <InputBoxWithLabel
        autoFocus
        label="Phone Number*"    
        value={phoneNumber}  
        onChangeText={(text) => setPhoneNumber(text)}  
        placeholder="Please Enter Your Phone Number"    
        keyboardType="phone-pad"      
        onSubmitEditing={() => pwdRef1.current.focus()}  
      />
      <InputBoxWithLabel
        ref={pwdRef1}
        label="Password*"   
        value={password}   
        onChangeText={(text) => setPassword(text)}  
        placeholder="Please Enter Password"   
        secureTextEntry={true}
        returnKeyType='next'
        onSubmitEditing={() => pwdRef2.current.focus()}  
      />
      <InputBoxWithLabel
        ref={pwdRef2}
        label="Confirm Password*"
        value={confirmPassword}        
        onChangeText={(text) => setConfirmPassword(text)}
        placeholder="Please Enter Your Password Again"
        secureTextEntry={true}
        returnKeyType='done'
        onSubmitEditing={() => pwdRef2.current.focus()}  
      />

      <View style={{width:'100%',alignItems:'center',marginTop:20,marginBottom:40}}>
        <TouchableOpacity style={styles.button} onPress={handleSignUp}>
          <Text style={styles.buttonText}>Create Account</Text>
        </TouchableOpacity>
      </View>      

      </KeyboardAwareScrollView>
  );
}




