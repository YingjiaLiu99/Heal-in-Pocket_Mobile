import React, { useRef, useState, useContext } from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import axios from 'axios';

import { UserContext } from '../../../context/userContext';
import baseURL from '../../../common/baseURL';
import InputBoxWithLabel from './components/InputBoxWithLabel';
import styles from './styles';


export default function ProviderSignUpScreen({navigation}) {
  const { userId, setUserId } = useContext(UserContext);

  const [doctorName, setDoctorName] = useState('');
  const [title, setTitle] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [invitationCode, setInvitationCode] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const nameRef = useRef();
  const titleRef = useRef();
  const phoneRef = useRef();
  const pwdRef1 = useRef();
  const pwdRef2 = useRef();

// The Backend code goes here
  const handleSignUp = async() => {   
    if (!invitationCode || !doctorName || !phoneNumber || !password || !confirmPassword) {
      setErrorMessage('Please fill in all fields');
    } else if (password !== confirmPassword) {
      setErrorMessage('Passwords do not match');
    } else {
      
      try {
        const newDoctor = {
          name: doctorName,
          title: title,
          phone_number: phoneNumber,
          password: password,
          invitation_code: invitationCode,
          bio: "N/A"
        }
        const response = await axios.post(`${baseURL}doctor/signup-phone`, newDoctor);        
        if (response.status >= 200 && response.status < 300){         
          setUserId(response.data.doctor.id); // set the global userId to be the new created doctor's id
          navigation.navigate("Provider Phone Verification", { phoneNumber: phoneNumber });
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

  return (
    <ScrollView>
    <KeyboardAwareScrollView contentContainerStyle={styles.container}>

      <View style={{alignItems:'center',marginTop:35,marginBottom:40}}>
        <Text style={styles.titleText}>Create Account</Text>
      </View>
      
      {errorMessage ? <Text style={styles.error}>{errorMessage}</Text> : null}

      <InputBoxWithLabel
        autoFocus
        label="Heal in Pocket Invitation Code*"    
        value={invitationCode}  
        onChangeText={(text) => setInvitationCode(text)}  
        placeholder="Please Enter Your Invitation Code"
        onSubmitEditing={() => nameRef.current.focus()}       
      />

      <InputBoxWithLabel
        ref={nameRef}
        label="Name*"
        value={doctorName}
        onChangeText={(text) => setDoctorName(text)}
        placeholder="Please Enter Your Name"
        onSubmitEditing={() => titleRef.current.focus()}
      />

      <InputBoxWithLabel
        ref={titleRef}
        label="Title*"
        value={title}
        onChangeText={(text) => setTitle(text)}
        placeholder="Please Enter Your title (eg. MD, NP, etc.)"
        onSubmitEditing={() => phoneRef.current.focus()}
      />

      <InputBoxWithLabel
        ref={phoneRef}
        label="Phone Number* (won't be displayed to patients)"    
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
      />

      <View style={{width:'100%',alignItems:'center',marginTop:50,marginBottom:40}}>
        <TouchableOpacity style={styles.button} onPress={handleSignUp}>
          <Text style={styles.buttonText}>Create Account</Text>
        </TouchableOpacity>
      </View>      

      </KeyboardAwareScrollView>
      </ScrollView>
  );
}




