import React, { useRef, useState } from 'react';
import { ScrollView, Text, TouchableOpacity, View, } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import InputBoxWithLabel from './components/InputBoxWithLabel';
import styles from './styles';


export default function VolunteerSignUpScreen({navigation}) {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [pocketHealthCode, setCode] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const pwdRef1 = useRef();
  const pwdRef2 = useRef();
  const pwdRef3 = useRef();
// The Backend code goes here
  const handleSignUp = () => {   
    if (!phoneNumber || !password || !confirmPassword) {
      setErrorMessage('Please fill in all fields');
    } else if (password !== confirmPassword) {
      setErrorMessage('Passwords do not match');
    } else {
      // Call API to create user account      
      console.log('go to volunteer Phone Verification from sign up');
      navigation.navigate("Volunteer Phone Verification", { phoneNumber: phoneNumber });
    }
  };

  return (
    <ScrollView>
    <KeyboardAwareScrollView contentContainerStyle={styles.container}>

      <View style={{alignItems:'center',marginTop:25,marginBottom:30}}>
        <Text style={styles.titleText}>Create Account</Text>
      </View>
      
      {errorMessage ? <Text style={styles.error}>{errorMessage}</Text> : null}

      <InputBoxWithLabel
        autoFocus
        label="Pocket Health Code*"    
        value={pocketHealthCode}  
        onChangeText={(text) => setCode(text)}  
        placeholder="Please Enter Your Invitation Code"    
        keyboardType="phone-pad"   
        onSubmitEditing={() => pwdRef1.current.focus()}       
      />
      <InputBoxWithLabel
        ref={pwdRef1}
        label="Phone Number*"    
        value={phoneNumber}  
        onChangeText={(text) => setPhoneNumber(text)}  
        placeholder="Please Enter Your Phone Number"    
        keyboardType="phone-pad" 
        onSubmitEditing={() => pwdRef2.current.focus()}         
      />
      <InputBoxWithLabel
        ref={pwdRef2}
        label="Password*"   
        value={password}   
        onChangeText={(text) => setPassword(text)}  
        placeholder="Please Enter Password"   
        secureTextEntry={true}
        returnKeyType='next'
        onSubmitEditing={() => pwdRef3.current.focus()}  
      />
      <InputBoxWithLabel
        ref={pwdRef3}
        label="Confirm Password*"
        value={confirmPassword}        
        onChangeText={(text) => setConfirmPassword(text)}
        placeholder="Please Enter Your Password Again"
        secureTextEntry={true}
        returnKeyType='done'
      />

      <View style={{width:'100%',alignItems:'center',marginTop:20,marginBottom:40}}>
        <TouchableOpacity style={styles.button} onPress={handleSignUp}>
          <Text style={styles.buttonText}>Create Account</Text>
        </TouchableOpacity>
      </View>      

      </KeyboardAwareScrollView>
      </ScrollView>
  );
}




