import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import InputBoxWithLabel from './components/InputBoxWithLabel';
import styles from './styles.js';

export default function PhoneVerification({route, navigation}) {
    const [verificationCode, setverificationCode] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleVerification = () => {
        if(!verificationCode) {
            setErrorMessage('Please Enter Your Verification Code');
        }
        else{
            console.log('Sign Up Success!');
            navigation.navigate("Basic Patient Info");
        }      
    };



    return (
        <KeyboardAwareScrollView contentContainerStyle={styles.container}>

            <View style={{alignItems:'center',marginTop: 75,marginBottom:90}}>
                <Text style={styles.titleText}>Phone Verification</Text>
            </View>

            <View style={{width:'100%',alignItems:'center',marginTop:20,marginBottom:20}}>
                <Text style={{color:'#7C7C7C',fontSize:15}}>A verification code has just been sent to your phone number: +1 {route.params.phoneNumber}</Text>
            </View>

            {errorMessage ? <Text style={styles.error}>{errorMessage}</Text> : null}

            <InputBoxWithLabel
                label="Verification Code"    
                value={verificationCode}  
                onChangeText={(text) => setverificationCode(text)}  
                placeholder="Please Enter the Verification Code"    
                keyboardType="phone-pad"        
            />

            <View style={{width:'100%',alignItems:'center',marginTop:50,marginBottom:40}}>
                <TouchableOpacity style={styles.button} onPress={handleVerification}>
                    <Text style={styles.buttonText}>Create Account</Text>
                </TouchableOpacity>
            </View> 

        </KeyboardAwareScrollView>
    );
}