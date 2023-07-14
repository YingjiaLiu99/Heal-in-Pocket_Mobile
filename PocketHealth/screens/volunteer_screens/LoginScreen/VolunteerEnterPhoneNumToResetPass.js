import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import InputBoxWithLabel from './components/InputBoxWithLabel';
import styles from './styles.js';


export default function VolunteerEnterPhoneNumToResetPass({navigation}) {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleReset = () => {   
        if (!phoneNumber ) {
          setErrorMessage('Please enter your phone number');
        }else if (phoneNumber != 1234567890){
            //check if the number is registered already
            setErrorMessage('This number is not registered');
        }else {
          // Call API 
          console.log('go to vol phone verification from forgot password');
          navigation.navigate("Volunteer Phone Verification", { phoneNumber: phoneNumber, fromForgotPassword: true });
        }
      };

      return (
        <KeyboardAwareScrollView contentContainerStyle={styles.container}>
            <View style={{alignItems:'center',marginTop: 75,marginBottom:90}}>
                <Text style={styles.titleText}>Reset Password</Text>
            </View>

            {errorMessage ? <Text style={styles.error}>{errorMessage}</Text> : null}

            <InputBoxWithLabel
                label="Phone Number*"    
                value={phoneNumber}  
                onChangeText={(text) => setPhoneNumber(text)}  
                placeholder="Please Enter Your Phone Number"    
                keyboardType="phone-pad"        
            />

            <View style={{width:'100%',alignItems:'center',marginTop:50,marginBottom:40}}>
                <TouchableOpacity style={styles.button} onPress={handleReset}>
                    <Text style={styles.buttonText}>Reset</Text>
                </TouchableOpacity>
            </View>

        </KeyboardAwareScrollView>
      );
}