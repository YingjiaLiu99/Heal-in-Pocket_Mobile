import React, { useRef, useState, useEffect, useContext } from 'react';
import { View, Modal, ActivityIndicator, Text, TouchableOpacity } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import InputBoxWithLabel from '../../volunteer_screens/LoginScreen/components/InputBoxWithLabel';
import styles from './styles';
import axios from 'axios';
import baseURL from '../../../common/baseURL';
import { UserContext } from '../../../context/userContext';


export default function VolunteerLoginScreen({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false);
  
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const pwdRef = useRef();
  const phoneRef = useRef(null);
  const {userId, setUserId} = useContext(UserContext);

  //my attempt to fix losing focus after navigations. don't work yet
  // useEffect(() => {
  //   const unsubscribe = navigation.addListener('focus', () => {
  //     // The screen is focused, you can call your function here.
  //     if (phoneRef.current) phoneRef.current.focus();
  //   });

  //   // Return the function to unsubscribe from the event so it gets removed on unmount
  //   return unsubscribe;
  // }, [navigation]);

  const handleLogin = async() => {
    if (!phoneNumber || !password) {
      setErrorMessage('Please fill in all fields');
    }
    else{
      // Backend code goes here
      setModalVisible(true);
      try {
        const loginVolunteer = {
          phone_number: phoneNumber,
          password: password,
        }
        const response = await axios.post(`${baseURL}volunteer/login_phone`, loginVolunteer);

        if (response.status >= 200 && response.status < 300){         
          setUserId(response.data.volunteer.id); // set the global userId to be the new created doctor's id
          console.log('volunteer log in successful');     
          navigation.reset({
            index: 0,
            routes: [{ name:'Volunteer Main Tab', 
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
          setErrorMessage(error.response.data.message);
        } else if (error.request) {
          // The request was sent, but no response was received from the server. This can be due to network issues, server downtime, etc.
          console.log('Network Error:', error.message);
          setErrorMessage("Network error, please try again.");
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log('Error:', error);
          setErrorMessage("An unexpected error occurred, please try again.");
        }
      } finally {
        setModalVisible(false); // End loading
      }
    }
  };

  const handleSignUp = () => {
    console.log('volunteer try to sign up');
    navigation.navigate('Volunteer Sign Up');
  };
  const handleForgetPassword = () => {
    console.log('volunteer forgot password');
    navigation.navigate('Volunteer Enter Phone Num to Reset Password');
  }

  return (
    <KeyboardAwareScrollView contentContainerStyle={styles.container}>
      
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>          
            <ActivityIndicator size="large" color="#0000ff" />
          </View>
        </View>
      </Modal>


      <View style={{marginTop: 25,marginBottom:30}}>
        <Text style={styles.titleText}>Volunteer Login</Text>
      </View>

      {errorMessage ? <Text style={styles.error}>{errorMessage}</Text> : null}      
  
      <InputBoxWithLabel
        ref={phoneRef}
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