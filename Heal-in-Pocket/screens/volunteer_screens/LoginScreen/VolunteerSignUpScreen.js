import React, { useContext, useRef, useState } from 'react';
import { ScrollView, Text, TouchableOpacity, View, } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import axios from 'axios';
import baseURL from '../../../common/baseURL';

import InputBoxWithLabel from './components/InputBoxWithLabel';
import styles from './styles';
import { UserContext } from '../../../context/userContext';


export default function VolunteerSignUpScreen({navigation}) {

  const {userId, setUserId} = useContext(UserContext);

  const [phoneNumber, setPhoneNumber] = useState('');
  const [invitationCode, setInvitationCode] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [lastName, setLastName] = useState('');
  const [firstName, setFirstName] = useState('');   
  const Ref1 = useRef();
  const Ref2 = useRef();
  const Ref3 = useRef();
  const Ref4 = useRef();
  const Ref5 = useRef();
// The Backend code goes here
  const handleSignUp = async() => {   
    if (!phoneNumber || !password || !confirmPassword || !firstName 
        || !lastName || !invitationCode) {
      setErrorMessage('Please fill in all fields');
    } else if (password !== confirmPassword) {
      setErrorMessage('Passwords do not match');
    } else {
      // Call API to create user account      
      // console.log('go to volunteer Phone Verification from sign up');
      // navigation.navigate("Volunteer Phone Verification", { phoneNumber: phoneNumber });

      try {
        const newVolunteer = {
          name: firstName + " " + lastName,
          phone_number: phoneNumber,
          password: password,
          invitation_code: invitationCode,
        }

        const response = await axios.post(`${baseURL}volunteer/signup_phone`, newVolunteer);
        if (response.status >= 200 && response.status < 300){         
          setUserId(response.data.volunteer.id); // set the global userId to be the new created doctor's id
          navigation.navigate("Volunteer Phone Verification", { phoneNumber: phoneNumber });
        }

      } catch (error) {
        if (error.response) {
          // The request was successfully sent to the server and the server returned an error response. 
          console.log('Backend Error:', error.response.data.message);
          setErrorMessage(error.response.data.message);
        } else if (error.request) {
          // The request was sent, but no response was received from the server. This can be due to network issues, server downtime, etc.
          console.log('Network Error:', error.message);
          setErrorMessage("Network error, please try again.");
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log('Error:', error.message);
          setErrorMessage("An unexpected error occurred, please try again.");
        }
      }
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
        label="Heal in Pocket Invitation Code*"    
        value={invitationCode}  
        onChangeText={(text) => setInvitationCode(text)}  
        placeholder="Please Enter Your Invitation Code"    
        keyboardType="phone-pad"   
        onSubmitEditing={() => Ref1.current.focus()}       
      />
      <InputBoxWithLabel
        ref={Ref1}
        label="Phone Number*"    
        value={phoneNumber}  
        onChangeText={(text) => setPhoneNumber(text)}  
        placeholder="Please Enter Your Phone Number"    
        keyboardType="phone-pad" 
        onSubmitEditing={() => Ref2.current.focus()}         
      />

      <InputBoxWithLabel
        ref={Ref2}
        label="Password*"   
        value={password}   
        onChangeText={(text) => setPassword(text)}  
        placeholder="Please Enter Password"   
        secureTextEntry={true}
        returnKeyType='next'
        onSubmitEditing={() => Ref3.current.focus()}  
      />
      <InputBoxWithLabel
        ref={Ref3}
        label="Confirm Password*"
        value={confirmPassword}        
        onChangeText={(text) => setConfirmPassword(text)}
        placeholder="Please Enter Your Password Again"
        secureTextEntry={true}
        returnKeyType='done'
        onSubmitEditing={() => Ref4.current.focus()} 
      />

      <InputBoxWithLabel
        ref={Ref4}
        label="First Name*"    
        value={firstName}  
        onChangeText={(text) => setFirstName(text)}  
        placeholder="Please Enter Your First Name"    
        keyboardType="default"          
        // returnKeyType='next'
        onSubmitEditing={() => Ref5.current.focus()}  

      />

      <InputBoxWithLabel
        ref={Ref5}
        label="Last Name*"    
        value={lastName}  
        onChangeText={(text) => setLastName(text)}  
        placeholder="Please Enter Your Last Name"    
        keyboardType="default"  
        // returnKeyType='done'          
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




